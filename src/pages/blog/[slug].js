import fs from 'fs';
import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';
import { join } from 'path';
import BlogSideBar from "../../components/blog/sidebar"

const blogsDirectory = join(process.cwd(), '_blog');
const files = fs.readdirSync(blogsDirectory);

export async function getStaticPaths() {
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  const readFile = fs.readFileSync(fullPath, 'utf8');

  let posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = join(blogsDirectory, `${slug}.md`);
    const readFile = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  const { data: frontmatter, content } = matter(readFile);

  posts = posts.sort((job1, job2) => (job1.frontmatter.date > job2.frontmatter.date ? -1 : 1));
  return {
    props: {
      posts,
      frontmatter,
      content,
    },
  };
}


export default function PostPage({ posts, frontmatter, content }) {

  const [activeBlogPosts, setActiveBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState(posts);
  const blogsPerPage = 10;

  const [currentPostPage, setCurrentPostPage] = useState(1);
  const [activePosts, setActivePosts] = useState([]);

  useEffect(() => {
    getActiveBlogPosts();
  }, [currentPage, blogData]);

  const getActiveBlogPosts = async () => {
    if (blogData) {
      const indexOfLastPage = currentPage * blogsPerPage;
      const indexOfFirstPage = indexOfLastPage - blogsPerPage;
      const blogResult = blogData && blogData.slice(indexOfFirstPage, indexOfLastPage);
      setActiveBlogPosts(blogResult);
    }
  };

  useEffect(() => {
    getActivePosts();
  }, [currentPostPage]);

  const getActivePosts = async () => {
    if (posts) {
      const lastindex = currentPostPage * 2;
      const firstindex = lastindex - 2;
      const result = posts && posts.slice(firstindex, lastindex);
      setActivePosts(result);
    }
  };

  const nextPage = () => {
    if (Math.ceil(posts.length / 2) > currentPostPage) {
      const page = currentPostPage + 1;
      setCurrentPostPage(page);
    } else if (Math.ceil(posts.length / 3) == currentPostPage) {
      setCurrentPostPage(1);
    }
  };

  const prevPage = () => {
    let page = currentPostPage;
    if (page > 1) {
      page = page - 1;
      setCurrentPostPage(page);
    }
  };

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='language' content='English' />
        <title>{frontmatter?.titleHead}</title>
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='article' />
        <meta name='description' content={frontmatter?.descriptionHead} />
        <meta name='keywords' content={frontmatter?.keywords} />

        <link rel='canonical' href={frontmatter?.canonical_href} />
        <meta property='og:title' content={frontmatter?.og_title} />
        <meta property='og:image' content={frontmatter?.og_image} />
        <meta property='og:url' content={frontmatter?.og_url} />
        <meta property='og:description' content={frontmatter?.og_description} />

        <meta name='distribution' content='Global' />
        <meta http-equiv='content-language' content='en-us' />
        <meta http-equiv='x-dns-prefetch-control' content='on' />
        <meta name='twitter:site' content='@myneetable' />
        <meta name='twitter:creator' content='@myneetable' />
        <meta name='twitter:url' content={frontmatter?.twitter_url} />
        <meta name='twitter:title' content={frontmatter?.twitter_title} />
        <meta name='twitter:description' content={frontmatter?.twitter_description} />
        <meta name='twitter:image' content={frontmatter?.twitter_image} />
      </Head>
      <body>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-xl-9 col-lg-8'>
              <a href='#' className='badge fs-sm text-white bg-info shadow-info text-decoration-none mb-3'>
                {frontmatter.category}
              </a>
              <div dangerouslySetInnerHTML={{ __html: md().render(content) }} className="blog-post" />

                 {/* blog section static */}
          {/* <section className='bg-secondary'>
            <div className='px-2' id='whatwedo'>
              <div className='d-none d-lg-block'></div>
              <section className='py-5 pb-5 mb-md-3 mb-lg-5'>
                <div className='row justify-content-center text-center'>
                  <div className='col-xl-6 col-lg-7 col-md-8 col-sm-10'>
                    <h2 className='h1 mb-4'>Recent Blogs &amp; News</h2>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                  <button
                    type='button'
                    className='btn btn-prev btn-icon btn-sm me-2'
                    disabled={currentPostPage === 1} 
                    onClick={() => {
                      prevPage();
                    }}
                  >
                    <i className='bx bx-chevron-left'></i>
                  </button>
                  <button
                    type='button'
                    className='btn btn-next btn-icon btn-sm ms-2'
                    onClick={() => {
                      nextPage();
                    }}
                  >
                    <i className='bx bx-chevron-right'></i>
                  </button>
                </div>
                <div className='row'>
                  {activePosts.map(({ slug, frontmatter }) => (
                    <div className='col-lg-6 col-md-6 mt-3'>
                      <article className='card p-md-3 p-2 border-0 shadow-sm card-hover-primary h-100 mx-2'>
                        <div className='card-body pb-0'>
                          <img src={`${frontmatter?.blogImage}`} alt='blog-image' className='img-fluid rounded-3 mb-3' />
                          <div className='d-flex align-items-center justify-content-between mb-3'>
                            <a href={`${slug}`} className='badge fs-sm text-nav bg-secondary text-decoration-none position-relative zindex-2'>
                              {frontmatter?.category}
                            </a>
                            <span className='fs-sm text-muted'>{frontmatter?.date}</span>
                          </div>
                          <h3 className='h4'>
                            <a href={`${slug}`} className='stretched-link'>
                              {frontmatter?.title}
                            </a>
                          </h3>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </section> */}
          {/* blog section static  */}
            </div>
            <div className='col-xl-3 col-lg-4'>
              <div className="mt-4"> <BlogSideBar posts={posts} source={`blog`} /></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

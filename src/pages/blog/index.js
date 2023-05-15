import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import BlogSidebar from '../../components/blog/sidebar';
import Pagination from '../../components/blog/pagination';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { useRouter } from 'next/router'
import Image from 'next/image'

import { getUniqueListBy } from "../../constants/index";

export async function getStaticProps() {
  const blogsDirectory = join(process.cwd(), '_blog');
  const files = fs.readdirSync(blogsDirectory);

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

  posts = posts.sort((job1, job2) => (job1.frontmatter.date > job2.frontmatter.date ? -1 : 1));

  return {
    props: {
      posts,
    },
  };
}

export default function Index({ posts }) {
  let router = useRouter()
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
      const lastindex = currentPostPage * 3;
      const firstindex = lastindex - 3;
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

  const source = "blog"
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='language' content='English' />
        {/* <base href="https://neetable.com/" /> */}

        <title>Web, Mobile App &amp; Software Technology Blog News &amp; Updates | Neetable</title>
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='article' />
        <link rel='canonical' href='https://neetable.com/blog' />
        <meta property='og:title' content='Web, Mobile App &amp; Software Technology Blog News &amp; Updates | Neetable' />
        <meta property='og:image' content='https://neetable.com/img/neetable-design-development-partner.png' />
        <meta name='distribution' content='Global' />
        <meta http-equiv='content-language' content='en-us' />
        <meta name='format-detection' content='telephone=no' />
        <meta http-equiv='x-dns-prefetch-control' content='on' />
        <meta property='og:site_name' content='Neetable' />
        <meta property='og:url' content='https://neetable.com/blog' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='Expert Remote Teams For Your Development Needs' />
        <meta name='twitter:site' content='@myneetable' />
        <meta name='twitter:creator' content='@myneetable' />
        <meta name='twitter:url' content='https://neetable.com/blog' />
        <meta name='twitter:title' content='Web, Mobile App &amp; Software Technology Blog News &amp; Updates | Neetable' />
        <meta name='twitter:image' content='https://neetable.com/img/neetable-design-development-partner.png' />
      </Head>



      <section
  className="dark-mode position-relative jarallax pb-xl-3"
  data-jarallax=""
  data-speed="0.4"
>
  {/* Parallax img */}
  {/* Overlay bg */}
  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70 zindex-1" />
  {/* Overlay content */}
  <div className="container position-relative pb-5 zindex-5">
    {/* Breadcrumb */}
    <nav className="py-4" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0 py-3">
        <li className="breadcrumb-item">
          <a href="index.html">
            <i className="bx bx-home-alt fs-lg me-1" />
            Home
          </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Blog Homepage
        </li>
      </ol>
    </nav>
    {/* Featured article */}
    <div className="row mb-xxl-5 py-md-4 py-lg-5">
      <div className="col-lg-6 col-md-7 pb-3 pb-md-0 mb-4 mb-md-5">
        <div className="mb-3 fs-lg text-light">
          <img
            src="https://silicon.createx.studio/assets/img/blog/flame.svg"
            width={24}
            alt="Flame icon"
            className="mt-n1 me-1"
          />
          Hot Topic
        </div>
        <h1 className="display-5 pb-md-3">
          This Long-Awaited Technology May Finally Change the World
        </h1>
        <div className="d-flex flex-wrap mb-md-5 mb-4 pb-md-2 text-white">
          <div className="border-end border-light h-100 mb-2 pe-3 me-3">
            <span className="badge bg-faded-light fs-base">Technology</span>
          </div>
          <div className="border-end border-light mb-2 pe-3 me-3 opacity-70">
            12 hours ago
          </div>
          <div className="d-flex align-items-center mb-2 text-nowrap">
            <div className="d-flex align-items-center me-3 opacity-70">
              <i className="bx bx-like fs-lg me-1" />
              <span className="fs-sm">8</span>
            </div>
            <div className="d-flex align-items-center me-3 opacity-70">
              <i className="bx bx-comment fs-lg me-1" />
              <span className="fs-sm">4</span>
            </div>
            <div className="d-flex align-items-center opacity-70">
              <i className="bx bx-share-alt fs-lg me-1" />
              <span className="fs-sm">2</span>
            </div>
          </div>
        </div>
        <a href="blog-single.html" className="btn btn-lg btn-primary">
          Read article
          <i className="bx bx-right-arrow-alt ms-2 me-n1 lead" />
        </a>
      </div>
      {/* Articles slider */}
      <div className="col-lg-4 offset-lg-2 col-md-5">
        <div
          className="swiper overflow-hidden w-100 ms-n2 ms-md-0 pe-3 pe-sm-4 swiper-initialized swiper-vertical swiper-pointer-events swiper-free-mode swiper-backface-hidden"
          style={{ maxHeight: 405 }}
          data-swiper-options='{
          "direction": "vertical",
          "slidesPerView": "auto",
          "freeMode": true,
          "scrollbar": {
            "el": ".swiper-scrollbar"
          },
          "mousewheel": true
        }'
        >
          <div
            className="swiper-wrapper pe-md-2"
            id="swiper-wrapper-bfc1e34f10f4510692"
            aria-live="polite"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(0px, 0px, 0px)"
            }}
          >
            <div
              className="swiper-slide h-auto px-2 swiper-slide-active"
              role="group"
              aria-label="1 / 1"
            >
              <div className="row row-cols-md-1 row-cols-sm-2 row-cols-1 g-md-4 g-3">
                {/* Article */}
                <div className="col">
                  <article className="card h-100 border-0 shadow-sm card-hover-primary">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a
                          href="#"
                          className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                        >
                          Digital
                        </a>
                        <span className="fs-sm text-muted">1 day ago</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="blog-single.html" className="stretched-link">
                          Mobile App Generates Data for the Energy Management
                        </a>
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-lg me-1" />
                        <span className="fs-sm">8</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-lg me-1" />
                        <span className="fs-sm">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-lg me-1" />
                        <span className="fs-sm">2</span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Article */}
                <div className="col">
                  <article className="card h-100 border-0 shadow-sm card-hover-primary">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a
                          href="#"
                          className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                        >
                          Business
                        </a>
                        <span className="fs-sm text-muted">May 24, 2021</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="blog-single.html" className="stretched-link">
                          How the Millennial Lifestyle Changes as Service Prices
                          Rise
                        </a>
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-lg me-1" />
                        <span className="fs-sm">2</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-lg me-1" />
                        <span className="fs-sm">0</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-lg me-1" />
                        <span className="fs-sm">3</span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Article */}
                <div className="col">
                  <article className="card h-100 border-0 shadow-sm card-hover-primary">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a
                          href="#"
                          className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                        >
                          Digital
                        </a>
                        <span className="fs-sm text-muted">May 25, 2021</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="blog-single.html" className="stretched-link">
                          Inclusive Marketing: Why and How Does it Work?
                        </a>
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-lg me-1" />
                        <span className="fs-sm">5</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-lg me-1" />
                        <span className="fs-sm">0</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-lg me-1" />
                        <span className="fs-sm">2</span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Article */}
                <div className="col">
                  <article className="card h-100 border-0 shadow-sm card-hover-primary">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a
                          href="#"
                          className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                        >
                          Technology
                        </a>
                        <span className="fs-sm text-muted">May 26, 2021</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="blog-single.html" className="stretched-link">
                          A Study on Smartwatch Design Qualities and People’s
                          Preferences
                        </a>
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-lg me-1" />
                        <span className="fs-sm">7</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-lg me-1" />
                        <span className="fs-sm">4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-lg me-1" />
                        <span className="fs-sm">1</span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Article */}
                <div className="col">
                  <article className="card h-100 border-0 shadow-sm card-hover-primary">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a
                          href="#"
                          className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                        >
                          Startups
                        </a>
                        <span className="fs-sm text-muted">May 27, 2021</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="blog-single.html" className="stretched-link">
                          Why UX Design Matters and How it Affects Ranking
                        </a>
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-lg me-1" />
                        <span className="fs-sm">5</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-lg me-1" />
                        <span className="fs-sm">3</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-lg me-1" />
                        <span className="fs-sm">9</span>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Article */}
                <div className="col">
                  <article className="card h-100 border-0 shadow-sm card-hover-primary">
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a
                          href="#"
                          className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                        >
                          Web
                        </a>
                        <span className="fs-sm text-muted">May 28, 2021</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="blog-single.html" className="stretched-link">
                          This Week in Search: New Limits and Exciting Features
                        </a>
                      </h3>
                    </div>
                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-like fs-lg me-1" />
                        <span className="fs-sm">3</span>
                      </div>
                      <div className="d-flex align-items-center me-3">
                        <i className="bx bx-comment fs-lg me-1" />
                        <span className="fs-sm">5</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bx bx-share-alt fs-lg me-1" />
                        <span className="fs-sm">2</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-scrollbar swiper-scrollbar-vertical">
            <div
              className="swiper-scrollbar-drag"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                height: "127.23px",
                transitionDuration: "0ms"
              }}
            />
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    id="jarallax-container-0"
    className="jarallax-container"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: -100,
      clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)"
    }}
  >
    <div
      className="jarallax-img bg-dark opacity-70"
      style={{
        backgroundImage: 'url("https://silicon.createx.studio/assets/img/blog/single/cover-image.jpg")',
        objectFit: "cover",
        objectPosition: "50% 50%",
        maxWidth: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        marginTop: "-99.58px",
        transform: "translate3d(0px, 129.98px, 0px)"
      }}
      data-jarallax-original-styles="background-image: url(assets/img/blog/single/cover-image.jpg);"
    />
  </div>
</section>

     

      {/* <!-- Page title +  switcher --> */}
      <div className='container mb-4 pb-1 pb-md-3'>
        <h1 className='mb-0'>Our insights from experience</h1>
      </div>
      <div className='container'>
        <div className='row mb-2'>
          <div className='col-xl-9 col-lg-8'>
            <div className='pe-xl-5'>
              <div className='masonry-grid row row-cols-sm-2 row-cols-1 g-4'>
                {activeBlogPosts.map(({ slug, frontmatter }) => (
                  <div className='masonry-grid-item col pb-2 pb-lg-3' key={slug}>
                    <article className='card border-0 bg-transparent'>
                      <div className='position-relative overflow-hidden rounded-3'>
                        <a href={`blog/${slug}`} className='position-absolute top-0 start-0 w-100 h-100' aria-label='Read more'></a>
                        <a
                          href={`blog/${slug}`}
                          className='btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3'
                          data-bs-toggle='tooltip'
                          data-bs-placement='left'
                          title='Read later'
                        >
                          <i className='bx bx-bookmark'></i>
                        </a>
                        <img src={frontmatter?.blogImage} alt='blog-image' />
                      </div>
                      <div className='card-body pb-1 px-0'>
                        <a href={`blog/${slug}`} style={{ backgroundColor: '#0091ff' }} className='badge fs-sm text-white shadow-info text-decoration-none mb-3'>
                          {frontmatter?.category}
                        </a>
                        <h3 className='h4'>
                          <a href={`blog/${slug}`}>{frontmatter?.title}</a>
                        </h3>
                        <p className='mb-4'>{frontmatter?.description}</p>
                        <div className='d-flex align-items-center text-muted'>
                          <div className='fs-sm border-end pe-3 me-3'>{frontmatter?.date}</div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              <Pagination posts={blogData.length} blogsPerPage={blogsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
          </div>
          <aside className='col-xl-3 col-lg-4 '>
            <BlogSidebar posts={posts} source={'home'} setBlogData={setBlogData} />
          </aside>

        
        </div>
      </div>
    </>
  );
}

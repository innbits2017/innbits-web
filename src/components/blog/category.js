
import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import { getUniqueListBy } from "@/constants";
// import { useState } from "react";


const blogCategory = ({ posts, source, setBlogData }) => {
  const categories = [];
  let blogPosts = [];
  let router = useRouter()
  const { category } = router.query;
  useEffect(() => { category && handleReorderCategory(category) }, [category])
  posts.length > 0 && posts.forEach((item) => categories.push(item.frontmatter.category));
  const blogPostsCount = categories.reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), Object.create(null));

  posts.length > 0 && posts.forEach((item) => blogPosts.push({ ...item.frontmatter, slug: item.slug }));
  const uniquePost = getUniqueListBy(blogPosts, "category");

  const handleReorderCategory = (category) => {
    let categoryArray = posts.filter((item) => item.frontmatter.category === category)
    setBlogData(categoryArray)
  }

  return (
    <div className="card card-body my-3">
      <h3 className="h5">Categories</h3>
      <ul className="nav flex-column fs-sm">
        <li className="nav-item mb-1">
          <a href="/blog" className="nav-link py-1 px-0">
            All topics <span className="fw-normal opacity-60 ms-1">({posts?.length})</span>
          </a>
        </li>
        {uniquePost?.map((post, index) => (
          <li className="nav-item mb-1">
            <a href="#top" data-scroll className="nav-link py-1 px-0 text-decoration-none" onClick={() => { source === 'blog' ? router.push(`/blog?category=${post.category}`) : handleReorderCategory(post?.category) }} style={{ cursor: 'pointer' }}>
              {post?.category}
              <span className="fw-normal opacity-60 ms-1">{`(${blogPostsCount[post.category]})`}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blogCategory;

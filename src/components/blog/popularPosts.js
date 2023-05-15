const blogPopularPosts = ({ posts, source }) => {
    const categoryArray = posts.slice(0, 6)
    return (
        <>
            <div className="card card-body border-0 position-relative mb-4">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10 rounded-3"></span>
                <div className="position-relative zindex-2">
                    <h3 className="h5">Popular posts</h3>
                    <ul className="list-unstyled mb-0">
                        {categoryArray?.map(({ slug, frontmatter }) => (
                            <li className="border-bottom pb-3 mb-3">
                                <h4 className="h6 mb-2">
                                    <a href={source === 'blog' ? `${slug}` : `blog/${slug}`}>{frontmatter?.title}</a>
                                </h4>
                                <div className="d-flex align-items-start text-muted pt-1"><div className="fs-xs border-end pe-3 me-3">{frontmatter?.date}</div></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default blogPopularPosts
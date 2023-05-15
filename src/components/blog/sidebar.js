import BlogContactForm from "./contactForm";
import BlogCategory from "./category";
import BlogPopularPosts from "./popularPosts";
import BlogFollowUs from "./followUs"

const blogSidebar = ({ posts, source, setBlogData }) => {
    return (
        <div>
            <BlogFollowUs />
            <BlogContactForm />
            <BlogCategory posts={posts} source={source} setBlogData={setBlogData} />
            <BlogPopularPosts posts={posts} source={source} />
        </div>
    )

}

export default blogSidebar
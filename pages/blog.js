/* eslint-disable react/jsx-key */
import Link from 'next/dist/client/link';

import Header from '../modules/header/header';
import Footer from '../modules/footer/footer';

import { blogPosts } from '../const/blogPosts';

const BlogPage = () => {

    return (
        <>
            <Header/>
            <div className="bg-[url('../assets/backgroundStripes.png')] bg-cover">
                <div className= "bg-white m-auto w-2/3">
                    {blogPosts.map((item) => (
                        <div key={item.slug}>
                            <div>
                                <Link href={`/blog/${item.slug}`}>
                                    <a>{item.title}</a>
                                </Link>
                            </div>
                            <div>{item.date}</div>
                            <div>{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default BlogPage;
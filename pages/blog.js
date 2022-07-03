/* eslint-disable react/jsx-key */
import Link from 'next/dist/client/link';
import { format, parseISO, add } from 'date-fns';

import Header from '../modules/header/header';
import Footer from '../modules/footer/footer';

import { blogPosts } from '../const/blogPosts';

const BlogPage = () => {

    return (
        <>
            <Header/>
            <div className="bg-[url('../assets/backgroundStripes.png')] bg-cover">
                <div className= "bg-white m-auto w-2/3">
                    <div className="p-8">
                        {blogPosts.map((item) => (
                            <BlogListItem key={item.slug} {...item}/>
                        ))}
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

function BlogListItem ({ slug, title, date, content }) {
    return (
        <div key={slug} className="mx-auto my-8 border-vagon-yellow border-2 p-6 rounded-3xl bg-vagon-yellow bg-opacity-30 shadow-md w-4/5">
            <div>
                <Link href={`/blog/${slug}`}>
                    <a className="text-vagon-blue text-3xl">{title}</a>
                </Link>
            </div>
            <div className="text-vagon-blue text-opacity-60">{format(parseISO(date), 'MMMM do, uuu')}</div>
        </div>
    )
}

export default BlogPage;
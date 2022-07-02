import Header from '../../modules/header/header';
import Footer from '../../modules/footer/footer';

import { format, parseISO } from 'date-fns';
import { blogPosts } from '../../const/blogPosts';

const BlogPage = ({ title, date, content}) => {

    return (
        <>
            <div className="bg-[url('../assets/backgroundStripes.png')] bg-auto">
                <div className= "bg-white m-auto w-2/3">
                    <div className="mx-auto p-20">
                        <div><h1 className="text-vagon-blue text-3xl">{title}</h1></div>
                        <div className="text-vagon-blue text-opacity-60">{format(parseISO(date), 'MMMM do, uuu')}</div>
                        <div className="py-5 border-t-2">{content}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    return {
        props: blogPosts.find((item) => item.slug === params.slug)
    }
} 

export async function getStaticPaths() {
    return {
      paths: blogPosts.map((item) => ({
        params: {
            slug: item.slug,
        }
      })),
      fallback: false,
    };
  }

export default BlogPage;
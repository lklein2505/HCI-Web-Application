import Header from '../../modules/header/header';
import Footer from '../../modules/footer/footer';
import { blogPosts } from '../../const/blogPosts';

const BlogPage = ({ title, date, content}) => {

    return (
        <>
            <Header/>
            <div className="bg-[url('../assets/backgroundStripes.png')] bg-cover">
                <div className= "bg-white m-auto w-2/3">
                    <h1>{title}</h1>
                    <div>{content}</div>
                </div>
            </div>
            <Footer/>
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
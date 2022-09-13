import Header from "../../components/Header";
import { NextSeo } from 'next-seo';
import Image from 'next/future/image'
import { BASE_URL } from '../../constants/common'

const css = { maxWidth: '100%', height: 'auto' }
const Article = ({ post }) => {
  return (
    <div>
      <NextSeo
       title={post.title}
       description={post.description}
      />

      <Header />
      <article className="container mx-auto prose lg:prose-xl">
        <div className="mb-10">
          <h4 className="font-liber text-slate-400 leading-loose border-l-4 pl-2">{post.date}</h4>
          </div>
        <Image  src={post.imageUrl} alt={post.title} sizes="100vw" width={1400} height={300} style={css}/>
        <h1 className="font-liber">{post.title}</h1>
        <p className="font-roboto">{post.description}</p>
      </ article>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(
    `${BASE_URL}api/articles/${context.params.slug}`
  );
  const post = await res.json();
  console.log({post});
  return {
    props: {
      post,
    },
    revalidate: 10, 
  };
}


export async function getStaticPaths() {
  
  const res = await fetch(`${BASE_URL}api/articles`)
  const posts = await res.json()
  console.log({posts})
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
 
  return { paths, fallback: "blocking" };
}

export default Article;

import { getFileBySlug, getFiles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Post({ source, frontmatter }) {
  //console.log(frontmatter)
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className={`${styles.main} ${montserrat.className}`}>
        <MDXRemote {...source} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: { source, frontmatter },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

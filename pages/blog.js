import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListCard from "@/components/ListCard";
import Head from "next/head";
import styles from "@/styles/Blog.module.css";
import { getAllFilesMetadata } from "@/lib/mdx";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Blog({ posts = [] }) {
  return (
    <>
      <Head>
        <title>Últimas Publicaciones</title>
        <meta name="description" content="Blog Consejos Programador Novato" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className={`${styles.main} ${montserrat.className}`}>
        <h1>Últimas Publicaciones</h1>
        <p>Aqui podras algunos apuntes o ayudas que he obtenido durante mis estudios en la carrera. Los cuales fueron escritos en archivos .mdx y han sido adaptados a paginas web.</p>
        <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <ListCard
            key={post.slug}  // Usa el slug como key para garantizar unicidad
            title={post.title}
            description={post.description}
            date={post.date}
            slug={post.slug}
          />
        ))
      ) : (
        <p>No hay publicaciones disponibles</p>
      )}
    </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  // Ordenar los posts por fecha de forma descendente (de más reciente a más antiguo)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: { posts: sortedPosts },
  };
}

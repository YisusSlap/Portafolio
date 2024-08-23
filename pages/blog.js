import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import styles from "@/styles/Blog.module.css";
import { getAllFilesMetadata } from "@/lib/mdx";
import { Montserrat } from "next/font/google";
import { ListItem, List, ListItemButton } from "@mui/material";

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
        <List>
          {posts.length > 0 ? (
            posts.map((post) => (
              <ListItem key={post.slug}>
                <ListItemButton alignItems="center" href={`/${post.slug}`}>
                  <div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>
                      <span className={styles.resaltar}>{post.date}</span>
                    </p>
                  </div>
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <p>No hay publicaciones disponibles</p>
          )}
        </List>
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

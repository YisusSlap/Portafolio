import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Proyectos.module.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Proyectos() {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${montserrat.className}`}>
        <p>Hola mundo</p>
      </main>
    </>
  );
}

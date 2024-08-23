import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import styles from "@/styles/SobreMi.module.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function SobreMi() {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${montserrat.className}`}>
        <h1>Sobre mí</h1>
        <br />
        <p>
          ¡Hola! Mi nombre es Jesús Callejas. Nací hace 23 años en Veracruz,
          México. Estudié un tiempo Ingeniería Informática en la UV, pero por
          cuestiones personales dejé la carrera. Años después, regresé a
          estudiar la Licenciatura en Tecnologías Computacionales y estoy a la
          espera de mi título.
        </p>
        <br />
        <p>
          A lo largo de estos años de aprendizaje, he trabajado como programador
          Full-Stack en diferentes sistemas web y aplicaciones móviles.
        </p>
        <br />
        <p>
          Entre mis pasiones también se encuentran tocar el bajo, cuidar
          mascotas exóticas, pintar cuadros y leer novelas juveniles.
        </p>
      </main>
    </>
  );
}

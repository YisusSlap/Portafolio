import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { createSvgIcon } from "@mui/material/utils"
import {  IconButton } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {ThemeProvider} from "@mui/material/styles";
import theme from "@/lib/theme.js"

const montserrat = Montserrat({ subsets: ["latin"] });

const TiktokIcon = createSvgIcon(
  <svg
  xmlns="http://www.w3.org/2000/svg" 
  shapeRendering="geometricPrecision" 
  textRendering="geometricPrecision" 
  imageRendering="optimizeQuality" 
  fillRule="evenodd" 
  clipRule="evenodd" 
  viewBox="0 0 449.45 515.38"
  >
    <g transform="scale(0.77) translate(52 60)">
    <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"/>

    </g>
  </svg>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Jesus Callejas</title>
        <meta name="description" content="Desarrollador JavaScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main} ${montserrat.className}`}>
        <div className={styles.description}>
          <div className={styles.sobremi}>
            <h1>Jesús Callejas</h1>
            <h2>Desarrollador Web.</h2>
            <p>
              Tengo 23 años y estoy a la espera de mi graduación como Licenciado en Tecnologías Computacionales. 
              Cuento con experiencia en desarrollo frontend con JavaScript, pero también tengo conocimientos
              de backend en Java y MySQL. 
            </p>
            <p>
              Además de la programación, me gustan las mascotas exóticas, la música y pintar.
            </p>
            <p><strong>Correo:</strong> jesus.riverarm@icloud.com</p>
          </div>
          <div className={styles.lateral}>
            <Image
            className={styles.foto}
            width={175}
            height={175}
            priority={true}
            src="/FotoCircular.webp" 
            alt="foto personal"
            />
            <div className={styles.iconbutton}>
              <ThemeProvider theme={theme}>
                <IconButton href="https://github.com/YisusSlap" aria-label="github" className="social-logo" color="primary" >
                  <GitHubIcon fontSize="large"/>
                </IconButton>
                <IconButton aria-label="linkedin" className="social-logo" color="primary">
                  <LinkedInIcon fontSize="large"/>
                </IconButton>
                <IconButton aria-label="tiktok" className="social-logo" color="primary">
                  <TiktokIcon fontSize="large"/>
                </IconButton>
              </ThemeProvider>  
            </div>
          </div>
        </div>
        <div className={styles.proyectos}>
          <h3>Proyectos Destacables</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image
                className={styles.imagen}
                width={340}
                height={180}
                priority={true}
                src="/Card-Image.webp" 
                alt="Telefonos mostrando la aplicacion"
              />
              <strong>Postal Cumpleaños</strong>
              <p>Hola</p>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.imagen}
                width={340}
                height={180}
                priority={true}
                src="/Card-Image.webp" 
                alt="Telefonos mostrando la aplicacion"
              />
              <strong>Acortador URL</strong>
              <p>Hola</p>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.imagen}
                width={340}
                height={180}
                priority={true}
                src="/Card-Image.webp" 
                alt="Telefonos mostrando la aplicacion"
              />
              <strong>Postal Cumpleaños</strong>
              <p>Hola</p>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.imagen}
                width={340}
                height={180}
                priority={true}
                src="/Card-Image.webp" 
                alt="Telefonos mostrando la aplicacion"
              />
              <strong>Acortador URL</strong>
              <p>Hola</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

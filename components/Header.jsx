import styles from "@/styles/Header.module.css"
import { Karla } from "next/font/google"

const karla = Karla({ subsets: ["latin"] });


const Header = () =>{
    return (
        <>
            <header className={`${styles.header} ${karla.className}`}>
                <nav>
                    <a className={styles.headerbutton} href="/">Inicio</a>
                    <a className={styles.headerbutton} href="/sobre-mi">Sobre mi</a>
                    <a className={styles.headerbutton} href="/blog">Apuntes</a>
                    <a className={styles.headerbutton} href="/proyectos">Proyectos</a>
                </nav>
            </header>
        </>
    )
}

export default Header 
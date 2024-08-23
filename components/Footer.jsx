import styles from "@/styles/Footer.module.css"
import { Karla } from "next/font/google"

const karla = Karla({ subsets: ["latin"] });


const Footer = () =>{
    return (
        <>
            <footer className={`${styles.footer} ${karla.className}`}>
                <div className={styles.footerCredits}>
                    <p>&copy; 2024 Jesus Callejas. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer 
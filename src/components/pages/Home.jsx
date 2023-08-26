import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css"

function Home() {
    return(
        <>
            <Header />
            <main className={styles.main_content}>
                <div className={styles.div1}>
                    <nav>
                        <ul>
                            <Link to="/">
                                <li>Pagina Inicial</li>
                            </Link>
                            <Link to="/Camisetas">
                                <li>Camisetas</li>
                            </Link>
                            <Link to="/Calcas">
                                <li>Calças</li>
                            </Link>
                            <Link to="/Sapatos">
                                <li>Sapatos</li>
                            </Link>
                            <Link to="/">
                                <li>Contato</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className={styles.div2}>
                    <aside>
                    </aside>
                    <section>
                        <h1>Seja Bem-Vindo!</h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                    </section>
                </div>
            </main> 
            <Footer />
        </>
    );
}

export default Home;
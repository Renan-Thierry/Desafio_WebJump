import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ItemCard from "../layout/ItemCard";
import styles from "../styles/Itens.module.css";
import { Link } from "react-router-dom";
import { TiThSmallOutline, TiThListOutline, TiChevronRight, TiChevronLeft} from 'react-icons/ti';

function Sapatos() {
    const [sapato, setSapato] = useState([]);
    const [tipoFiltro, setTipoFiltro] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/items3', 
        {method: 'GET',
         headers: { 'content-type': 'application/json'},
       })
        .then(resp => resp.json())
        .then((data) => { 
            setSapato(data); 
        })
        .catch(erro => console.log(erro))
    },[])

    const filtro_sapatos = sapato.filter((sapatos) =>
    sapatos.path && (
        sapatos.path.toLowerCase().includes("corrida") ||
        sapatos.path.toLowerCase().includes("caminhada") ||
        sapatos.path.toLowerCase().includes("casual") ||
        sapatos.path.toLowerCase().includes("social")
    )
    );

    const handleTipoFiltro = (tipo) => {
        setTipoFiltro(tipo);
    }

    const itensFiltrados = tipoFiltro ? filtro_sapatos.filter((sapatos) =>
    sapatos.path.toLowerCase().includes(tipoFiltro)
    ) : sapato;
    
    return(
        <>
            <Header />
            <main className={styles.camisetas_content}>
                <section className={styles.div_filtro}>
                    <h1>Filtre por</h1>
                    <h3>Categorias</h3>
                    <ul>
                        <Link to="/Camisetas">
                            <li>Roupas</li>
                        </Link>
                        <Link to="/Sapatos">
                            <li>Sapatos</li>
                        </Link>
                        <Link>
                            <li>Acessorios</li>
                        </Link>
                    </ul>
                    <h3>Cores</h3>
                    <button className={styles.btn1}></button>
                    <button className={styles.btn2}></button>
                    <button className={styles.btn3}></button>
                    <h3>Tipos</h3>
                    <ul>
                        <Link>
                            <li onClick={() => handleTipoFiltro("corrida")}>Corrida</li>
                        </Link>
                        <Link>
                            <li onClick={() => handleTipoFiltro("caminhada")}>Caminhada</li>
                        </Link>
                        <Link>
                            <li onClick={() => handleTipoFiltro("casual")}>Casual</li>
                        </Link>
                        <Link>
                            <li onClick={() => handleTipoFiltro("social")}>Social</li>
                        </Link>
                    </ul>
                </section>
                <section className={styles.itens_content}>
                    <h1>Sapatos</h1>
                    <div className={styles.ordem}>
                    <div>
                        <TiThListOutline />
                        <TiThSmallOutline />
                    </div>
                    <div>
                        <span>Ordenar Por:</span>
                        <select>
                            <option>Selecione as opçoes</option>
                            <option>Preço</option>
                        </select>
                    </div>
                </div>
                    <div>
                        {itensFiltrados.length > 0 && 
                            itensFiltrados.map((sapatos) => (
                            <ItemCard key={sapatos.id} name={sapatos.name} id={sapatos.id} price={sapatos.price} image={sapatos.image}/>
                        ))}
                        {sapato.length > 0 && 
                            sapato.map((sapatos) => (
                            <ItemCard key={sapatos.id} name={sapatos.name} id={sapatos.id} price={sapatos.price} image={sapatos.image}/>
                            ))}
                    </div>
                    <div className={styles.pages}>
                        <ul>
                            <li><TiChevronLeft /></li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li><TiChevronRight /></li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Sapatos;
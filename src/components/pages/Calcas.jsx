import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ItemCard from "../layout/ItemCard";
import styles from "../styles/Itens.module.css";
import { Link } from "react-router-dom";
import { TiThSmallOutline, TiThListOutline, TiChevronRight, TiChevronLeft} from 'react-icons/ti';

function Calcas() {
    const [calca, setCalca] = useState([]);
    const [camisa, setCamisa] = useState([]);
    const [roupas, setRoupas] = useState(false);
    const [tipoFiltro, setTipoFiltro] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/items2', 
        {method: 'GET',
         headers: { 'content-type': 'application/json'},
       })
        .then(resp => resp.json())
        .then((data) => { 
            setCalca(data); 
        })
        .catch(erro => console.log(erro))
    },[])

    useEffect(() => {
        fetch('http://localhost:5000/items', 
        {method: 'GET',
         headers: { 'content-type': 'application/json'},
       })
        .then(resp => resp.json())
        .then((data) => { 
            setCamisa(data); 
        })
        .catch(erro => console.log(erro))
    },[])

    const activeRoupas = (e) => {
        setRoupas(true)
    }

    const filtro_sapatos = calca.filter((calcas) =>
    calcas.path && (
        calcas.path.toLowerCase().includes("corrida") ||
        calcas.path.toLowerCase().includes("caminhada") ||
        calcas.path.toLowerCase().includes("casual") ||
        calcas.path.toLowerCase().includes("social")
    )
    );

    const handleTipoFiltro = (tipo) => {
        setTipoFiltro(tipo);
    }

    const itensFiltrados = tipoFiltro ? filtro_sapatos.filter((sapatos) =>
    sapatos.path.toLowerCase().includes(tipoFiltro)
    ) : calca;

    return(
        <>
            <Header />
            <main className={styles.camisetas_content}>
                <section className={styles.div_filtro}>
                    <h1>Filtre por</h1>
                    <h3>Categorias</h3>
                    <ul>
                        <Link onClick={activeRoupas}>
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
                    {roupas ? (
                        <h1>Roupas</h1>
                    ): (
                        <h1>Calças</h1>
                    )}
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
                        {calca.length > 0 && 
                            calca.map((calcas) => (
                            <ItemCard key={calcas.id} name={calcas.name} id={calcas.id} price={calcas.price} image={calcas.image}/>
                            ))}
                            {roupas && 
                                camisa.map((camisas) => (
                                <ItemCard key={camisas.id} name={camisas.name} id={camisas.id} price={camisas.price} image={camisas.image}/>
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

export default Calcas;
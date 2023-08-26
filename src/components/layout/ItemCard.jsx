import styles from "../styles/ItemCard.module.css"

function ItemCard({id, image, price, name, filter}) {
    return(
        <div className={styles.card_Item}>
            <img src={image} alt="Imagem do item" />
            <h4>{name}</h4>
            <span>R$ {price}</span>
            <button>Comprar</button>
            <h1>{filter}</h1>
        </div>
    )
}
export default ItemCard;
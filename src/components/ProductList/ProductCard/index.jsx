import style from "./style.module.scss";

export const ProductCard = ({ product, addCart }) => {
  return (
    <li className={style.containerItem}>
      <div className={style.img}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={style.description}>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span className={style.price}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => addCart(product)}>Adicionar</button>
      </div>
    </li>
  );
};

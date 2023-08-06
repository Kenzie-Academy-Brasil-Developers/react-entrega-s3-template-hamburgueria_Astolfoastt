import { MdDelete } from "react-icons/md";
import style from "./styles.module.scss";

export const CartItemCard = ({ product, removeProduct }) => {
  const { id, img, name } = product;

  return (
    <li className={style.modalItem}>
      <div className={style.product}>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </div>
      <button
        className={style.mdDelete}
        onClick={() => removeProduct(id)}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete className={style.deleteIcon} size={21} />
      </button>
    </li>
  );
};

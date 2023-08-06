import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";

export const CartModal = ({
  setVisible,
  cartList,
  removeProduct,
  removeProductAll,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <>
      <div className={style.modalBackdrop}>
        <div className={style.containerFlex} role="dialog">
          <div className={style.header}>
            <h2>Carrinho de compras</h2>
            <button
              onClick={() => setVisible(false)}
              aria-label="close"
              title="Fechar"
            >
              <MdClose size={21} />
            </button>
          </div>
          <div>
            <ul className={style.containerList}>
              {cartList.length > 0 ? (
                cartList.map((product) => (
                  <CartItemCard
                    key={product.id}
                    product={product}
                    removeProduct={removeProduct}
                  />
                ))
              ) : (
                <p className={style.paragraph}>Nenhum produto adicionado</p>
              )}
            </ul>
          </div>
          <div className={style.priceProduct}>
            <hr />
            <div className={style.price}>
              <span>Total</span>
              <span className={style.currency}>
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <button onClick={() => removeProductAll()}>Remover todos</button>
          </div>
        </div>
      </div>
    </>
  );
};

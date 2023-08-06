import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = ({ productList, addCart, search, cleanFilter }) => {
  return (
    <div>
      {search && productList.length > 0 ? (
        <div className={style.filterResult}>
          <p>
            resultados da busca para:{" "}
            <strong className={style.value}>{search}</strong>
          </p>
          <span>
            produtos encontrados:{" "}
            <strong className={style.value}>{productList.length} </strong>
          </span>
          <button
            onClick={(event) => {
              event.preventDefault();
              cleanFilter();
            }}
          >
            Limpar filtro
          </button>
        </div>
      ) : null}
      {productList.length > 0 ? (
        <ul className={`container ${style.containerList}`}>
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} addCart={addCart} />
          ))}
        </ul>
      ) : (
        <p className={style.notResult}>nenhum resultado encontrado</p>
      )}
    </div>
  );
};

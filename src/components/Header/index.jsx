import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./styles.module.scss";

export const Header = ({ setVisible, cartQuantity, setSearch }) => {
  const [value, setValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(value);
    setValue("");
  };

  return (
    <header className="container">
      <div className={style.containerFlex}>
        <div className={style.containerCart}>
          <img src={Logo} alt="Logo Kenzie Burguer" />
          <button
            onClick={() => {
              setVisible(true);
            }}
          >
            <span className={style.cartQuantity}>{cartQuantity}</span>
            <MdShoppingCart className={style.cartIcon} size={25} />
          </button>
        </div>
        <div className={style.containerSearch}>
          <form onSubmit={submit}>
            <label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit">
                <MdSearch size={21} />
              </button>
            </label>
          </form>
        </div>
      </div>
    </header>
  );
};

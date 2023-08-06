import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burguerApi } from "../../components/services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
  const [isVisible, setVisible] = useState(false);
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");

  const localProductList = localStorage.getItem("@ProductList");
  const [cartList, setCartList] = useState(
    localProductList ? JSON.parse(localProductList) : []
  );

  const productsResult = productList.filter((product) => {
    const searchFilter =
      search === ""
        ? true
        : product.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
          product.category.toLowerCase().includes(search.toLocaleLowerCase());

    return searchFilter;
  });

  const cleanFilter = () => {
    setSearch("");
  };

  useEffect(() => {
    localStorage.setItem("@ProductList", JSON.stringify(cartList));
  }, [cartList]);

  const addCart = (addingCart) => {
    if (!cartList.some((cart) => cart.id === addingCart.id)) {
      setCartList([...cartList, addingCart]);

      toast.success("adicionado com sucesso!");
    } else {
      toast.error("produto já adicionado ao carrinho.");
    }
  };

  const removeProduct = (productId) => {
    const newProductList = cartList.filter(
      (product) => product.id !== productId
    );
    setCartList(newProductList);
    toast.success("produto removido com sucesso!");
  };

  const removeProductAll = (procuctId) => {
    const newProcuct = cartList.filter((product) => {
      product.id !== procuctId;
    });
    setCartList(newProcuct);
    toast.success("todos os produtos foram removidos com sucesso!");
  };

  useEffect(() => {
    const getBurgues = async () => {
      try {
        const { data } = await burguerApi.get("/products");
        setProductList(data);
      } catch (error) {
        toast.error(error)
      }
    };
    getBurgues();
  }, []);

  return (
    <>
      <Header
        setVisible={setVisible}
        cartQuantity={cartList.length}
        setSearch={setSearch}
        cleanFilter={cleanFilter}
      />
      <main>
        {isVisible ? (
          <CartModal
            setVisible={setVisible}
            cartList={cartList}
            removeProduct={removeProduct}
            removeProductAll={removeProductAll}
          />
        ) : null}
        <ProductList
          addCart={addCart}
          productList={productsResult}
          search={search}
          cleanFilter={cleanFilter}
        />
        <ToastContainer autoClose={2000}/>
      </main>
    </>
  );
};

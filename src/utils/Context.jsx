import React, { createContext, useEffect, useState } from "react";
import axios from "./Axios";

export const ProductContext = createContext();

const Context = (props) => {
    const [products, setproducts] = useState(
        JSON.parse(localStorage.getItem("products")) || null
    );

    useEffect(() => {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            setproducts(JSON.parse(storedProducts));
        }
    }, []);

    const getproducts = async () => {
        try {
            const { data } = await axios("/products");
            setproducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

    return (
        <ProductContext.Provider value={[products, setproducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
"use client"

import Button from "@/components/Button";
import MainPage from "@/components/MainPage";
import ProductCart from "@/components/ProductCart";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Loja() {

    const [carrinho, setCarrinho] = useState(
        Cookies.get('carrinho') ? JSON.parse(Cookies.get('carrinho')) : []
    )

    const handleRemoveFromCart = (item) => {
        console.log(item)
        let newCarrinho = carrinho
        newCarrinho.forEach((carrinhoItem, index, object) => {
            if (carrinhoItem == item) {
                newCarrinho.splice(index, 1)
            }

        });

        Cookies.set('carrinho', JSON.stringify(newCarrinho))
        setCarrinho(JSON.parse(Cookies.get('carrinho')))
    }

    useEffect(() => {
        console.log(carrinho)
    }, carrinho)

    return (
        <MainPage>
            <header className="my-16  text-center">
                <h1 className="text-7xl font-semibold">
                    Carrinho
                </h1>
                <h3 className="py-4 text-4xl text-center font-light w-full">

                </h3>
            </header>

            <div className="flex flex-col justify-center items-center gap-4">
                {
                    carrinho.length > 0 &&
                    carrinho.map((item, index) =>
                        <ProductCart key={`${item.nome}-${index}`} sapato={item} removeFromCart={(item) => handleRemoveFromCart(item)} carrinho={true} />
                    )
                }
            </div>

            {/* <div className="rounded-lg">
                    <img src={sapatos[2].imagem}
                        className="rounded-lg"   
                    />
                </div> */}
        </MainPage>
    )
}
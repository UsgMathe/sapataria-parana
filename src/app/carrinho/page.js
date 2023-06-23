"use client"

import Button from "@/components/Button";
import MainPage from "@/components/MainPage";
import ProductCart from "@/components/ProductCart";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BiCart, BiStoreAlt } from "react-icons/bi"

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
                    <BiCart className="m-auto text-8xl my-2" />
                    {
                        carrinho.length > 0 ?
                            "Carrinho" : "Carrinho vazio"
                    }

                </h1>
                <h3 className="py-4 text-4xl text-center font-light w-full">

                </h3>
            </header>

            <div className="flex flex-col justify-center items-center gap-4">
                {
                    carrinho.length > 0 ?
                        carrinho.map((item, index) =>
                            <ProductCart key={`${item.nome}-${index}`} sapato={item} removeFromCart={(item) => handleRemoveFromCart(item)} carrinho={true} />
                        ) : <Link href={'/loja'}>
                            <Button className="shadow-none">
                                <p className="flex gap-2 justify-center items-center">
                                    <BiStoreAlt />
                                    Loja
                                </p>
                            </Button>
                        </Link>
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
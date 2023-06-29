"use client"

import Button from "@/components/Button";
import MainPage from "@/components/MainPage";
import ProductCart from "@/components/ProductCart";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BiCart, BiStoreAlt } from "react-icons/bi"

export default function Loja() {

    const getCart = () => {
        const existingCart = window.localStorage.getItem('cart');
        return existingCart ? JSON.parse(existingCart) : [];
    };

    const removeFromCart = (item) => {

    }

    const [carrinho, setCarrinho] = useState(getCart())

    const [carrinhoStatus, setCarrinhoStatus] = useState('Carrinho')

    const [total, setTotal] = useState(0)

    // const handleRemoveFromCart = (item) => {
    //     console.log(item)
    //     let newCarrinho = carrinho
    //     newCarrinho.forEach((carrinhoItem, index, object) => {
    //         if (carrinhoItem == item) {
    //             newCarrinho.splice(index, 1)
    //             setTotal(total - carrinhoItem.preco)
    //         }

    //     });

    //     Cookies.set('carrinho', JSON.stringify(newCarrinho))
    //     setCarrinho(JSON.parse(Cookies.get('carrinho')))
    // }

    useEffect(() => {
        console.log(carrinho)
        if (carrinho.length > 0) {
            let total_carrinho = 0
            carrinho.forEach(item => {
                total_carrinho += item.preco * item.qntd
            });
            setTotal(total_carrinho)
            setCarrinhoStatus("Carrinho")
        } else {
            setCarrinhoStatus("Carrinho Vazio")
        }
    }, carrinho)

    return (
        <MainPage>
            <header className="my-16  text-center">
                <h1 className="text-7xl font-semibold">
                    <BiCart className="m-auto text-8xl my-2" />
                    {carrinhoStatus}

                </h1>
                <h3 className="py-4 text-4xl text-center font-light w-full">

                </h3>
            </header>

            <div className="flex flex-col justify-center items-center gap-4">
                {
                    carrinho.length > 0 ?
                        carrinho.map((item, index) =>
                            <ProductCart key={`${item.nome}-${index}`} item_carrinho={item} removeFromCart={(item) => removeFromCart(item)} carrinho={true} />
                        ) : <Link href={'/loja'}>
                            <Button icon={<BiStoreAlt />} className="shadow-none">
                                Loja
                            </Button>
                        </Link>
                }
            </div>

            <div>
                {
                    carrinho.length > 0 &&
                    <p className="mt-10 text-2xl">
                        Total: R${total}
                    </p>
                }
            </div>
        </MainPage>
    )
}
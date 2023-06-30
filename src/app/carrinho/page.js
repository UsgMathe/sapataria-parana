'use client';

import Button from "@/components/Button";
import MainPage from "@/components/MainPage";
import ProductCart from "@/components/ProductCart";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BiCart, BiStoreAlt } from "react-icons/bi"

export const getCart = () => {
    if (typeof window !== 'undefined') {
        const carrinho_local = window.localStorage.getItem('cart');
        return carrinho_local ? JSON.parse(carrinho_local) : [];
    }
    return []
};

export const addQntdItemCart = (item) => {
    if (typeof window !== 'undefined') {
        if (item) {
            const carrinho_local = window.localStorage.getItem('cart')
            const cart = carrinho_local ? JSON.parse(carrinho_local) : []
            const item_existente = cart.find((cartItem) => cartItem.nome === item.nome)

            if (item_existente) {
                item_existente.qntd += 1
            }
            window.localStorage.setItem('cart', JSON.stringify(cart))
            return cart
        }
    }
}

export const reduceQntdItemCart = (item) => {
    if (typeof window !== 'undefined') {
        if (item) {
            const carrinho_local = window.localStorage.getItem('cart')
            const cart = carrinho_local ? JSON.parse(carrinho_local) : []
            const item_existente = cart.find((cartItem) => cartItem.nome === item.nome)
            if (item_existente) {
                if (item_existente.qntd <= 1) {
                    item.qntd = 1
                } else {
                    item_existente.qntd -= 1
                }
            }
            window.localStorage.setItem('cart', JSON.stringify(cart))
            return cart
        }
    }
}

export const removeFromCart = (item) => {
    if (typeof window !== 'undefined') {
        const carrinho_local = window.localStorage.getItem('cart')
        let cart = carrinho_local ? JSON.parse(carrinho_local) : []
        let new_cart = []
        cart.forEach((item_cart, index) => {
            // console.log(item_cart.nome === item.nome, item_cart.nome, item.nome)
            if (item_cart.nome !== item.nome) {
                new_cart.push(item_cart)
            }
        });
        console.log(new_cart)
        window.localStorage.setItem('cart', JSON.stringify(new_cart))
        return new_cart
    }
    return []
}


export default function Loja() {



    const [carrinho, setCarrinho] = useState(getCart())

    const [carrinhoStatus, setCarrinhoStatus] = useState('Carregando carrinho...')

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
                    <BiCart className={`m-auto  my-2 text-8xl`} />
                    <p className={`${carrinhoStatus === 'Carregando carrinho...' ? 'text-4xl' : 'text-6xl'}`}>
                        {carrinhoStatus}
                    </p>

                </h1>
                <h3 className="py-4 text-4xl text-center font-light w-full">

                </h3>
            </header>

            <div className="flex flex-col justify-center items-center gap-4">
                {
                    carrinho.length > 0 ?
                        carrinho.map((item, index) =>
                            <ProductCart key={`${item.nome}-${index}`} item_carrinho={item} removeFromCart={(item) => setCarrinho(removeFromCart(item))} addItem={(item) => setCarrinho(addQntdItemCart(item))} decItem={item => setCarrinho(reduceQntdItemCart(item))} carrinho={true} />
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
"use client"

import Button from "@/components/Button";
import MainPage from "@/components/MainPage";
import ProductCard from "@/components/ProductCard";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { BiStoreAlt } from 'react-icons/bi'

export default function Loja() {
    const sapatos = [

        {
            nome: "Cinta Artesanal de Couro - Marrom (Com costura)",
            imagem: "/images/cintas/cinta-marrom-costura.jpg",
            descricao: "Apresentamos a você nossa elegante e durável Cinta Artesanal de Couro com Costura, um acessório indispensável para adicionar estilo e funcionalidade ao seu visual. Feita à mão com cuidado meticuloso e atenção aos detalhes, esta cinta oferece qualidade excepcional e um toque único que apenas o couro genuíno pode proporcionar.",
            preco: 100
        },
        {
            nome: "Cinta Artesanal de Couro - Preta (Com costura)",
            imagem: "/images/cintas/cinta-preta-costura.jpg",
            descricao: "Apresentamos a você nossa elegante e durável Cinta Artesanal de Couro com Costura, um acessório indispensável para adicionar estilo e funcionalidade ao seu visual. Feita à mão com cuidado meticuloso e atenção aos detalhes, esta cinta oferece qualidade excepcional e um toque único que apenas o couro genuíno pode proporcionar.",
            preco: 100
        },
        {
            nome: "Cinta Artesanal de Couro - Preta",
            imagem: "/images/cintas/cinta-preta.jpg",
            descricao: "Apresentamos a você nossa elegante e durável Cinta Artesanal de Couro, um acessório indispensável para adicionar estilo e funcionalidade ao seu visual. Feita à mão com cuidado meticuloso e atenção aos detalhes, esta cinta oferece qualidade excepcional e um toque único que apenas o couro genuíno pode proporcionar.",
            preco: 80
        },
        {
            nome: "Cinta Artesanal de Couro - Marrom",
            imagem: "/images/cintas/cinta-marrom.jpg",
            descricao: "Apresentamos a você nossa elegante e durável Cinta Artesanal de Couro, um acessório indispensável para adicionar estilo e funcionalidade ao seu visual. Feita à mão com cuidado meticuloso e atenção aos detalhes, esta cinta oferece qualidade excepcional e um toque único que apenas o couro genuíno pode proporcionar.",
            preco: 80
        },

    ]

    const [carrinho, setCarrinho] = useState(
        Cookies.get('carrinho') ? JSON.parse(Cookies.get('carrinho')) : []
    )

    let cart = []
    const addToCart = (item) => {
        if (item) {
            const carrinho_local = window.localStorage.getItem('cart')
            const cart = carrinho_local ? JSON.parse(carrinho_local) : []
            const item_existente = cart.find((cartItem) => cartItem.nome === item.nome)

            if (item_existente) {
                item_existente.qntd += 1
            } else {
                item.qntd = 1
                cart.push(item)
            }
            window.localStorage.setItem('cart', JSON.stringify(cart))
            setCarrinho(cart)
        }
    }

    const removeFromCart = (item) => {
        // reduzir quantidade, se for <= 1 remover
    }

    const handleAddToCart = (novo_item) => {
        novo_item.qntd = 1
        console.log(carrinho)
        if (carrinho) {
            const cookie_carrinho = Cookies.get('carrinho') ? JSON.parse(Cookies.get('carrinho')) : []
            if (carrinho.length <= 0) {
                setCarrinho([...carrinho, novo_item])
            } else {
                cookie_carrinho.forEach(item => {

                    if (item.nome == novo_item.nome) {
                        // novo_item.qntd = item.qntd + 1

                        let new_carrinho = carrinho
                        new_carrinho[new_carrinho.length - 1] = { ...new_carrinho[new_carrinho.length - 1], qntd: item.qntd + 1 }
                        setCarrinho([new_carrinho])
                    }
                });
            }

        }
    }

    // useEffect(() => {
    //     carrinho && Cookies.set('carrinho', JSON.stringify(carrinho))
    //     console.log(carrinho)

    // }, [carrinho])

    return (
        <MainPage>
            <header className="my-16  text-center">
                <h1 className="text-7xl font-semibold">
                    <BiStoreAlt className="m-auto text-8xl my-2" />
                    Loja
                </h1>
                <h3 className="py-4 text-4xl text-center font-light w-full">

                </h3>
            </header>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16 max-w-4xl">
                {
                    sapatos.map((sapato, index) =>
                        <ProductCard key={`${sapato.nome}-${index}`} sapato={sapato} addToCart={(item) => addToCart(item)} />
                    )
                }


            </div>
        </MainPage>
    )
}
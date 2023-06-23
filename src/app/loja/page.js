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
            preco: "R$100"
        },
        {
            nome: "Cinta Artesanal de Couro - Preta (Com costura)",
            imagem: "/images/cintas/cinta-preta-costura.jpg",
            descricao: "Apresentamos a você nossa elegante e durável Cinta Artesanal de Couro com Costura, um acessório indispensável para adicionar estilo e funcionalidade ao seu visual. Feita à mão com cuidado meticuloso e atenção aos detalhes, esta cinta oferece qualidade excepcional e um toque único que apenas o couro genuíno pode proporcionar.",
            preco: "R$100"
        },
        {
            nome: "Cinta Artesanal de Couro - Preta",
            imagem: "/images/cintas/cinta-preta.jpg",
            descricao: "Apresentamos a você nossa elegante e durável Cinta Artesanal de Couro, um acessório indispensável para adicionar estilo e funcionalidade ao seu visual. Feita à mão com cuidado meticuloso e atenção aos detalhes, esta cinta oferece qualidade excepcional e um toque único que apenas o couro genuíno pode proporcionar.",
            preco: "R$80"
        },
        {
            nome: "Cinta Artesanal de Couro - Marrom",
            imagem: "/images/cintas/cinta-marrom.jpg",
            descricao: "Apresentamos a você nossa elegante e durável Cinta Artesanal de Couro, um acessório indispensável para adicionar estilo e funcionalidade ao seu visual. Feita à mão com cuidado meticuloso e atenção aos detalhes, esta cinta oferece qualidade excepcional e um toque único que apenas o couro genuíno pode proporcionar.",
            preco: "R$80"
        },

    ]


    const [carrinho, setCarrinho] = useState(
        Cookies.get('carrinho') ? JSON.parse(Cookies.get('carrinho')) : []
    )

    const handleAddToCart = (sapato) => {
        console.log(carrinho)
        setCarrinho([...carrinho, sapato])
    }

    useEffect(() => {
        carrinho && Cookies.set('carrinho', JSON.stringify(carrinho))

    }, [carrinho])

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
                        <ProductCard key={`${sapato.nome}-${index}`} sapato={sapato} addToCart={(sapato) => handleAddToCart(sapato)} />
                    )
                }

            </div>
        </MainPage>
    )
}
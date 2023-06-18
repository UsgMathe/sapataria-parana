"use client"

import Button from "@/components/Button";
import MainPage from "@/components/MainPage";
import ProductCart from "@/components/ProductCart";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Loja() {

    const sapatos = [
        {
            nome: "Sapato Brogue Mazuque",
            imagem: "/images/sapatos/sapato-brogue-mazuque.jpg",
            descricao: "Arremate seus visuais com muita elegância com este sapato Brogue. Confeccionado em couro, possui fino acabamento com recortes e perfuros característicos deste tipo de modelo. Conta também, com palmilha extra macia e cadarço para melhor ajuste. Sofisticado e confortável, é o sapato ideal para homens de bom gosto que prezam pela elegância e bem estar. Você pode combinar com calça alfaiataria ou sarja",
            preco: "R$52.99"
        },
        {
            nome: "Sapato de couro verde",
            imagem: "/images/sapatos/Sapatos_de_couro_verde.jpg",
            descricao: "",
            preco: "R$30.99"
        },
        {
            nome: "Sapato New Tradicional preto - 15465",
            imagem: "/images/sapatos/sapatoterapia-new-tradicional-preto-21421.jpg",
            descricao: "",
            preco: "R$98.85"
        },
        {
            nome: "Sapato New Tradicional - 21421",
            imagem: "/images/sapatos/sapato-brogue-mazuque.jpg",
            descricao: "",
            preco: "R$72.50"
        },
        {
            nome: "Sapato de couro",
            imagem: "/images/sapatos/Sapatos_de_couro_verde.jpg",
            descricao: "",
            preco: "R$30.99"
        },
        {
            nome: "Sapato brogue mazuque - 21421",
            imagem: "/images/sapatos/sapato-brogue-mazuque.jpg",
            descricao: "",
            preco: "R$72.50"
        },
    ]

    const [carrinho, setCarrinho] = useState(JSON.parse(Cookies.get('carrinho')) ? JSON.parse(Cookies.get('carrinho')) : [])


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
            <h1>CARRINHO:</h1>
            <div className="flex flex-col sm:grid-cols-3 md:grid-cols-4 gap-4 my-16 max-w-4xl">
                {
                    carrinho.length > 0 &&
                    carrinho.map((item, index) =>
                        <ProductCart key={`${item.nome}-${index}`} sapato={item} removeFromCart={(item) => handleRemoveFromCart(item)} carrinho={true} />
                    )
                }

                {/* <div className="rounded-lg">
                    <img src={sapatos[2].imagem}
                        className="rounded-lg"   
                    />
                </div> */}
            </div>
        </MainPage>
    )
}
"use client"

import Button from "@/components/Button";
import MainPage from "@/components/MainPage";

export default function Loja() {
    const sapatos = [
        {
            nome: "Sapato Brogue Mazuque",
            imagem:"/images/sapatos/sapato-brogue-mazuque.jpg",
            descricao: "Arremate seus visuais com muita elegância com este sapato Brogue. Confeccionado em couro, possui fino acabamento com recortes e perfuros característicos deste tipo de modelo. Conta também, com palmilha extra macia e cadarço para melhor ajuste. Sofisticado e confortável, é o sapato ideal para homens de bom gosto que prezam pela elegância e bem estar. Você pode combinar com calça alfaiataria ou sarja",
            preco:"R$52.99"
        },
        {
            nome: "Sapato de couro verde",
            imagem:"/images/sapatos/Sapatos_de_couro_verde.jpg",
            descricao: "",
            preco:"R$30.99"
        },
        {
            nome: "Sapato New Tradicional preto - 15465",
            imagem:"/images/sapatos/sapatoterapia-new-tradicional-preto-21421.jpg",
            descricao: "",
            preco:"R$98.85"
        },
        {
            nome: "Sapato New Tradicional preto - 21421",
            imagem:"/images/sapatos/sapato-brogue-mazuque.jpg",
            descricao: "",
            preco:"R$72.50"
        }
    ]
    return(
        <MainPage>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-16 max-w-4xl">
                {
                    sapatos.map(sapato => 
                        <div key={sapato.nome} className="flex flex-col rounded-lg border-2  bg-slate-100 hover:scale-110 hover:border-orange-500 transition-all duration-300">
                            <div className={`h-2/3`}>
                            <img src={sapato.imagem}
                                className="m-auto rounded-lg object-cover w-full h-full  transition-all duration-300"   
                            />
                            </div>
                            <p className="m-2 line-clamp-1 text-center font-semibold text-gray-900">{sapato.nome}</p>
                            <p className="line-clamp-2 text-center font-normal text-gray-700">{sapato.descricao}</p>
                            <p className="mt-2 text-center text-xl font-medium text-orange-500">{sapato.preco}</p>
                            <div className="p-2 m-auto">
                                <Button>Ver mais</Button>
                            </div>
                        </div>
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
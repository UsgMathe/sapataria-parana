"use client"

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import MainPage from "@/components/MainPage";
import { useEffect, useState } from "react";

import { BiMoneyWithdraw } from 'react-icons/bi'


export default function orcamento() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsLink = `https://api.whatsapp.com/send?phone=554298216682&text=Ol%C3%A1,%20me%20chamo%20*${dados.nome}*%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%0A%0AServi%C3%A7o:%20*${dados.tipo}*%0ADescri%C3%A7%C3%A3o:%0A*${dados.descreva}*%0A%0AContato:%0AEmail:%20${dados.email}`

    console.log(whatsLink)
    //https://api.whatsapp.com/send?phone=554298216682&text=Ol%C3%A1,%20me%20chamo%20*Matheus*%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%0A%0AServi%C3%A7o:%20*Pintura*%0ADescri%C3%A7%C3%A3o:%0A*Blablablabla*%0A%0AContato:%0AEmail:%20theusgvalenga@outlook.com

    router.push(whatsLink)
  }

  const options = [
    "Colagem",
    "Conserto",
    "Costura",
    "Pintura",
    "Recape",
    "Reparo",
    "Solado",
    "Troca de Zíper",
    "Outro...",
  ]

  const [dados, setDados] = useState({})

  const updateDados = (e) => {
    setDados({
      ...dados,
      [e.target.name.split(" ")[0].toLowerCase()]: e.target.value
    })
  }

  useEffect(() => {
    console.log(dados)
  }, [dados])


  return (
    <MainPage>
      <header className="my-12  text-center">
        <h1 className="text-7xl font-semibold px-4">
          <BiMoneyWithdraw className="m-auto text-8xl my-2" />
          Orçamento
        </h1>
        <h3 className="py-4 text-4xl text-center font-light w-full">

        </h3>
      </header>
      <form onSubmit={e => handleSubmit(e)} className="w-full max-w-3xl px-6 py-14 rounded-lg bg-white text-gray-700">
        <h2 className="py-4 w-full text-center text-3xl font-semibold">Solicite um orçamento</h2>

        <p className="text-xl mt-12 font-semibold">Informações pessoais</p>
        <Input type='text' title='Nome' placeholder='Nome Sobrenome' description='Nome completo' required={true} onChange={e => updateDados(e)} />
        <Input type='email' title='Email' placeholder='email@email.com' description='Email' required={true} onChange={e => updateDados(e)} />

        <p className="text-xl mt-12 font-semibold">Serviço</p>
        <Dropdown description='Tipo de serviço' required={true} onChange={e => updateDados(e)}>
          {options}
        </Dropdown>

        <Input type='file' description='Foto' />
        <Input type='textArea' placeholder='Descrição do serviço...' description='Descreva o serviço' onChange={e => updateDados(e)} ></Input>

        <div className="flex justify-center">
          <Button>Solicitar</Button>
        </div>
      </form>
    </MainPage>
  )
}
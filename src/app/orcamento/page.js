"use client"

import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import MainPage from "@/components/MainPage";
import { useState } from "react";

import { BiMoneyWithdraw } from 'react-icons/bi'


export default function orcamento() {

  const [endereco, setEndereco] = useState({
    cep: '',
    cidade: '',
    estado: '',
    rua: '',
    bairro: '',
  })

  const [cepError, setCepError] = useState(false)

  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Solicitou')
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
        <Input type='text' title='Nome' placeholder='Nome Sobrenome' description='Nome completo' required={true} />
        <Input type='email' title='Email' placeholder='email@email.com' description='Email' required={true} />

        <p className="text-xl mt-12 font-semibold">Serviço</p>
        <Dropdown description='Tipo de serviço' required={true}>
          {options}
        </Dropdown>

        <Input type='file' description='Foto' onInput={e => setImage(e)} />
        <Input type='textArea' placeholder='Descrição do serviço...' description='Descreva o serviço' ></Input>

        <div className="flex justify-center">
          <Button>Solicitar</Button>
        </div>
      </form>
    </MainPage>
  )
}
"use client"

import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import MainPage from "@/components/MainPage";
import { useState } from "react";

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
    "Conserto",
    "Colagem",
    "Costura",
    "Reparo",
  ]

  const buscaCep = async (cep) => {

    let cepOnlyNumbers = cep.replace(/\D/g, "")
    setEndereco({
      ...endereco, cep: cepOnlyNumbers
    })

    if (cep.length == 8) {
      try {
        await fetch(`https://viacep.com.br/ws/${cepOnlyNumbers}/json/`)
          .then(response => {
            response.json()
              .then(data => {
                if (!data.erro) {
                  setCepError(false)
                  setEndereco({
                    cidade: data.localidade,
                    estado: data.uf,
                    rua: data.logradouro,
                    bairro: data.bairro,
                  })
                } else {
                  setCepError(true)
                  setEndereco({
                    cidade: '',
                    estado: '',
                    rua: '',
                    bairro: '',
                  })
                }
              })
          }).catch(e => console.log(e))
      }
      catch {
        console.log('cep não encontrado')
      }
    }
  }

  return (
    <MainPage>
      <form onSubmit={e => handleSubmit(e)} className="w-full max-w-3xl p-6 rounded-lg bg-white text-gray-700 my-10">
        <h2 className="py-4 w-full text-center text-3xl font-semibold">Solicite um orçamento</h2>

        <p className="text-xl mt-12 font-semibold">Informações pessoais</p>
        <Input type='text' title='Nome' placeholder='Nome Sobrenome' description='Nome completo' required={true} />
        <Input type='email' title='Email' placeholder='email@email.com' description='Email' required={true} />

        <p className="text-xl mt-12 font-semibold">Endereço</p>
        <div className="flex gap-4 m-0">
          <Input type='text' placeholder='00000-000' description='CEP' required={true} maxLength={8} onInput={e => buscaCep(e)} value={endereco.cep} error={cepError} />
          <Input type='text' placeholder='União da Vitória' description={'Cidade'} required={true} value={endereco.cidade} onInput={e => setEndereco({ ...endereco, cidade: e })} />
          <Input type='text' placeholder='Paraná' description={'Estado'} value={endereco.estado} required={true} onInput={e => setEndereco({ ...endereco, estado: e })} margin='' />
        </div>
        <div className="flex sm:flex-row flex-col gap-4 m-0">
          <Input type='text' placeholder='Rua Dom Pedro II' description="Rua" required={true} value={endereco.rua} margin={'my-0'} onInput={e => setEndereco({ ...endereco, rua: e })} />
          <Input type='number' placeholder='703' description="Número" required={true} margin={'my-0'} />
          <Input type='text' placeholder='Centro' description={'Bairro'} required={true} value={endereco.bairro} onInput={e => setEndereco({ ...endereco, bairro: e })} margin={'my-0'} />
        </div>
        <Input type='text' placeholder='ex: apt.24, Casa A' description={'Complemento'} required={false} />

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
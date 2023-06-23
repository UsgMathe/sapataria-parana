"use client"

import Link from "next/link";
import { useState } from "react";
import { GiRunningShoe } from 'react-icons/gi'
import { BiHomeAlt, BiInfoCircle, BiStoreAlt, BiCart, BiMoneyWithdraw } from 'react-icons/bi'

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div className="flex justify-between w-full bg-orange-600 p-4 text-white">
        <Link href={'/'} className="font-semibold">
          <h1 className="flex gap-2">
            <GiRunningShoe className="text-2xl" />
            Sapataria Paraná
          </h1>
        </Link>
        <ul className="sm:flex hidden justify-between gap-10 font-medium">
          <Link className="hover:text-black transition-all duration-300" href={'/'} >
            <p className="flex justify-center items-center gap-3">
              <BiHomeAlt className="text-2xl" />
              Início
            </p>
          </Link>
          <Link className="hover:text-black transition-all duration-300" href={'/loja'} >
            <p className="flex justify-center items-center gap-3">
              <BiStoreAlt className="text-2xl" />
              Loja
            </p>
          </Link>
          <Link className="hover:text-black transition-all duration-300" href={'/carrinho'} >
            <p className="flex justify-center items-center gap-3">
              <BiCart className="text-2xl" />
              Carrinho
            </p>
          </Link>
          <Link className="hover:text-black transition-all duration-300" href={'/sobre'} >
            <p className="flex justify-center items-center gap-3">
              <BiInfoCircle className="text-2xl" />
              Sobre
            </p>
          </Link>
          <Link className="hover:text-black transition-all duration-300" href={'/orcamento'} >
            <p className="flex justify-center items-center gap-3">
              <BiMoneyWithdraw className="text-2xl" />
              Orçamento
            </p>
          </Link>
        </ul>
        {/* Futuro menu */}
        <div className="sm:hidden">
          <button className="w-5 h-5" onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <img src="/images/menu-hamburguer.png" alt="ícone menu hamburguer" />
          </button>
        </div>
      </div >
      <div className={`fixed sm:hidden top-0  h-full w-full bg-black/40 font-semibold  ${isOpenMenu ? 'backdrop-blur-sm bg-black/40 z-10' : 'backdrop-blur-0 bg-black/0 -z-10'} transition-all duration-300`} onClick={() => setIsOpenMenu(!isOpenMenu)}>
      </div>
      <div className={`absolute w-full text-left flex flex-col gap-2 p-4 rounded-b-xl transition-all ease-in-out duration-500 ${isOpenMenu ? '-translate-y-16' : '-translate-y-[200%]'} z-50 bg-white text-slate-900 `}>
        <img src="/images/cross.png" alt="icone fechar" className="fixed cursor-pointer self-end w-5" onClick={() => setIsOpenMenu(false)} />
        <p className="w-full pb-1 pt-3 text-xl font-semibold text-black">
          Navegação
        </p>
        <Link className="transition-all duration-300 px-1 hover:text-orange-600 p-1 rounded-lg" href={'/'} onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <p className="flex justify-start items-center gap-3">
            <BiHomeAlt className="text-2xl" />
            Início
          </p>
        </Link>
        <Link className="transition-all duration-300 px-1 hover:text-orange-600  p-1 rounded-lg" href={'/loja'} onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <p className="flex justify-start items-center gap-3">
            <BiStoreAlt className="text-2xl" />
            Loja
          </p>
        </Link>
        <Link className="transition-all duration-300 px-1 hover:text-orange-600  p-1 rounded-lg" href={'/carrinho'} onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <p className="flex justify-start items-center gap-3">
            <BiCart className="text-2xl" />
            Carrinho
          </p>
        </Link>
        <Link className="transition-all duration-300 px-1 hover:text-orange-600  p-1 rounded-lg" href={'/sobre'} onClick={() => setIsOpenMenu(!isOpenMenu)} >
          <p className="flex justify-start items-center gap-3">
            <BiInfoCircle className="text-2xl" />
            Sobre
          </p>
        </Link>
        <Link className="transition-all duration-300 hover:text-orange-600 px-1  mb-2  p-1 rounded-lg" href={'/orcamento'} onClick={() => setIsOpenMenu(!isOpenMenu)} >
          <p className="flex justify-start items-center gap-3">
            <BiMoneyWithdraw className="text-2xl" />
            Orçamento
          </p>
        </Link>
      </div>
    </>
  )
}
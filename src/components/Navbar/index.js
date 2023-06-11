"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div className="flex justify-between w-full bg-orange-600 p-4">
        <Link href={'/'} className="font-semibold">Sapataria Paraná</Link>
        <ul className="sm:flex hidden justify-between gap-10 font-medium">
          <Link className="hover:text-black" href={'/'} >Início</Link>
          <Link className="hover:text-black" href={'/sobre'} >Sobre</Link>
          <Link className="hover:text-black" href={'/orcamento'} >Orçamento</Link>
        </ul>
        {/* Futuro menu */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <i className="fi fi-br-menu-burger"></i>
          </button>
        </div>
      </div >
      <div className={`fixed sm:hidden top-0  h-full w-full bg-black/40 font-semibold  ${isOpenMenu ? 'backdrop-blur-sm bg-black/40 z-10' : 'backdrop-blur-0 bg-black/0 -z-10'} transition-all duration-300`} onClick={() => setIsOpenMenu(!isOpenMenu)}>
      </div>
      <div className={`absolute w-full text-left flex flex-col gap-2 p-4 rounded-b-xl transition-all ease-in-out duration-500 ${isOpenMenu ? '-translate-y-14' : '-translate-y-72'} z-50 bg-white text-slate-900 `}>
        <i className="fixed cursor-pointer self-end transition-all duration-300 hover:text-orange-600 fi fi-br-cross" onClick={() => setIsOpenMenu(false)}></i>
        <p className="w-full pb-1 pt-3 text-xl font-semibold text-black">
          Navegação
        </p>
        <Link className="transition-all duration-300 px-1 hover:text-orange-600 " href={'/'} onClick={() => setIsOpenMenu(!isOpenMenu)}>Início</Link>
        <Link className="transition-all duration-300 px-1 hover:text-orange-600 " href={'/sobre'} onClick={() => setIsOpenMenu(!isOpenMenu)} >Sobre</Link>
        <Link className="transition-all duration-300 hover:text-orange-600 px-1  mb-2 " href={'/orcamento'} onClick={() => setIsOpenMenu(!isOpenMenu)} >Orçamento</Link>
      </div>
    </>
  )
}
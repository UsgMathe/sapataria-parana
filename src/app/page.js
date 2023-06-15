import MainPage from "@/components/MainPage"

export default function Home() {
  return (
    <MainPage>
      <div className="absolute -z-10 blur-sm w-screen h-44">
        <img src="/images/sapataria-frente.jpeg" alt="frente da sapataria paraná" className="object-cover w-full h-full animate-[pulse_6s_infinite]" />
      </div>
      <header className="flex flex-col items-center mt-12">
        <h1 className=" text-4xl mb-2 font-semibold">Sapataria Paraná</h1>
        <h2 className="">Consertos e Reparos de Sapatos em Geral</h2>
      </header>

    </MainPage>
  )
}

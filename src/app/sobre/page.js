import MainPage from "@/components/MainPage";

export default function sobre() {
  return (
    <MainPage>
      <div className="mt-16 mb-5 text-center">

        <h1 className=" text-4xl mb-2 font-semibold">Sobre nós</h1>
      </div>

      <p className="text-justify">Fundada em 2003, a <span className="text-orange-400">Sapataria Paraná</span> ... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit impedit necessitatibus eius ratione velit nobis explicabo ipsam. At quisquam ratione laboriosam hic incidunt ad dolor optio. Laborum nesciunt minus temporibus.</p>
      <div className="w-screen h-52 mt-12">
        <img src="/images/sapataria-frente.jpeg" alt="frente da sapataria paraná" className="object-cover w-full h-full" />
      </div>

    </MainPage>
  )
}
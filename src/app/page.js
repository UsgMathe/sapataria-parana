"use client"

import MainPage from "@/components/MainPage"
import { useEffect, useState } from "react";

export default function Home() {

  const [randomPhoto, setRandomPhoto] = useState()

  const [bgPhoto, setBgPhoto] = useState('/images/fotos/sapataria-frente.jpeg')
  const [isBgPhoto, setIsBgPhoto] = useState(true)

  let photoList = []

  useEffect(() => {
    const loadImagesAsync = async () => {
      const getImageInfoAsync = (image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image.src;

          img.onload = () => {
            resolve({ src: image.src, width: img.width, height: img.height });
          };

          img.onerror = () => {
            reject(new Error(`Failed to load image: ${image.src}`));
          };
        });
      };
      console.log("Loading images...");
      const images = require.context('../../public/images/fotos', true);
      const imagesList = images.keys().map(image => images(image).default);

      const loadedPhotoList = await Promise.all(
        imagesList.map(async (image) => {
          const { src, width, height } = await getImageInfoAsync(image);
          return { src, width, height, href: src };
        })
      );

      photoList = loadedPhotoList;
    };

    loadImagesAsync();
  }, [])

  const randomizePhoto = () => {
    setIsBgPhoto(true)
    if (photoList.length > 0) {
      let random = photoList[Math.floor(Math.random() * photoList.length) - 1]
      setRandomPhoto(random);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      randomizePhoto()
    }, 6000)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MainPage>
        <div className="absolute -z-10 blur-sm bg-black/30 w-screen h-44">
          {
            photoList && randomPhoto &&
            <img key={randomPhoto.src} src={randomPhoto.src}
              onLoad={() => {
                setIsBgPhoto(false)
                setBgPhoto(randomPhoto.src)
                console.log('load')
              }}

              className={`${isBgPhoto ** 'hidden'} object-cover w-full h-full animate-[pulse_6s_infinite] transition-all duration-700`}
            />
          }
        </div>
        <div className="absolute -z-20 blur-sm  w-screen h-44">
          {
            isBgPhoto &&
            <img src={bgPhoto} alt="" className="object-cover w-full h-full animate-[pulse_6s_infinite]" />
          }
        </div>
        <div className="flex flex-col items-center mt-12">
          <h1 className=" text-4xl mb-2 font-semibold">Sapataria Paraná</h1>
          <h2 className="">Consertos e Reparos de Sapatos em Geral</h2>
        </div>
        <div className="flex flex-col bg-red-400/0 mt-20 w-full">
          <p className="my-14 self-center text-xl text-justify font-light">Bem-vindo à Sapataria Paraná, o local onde seus sapatos recebem cuidado especializado e atenção personalizada! Tenho o prazer de oferecer os seguintes serviços para garantir que seus calçados estejam sempre em ótimo estado:</p>
          <h3 className="w-1/2 m-auto my-5 py-2 text-4xl text-center border-b-2 border-b-orange-500">Reparo</h3>
          <div className="flex flex-col sm:flex-row gap-10 self-center">
            <img src="/images/fotos/MVIMG_20230616_114323.jpg" alt="Reparo" className="w-full sm:w-56 h-56 m-auto object-cover rounded-xl border border-orange-500" />
            <p className="text-justify self-center ">Seus sapatos favoritos estão desgastados ou danificados? Posso restaurá-los à sua antiga glória. Desde consertos de solas e saltos desgastados até problemas estruturais mais complexos, meu serviço de reparo visa prolongar a vida útil de seus sapatos, economizando seu tempo e dinheiro ao evitar a necessidade de substituí-los.</p>
          </div>
        </div>
        <div className="flex flex-col bg-red-400/0 mt-8 w-full">
          <h3 className="w-1/2 m-auto my-5 py-2 text-4xl text-center border-b-2 border-b-orange-500">Costura</h3>
          <div className="flex flex-col-reverse sm:flex-row gap-10 self-center">
            <p className="text-justify self-center">Pequenos problemas de costura podem se transformar em grandes incômodos para seus pés. Com minha destreza na costura, sou capaz de reparar costuras soltas ou danificadas, garantindo que seus sapatos permaneçam firmes e confortáveis durante todo o dia. Cada ponto é feito com atenção aos detalhes, cuidando de cada fio solto e assegurando a durabilidade de seus calçados.</p>
            <img src="/images/fotos/IMG_20230616_114017.jpg" alt="Reparo" className="w-full sm:w-56 h-56 m-auto object-cover rounded-xl border border-orange-500" />
          </div>
        </div>
        <div className="flex flex-col bg-red-400/0 mt-8 w-full">
          <h3 className="w-1/2 m-auto my-5 py-2 text-4xl text-center border-b-2 border-b-orange-500">Pintura</h3>
          <div className="flex flex-col sm:flex-row gap-10 self-center">
            <img src="/images/fotos/MVIMG_20230616_114041.jpg" alt="Reparo" className="w-full sm:w-56 h-56 m-auto object-cover rounded-xl border border-orange-500" />
            <p className="text-justify self-center ">Deseja dar uma nova vida aos seus sapatos? A pintura é a solução perfeita para você! Seja para renovar a cor desbotada de um par de sapatos de couro ou adicionar estilo e personalidade aos seus tênis, a pintura é uma opção versátil para transformar seus calçados. Utilizando técnicas de qualidade e tintas duráveis, proporciono um acabamento impecável que revitaliza seus sapatos e os torna únicos.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 self-center">
            <p className="mt-20 self-center text-justify text-xl font-light">Na Sapataria Paraná, meu compromisso é com a qualidade e a satisfação do cliente. Traga seus sapatos até mim e experimente os benefícios de meus serviços de reparo, costura e pintura. Cuido de seus calçados para que você possa caminhar com confiança e estilo. Entre em contato comigo hoje mesmo e deixe-me cuidar de seus sapatos!</p>
          </div>
        </div>
      </MainPage>
    </>
  )
}

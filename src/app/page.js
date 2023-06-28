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
        <div className="flex flex-col bg-red-400/0 mt-24 w-full">
          <h3 className="w-1/2 m-auto my-5 py-2 text-4xl text-center border-b-2 border-b-orange-500">Reparo</h3>
          <div className="flex flex-col sm:flex-row gap-10 self-center">
            <img src="/images/fotos/MVIMG_20230616_114323.jpg" alt="Reparo" className="w-full sm:w-56 h-56 m-auto object-cover rounded-xl border border-orange-500" />
            <p className="text-justify self-center ">O reparo nos sapatos renovam sua aparencia e durabilidade</p>
          </div>
        </div>
        <div className="flex flex-col bg-red-400/0 mt-24 w-full">
          <h3 className="w-1/2 m-auto my-5 py-2 text-4xl text-center border-b-2 border-b-orange-500">Costura</h3>
          <div className="flex flex-col sm:flex-row gap-10 self-center">
            <p className="text-justify self-center">A costura nos sapatos renovam sua aparencia e durabilidade</p>
            <img src="/images/fotos/IMG_20230616_114017.jpg" alt="Reparo" className="w-full sm:w-56 h-56 m-auto object-cover rounded-xl border border-orange-500" />
          </div>
        </div>
      </MainPage>
    </>
  )
}

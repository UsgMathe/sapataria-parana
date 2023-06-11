import Button from "../Button";

export default function Footer() {
  return (
    <>
      <div className="sm:flex flex-row justify-around w-full gap-10 bg-white p-10 text-slate-900">

        <div className="sm:mb-0 mb-10">
          <p className="text-xl font-semibold text-black mb-2">
            Contato
          </p>
          <p>(42) 3522-8950</p>
          <a href="tel:+55-42-3522-8950">

            <Button icon={<i className="fi fi-rr-phone-call"></i>}>Ligar</Button>
          </a>
        </div>

        <div className="sm:mb-0 mb-10" >
          <p className="text-xl font-semiboldi text-black mb-2">
            Endereço
          </p>
          <p>Rua Dom Pedro II, 703 - Centro</p>
          <p>União da Vitória - PR</p>
          <p>84600-295</p>
          <p>Brasil</p>
          <a href="https://www.google.com/maps/dir//Sapataria+Paran%C3%A1/data=!4m8!4m7!1m0!1m5!1m1!1s0x94e6614a381d6fff:0x19f365389a0ffa19!2m2!1d-51.0916639!2d-26.229326999999998">

            <Button icon={<i className="fi fi-rr-shoe-prints"></i>}>Ver Rotas</Button>
          </a>
        </div>

        <div className="sm:mb-0 mb-10">
          <p className="text-xl font-semiboldi text-black mb-2">
            Horário de funcionamento
          </p>
          <p>
            <span className="font-medium">Segunda:</span> 08:30 - 18:00</p>
          <p>
            <span className="font-medium">Terça:</span> 08:30 - 18:00</p>
          <p>
            <span className="font-medium">Quarta:</span> 08:30 - 18:00</p>
          <p>
            <span className="font-medium">Quinta:</span> 08:30 - 18:00</p>
          <p>
            <span className="font-medium">Sexta:</span> 08:30 - 18:00</p>
          <p>
            <span className="font-medium">Sábado:</span> 08:30 - 12:00</p>
          <p>
            <span className="font-medium">Domingo:</span> Fechado</p>
        </div>

      </div>
    </>
  )
}
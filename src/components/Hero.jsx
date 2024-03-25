const Hero = () => {
  return (
    <div  className="bg-cyan-400/80  lg:bg-[url('./images/main.jpeg')] bg-no-repeat bg-cover bg  w-full h-screen flex items-center justify-center flex-col text-white gap-4 ">
      <h1 className="uppercase text-2xl md:text-4xl lg:text-6xl font-bold">
        continue exploring
      </h1>
      <p className="text-center px-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum porro
        facilis doloribus voluptatibus id assumenda sequi nobis expedita
        architecto excepturi.
      </p>
      <a
        href="#"
        className="bg-white text-cyan-500 px-4 py-3 uppercase font-semibold md:text-xl "
      >
        explore tours
      </a>
    </div>
  )
}
export default Hero

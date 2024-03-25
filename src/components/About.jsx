import Heading from './Heading'
import aboutImg from '../images/about.jpeg'

const About = () => {
  return (
    <div className=" w-full mt-20 max-w-6xl mx-auto " id='about'>
      <Heading title="about" subTitle="us" />
      <div className="mt-16  flex flex-col md:flex-row gap-6 px-4 md:px-8  items-start">
        <img src={aboutImg} alt="about image" className="md:w-1/2 relative" />

        <div className="mt-8 flex-1">
          <h3 className="font-bold text-slate-500 text-xl md:text-3xl tracking-widest mb-4">
            Explore The Difference
          </h3>
          <p className="text-sm md:text-base text-slate-500 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p className="text-sm md:text-base text-slate-500 mt-3 mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a
            href="#home"
            className=" bg-cyan-600 text-white px-5 py-2 uppercase tracking-widest"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  )
}
export default About

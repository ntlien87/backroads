import { Heading } from '../components/'
import { services } from '../data'


const Services = () => {
  return (
    <div className="mt-20 bg-slate-100 py-16" id='services'>
      <Heading title="our" subTitle="services" />
      <div className=" flex flex-col md:flex-row gap-16 mt-20">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center gap-4">
            <div className="text-4xl text-cyan-800 bg-cyan-500 px-2 py-4">
              <i className={service.icon}></i>
            </div>

            <h3 className="capitalize tracking-widest font-bold text-slate-700">
              {service.title}
            </h3>
            <p className="text-sm text-slate-500 px-10 text-center">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Services

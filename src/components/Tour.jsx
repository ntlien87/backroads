/* eslint-disable react/prop-types */
const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <div className=" mt-16  bg-slate-100 pb-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500">
      <div className="w-full relative mb-4">
        <img src={image} alt={title} className="w-full" />
        <span className="absolute bottom-0 right-0 bg-cyan-400 text-white px-2 py-1">
          {date[0].toUpperCase() + date.slice(1)}
        </span>
      </div>
      <div className="px-4">
        <h3 className="font-bold tracking-widest text-lg mb-4 text-slate-700">
          {title}
        </h3>
        <p className="text-sm text-slate-500 mb-4">{info}</p>
        <div className="flex justify-between text-cyan-600">
          <p className="flex gap-2 items-center">
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            {location}
          </p>
          <p>{duration} Days</p>
          <p>From ${cost}</p>
        </div>
      </div>
    </div>
  )
}
export default Tour

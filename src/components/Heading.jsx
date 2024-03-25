/* eslint-disable react/prop-types */
const Heading = ({ title, subTitle }) => {
  return (
    <h1 className="gap-3 text-3xl lg:text-5xl font-bold uppercase text-slate-600 text-center tracking-widest">
      {title} <span className="text-cyan-600">{subTitle}</span>
    </h1>
  )
}
export default Heading

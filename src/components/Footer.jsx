import { PageLinks, SocialLinks } from '../components'

const Footer = () => {
  return (
    <div className="mt-20 bg-sky-900 text-white py-16 flex flex-col justify-center items-center gap-6">
      <PageLinks />
      <SocialLinks iconSize={'text-3xl'} />
      <div>
        <p className="tracking-widest">
          Copyright &copy; Backroads Travel Tours
        </p>
        <p className="tracking-widest">Company {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  )
}
export default Footer

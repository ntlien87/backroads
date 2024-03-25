import logo from '../images/logo.svg'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Header = () => {
  return (
    <header
      id="home"
      className="flex justify-between items-center py-6 px-4 md:px-8 2xl:px-40 fixed top-0 bg-white w-full z-50"
    >
      <img src={logo} alt="lo go" />
      <div className='hidden md:flex'>
        <PageLinks textColor='text-slate-500' />
      </div>
      <div className='hidden md:flex'>
        <SocialLinks iconColor={'text-cyan-600'} iconSize={'text-lg'} />
      </div>
    </header>
  )
}
export default Header

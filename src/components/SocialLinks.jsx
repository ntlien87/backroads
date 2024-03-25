/* eslint-disable react/prop-types */
import { socialLinks } from '../data'

const SocialLinks = ({iconColor, iconSize}) => {
  return (
    <div className={`flex gap-4 ${iconSize} ${iconColor} `}>
      {socialLinks.map((icon) => (
        <a href={icon.href} key={icon.id} className='hover:text-cyan-600 transition-colors'>
          <i className={icon.icon}></i>
        </a>
      ))}
    </div>
  )
}
export default SocialLinks

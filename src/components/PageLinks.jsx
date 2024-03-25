/* eslint-disable react/prop-types */

import { pageLinks } from '../data'


const PageLinks = ({textColor}) => {
  return (
    <div className={`flex gap-4 tracking-wider font-medium text-lg ${textColor}`} >
      {pageLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="hover:text-slate-700 transition-colors"
        >
          {link.text[0].toUpperCase() + link.text.slice(1)}
        </a>
      ))}
    </div>
  )
}
export default PageLinks

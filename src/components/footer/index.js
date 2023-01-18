import * as React from 'react'
import { menu, social } from '../../data/navbar'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Footer = () => {
    return(
        <div className="bg-gradient-to-b from-blue-400 via-indigo-600 to-indigo-900 p-8 rounded-t-md text-neutral-100">
            <div className="max-w-[1280px] mx-auto">
            <Link 
                to="/" 
                title="ReactNomad Application Architecture Solutions Home" 
                className="nav-logo headers text-4xl font-bold text-neutral-100 filter drop-shadow-md">
                <StaticImage
                    src="../../assets/images/react-nomad-logo.png"
                    alt="ReactNomad - Your #1 React Solutions Provider"
                    loading="lazy"
                    className="max-w-[60px]"
                    title="ReactNomad - Your #1 React Solutions Provider"
                />
                <span className="text-xl ml-2 grayscale">ReactNomad</span>
            </Link>
            <ul className="flex flex-col my-6 mx-2 w-full">
                {menu.map((item, i) => {
                    return (
                        <li key={i} className="flex my-2 w-full">
                            {item.link ?
                                <Link 
                                    className="w-full border-b border-indigo-400 pb-1 hover:font-semibold text-xl headers"
                                    to={item.link} 
                                    title={item.title}
                                >
                                    {item.title}
                                </Link>
                            :   
                                <div className="flex flex-col w-full">
                                    <span className="headers w-full border-b border-indigo-400 pb-1 hover:font-semibold text-xl mb-2">
                                        {item.title}
                                    </span>
                                    <ul className="w-full">
                                        {item.links.map((link, i) => {
                                            return(
                                                <li key={i}>
                                                    <Link
                                                    className="hover:font-semibold"
                                                        to={link.link}
                                                        title={link.title}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }
                        </li>
                    )
                })}
            </ul>
            <ul className="grid grid-flow-col gap-2 w-fit py-4 lg:py-0 text-2xl lg:text-xl">
                        {social.map((item, i) => {
                            return(
                                <li 
                                    key={i}
                                    className="nav-social-link w-fit hover:text-indigo-400"
                                >
                                    <a 
                                        href={item.link} title={item.title}
                                    >
                                        {item.icon}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
            </div>
        </div>
    )
}

export default Footer
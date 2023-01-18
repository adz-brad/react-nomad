import * as React from 'react'
import { Link } from 'gatsby'
import { menu, social } from '../../data/navbar'
import { StaticImage } from 'gatsby-plugin-image'
import { MdArrowDropDown } from 'react-icons/md'

const Navbar = () => {

    const [ dropdown, setDropdown ] = React.useState(null)
    const [ open, setOpen ] = React.useState(false)

    const openLink = () => {
        setDropdown(null)
        setOpen(null)
    }

    return(
        <nav className="navbar sticky top-0 p-4 z-50 bg-neutral-100 shadow-md rounded-b-lg h-[80px] w-full">
            <div className="flex flex-row items-center max-w-[1280px] mx-auto w-full">
            <Link 
                to="/" 
                title="ReactNomad Application Architecture Solutions Home" 
                className="nav-logo headers text-4xl font-bold text-indigo-700 filter drop-shadow-md">
                <StaticImage
                    src="../../assets/images/react-nomad-logo.png"
                    alt="ReactNomad Logo"
                    loading="eager"
                    className="max-w-[60px]"
                />
                <span className="text-xl ml-2 grayscale">ReactNomad</span>
            </Link>
            <button 
                className="lg:hidden relative ml-auto h-12 w-12"
                onClick={open ? () => setOpen(false) : () => setOpen(true)}
                name="Toggle Navigation Menu"
                title={open ? 'Toggle Menu Closed' : 'Toggle Menu Open'}
            >
                <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out filter drop-shadow-sm ${
                            open
                            ? "-translate-y-1/2 rotate-45 bg-indigo-900 w-8"
                            : "-translate-y-3 bg-indigo-600 w-10 md:w-12"
                        }`}
                    />
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 rounded-lg shadow-md transform transition duration-75 ease-in-out filter drop-shadow-sm ${
                            open ? "scale-0" : "bg-indigo-600 w-10 md:w-12"
                        }`}
                    />
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-1 rounded-lg shadow-md transform transition duration-150 ease-in-out filter drop-shadow-sm ${
                            open
                            ? "-translate-y-1/2 -rotate-45 bg-indigo-900 w-8"
                            : "translate-y-2 bg-indigo-600 w-10 md:w-12"
                        }`}
                    />
            </button>
            <div id="nav-overlay" className={`w-full lg:w-auto flex flex-col lg:flex-row absolute lg:flex-grow lg:relative top-[80px] lg:top-auto left-0 lg:left-auto bg-neutral-100 lg:overflow-visible ${open ? 'overflow-y-auto h-[calc(100vh-80px)]' : 'overflow-hidden h-0 lg:h-fit'}`}>
                <ul className="nav-menu grid grid-cols-1 lg:grid-flow-col lg:gap-16 mx-auto text-lg font-medium py-4 lg:py-0 w-full lg:w-auto">
                    {menu.map((item, i) => {
                        return(
                            <li 
                                key={i}
                                className="relative flex justify-center pb-1 my-1 mx-4 lg:mx-auto"
                            >
                                {item.link ?
                                    <Link 
                                        className="w-full hover:font-semibold hover:text-indigo-700 text-xl"
                                        to={item.link} 
                                        title={item.title}
                                        onClick={() => openLink()}
                                    >
                                        {item.title}
                                    </Link>
                                :
                                    <div className="relative flex flex-col w-full">
                                        <button
                                            title={item.title}
                                            className={`relative flex flex-row items-center w-full transition-all border-b-2 hover:font-semibold hover:text-indigo-700 text-xl ${dropdown === item && item.links ? 'border-indigo-700 font-semibold' : 'border-transparent'}`}
                                            onClick={dropdown === item ? () => setDropdown(null) : () => setDropdown(item)}
                                        >
                                        {item.title}
                                        <MdArrowDropDown 
                                            className={`ml-auto text-3xl lg:hidden transition-all ${dropdown === item ? 'rotate-180 text-indigo-600' : 'rotate-0 text-indigo-900'}`} 
                                        />
                                        </button>
                                        <div 
                                            className={`overflow-hidden transition-all rounded-xl lg:rounded-md bg-neutral-100 lg:fixed lg:top-[90px] lg:left-1/2 lg:-translate-x-1/2 max-w-[1280px] w-[calc(100vw-40px)] lg:shadow-lg lg:px-4 ${dropdown ? 'h-fit' : 'h-0 w-0'} `}
                                        >
                                            {dropdown === item ?
                                                <ul className="w-full z-50 bg-neutral-100 lg:py-2">
                                                    {item.links.map((link, i) => {
                                                        return(
                                                            
                                                            <li key={i} className="hover:font-semibold hover:text-indigo-700 py-1 border-b ">
                                                                <Link 
                                                                to={link.link} title={link.title}
                                                                className="flex flex-row items-center my-1 md:m-2 lg:rounded-md"
                                                                onClick={() => openLink()}
                                                                >     
                                                                    <div className="shadow-md bg-neutral-300/30 rounded-full p-2">
                                                                    {link.icon}
                                                                    </div>
                                                                    <div className="flex flex-col ml-4"> 
                                                                        {link.title}
                                                                        <span className="text-sm leading-5 text-neutral-600 font-normal">
                                                                            {link.description}
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            : null }
                                        </div>
                                    </div>
                                }

                            </li>
                        )
                    })}
                </ul>
                <div className="flex mt-auto mb-8 lg:my-auto lg:w-1/4">
                    <ul className="grid grid-flow-col gap-2 w-fit mx-auto lg:ml-auto lg:mr-0 py-4 lg:py-0 text-2xl lg:text-xl">
                        {social.map((item, i) => {
                            return(
                                <li 
                                    key={i}
                                    className="nav-social-link w-fit hover:text-indigo-700"
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
            </div>
        </nav>
    )
}

export default Navbar
import React from 'react'
import { 
    FaFacebookF, 
    FaInstagram, 
    FaTwitter,
    FaYoutube,
    FaLinkedinIn 
} from 'react-icons/fa'
import { 
    MdLightbulbOutline,
    MdOutlineTransform,
    MdOutlineManageAccounts,
    MdOutlineCases,
    MdOutlineQuestionAnswer,
    MdOutlineLibraryBooks,
    MdOutlineCloud
} from 'react-icons/md'
import {
    RiGuideLine
} from 'react-icons/ri'
import {
    IoInformation
} from 'react-icons/io5'

export const menu = [
    {
        title: "Solutions",
        link: null,
        links: [
            {
                title: "Digital Product Strategy",
                link: "/digital-product-strategy/",
                description: "ReactNomad makes application architecture easy. We use the latest in tech to help you design & deploy the perfect product.",
                icon: <RiGuideLine className="text-4xl w-8 h-8 text-indigo-900/70" />,
            },
            {
                title: "Digital Transformation",
                link: "/digital-transformations/",
                description: "Let ReactNomad guide your organization into the future with our digital transformation solutions.",
                icon: <MdOutlineTransform className="text-4xl w-8 h-8 text-indigo-900/70" />
            },
            {
                title: "Managed Digital Solutions",
                link: "/managed-digital-solutions/",
                description: "Save your time & money by making your problems ours. ReactNomad Managed Solutions are a stress-free solution for your team.",
                icon: <MdOutlineManageAccounts className="text-4xl w-8 h-8 text-indigo-900/70" />
            },
            {
                title: "Consulting Services",
                link: "/consulting-services/",
                description: "ReactNomad Consulting Services make it dead simple for you & your team to get the right answers on time, every time.",
                icon: <IoInformation className="text-4xl w-8 h-8 text-indigo-900/70" />
            },
        ],
    },
    {
        title: "Pricing",
        link: "/pricing/",
        links: null,
    },
    {
        title: "Resources",
        link: null,
        links: [
            {
                title: "Insights",
                description: "Learn about the latest in tech solutions by following the ReatNomad Insights blog.",
                link: "/insights-blog/",
                icon: <MdLightbulbOutline className="text-4xl w-8 h-8 text-indigo-900/70" />
            },
            {
                title: "Technology",
                description: "Curious about the best-in-breed technologies we use? Read all about them here.",
                link: "/technologies-we-use/",
                icon: <MdOutlineCloud className="text-4xl w-8 h-8 text-indigo-900/70" />
            },
            {
                title: "Documentation",
                description: "How-to guides for using ReactNomad products.",
                link: "/documentation/",
                icon: <MdOutlineLibraryBooks className="text-4xl w-8 h-8 text-indigo-900/70" />
            },
            {
                title: "FAQ",
                description: "Answering the important questions we often recieve about our services.",
                link: "/frequently-asked-questions/",
                icon: <MdOutlineQuestionAnswer className="text-4xl w-8 h-8 text-indigo-900/70" />
            },
            {
                title: "Case Studies",   
                description: "Examples of how we've helped past clients with amazing solutions.",
                link: "/case-studies/",
                icon: <MdOutlineCases className="text-4xl w-8 h-8 text-indigo-900/70" />
            },
        ],
    },
    {
        title: "Contact",
        link: "/contact/",
        links: null,
    }
]

export const social = [
    {
        title: "Facebook",
        link: "/",
        icon: <FaFacebookF className="" />
    },
    {
        title: "Instagram",
        link: "/",
        icon: <FaInstagram className="" />
    },
    {
        title: "Twitter",
        link: "/",
        icon: <FaTwitter className="" />
    },
    {
        title: "YouTube",
        link: "/",
        icon: <FaYoutube className="" />
    },
    {
        title: "LinkedIn",
        link: "/",
        icon: <FaLinkedinIn className="" />
    }
]
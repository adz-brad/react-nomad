import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import Page from "../components/page"
import HeroVideo from '../assets/video/go-hero-bg-video.mp4'
import { TypeAnimation } from 'react-type-animation'
import { solutions } from "../data/landing"
import NextSVG from '../assets/images/nextjs-logo.svg'
import AstroSVG from '../assets/images/astro-logo.svg'
import GatsbySVG from '../assets/images/gatsby-logo.svg'
import AppleSVG from '../assets/images/apple-logo.svg'
import AndroidSVG from '../assets/images/android-logo.svg'
import WindowsSVG from '../assets/images/windows-logo.svg'
import TwilioSVG from '../assets/images/twilio-logo.svg'
import HubspotSVG from '../assets/images/hubspot-logo.svg'
import SlackSVG from '../assets/images/slack-logo.svg'
import ShopifySVG from '../assets/images/shopify-logo.svg'
import HygraphPNG from '../assets/images/hygraph-logo.png'
import SanityPNG from '../assets/images/sanity-logo.png'
import ContentfulPNG from '../assets/images/contentful-logo.png'
import StrapiSVG from '../assets/images/strapi-logo.svg'
import AWSSVG from '../assets/images/aws-logo.svg'
import GCPSVG from '../assets/images/gcp-logo.svg'
import VercelSVG from '../assets/images/vercel-logo.svg'
import NetlifySVG from '../assets/images/netlify-logo.svg'
import Seo from '../components/seo'

const Landing = () => {

  return (

      <Page
        heading=""
      >
          <div className="hero-wrapper">
            <div className="hero-content">
            <StaticImage
              src="../assets/images/react-nomad-logo.png"
              alt="ReatNomad - React Web, Native & Hybrid Application Architecture Solutions"
              loading="eager"
              className="w-[calc(100%-80px)] w-[300px] mb-8 grayscale filter drop-shadow-md"
            />
              <span className="hero-caption">
                <TypeAnimation
                  sequence={[
                    'Web, Native & Hybrid App Architecture.', 1000,
                    'Custom API Integrations.', 1000,
                    'Bespoke React Solutions'
                  ]}
                  wrapper="div"
                  speed={60}
                  deletionSpeed={99}
                  cursor={true}
                  repeat={0}
                />
              </span>
            </div>
            <video 
                repeat="true" 
                loop 
                autoPlay 
                muted 
                preload="metadata"
                playsInline 
                className="hero-video"
            >
                <source 
                    src={HeroVideo} 
                    type="video/mp4" 
                    alt="ReactNomad - Hero Video"
                />
            </video>
        </div>
        <div className="landing-block">
          <h1 className="page-header py-8 text-center">
            Building With Enterprise Grade Technology
          </h1>
          <p className="text-lg">
          <strong>ReactNomad</strong> helps you leverage the latest in technological innovation by using the same building blocks that make up industry-leading, enterprise-grade platforms like:
          </p>
          <div className="logo-grid">
            <StaticImage
              src="../assets/images/netflix-logo.png"
              alt="Build With The Same Technology That Powers Netflix - ReactNomad Tech Solutions"
              loading="lazy"
              className="logo-grid-img"
              title="Build With The Same Technology That Powers Netflix"
            />
            <StaticImage
              src="../assets/images/airbnb-logo.png"
              alt="Build With The Same Technology That Powers Airbnb - ReactNomad Tech Solutions"
              loading="lazy"
              className="logo-grid-img"
              title="Build With The Same Technology That Powers Airbnb"
            />
            <StaticImage
              src="../assets/images/spotify-logo.png"
              alt="Build With The Same Technology That Powers Spotify - ReactNomad Tech Solutions"
              loading="lazy"
              className="logo-grid-img"
              title="Build With The Same Technology That Powers Spotify"
            />
            <StaticImage
              src="../assets/images/uber-logo.png"
              alt="Build With The Same Technology That Powers Uber - ReactNomad Tech Solutions"
              loading="lazy"
              className="logo-grid-img"
              title="Build With The Same Technology That Powers Uber"
            />
          </div>
          <p className="text-lg">
            ReactNomad helps you visualize and assemble the building blocks for technological success. Our solutions leverage the latest in technological innovations, from industry leading GraphQL and REST API's to language or device specific SDK's, to deliver <Link title="Optimize Site Performance - ReactNomad Tech Solutions" className="link" to="/high-performance-application-optimization/">total optimum performance</Link> for your project.
            </p>
            <p className="text-lg my-4">
            Whether you're in the design phase or require a complete re-optimization, <strong>ReactNomad has a solution for you.</strong>
            </p>
            
            <Link 
                      to="/contact/" 
                      className="flex flex-col w-full md:w-fit mx-auto mt-8"
                      title="Build With The Best - ReactNomad Tech Solutions"
                    >
                      <button
                        className="button mt-6 mb-2 hover:shadow-md w-full font-bold mt-6 text-lg md:text-3xl py-4 md:py-6 md:w-fit md:px-12"
                      >
                        Ready To Build With The Best?
                      </button>
                    </Link>
        </div>
        <div className="p-2 md:p-4 lg:py-8 xl:px-0">
          
            <h2 className="page-header py-8 text-center ">
              Tech Solutions That Work For You
            </h2>

          <ul className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutions.map((item, i) => {
              return(
                <li 
                  key={i}
                  className="flex flex-col shadow-md hover:shadow-lg text-indigo-900 hover:text-indigo-700 rounded-md"
                >
                  <div className="md:h-[300px] w-full rounded-t-xl overflow-hidden filter transition-all duration-300">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    className=" object-cover hover:scale-105 transition-all duration-300" 
                  />
                  </div>
                  <div className="flex flex-col grow p-2">
                    <h3 className="text-2xl font-bold p-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-900 my-auto p-2">
                      {item.content}
                    </p>
                    <Link 
                      to={item.link} 
                      className="mt-auto"
                      title={item.linkText}
                    >
                      <button className="lg:text-lg button mt-4 mb-2 hover:shadow-md w-full font-semibold py-4">
                        {item.linkText}
                      </button>
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="py-2 px-4 xl:px-0">
          <h2 className="page-header text-center my-4">
            The Leading Edge of Innovation
          </h2>
          <h3 className="my-2 text-lg text-center">
            <strong>The beauty is in the bricks</strong> - build bespoke solutions with best-in-breed technologies.
          </h3>
          <p className="my-4">
            As a forward-thinking solutions provider, we've carved out our existence on the cusp of technological advances and innovation. Modern web, device-native & hybrid application architecture are what we do (and we do them well), so it's time to launch a new website for your business or the coolest new app for your startup, you can rest easy knowing we've got your back!
          </p>
          <ul className="flex flex-col">
            <li className="my-8">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center">
            <div className="flex flex-col lg:w-1/2 my-4">
              <StaticImage
                src="../assets/images/application-design.png"
                className="w-full -translate-x-8 translate-y-6 overflow-hidden"
                loading="lazy"
                title="Website & Web App Development Solutions"
                alt="Website & Web App Development Solutions - ReactNomad Tech Solutions"
              />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <h4 className="font-bold text-center text-2xl">
                Website Development Solutions
                </h4>
              <div className="text-left text-lg">
                  <div className="flex flex-row items-center my-8">
                    <img 
                      src={GatsbySVG} 
                      alt="Gatsby Web Development - ReactNomad Tech Solutions" 
                      className="max-w-1/3 max-h-[120px] mx-auto"
                      title="Gatsby Web Development"
                      loading="lazy"
                    />
                    <img 
                      src={NextSVG} 
                      alt="NextJS Web Development - ReactNomad Tech Solutions" 
                      className="max-w-1/3 max-h-[120px] mx-auto pl-6"
                      title="NextJS Web Development"
                      loading="lazy"
                    />
                    <img 
                      src={AstroSVG} 
                      alt="Astro Web Development - ReactNomad Tech Solutions" 
                      className="max-w-1/3 max-h-[120px] mx-auto"
                      title="Astro Web Development"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-base my-2">
                    Ready to surf the next wave of web development innovation? Using Jamstack site generators like <strong title="GatsbyJS Web App Development">Gatsby</strong>, <strong title="NextJS Web App Development">NextJS</strong> and <strong title="Astro Web App Development - Build With React, Vue, Svelte + More">Astro</strong> in conjunction with MACH architecture solutions can improve site performance drastically compared to using existing monolithic options like Wordpress.
                  </p>
                  <p className="text-base my-2">
                    We develop solutions using a massive variety of site generators in conjunction with top-flight <strong title="API Integration Solutions">API's</strong>, <strong title="Headless CMS Integration">Headless CMS'</strong> and <strong title="Cloud & Microservice Infrastructure">Cloud-Native SaaS & Microservices</strong> to deliver the ultimate in web performance while improving both user experience and team efficiency.
                  </p>
                  <Link 
                      to="/web-development-solutions/" 
                      className="flex flex-col w-full md:w-fit mx-auto mt-8"
                      title="Web Development Solutions"
                    >
                      <button className="lg:text-lg button mt-4 mb-2 hover:shadow-md w-full font-semibold py-4 md:w-fit md:px-12">
                        Learn About Web Development Solutions
                      </button>
                    </Link>
              </div>
            </div>
            
          </div>
            </li>
            <li className="my-8">
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center">
            <div className="flex flex-col lg:w-1/2 my-4">
              <StaticImage
                src="../assets/images/application-devices.png"
                className="w-full lg:translate-x-4 translate-y-6 overflow-hidden"
                alt="Application Development Solutions - ReactNomad Tech Solutions"
                title="Application Development Solutions"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <h4 className="font-bold text-center text-2xl">
                Device-Native Application Solutions
                </h4>
              <div className="text-lg">
                  <div className="flex flex-row items-center my-8">
                    <img 
                      src={AppleSVG} 
                      alt="Apple / iOS App Development - ReactNomad Tech Solutions" 
                      title="Apple / iOS App Development"
                      loading="lazy"
                      className="max-w-1/3 max-h-[120px] ml-auto"
                    />
                    <img 
                      src={AndroidSVG} 
                      alt="Android App Development - ReactNomad Tech Solutions" 
                      title="Android App Development"
                      loading="lazy"
                      className="max-w-1/3 max-h-[120px] mx-auto "
                    />
                    <img 
                      src={WindowsSVG} 
                      alt="Windows Desktop App Development - ReactNomad Tech Solutions" 
                      title="Windows Desktop App Development"
                      loading="lazy"
                      className="max-w-1/3 max-h-[120px] mr-auto"
                    />
                  </div>
                  <p className="text-base my-2">
                    From <strong title="Mobile App Development">Mobile</strong> to <strong title="Desktop App Development">Desktop</strong>, ReactNomad guides you on your way to building enterprise-grade applications for your organization.
                  </p>
                  <p className="text-base my-2">
                    ReactNomad App Solutions extend class leading development frameworks to create <strong title="Native, Cross-Platform & Hybrid Applications">Native, Cross-Platform & Hybrid Applications</strong> that work for you. Our <strong title="Edge-to-Cloud Data Sync Technology">Edge-to-Cloud Data Sync</strong> technology allows your team to operate offline, syncing conflict-free data to the cloud when a network conenction is available. Need your data in real time? <strong title="Real Time Data Sync">Real Time Database Integrations</strong> allow data to be pushed direct to your UI as it's collected.
                  </p>
                  <Link 
                      to="/app-development-solutions/" 
                      className="flex flex-col w-full md:w-fit mx-auto mt-8"
                      title="App Development Solutions"
                    >
                      <button className="lg:text-lg button mt-4 mb-2 hover:shadow-md w-full font-semibold py-4 md:w-fit md:px-12">
                        Learn About App Development Solutions
                      </button>
                    </Link>
              </div>
            </div>
            
          </div>
            </li>
          </ul>
        </div>
        <div className="py-2 px-4 xl:px-0 my-8 lg:my-16">
          <h2 className="page-header text-center my-4">
            Bring Your Own SaaS
          </h2>
          <h3 className="my-2 text-lg text-center">
            Whichever <strong title="Software as a Service">SaaS</strong> (software as a service) solution you prefer, ReactNomad can integrate it within your project.
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-12">
                    <img 
                      src={SlackSVG} 
                      alt="Slack Integration - ReactNomad Tech Solutions" 
                      title="Slack API Integrations"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] mx-auto px-2"
                    />
                    <img 
                      src={TwilioSVG} 
                      alt="Twilio Integration - ReactNomad Tech Solutions" 
                      title="Twilio API Integrations"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] mx-auto px-2"
                    /> 
                    <img 
                      src={HubspotSVG} 
                      alt="Hubspot Integration - ReactNomad Tech Solutions" 
                      title="Hubspot API Integrations"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] mx-auto px-2"
                    />     
                    <img 
                      src={ShopifySVG} 
                      alt="Shopify Integration - ReactNomad Tech Solutions" 
                      title="Shopify API Integrations"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] mx-auto px-2"
                    />
          </div>
          <div className="flex flex-col">
            <p className="my-2">
              Don't get pigeon-holed into using only the services your developer already knows - if you have a preferred SaaS solution, ReactNomad can integrate it within both new and existing project architectures. We build custom integrations for <strong title="Digital Asset Management Integrations">Digital Asset Management Platforms</strong>, <strong title="eCommerce & Marketing Integrations">eCommerce & Marketing Tools</strong>, <strong title="Authentication & Application Security Integrations">Authentication & Application Security Solutions</strong>, <strong title="Analytics Monitoring Integrations">Analytics Monitoring</strong> and more.
            </p>
            <p className="my-2">
              Not sure which SaaS to use? <strong title="SaaS, API & SDK Integration Consultations">Application Architecture is our expertise.</strong> ReactNomad can help you identify which services are optimal for your project based on your own unique needs.
            </p>
          </div>
          <Link 
                      to="/saas-api-integrations/" 
                      className="flex flex-col w-full md:w-fit mx-auto mt-8"
                      title="SaaS API & SDK Integration Solutions"
                    >
                      <button className="lg:text-lg button mt-4 mb-2 hover:shadow-md w-full font-semibold py-4 md:w-fit md:px-12">
                        Learn More About SaaS Integrations
                      </button>
                    </Link>
        </div>
        <div className="py-2 px-4 xl:px-0 my-8 lg:my-16">
          <h2 className="page-header text-center my-4">
            Your Content. Your Way.
          </h2>
          <h3 className="my-2 text-lg text-center">
            <strong title="Content Management Solutions">Content is king</strong> - ReactNomad helps you manage it accordingly.
          </h3>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-8">
                  <img 
                      src={ContentfulPNG} 
                      alt="Contentful CMS Integration - ReactNomad Tech Solutions" 
                      title="Contentful CMS Integration"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] m-auto px-2"
                    />
                    <img 
                      src={HygraphPNG} 
                      alt="Hygraph CMS Integration - ReactNomad Tech Solutions" 
                      title="Hygraph CMS Integration"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] m-auto px-2"
                    />
                    <img 
                      src={StrapiSVG} 
                      alt="Strapi CMS Integration - ReactNomad Tech Solutions" 
                      title="Strapi CMS Integration"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] m-auto px-2"
                    />
                   <img 
                      src={SanityPNG} 
                      alt="Sanity CMS Integration - ReactNomad Tech Solutions" 
                      title="Sanity CMS Integration"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] m-auto px-2"
                    />
            </div>
            
              <p className="py-2">
                Not all <strong title="Headless, API-Driven Content Management Systems">content management systems (CMS)</strong> are created equally. Choosing the right platform to manage your digital assets allows your team to efficiently collaborate on projects and build high quality digital experiences.
              </p>
              <p className="py-2">
                It's up to you - ReactNomad builds integrations with your choice of CMS including top-rated headless CMS platforms like <strong title="Contentful CMS Integration">Contentful</strong>, <strong title="Strapi CMS Integration">Strapi</strong>, <strong title="Hygraph CMS Integration">Hygraph</strong>, & <strong title="Sanity CMS Integration">Sanity</strong>. If your content already has a home and you're looking to transition to a new frontend UI solution, ReactNomad can build a custom API integration with your existing CMS.
              </p>
                <Link 
                    to="/headless-cms-integrations/" 
                    className="flex flex-col w-full md:w-fit mx-auto mt-8"
                    title="Content Management Solutions"
                  >
                    <button className="lg:text-lg button mt-4 mb-2 hover:shadow-md w-full font-semibold py-4 md:w-fit md:px-12">
                      Learn More About Content Management
                    </button>
                </Link>
          </div>
        </div>
        <div className="py-2 px-4 xl:px-0 my-8 lg:my-16">
          <h2 className="page-header text-center my-4">
            Fast, Secure & Reliable Deployment
          </h2>
          <h3 className="my-2 text-lg text-center">
            Whether it's on the edge or in the cloud, deliver your content with the same platforms <strong title="Fast, Secure & Reliable Content Delivery">trusted by leading digital innovators</strong> across the globe.
          </h3>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-8">
            <img 
                      src={GCPSVG} 
                      alt="Google Cloud Platform Deployment - ReactNomad Tech Solutions" 
                      title="Google Cloud Platform Deployment"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] m-auto px-2"
                    />
                  <img 
                      src={VercelSVG} 
                      alt="Vercel CDN Deployment - ReactNomad Tech Solutions" 
                      title="Vercel CDN Deployment"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] m-auto px-2"
                    />
                    <img 
                      src={NetlifySVG} 
                      alt="Netlify CDN Deployment - ReactNomad Tech Solutions" 
                      title="Netlify CDN Deployment"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] m-auto px-2"
                    />
                    
                   <img 
                      src={AWSSVG} 
                      alt="AWS CloudFront Deployment - ReactNomad Tech Solutions" 
                      title="AWS CloudFront Deployment"
                      loading="lazy"
                      className="h-[40px] md:h-[80px] m-auto px-2"
                    />
            </div>
              <p className="py-2">
                There are countless ways to get your project online, but you deserve the best. ReactNomad excels in deploying to the same <strong title="Content Delivery Network (CDN) Deployment">content delivery network</strong> providers used by worldwide industry leaders to ensure your content renders with blazing-fast speed while keeping sensitive data safe. But wait, there's more - ReactNomad can help you streamline future deployments with <strong title="Continuous Integration & Continuous Deployment (CI/CD) Setup">continuous integration & deployment (CI/CD)</strong> options, helping your teams stay efficient.
              </p>
                <Link 
                    to="/cdn-deployment-hosting-solutions/" 
                    className="flex flex-col w-full md:w-fit mx-auto mt-8"
                    title="Project Deployment Solutions"
                  >
                    <button className="lg:text-lg button mt-4 mb-2 hover:shadow-md w-full font-semibold py-4 md:w-fit md:px-12">
                      Learn More About Project Deployment
                    </button>
                </Link>
          
          </div>
        </div>
        <div className="p-4 md:p-8 my-16 shadow-lg mx-2">
          <h2 className="page-header text-center my-2">
            Ready To Get Started?
          </h2>
          <p className="my-8 text-center">
            <strong title="ReactNomad - Your #1 React Development Solutions Provider">ReactNomad is your #1 React development solutions provider</strong>. Get in touch with us today to start making your tech dreams come true!
          </p>
          <Link 
                    to="/contact/" 
                    className="flex flex-col w-full md:w-fit mx-auto"
                    title="Contact ReactNomad To Get Started Today!"
                  >
                    <button className="text-xl button mt-4 mb-2 hover:shadow-md w-full font-semibold py-4 md:w-fit md:px-12">
                      Contact ReactNomad Today
                    </button>
                </Link>
                
        </div>
      </Page>
      
  )

}

export default Landing

export const Head = ({ location }) => {
    return (
        <Seo
        title=""
        description=""
        image=""
        url={`https://www.reactnomad.tech${location.pathname}`}
        keywords=""
    />
    )
}
import * as React from 'react'
import Navbar from './src/components/navbar'
import Layout from './src/components/layout'
import Footer from './src/components/footer'
import './src/styles/global.css'

export const wrapPageElement = ({ element }) => {
    return (
        <>
            <Navbar />
            <Layout>
                {element}
            </Layout>
            <Footer />
        </>
    )
}
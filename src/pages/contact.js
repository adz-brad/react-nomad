import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const Contact = () => {
    return (
        <Page
            heading="Contact Us"
            caption=""
        >
        </Page>
    )
}

export default Contact

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
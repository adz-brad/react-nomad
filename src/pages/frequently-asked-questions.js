import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const FAQ = () => {
    return (
        <Page
            heading="Frequently Asked Questions"
            caption=""
        >
        </Page>
    )
}

export default FAQ

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
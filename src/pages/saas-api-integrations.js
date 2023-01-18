import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const Integrations = () => {
    return (
        <Page
            heading="Custom SaaS & API Integrations"
            caption=""
        >
        </Page>
    )
}

export default Integrations

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
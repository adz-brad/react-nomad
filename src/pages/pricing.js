import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const Pricing = () => {
    return (
        <Page
            heading="Pricing"
            caption=""
        >
        </Page>
    )
}

export default Pricing

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
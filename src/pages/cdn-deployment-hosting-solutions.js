import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const Deployment = () => {
    return (
        <Page
            heading="Website & App Deployment"
            caption=""
        >
        </Page>
    )
}

export default Deployment

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
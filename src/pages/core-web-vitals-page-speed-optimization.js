import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const PageSpeed = () => {
    return (
        <Page
            heading="Web Page Optimization"
            caption=""
        >
        </Page>
    )
}

export default PageSpeed

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
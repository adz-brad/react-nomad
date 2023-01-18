import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const HeadlessCms = () => {
    return (
        <Page
            heading="Headless CMS Integrations"
            caption=""
        >
        </Page>
    )
}

export default HeadlessCms

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
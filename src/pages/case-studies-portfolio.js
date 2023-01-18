import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const CaseStudies = () => {
    return (
        <Page
            heading="Case Studies"
            caption=""
        >
        </Page>
    )
}

export default CaseStudies

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
import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const PerformanceOptimization = () => {
    return (
        <Page
            heading="Total Optimum Performance"
            caption=""
        >
        </Page>
    )
}

export default PerformanceOptimization

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
import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const DigitalTransformations = () => {
    return (
        <Page
            heading="Digital Transformations"
            caption=""
        >
        </Page>
    )
}

export default DigitalTransformations

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
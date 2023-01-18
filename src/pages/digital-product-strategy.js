import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const DigitalProductStrategy = () => {
    return (
        <Page
            heading="Digital Product Strategy"
            caption=""
        >
        </Page>
    )
}

export default DigitalProductStrategy

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
import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const Technologies = () => {
    return (
        <Page
            heading="Technologies We Use"
            caption=""
        >
        </Page>
    )
}

export default Technologies

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
import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const Documentation = () => {
    return (
        <Page
            heading="Documentation"
            caption=""
        >
        </Page>
    )
}

export default Documentation

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
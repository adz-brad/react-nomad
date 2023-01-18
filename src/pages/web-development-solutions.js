import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const WebDevelopment = () => {
    return (
        <Page
            heading="Web Development Solutions"
            caption=""
        >
        </Page>
    )
}

export default WebDevelopment

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
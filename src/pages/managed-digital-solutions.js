import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const ManagedSolutions = () => {
    return (
        <Page
            heading="Managed Digital Solutions"
            caption=""
        >
        </Page>
    )
}

export default ManagedSolutions

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
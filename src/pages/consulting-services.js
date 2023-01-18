import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const ConsultingServices = () => {
    return (
        <Page
            heading="Consulting Services"
            caption=""
        >
        </Page>
    )
}

export default ConsultingServices

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
import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const Blog = () => {
    return (
        <Page
            heading="Insights"
            caption=""
        >
        </Page>
    )
}

export default Blog

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
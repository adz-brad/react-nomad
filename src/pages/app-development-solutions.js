import * as React from 'react'
import Page from '../components/page'
import Seo from '../components/seo'

const AppDevelopment = () => {
    return (
        <Page
            heading="App Development Solutions"
            caption="Build Enterprise-Grade Applications With React Native"
        >
            <div>

            </div>
        </Page>
    )
}

export default AppDevelopment

export const Head = ({ location }) => {
    return (
        <Seo
            title="React Native App Development"
            description="ReactNomad builds enterprise-grade device-native applications using React Native. Build you app today with same modern framework powering platforms like Airbnb and Instagram."
            image=""
            url={`https://www.reactnomad.tech${location.pathname}`}
            keywords=""
        />
    )
}
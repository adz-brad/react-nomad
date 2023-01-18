import * as React from 'react'

const Page = ({ children, heading, caption, seo }) => {
    return (
        <div className="page-wrapper">
            {heading ?
                <h1 className="page-header mt-8 text-center">
                    {heading}
                </h1>
            : null }
            {caption ?
                <h2 className="text-center text-lg font-semibold mb-16">
                    {caption}
                </h2>
            : null }
            {children}
        </div>
    )
}

export default Page
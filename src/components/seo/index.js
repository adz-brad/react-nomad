import * as React from 'react'

const Seo = ({
        title,
        description,
        image,
        url,
        keywords
    }) => {

    return (
        <>
            <title>{title}</title>
            <meta property="og:site_name" content="ReactNomad Digital Solutions"/>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />
        </>
    )
}

export default Seo
import React from "react"
import ContentLoader from "react-content-loader"
import './Loader.css'

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={744}
        height={124}
        viewBox="0 0 744 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#6396fd"
        {...props}
    >
        <rect x="74" y="64" rx="3" ry="3" width="543" height="30" />
        <circle cx="43" cy="79" r="20" />
    </ContentLoader>
)

export default MyLoader
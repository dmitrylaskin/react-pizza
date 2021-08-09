import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className={'pizza-block'}
        speed={2}
        width={280}
        height={486}
        viewBox="0 0 280 486"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="133" cy="130" r="130" />
        <rect x="0" y="282" rx="3" ry="3" width="280" height="24" />
        <rect x="0" y="325" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="444" rx="6" ry="6" width="70" height="30" />
        <rect x="126" y="431" rx="30" ry="30" width="150" height="54" />
    </ContentLoader>
)

export default MyLoader
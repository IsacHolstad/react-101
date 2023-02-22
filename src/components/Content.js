function Content(props) {
    const buttonStyling = {
        width: props.width,
        textDecoration: props.textDecoration,
        color: props.color,
        height: props.height,

    }
    return (
        <div>
            <ul>
                <h3>Do you like frontend?</h3>
                <a style={buttonStyling} href={"https://www.google.com/search?q=react+library&sxsrf=AJOqlzWI3FIDO5EbyMohhEeoDt1cDeGR-w%3A1677098560859&ei=QH72Y8yUNNGSrgS-hJ2YDw&ved=0ahUKEwjMtOT__qn9AhVRiYsKHT5CB_MQ4dUDCA4&uact=5&oq=react+library&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywE6CggAEEcQ1gQQsAM6BwgAELADEEM6DQguEMcBENEDELADEEM6BAgjECc6CQgAEBYQHhDxBDoGCAAQFhAeOgsIABCABBCxAxCDAUoECEEYAFCWBFipN2CWOGgBcAF4AIABUogB6guSAQIyM5gBAKABAcgBCsABAQ&sclient=gws-wiz-serp"}>Click
                    Here</a>
                <p>React has been designed from the start for gradual adoption, and you can use as little or as much
                    React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML
                    page, or start a complex React-powered app, the links in this section will help you get started.
                </p>
            </ul>
        </div>

    )
}

export default Content
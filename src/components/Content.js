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
                <a style={buttonStyling} href={"https://parade.com/.image/t_share/MTkwNTgxMTA1NDAxOTk2NDEz/laughing-horse.jpg"}>Click
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
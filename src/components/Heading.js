function Heading(props) {
    const HeadingStyle = {
        color: props.color,
        textAlign: props.textAlign,
    }
    return (
        <h1 style={HeadingStyle}>Hello i am {props.name}</h1>

    )
}

export default Heading
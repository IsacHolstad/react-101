function Heading(props) {
    const HeadingStyle = {
        color: props.color,
    }
    return(
        <h1 style={HeadingStyle}>Hello i am {props.name}</h1>

    )
}
export default Heading
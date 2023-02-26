function ReactText(props) {
    const quoteText = {
        color: props.color,
        textAlign: props.textAlign
    }
    return (
        <q style={quoteText}>
            It's used for building interactive user interfaces and web applications quickly and efficiently with
            significantly less code than you would with vanilla JavaScript. In React, you develop your applications by
            creating reusable components that you can think of as independent Lego blocks.</q>
    );
}
export default ReactText
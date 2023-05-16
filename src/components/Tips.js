
const Tips = (props) => {
    const hStyle = {
        color: "grey",
        fontSize: "18px",
        fontWeight: "500"
    }
    const pStyle = {
        fontSize: "25px",
        fontWeight: "600"
    }
    return (
        <div className="tips">
            <p style={hStyle}>{props.head}</p>
            <h3 style={pStyle}>{props.body}</h3>
        </div>
    )
}

export default Tips

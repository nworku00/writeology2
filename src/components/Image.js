import back from "../writeology-html-css-lab/digital-management.jpg";
const Image = (props) => {
    const imgStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${back})`,
        // backgroundImage: `url(${back})`,
        backgroundPostion: "center",
        backgroundSize: "cover",
        height: "350px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    };
    return (
        <div className="img" style={imgStyle}>
            
        </div>
    )
}

export default Image 
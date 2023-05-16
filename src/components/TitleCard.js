import back from "../writeology-html-css-lab/digital-management.jpg";
import Author from "./Author";
const TitleCard = (props) => {
    const imgStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${back})`,
        // backgroundImage: `url(${back})`,
        backgroundPostion: "center",
        backgroundSize: "cover",
        height: "380px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        marginTop: "30px"
    };
    const textStyle = {
        marginLeft:"30px"
        
    }
    const tipStyle = {
        fontWeight: "600",
        marginBottom: "40px",
    };
    const spanStyle = {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "10px",
    };

    const fiveStyle = {
        color: "white",
        marginBottom: "40px",
        fontWeight: "700",
        fontSize:"21px",
    };
    
    return (
        <div className="titleCard" style={imgStyle}>
            <div className="whiteText" style= {textStyle}>
                <div className="tips" style={tipStyle}>
                    <span style={spanStyle}>TIPS</span>
                </div>
                <div className="five" style={fiveStyle}>
                5 ways to improve your digital project management
                </div>
                <Author />
            </div>
        </div>
    );
};
export default TitleCard;

import PFP from "./PFP"
const Author = (props) => {
    const style = {
        
            display: "flex",
            color: "white",
            marginBottom: "40px",
            fontSize: "15px",
            fontWeight: "700",
            alignItems:"center",
        
    }
    return (
            <div className="bro" style={style}>
                <PFP />
                John Q React
                <PFP/>
                June 16, 2022
                </div>
    )
}
export default Author
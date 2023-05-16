import logo from "../writeology-html-css-lab/writeology-logo.svg"

const Header = (props) => {
    const style = {
        display: "flex",
        justifyContent: "space-between",
        fontWeight: "700",
    }
    return (
        <div className ="Header" style={style}>
            <img src={logo} alt="logo" width="150px"/>
            <div className="headMenu">
                <p>Cart(0) Account Menu</p>
            </div>
        </div>
    )
}


export default Header
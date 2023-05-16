import Tips from "./Tips";
import Line from "./Line";
const TipSection = () => {
    const style = {
        marginTop: "30px",
        marginBottom:"30px"
    };
    return (
        <div className="tipSection" style = {style}>
            <Tips head="Tips" body = "How to choose the best management software" />
            <Line />
            <Tips head="Tips" body ="3 tips to avoid Internet distractions at work"/>
            <Line />
            <Tips head="Resources" body ="7 great productivity apps for your new iPad"/>
        </div>
    );
};

export default TipSection;

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Line from "./components/Line";
import TitleCard from "./components/TitleCard";
import TipSection from "./components/TipSection";
import ArticleSection from "./components/ArticleSection";
function App() {
    return (
        <div className="App">
            <Header />
            <Line />
            <TitleCard />
            <TipSection />
            <ArticleSection />
        </div>
    );
}

export default App;

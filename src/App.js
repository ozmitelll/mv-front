import './App.css';
import WelcomeBlock from "./pages/WelcomeBlock";
import TradeBlock from "./pages/TradeBlock";
import ManualBlock from "./pages/ManualBlock";
import FaqBlock from "./pages/FaqBlock";
import CourseBlock from "./pages/CourseBlock";
import Footer from "./components/Footer";
import RoadmapBlock from "./pages/RoadmapBlock";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-main w-screen overflow-hidden">
            <WelcomeBlock/>
            <TradeBlock/>
            <RoadmapBlock currentStage={2}/>
            <ManualBlock/>
            <FaqBlock/>
            <CourseBlock/>
            <Footer/>
        </div>
    );
}

export default App;

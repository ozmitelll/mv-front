import WelcomeBlock from "./WelcomeBlock";
import TradeBlock from "./TradeBlock";
import RoadmapBlock from "./RoadmapBlock";
import ManualBlock from "./ManualBlock";
import FaqBlock from "./FaqBlock";
import CourseBlock from "./CourseBlock";
import Footer from "../components/Footer";
import {useEffect} from "react";

const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const handleBeforeUnload = () => {
            window.scrollTo(0, 0);
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    return (
        <div>
            <WelcomeBlock/>
            <TradeBlock/>
            <RoadmapBlock currentStage={3}/>
            <ManualBlock/>
            <FaqBlock/>
            <CourseBlock/>
            <Footer/>
        </div>
    )
}
export default Landing
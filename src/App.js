import './App.css';
import Header from "./components/Header";
import WelcomeBlock from "./pages/WelcomeBlock";
import TradeBlock from "./pages/TradeBlock";
import ManualBlock from "./pages/ManualBlock";
import FaqBlock from "./pages/FaqBlock";
import CourseBlock from "./pages/CourseBlock";
import Footer from "./pages/Footer";

function App() {
    return (
        <div className="bg-main h-screen w-full overflow-x-hidden">
            <WelcomeBlock/>
            <TradeBlock/>
            <ManualBlock/>
            <FaqBlock/>
            <CourseBlock/>
            <Footer/>
        </div>
    );
}

export default App;

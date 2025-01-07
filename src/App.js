import './App.css';
import {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from "./pages/Landing";
import Policy from "./pages/Policy";
function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-main w-screen overflow-hidden">
            <Router>
                <Switch>
                    <Route path={'/policy'} component={Policy}/>
                    <Route path={'/'} component={Landing}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

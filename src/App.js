import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from "./pages/Landing";
import Policy from "./pages/Policy";
import RiskWarning from "./pages/RiskWarning";
import AntiLauderingPolicy from "./pages/AntiLauderingPolicy";
import TermsOfService from "./pages/TermsOfService";
function App() {

    return (
        <div className="bg-main w-screen overflow-hidden">
            <Router>
                <Switch>
                    <Route path={'/policy'} component={Policy}/>
                    <Route path={'/terms'} component={TermsOfService}/>
                    <Route path={'/kyc-aml'} component={AntiLauderingPolicy}/>
                    <Route path={'/risks'} component={RiskWarning}/>
                    <Route path={'/'} exact component={Landing}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

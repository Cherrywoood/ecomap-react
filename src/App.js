import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";
import Header from "./components/Header/Header";
import "./App.css"

const App = () => {
    return (

        <div className="app-container max-w-screen-2xl mx-auto">
            <BrowserRouter>
                <Header/>
                <Router/>
            </BrowserRouter>
        </div>
    )
}

export default App;
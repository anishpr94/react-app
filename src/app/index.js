import React from "react"
import { render } from "react-dom"
import { Root } from "./components/Root";
import { CardParent } from "./components/CardParent";
import { NewUser } from "./components/NewUser";
import { Route, BrowserRouter, Switch, IndexRoute } from "react-router-dom"
import { HomeParent } from "./components/HomeParent";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter >
                <div>
                    <Route path={"/"} component={Root} />
                    <Route exact path="/" component={HomeParent}/>
                    <Route path={"/card"} component={CardParent} />
                    <Route path={"/new"} component={NewUser} />
                </div>
            </BrowserRouter>
        );

    }
}

render(<App />, window.document.getElementById("app"))
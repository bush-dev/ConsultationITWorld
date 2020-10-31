import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";
import ReviewContainer from "../containers/ReviewContainer";

class Routes extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route exact path="/review" component={ReviewContainer} />
                </Switch>
            </div>
        )
    }
}

export default Routes;
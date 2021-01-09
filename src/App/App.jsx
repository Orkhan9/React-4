import React from 'react';
import {Link, BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import AboutDetails from "../About/AboutDetails";
import NotFound from "../NotFound";
import Button from "@material-ui/core/Button"
import {ButtonGroup} from "@material-ui/core";
import classes from "./App.module.css";
import NavigationItems from "../navigation/NavigationItems/NavigationItems"
import PrimarySearchAppBar from "../Hok/Layout/PrimarySearchAppBar";

const App = () => {
    return (
        <div className={classes.App}>
            <PrimarySearchAppBar/>
            <div>
                <NavigationItems/>
            </div>
            <ButtonGroup>
                <Button variant="contained" color="primary">
                    save
                </Button>
                <Button variant="contained" color="secondary">
                    delete
                </Button>
            </ButtonGroup>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Redirect path="/home" to="/"/>
                    <Route path="/about" component={About} />
                    <Route path="/about/:id" component={AboutDetails} />
                    <Route path="*" component={NotFound} />
                </Switch>
        </div>
    );
};

export default App;
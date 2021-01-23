import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import {IconButton, Typography, Container, Grid} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import StoryCards from "./StoryCard/StoryCard.Component";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Reader from "./StoryReader/StoryReader.Component";
import React from "react";

function App() {
    return (
        <div className="App">
            <AppBar position="static">
                <ToolBar color="black">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h4">
                        News Aggregator
                    </Typography>
                </ToolBar>
            </AppBar>
            <Container className="Header" disableGutters={true}>
                <h1>Header</h1>
            </Container>

            <Router>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Link to="/132313123">
                            <StoryCards/>
                        </Link>
                    </Grid>

                    <Grid item xs={4}>
                        <Link to="/3243434223">
                            <StoryCards/>
                        </Link>
                    </Grid>

                    <Grid item xs={4}>
                        <Link to="/13879879793">
                            <StoryCards/>
                        </Link>
                    </Grid>
                </Grid>

                <Switch>
                    <Route exact path="/:id" component={Reader}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

// Include React
import React, {Component} from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home'
import Chat from './Chat'
import Info from './Info'

// Create the Main component
class Main extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="jumbotron">
                            <h1>React Router</h1>
                            <p><em>Because we can't afford to miss a minute of this video! #flylikeaneagle</em></p>
                            <div className="row">
                                <div className="text-center">
                                    <iframe
                                        width="640"
                                        height="360"
                                        src="https://www.youtube.com/embed/K1lKk5IU4ZE?rel=0&amp;controls=0&amp;showinfo=0"
                                    >
                                    </iframe>
                                </div>
                            </div>

                            <div>
                                <Link to="/">
                                    <button className="btn btn-default">Home</button>
                                </Link>
                                <Link to="/info">
                                    <button className="btn btn-default">Info</button>
                                </Link>
                                <Link to="/chat">
                                    <button className="btn btn-default">Comments</button>
                                </Link>
                            </div>
                        </div>
                        <div className="container">

                            <Route exact path="/" component={Home}/>
                            <Route path="/info" component={Info}/>
                            <Route path="/chat" component={Chat}/>

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

// Export the component back for use in other files
export default Main;

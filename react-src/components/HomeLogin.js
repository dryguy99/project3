// Include React
import React from "react"
// Here we include all of the sub-components

// Creating the Main component
class Home extends React.Component {

    constructor(props) {
        super(props);
        // Here we set a generic state associated with the number of clicks
        // Note how we added in this history state variable

    }

    // The moment the page renders get the History

    // If the component changes (i.e. if a search is entered)...

    // Here we render the function
    render() {
        return (
            <div className="container">
              <div className="jumbotron text-center">
                  <h1><span className="fa fa-lock"></span> Node Authentication</h1>
                  <h1> REACT HOME </h1>
                  <p>Login or Register with:</p>

                  <a href="/login" className="btn btn-default"><span className="fa fa-user"></span> Local Login</a>
                  <a href="/signup" className="btn btn-default"><span className="fa fa-user"></span> Local Signup</a>
                  <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
                  <a href="/auth/twitter" className="btn btn-info"><span className="fa fa-twitter"></span> Twitter</a>
                  <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>

              </div>

            </div>
        );
    }
}

// Export the component back for use in other files
export default Home;

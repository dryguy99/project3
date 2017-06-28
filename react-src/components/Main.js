// Include React
import React from "react"
// Here we include all of the sub-components

// Creating the Main component
class Main extends React.Component {

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
              {this.props.children}

            </div>
        );
    }
}

// Export the component back for use in other files
export default Main;

// Include React
import React from "react"
// Here we include all of the sub-components

// Creating the Main component
class Login extends React.Component {

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
          <div class="container">

            <div class="col-sm-6 col-sm-offset-3">

              <h1><span class="fa fa-sign-in"></span> Login</h1>

              <!-- show any messages that come back with authentication -->
              <% if (message.length > 0) { %>
                  <div class="alert alert-danger"><%= message %></div>
              <% } %>

              <!-- LOGIN FORM -->
              <form action="/login" method="post">
                  <div class="form-group">
                      <label>Email</label>
                      <input type="text" class="form-control" name="email"/>
                  </div>
                  <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" name="password"/>
                  </div>

                  <button type="submit" class="btn btn-warning btn-lg">Login</button>
              </form>

              <hr/>

              <p>Need an account? <a href="/signup">Signup</a></p>
              <p>Or go <a href="/">home</a>.</p>

          </div>

        </div>

      );
  }
}

// Export the component back for use in other files
export default Login;

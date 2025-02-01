
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }
  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">About Us</h1>
    
      {/* Logged-in User with Corn Gradient */}
      <div className="text-center">
        <p className="text-lg font-medium">LoggedIn User:</p>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#FDEFC4] via-[#F8CB46] to-[#936E00] text-transparent bg-clip-text">
              {loggedInUser}
            </h1>
          )}
        </UserContext.Consumer>
      </div>
    
      <UserClass name={"First"} location={"Dehradun Class"} />
    </div>
    
    
    );
  }
}

export default About;
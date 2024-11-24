import { Component } from "react";
import eyeIcon from "../assets/svg/eyeIcon.svg";
class UserLogin extends Component {
  handleEmailChange = () => {
    console.log("Yalnız .ru domenlərinə icazə verilir.");
  };
  handlePasswordChange = () => {
    console.log("Ən azı 8 simvol");
  };
  render() {
    return (
      <div className="login">
        <div className="email">
          <input
            onMouseDown={this.handleEmailChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <input
            onMouseDown={this.handlePasswordChange}
            type="password"
            placeholder="Password"
          />
          <img className="icon" src={eyeIcon} alt="" />
        </div>
        <button className="login-button">Login</button>
      </div>
    );
  }
}

export default UserLogin;

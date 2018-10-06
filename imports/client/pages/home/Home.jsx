import React, {Component} from 'react';
import "../../../ui/scss/index.scss";
import Login from '../users/Login';
import Register from '../users/Register'
//import bell from "../../../images/alarm.png";
class Home extends Component {
    render() {
        return (
           <div className="container">
                <div className="NavBar">
                    <div className="NavBar__logo">
                        <p>donut<sup>TM</sup></p>
                    </div>
                    <div className="NavBar__notification">
                        <div className="NavBar__notification__icon">
                            <img src="../../../ui/images/alarm.png" alt="Aixic " height="42" width="42" />
                        </div>
                    </div>
                </div>
                <div className="Auth">
                    <div className="Login">
                        <Login />
                    </div>
                    <div className="Register">
                        <Register />
                    </div>
                </div>
           </div>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

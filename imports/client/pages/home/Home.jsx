import React, {Component} from 'react';
import "../../../ui/scss/index.scss";
import Login from '../users/Login';
import Register from '../users/Register'
import DonutsCreate from '../donuts/DonutsCreate';
import DonutArticle from './donutarticle';
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
                <div className="pub__container">
                    <div className="text__container">
                        <h1>Best donut in the city!</h1>
                        <p>Dispatched entreaties boisterous say why stimulated. Certain forbade picture 
                            now prevent carried she get see sitting. Up twenty limits as months. Inhabit 
                            so perhaps of in to certain.
                        </p>
                    </div>
                    <div className="articles">
                        <DonutArticle />
                    </div>
                </div>
                <div className="AddingProduct">
                    <div className="ProductAdd">
                        <h1>Add a donut</h1>
                        <p>don't take to long</p>
                        <DonutsCreate />
                    </div>

                </div>
           </div>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

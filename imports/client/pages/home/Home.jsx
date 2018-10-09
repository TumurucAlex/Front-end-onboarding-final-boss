import React, {Component} from 'react';
import "../../../ui/scss/index.scss";
import Login from '../users/Login';
import Register from '../users/Register'
import DonutsCreate from '../donuts/DonutsCreate';
import DonutArticle from './donutarticle';
import DonutsList from '../donuts/DonutsList';
import DonutsContainer from '../donuts/DonutsContainer';
import Footer from './footer';
import DonutsEdit from '../donuts/DonutsEdit';


class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            visibility:true
        }
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    handleVisibility(){
        this.setState({
            visibility: !this.state.visibility
        })
    }
    render() {
        return (
           <div className="container">
                <div className="NavBar">
                    <div className="NavBar__logo">
                        <p>donut<sup>TM</sup></p>
                    </div>
                    <div className="NavBar__notification">
                        <div className="NavBar__notification__icon">
                            <img src="./images/bell.png"  />
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
                        <img src="./images/arrow.png" />
                    </div>
                </div>
                    <div className="articles">
                        <DonutArticle />
                    </div>
               
                <div className="AddingProduct">
                    <div className="separator">
                    </div>
                    <div className="ProductAdd">
                        <h1>Add a donut</h1>
                        <p>don't take to long</p>
                        <DonutsCreate />
                    </div>
                </div>
                <div className={this.state.visibility ? ("noneDisplay") : ("editProduct") }>
                    
                            <DonutsEdit 
                                visibility={this.state.visibility}
                                handleVisibility={this.handleVisibility}
                                />

                  
                </div>
                
                <div className="donuts__list">
                    <DonutsList 
                        visibility={this.handleVisibility}
                        />
                   <DonutsContainer />
                </div>
                <div className="footer__container">
                    <Footer />
                </div>
                
           </div>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

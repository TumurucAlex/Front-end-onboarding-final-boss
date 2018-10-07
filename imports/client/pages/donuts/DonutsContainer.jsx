import React from 'react';
export default class DonutContainer extends React.Component{
   render(){
       return(
            <div className="donuts__box">
                <div className="donuts__item">
                    <img src="./images/donut1.png" />
                    <div className="donuts__title">
                        <h1>Aladins Hlumin</h1>
                        <p>10.09.2099</p>
                    </div>
                    <div className="donuts__specification">
                        <div className="donuts__price">
                            <div className="subsection"> 
                                <p>370</p> 
                                <img src="./images/coin.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="donuts__item">
                    <img src="./images/donuts2.png" />
                    <div className="donuts__title">
                        <h1>Coli Moron</h1>
                        <p>10.09.2099</p>
                    </div>
                    <div className="donuts__specification">
                        <div className="donuts__price">
                            <div className="subsection"> 
                                <p>370</p> 
                                <img src="./images/coin.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="donuts__item">
                    <img src="./images/donuts3.png" />
                    <div className="donuts__title">
                        <h1>Jem Stern</h1>
                        <p>10.09.2099</p>
                    </div>
                    <div className="donuts__specification">
                        <div className="donuts__price">
                            <div className="subsection"> 
                                <p>370</p> 
                                <img src="./images/coin.png" />
                            </div>
                            <div className="editing__elements">
                                <img src="./images/edit.png" />
                                <img src="./images/garbage.png" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
       );
   }
}
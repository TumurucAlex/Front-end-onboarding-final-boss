import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer__row">
                <div className="footer">
                    <div className="first__section">
                    <h1>Don’t forget to
                        call for a donut
                        or subscribe!</h1>
                    </div>
                    <div className="second__section">
                        <p>+ 008 045 0477 045</p>
                        <input type="text/email" placeholder="Email" />
                        <button type="submit"> Subscribe </button>
                    </div>
                </div>
                <div className="copyright__section">
                    <p>donut<sup>TM</sup></p>
                </div>
            </div>
        );

    }
}
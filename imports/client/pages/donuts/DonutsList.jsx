import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Donuts} from '/imports/db';

class DonutsList extends React.Component {
    constructor() {
        super();
        this.removeDonut = this.removeDonut.bind(this);
        this.editDonut = this.editDonut.bind(this);
    }

    isDonutOwner = (donut) => {
        return donut.userId === Meteor.userId()
    };

    editDonut = (_id) => {
        FlowRouter.go('donuts.edit', {_id: _id});
    };

    removeDonut = (_id) => {
        Meteor.call('donut.remove', _id);
    };

    render() {
        const {isLoading, donuts} = this.props;

        if (isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                {
                    donuts.map(donut => {
                        return (
                            <div className="donuts__list__container" key={donut._id}>
                                <div className="donuts__image">
                                    <img src="./images/donut1.png" />
                                </div>
                                    <div className="donuts__specs">
                                    <div className="donuts__name">
                                        <h1>{donut.name}</h1>
                                        <p>10.09.2099</p>
                                    </div>
                                    <div className="donuts__edit__section">
                                        <div className="donuts__price">
                                           <div className="subsection"> <p>{donut.price}</p> <img src="./images/coin.png" /></div>
                                        </div>
                                        {/* <p>Is Comestible? : {donut.isComestible ? 'Yes' : 'No'}</p> */}
                                        <div className="edit__section">
                                            {this.isDonutOwner(donut) &&
                                            <a href=""
                                             //onClick={() => this.editDonut(donut._id)}
                                             onClick={this.props.visibility}
                                             ><img src="./images/edit.png" /></a>}
                                        </div>
                                        <div className="delete__section">
                                            {this.isDonutOwner(donut) &&
                                            <a href="" onClick={() => this.removeDonut(donut._id)}><img src="./images/garbage.png" /></a>}
                                        </div>  
                                    </div>  
                                </div>                            
                            </div>
                        )
                    })
                }
                {/* <a href="" onClick={() => FlowRouter.go('donuts.create')}>Create a donut</a> */}
            </div>
        )
    }
}

export default withTracker(() => {
    const handle = Meteor.subscribe('donuts');

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
})(DonutsList);


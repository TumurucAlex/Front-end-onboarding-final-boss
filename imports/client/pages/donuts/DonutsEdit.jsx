import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';
import "./edit.css";

export default class DonutsEdit extends React.Component {
    constructor() {
        super();
        this.donutId = FlowRouter.current().params._id;
        this.state = {
            donut: null,
            loading: true
        }
    }

    componentDidMount() {
        Meteor.call('donut.find', this.donutId, (err, donut) => {
            this.setState({
                donut,
                loading: false
            })
        })
    }


    onSubmit = (data) => {
        Meteor.call('donut.edit', this.donutId, data, (err) => {
            if (!err) {
                FlowRouter.go('home');
            }
        });
    };

    render() {
        const {loading, donut} = this.state;
        if (loading) {
            return <div>Loading...</div>
        }
        return (
            <main className="edit__popup">
                <div className="editBox">
                <h1> Edit the donut you want</h1>
                <p>will take a few seconds</p>
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit} model={donut}>
                   
                    <div className="name__input">
                        <AutoField name="name"/>
                        <ErrorField name="name"/>
                    </div>
                     <div className="price__input">
                        <AutoField name="price"/>
                        <ErrorField name="price"/>
                    </div>
                    
                    <div className="comestible__input">
                        <AutoField name="isComestible"/>
                        <ErrorField name="isComestible"/>
                    </div>

                    <button type="submit" 
                    //onClick={this.props.handleVisibility}
                    >
                        Edit donut
                    </button>
                </AutoForm>
                
                </div>
            </main>
        )
    }
}
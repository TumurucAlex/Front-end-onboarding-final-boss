import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';

export default class DonutsCreate extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        Meteor.call('donut.create', data, (err) => {
            if(!err) {
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        return (
            <main>
                <div className="donuts">
                    <div className="donuts__container">
                        <img src="../../../../public/images/donut1.png" />
                    </div>
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit}>
                <div className="comestible__input">
                    <AutoField name="isComestible"/>
                    <ErrorField name="isComestible"/>
                    </div>
                    
                    <div className="name__input">
                    <AutoField name="name"/>
                    <ErrorField name="name"/>
                    </div>
                     <div className="price__input">
                    <AutoField name="price"/>
                    <ErrorField name="price"/>
                    </div>
                    
                    <button type="submit">
                        Create
                    </button>
                </AutoForm>
                </div>
            </main>
        )
    }
}
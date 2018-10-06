import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Login extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <main className="cc-main">
                <p className="title__container">donut<sup>Login</sup></p>
                <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                    <AutoField className="email" name="email"/>
                    <ErrorField name="email"/>

                    <AutoField className="password" name="password" type="password"/>
                    <ErrorField name="password"/>
                    <div className="login__section">
                    <div className="prop__section">
                    <p>Forgot my password !</p>
                    </div>
                    <button className="login__button"type="submit">
                        Login
                    </button>
                   
                    </div>
                </AutoForm>
            </main>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;
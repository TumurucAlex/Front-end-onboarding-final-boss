import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Register extends React.Component {
    constructor() {
        super();

    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <main className="cc-main">
            <p className="title__container">donut<sup>Register</sup></p>
                <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit}>
                    <AutoField className="email" name="email"/>
                    <ErrorField name="email"/>

                    <AutoField  className="password" name="password" type="password"/>
                    <ErrorField name="password"/>

                    <AutoField className="cpassword" name="confirm_password" type="password"/>
                    <ErrorField name="confirm_password"/>

                    <button  type="submit">
                        Sign Up
                    </button>
                </AutoForm>
            </main>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;
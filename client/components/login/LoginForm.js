import React from 'react';
import validateInput from '../../../server/validations/login';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {
                identifier: '',
                password: ''
            },
            isDisabledButtonLogin: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getClassName = this.getClassName.bind(this);
    }

    getClassName(field) {
        return "form-control" +
            (this.state.errors[field].length > 0
                ?
                " is-invalid"
                :
                ""
            );
    }

    onSubmit(e) {

        e.preventDefault();

        const {errors, isValid} = validateInput('allForm', this.state);

        if (isValid) {

            this.setState({
                errors: {
                    identifier: '',
                    password: ''
                },
                isDisabledButtonLogin: true
            });

        } else
            this.setState({
                errors: errors,
                isDisabledButtonLogin: false
            });

    }

    onChange(e) {

        let state = {};
        let isDisabledButtonLogin = false;
        Object.assign(state, this.state);
        state[e.target.name] = e.target.value;

        const {errors, isValid} = validateInput(e.target.name, state);

        if (isValid) {
            state.errors[e.target.name] = '';
        } else {
            state.errors[e.target.name] = errors[e.target.name];
        }

        for (let key in state.errors) {
            if (state.errors[key].length > 0)
                isDisabledButtonLogin = true;
        }

        this.setState({
            errors: state.errors,
            isDisabledButtonLogin: isDisabledButtonLogin,
            [e.target.name]: e.target.value
        });
    }

    render() {

        const {errors, isDisabledButtonLogin} = this.state;

        return (
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className={this.getClassName("identifier")}
                        name="identifier"
                        placeholder="Username"
                        onChange={this.onChange}/>
                    <div className="invalid-feedback">
                        {errors["identifier"]}
                    </div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className={this.getClassName("password")}
                        name="password"
                        placeholder="Password"
                        onChange={this.onChange}/>
                    <div className="invalid-feedback">
                        {errors["password"]}
                    </div>
                </div>


                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isDisabledButtonLogin}>Submit
                </button>

            </form>
        )

    }
}

export default LoginForm;
import Validation from 'react-validation';
import React, {Component, PropTypes} from 'react';

Object.assign(Validation.rules, {
    // Key name maps the rule 
    required: {
        // Function to validate value 
        // NOTE: value might be a number -> force to string 
        rule: value => {
            return value.toString().trim();
        },
        // Function to return hint 
        // You may use current value to inject it in some way to the hint 
        hint: value => {
            return <span className='form-error is-visible'>Required</span>
        }
    },
    email: {
        // Example usage with external 'validator' 
        rule: value => {
            return validator.isEmail(value);
        },
        hint: value => {
            return <span className='form-error is-visible'>{value} isnt an Email.</span>
        }
    },
    // This example shows a way to handle common task - compare two fields for equality 
    password: {
        // rule function can accept argument: 
        // components - components registered to Form mapped by name 
        rule: (value, components) => {
            const password = components.password.state;
            const passwordConfirm = components.passwordConfirm.state;
            const isBothUsed = password
                && passwordConfirm
                && password.isUsed
                && passwordConfirm.isUsed;
            const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;
 
            if (!isBothUsed || !isBothChanged) {
                return true;
            }
 
            return password.value === passwordConfirm.value;
        },
        hint: () => <span className="form-error is-visible">Passwords should be equal.</span>
    },
    // Define API rule to show hint after API error response 
    api: {
        // We don't need the rule here because we will call the 'showError' method by hand on API error 
        hint: value => (
            <button
                className="form-error is-visible"
            >
                API Error on "{value}" value. Focus to hide.
            </button>
        )
    }
});

export default class Comment extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
 
        // Emulate async API call 
        setTimeout(() => {
            // NOTE: 'api' should be defined on 'extend' step 
            this.form.showError('username', 'api');
        }, 1000);
    };
 
    removeApiError = () => {
        this.form.hideError('username');
    };
 
    render() {
        return <Validation.components.Form ref={c => { this.form = c }} onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
                <div className="small-12 columns">
                    <h3>Leave a comment</h3>
                </div>
            </div>
            <div className="row">
                <div className="small-12 medium-4 columns">
                    <label>
                        <Validation.components.Input
                          onFocus={this.removeApiError}
                          placeholder="username"
                          type="text"
                          errorClassName="is-invalid-input"
                          containerClassName=""
                          value="Username"
                          name="username"
                          validations={['required', 'alpha']}
                        />
                    </label>
                </div>
                <div className="small-12 medium-8 columns">
                    <label>
                        <Validation.components.Textarea
                          placeholder="Leave your comment..."
                          errorClassName="is-invalid-input"
                          containerClassName=""
                          value="Comment"
                          name="comment"
                          validations={['required']}
                        />
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="small-12 medium-6 columns">
                    <Validation.components.Button className="button">Submit</Validation.components.Button>
                </div>
            </div>
        </Validation.components.Form>
    }
}

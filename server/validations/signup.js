
const  isEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export default function validateInput(validField, data) {
    let errors = data.errors;
    let isValid = true;

    if (['allForm', 'username'].indexOf(validField) >= 0 &&
        data.username.length == 0)
    {
        errors.username = 'This field is required';
        isValid = false;
    }

    if (['allForm', 'username'].indexOf(validField) >= 0 &&
        data.username.length < 3)
    {
        errors.username = 'length 2 or more symbol';
        isValid = false;
    }

    if (['allForm', 'username'].indexOf(validField) >= 0 &&
        data.username.length > 15)
    {
        errors.username = 'length not more then 14 symbol';
        isValid = false;
    }

    if (['allForm', 'email'].indexOf(validField) >= 0 &&
        data.email.length == 0)
    {
        errors.email = 'This field is required';
        isValid = false;
    }
    if (['allForm', 'email'].indexOf(validField) >= 0 &&
        !isEmail(data.email))
    {
        errors.email = 'Email is invalid';
        isValid = false;
    }


    if (['allForm', 'password'].indexOf(validField) >= 0 &&
        data.password.length == 0)
    {
        errors.password = 'This field is required';
        isValid = false;
    }

    if (['allForm', 'passwordConfirmation'].indexOf(validField) >= 0 &&
        data.passwordConfirmation.length == 0)
    {
        errors.passwordConfirmation = 'This field is required';
        isValid = false;
    }

    if (['allForm'].indexOf(validField) >= 0 &&
        data.passwordConfirmation !== data.password)
    {
        errors.passwordConfirmation = 'Passwords must match';
        isValid = false;
    }

    return {
        errors,
        isValid: isValid
    };
}

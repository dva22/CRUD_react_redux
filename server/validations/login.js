import validator1 from 'validator';


export default function validateInput(validField, data) {
    let errors = data.errors;
    let isValid = true;

    if (['allForm', 'identifier'].indexOf(validField) >= 0 &&
        validator.isEmpty(data.identifier))
    {
        errors.identifier = 'This field is required';
        isValid = false;
    }

    if (['allForm', 'identifier'].indexOf(validField) >= 0 &&
        data.identifier.length < 3)
    {
        errors.identifier = 'length 2 or more symbol';
        isValid = false;
    }

    if (['allForm', 'identifier'].indexOf(validField) >= 0 &&
        data.identifier.length > 15)
    {
        errors.identifier = 'length not more then 14 symbol';
        isValid = false;
    }

    if (['allForm', 'password'].indexOf(validField) >= 0 &&
        validator.isEmpty(data.password))
    {
        errors.password = 'This field is required';
        isValid = false;
    }

    return {
        errors,
        isValid: isValid
    };
}

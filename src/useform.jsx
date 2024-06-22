import { useState, useEffect } from 'react';

export function useForm(initialValues, validate,setsubmission,setsubmittedValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        // Validate only touched fields
        const validationErrors = Object.keys(touched).reduce((acc, key) => {
            const error = validate({ ...values, [key]: values[key] })[key];
            if (error) {
                acc[key] = error;
            }
            return acc;
        }, {});
        setErrors(validationErrors);
    }, [values, touched]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({
            ...values,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleBlur = (e) => {
       
        const { name } = e.target;
        console.log(name)
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    const handleSubmit = (e, callback) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setTouched(
            Object.keys(values).reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {})
        );
        if (Object.keys(validationErrors).length === 0) {
            callback();
            console.log("values",values)
            setsubmittedValues(values); 
            setValues(initialValues); 
        }
        setsubmission(true)
    };


    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}

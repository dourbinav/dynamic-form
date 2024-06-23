import { useState, useEffect } from 'react';


export function useForm2(initialValues, validate,) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [submission,setsubmission]=useState(false)

    useEffect(() => {
        const validationErrors = Object.keys(touched).reduce((acc, key) => {
            const error = validate({ ...values, [key]: values[key] })[key];
            if (error) {
                acc[key] = error;
            }
            return acc;
        }, {});
        setErrors(validationErrors);
    }, [values, touched,validate]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log( name, value, type, checked,"handlechange" )
        setValues({
            ...values,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setTouched(
            Object.keys(values).reduce((acc, key) => {
                console.log("acc",acc,"key",key)
                acc[key] = true;
                return acc;
            }, {})
        );
        console.log("validation error",validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            console.log(values) 
        }
        setsubmission(true)
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setsubmission(false);
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        submission,
        setsubmission,
        resetForm
    };
}


import { useState, useEffect } from 'react';


export function useForm(initialValues, Validate,setsubmission,setsubmittedValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});


    useEffect(() => {
        const validationErrors = Object.keys(touched).reduce((acc, key) => {
            const error = Validate({ ...values, [key]: values[key] })[key];
            if (error) {
                acc[key] = error;
            }
            return acc;
        }, {});
        setErrors(validationErrors);
    }, [values, touched,Validate]);

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
        const validationErrors = Validate(values);
        setErrors(validationErrors);
        setTouched(
            Object.keys(values).reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {})
        );
        console.log(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            console.log("values")
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


export function useForm3(initialValues, Validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});


    useEffect(() => {
        const validationErrors = Object.keys(touched).reduce((acc, key) => {
            const error = Validate({ ...values, [key]: values[key] })[key];
            if (error) {
                acc[key] = error;
            }
            return acc;
        }, {});
        setErrors(validationErrors);
    }, [values, touched,Validate]);

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
        const validationErrors = Validate(values);
        setErrors(validationErrors);
        setTouched(
            Object.keys(values).reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {})
        );
        if (Object.keys(validationErrors).length === 0) {
            
            console.log("values")
        }
        
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
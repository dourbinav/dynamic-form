import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../src/useform'; 
import Validate from "../src/Validate";


export default function Level1() {
    const [Guest, setGuest] = useState(false);
    const [submission, setsubmission] = useState(false);
    const [submittedValues, setsubmittedValues] = useState({});


    const initialValues = {
        name: '',
        email: '',
        age: '',
        guestName: '',
        Guest: false,
    };

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useForm(initialValues, Validate, setsubmission, setsubmittedValues);

    const handleClick = () => {
        setGuest(!Guest);
    };

    const submitForm = () => {
    };
   


    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center bg-gray-100'>
            <form onSubmit={(e) => handleSubmit(e, submitForm)} className='bg-indigo-300 p-8 shadow-lg rounded-md md:w-1/3'>
                {
                    submission && (
                        <div className='bg-yellow-400 p-4 rounded-md text-center'>
                            <h1 className='text-2xl font-semibold'>Submission Successful</h1>
                            <div className='mt-4'>
                                <p><span className='font-bold'>Name:</span> {submittedValues.name}</p>
                                <p><span className='font-bold'>Email:</span> {submittedValues.email}</p>
                                <p><span className='font-bold'>Age:</span> {submittedValues.age}</p>
                                <p><span className='font-bold'>Coming with Guest:</span> {submittedValues.Guest ? 'Yes' : 'No'}</p>
                                {submittedValues.Guest && (
                                    <p><span className='font-bold'>Guest Name:</span> {submittedValues.guestName}</p>
                                )}
                            </div>
                            <button className='bg-green-500 text-white mt-4 px-4 py-2 rounded-md' type='reset' onClick={() => setsubmission(!submission)}>Agree</button>
                        </div>
                    )
                }

                {!submission && (
                    <div className='space-y-4'>
                        <div>
                            <label className='block text-gray-700'>Name</label>
                            <input className='rounded-sm w-full p-2 border border-gray-300' type="text" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange} required />
                            {touched.name && errors.name && <span className='text-red-500'>{errors.name}</span>}
                        </div>
                        <div>
                            <label className='block text-gray-700'>Email</label>
                            <input className='rounded-sm w-full p-2 border border-gray-300' type="email" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} required />
                            {touched.email && errors.email && <span className='text-red-500'>{errors.email}</span>}
                        </div>
                        <div>
                            <label className='block text-gray-700'>Age</label>
                            <input className='rounded-sm w-full p-2 border border-gray-300' type='number' name='age' onBlur={handleBlur} value={values.age} onChange={handleChange} min={0} max={100} required />
                            {touched.age && errors.age && <span className='text-red-500'>{errors.age}</span>}
                        </div>
                        <div>
                            <input type="checkbox" name="Guest" onBlur={handleBlur} checked={values.Guest} onChange={handleChange} onClick={handleClick} />
                            <label className='ml-2 text-gray-700'>Are you coming with Guest?</label>
                            {Guest && (
                                <div className='mt-2'>
                                    <label className='block text-gray-700'>Guest Name</label>
                                    <input className='rounded-sm w-full p-2 border border-gray-300' type='text' name='guestName' onBlur={handleBlur} value={values.guestName} onChange={handleChange} required />
                                    {touched.guestName && errors.guestName && <span className='text-red-500'>{errors.guestName}</span>}
                                </div>
                            )}
                        </div>
                        <div className='text-center'>
                            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Submit</button>
                        </div>
                    </div>
                )}
            </form><br />

            <div className='flex '>
           <Link to="/level2"> <button className='bg-indigo-400 text-white p-2'>Level2</button></Link>
           <Link to="/level3"> <button className='bg-indigo-400 text-white p-2' >Level3</button></Link>
            </div>
        </div>
    );
}

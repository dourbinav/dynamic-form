import React from 'react';
import { Link } from 'react-router-dom';
import { useForm3 } from '../src/useform';
import { Validate3 } from '../src/Validate'; // Ensure the correct path

export default function Level3() {
    const initialValues = {
        name: "",
        email: "",
        survey: "",
        exercise: "",
        diet: "",
        education: "",
        study: "",
        feedback: "",
        technology: "",
        phone: "",
        url: ""
    };

    const { values, handleChange, handleSubmit, touched, errors, handleBlur, submission, resetForm } = useForm3({ initialValues, validate: Validate3 });

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center bg-gray-100'>
            {submission ? (
                <div className="bg-yellow-400 p-8 rounded-md text-center">
                    <h1 className="text-2xl font-semibold">Submission Successful</h1>
                    <div className="mt-4 text-left">
                        <p><span className="font-bold">Name:</span> {values.name}</p>
                        <p><span className="font-bold">Email:</span> {values.email}</p>
                        <p><span className="font-bold">Survey Topic:</span> {values.survey}</p>
                        {values.survey === 'technology' && (
                            <p><span className="font-bold">Technology:</span> {values.technology}</p>
                        )}
                        {values.survey === 'health' && (
                            <>
                                <p><span className="font-bold">Exercise:</span> {values.exercise}</p>
                                <p><span className="font-bold">Diet:</span> {values.diet}</p>
                            </>
                        )}
                        {values.survey === 'education' && (
                            <p><span className="font-bold">Education:</span> {values.education}</p>
                        )}
                        <p><span className="font-bold">Field of study:</span> {values.study}</p>
                        <p><span className="font-bold">Feedback:</span> {values.feedback}</p>
                    </div>
                    <button
                        className="bg-green-500 text-white mt-4 px-4 py-2 rounded-md"
                        onClick={resetForm}
                    >
                        Agree
                    </button>
                </div>
            ) : (
                <form className='bg-white p-6 space-y-4 shadow-lg rounded-md w-full max-w-md' onSubmit={handleSubmit}>
                    <div>
                        <label className='block text-gray-700'>Enter your name:</label>
                        <input className='rounded-sm w-full p-2 border border-gray-300' type="text" id="name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name || ""} />
                        {touched.name && errors.name && <p className='text-red-500'>{errors.name}</p>}
                    </div>
                    <div>
                        <label className='block text-gray-700'>Email:</label>
                        <input className='rounded-sm w-full p-2 border border-gray-300' type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email || ""} />
                        {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
                    </div>
                    <div>
                        <label className='block text-gray-700'>Survey Topic:</label>
                        <select className='rounded-sm w-full p-2 border border-gray-300' name='survey' onChange={handleChange} onBlur={handleBlur} value={values.survey || ""}>
                            <option value="" disabled>Topics</option>
                            <option value="technology">Technology</option>
                            <option value="health">Health</option>
                            <option value="education">Education</option>
                        </select>
                        {touched.survey && errors.survey && <p className='text-red-500'>{errors.survey}</p>}
                    </div>

                    {values.survey === 'technology' && (
                        <div>
                            <label className='block text-gray-700'>Skills:</label>
                            <select className='rounded-sm w-full p-2 border border-gray-300' name="technology" onChange={handleChange} onBlur={handleBlur} value={values.technology || ""}>
                                <option value="" disabled>Technology</option>
                                <option value="javascript">Javascript</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="C#">C#</option>
                            </select>
                            {touched.technology && errors.technology && <p className='text-red-500'>{errors.technology}</p>}
                        </div>
                    )}

                    {values.survey === 'health' && (
                        <div>
                            <label className='block text-gray-700'>Exercise:</label>
                            <select className='rounded-sm w-full p-2 border border-gray-300' name="exercise" onChange={handleChange} onBlur={handleBlur} value={values.exercise || ""}>
                                <option value="" disabled>Exercise</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="rarely">Rarely</option>
                            </select>
                            {touched.exercise && errors.exercise && <p className='text-red-500'>{errors.exercise}</p>}

                            <label className='block text-gray-700'>Diet:</label>
                            <select className='rounded-sm w-full p-2 border border-gray-300' name="diet" onChange={handleChange} onBlur={handleBlur} value={values.diet || ""}>
                                <option value="" disabled>Diet</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="vegan">Vegan</option>
                                <option value="non-vegetarian">Non-Vegetarian</option>
                            </select>
                            {touched.diet && errors.diet && <p className='text-red-500'>{errors.diet}</p>}
                        </div>
                    )}

                    {values.survey === 'education' && (
                        <div>
                            <label className='block text-gray-700'>Highest Qualification:</label>
                            <select className='rounded-sm w-full p-2 border border-gray-300' name="education" onChange={handleChange} onBlur={handleBlur} value={values.education || ""}>
                                <option value="" disabled>Education</option>
                                <option value="highschool">High School</option>
                                <option value="bachelor">Bachelor's</option>
                                <option value="master">Master's</option>
                                <option value="phd">PhD</option>
                            </select>
                            {touched.education && errors.education && <p className='text-red-500'>{errors.education}</p>}
                        </div>
                    )}

                    <div>
                        <label className='block text-gray-700'>Field of study:</label>
                        <input className='rounded-sm w-full p-2 border border-gray-300' type='text' name="study" onChange={handleChange} onBlur={handleBlur} value={values.study || ""} />
                        {touched.study && errors.study && <p className='text-red-500'>{errors.study}</p>}
                    </div>
                    <div>
                        <label className='block text-gray-700'>Feedback:</label>
                        <textarea className='rounded-sm w-full p-2 border border-gray-300' name="feedback" onChange={handleChange} onBlur={handleBlur} value={values.feedback || ""}></textarea>
                        {touched.feedback && errors.feedback && <p className='text-red-500'>{errors.feedback}</p>}
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Submit</button>
                    </div>
                </form>
            )}
            <div className='flex space-x-2 m-2'>
                <Link to="/"> <button className='bg-indigo-400 text-white p-2'>Level1</button></Link>
                <Link to="/level2"> <button className='bg-indigo-400 text-white p-2'>Level2</button></Link>
            </div>
        </div>
    );
}

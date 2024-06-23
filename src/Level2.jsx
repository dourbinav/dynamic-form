import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Validate2 } from "../src/Validate";
import { useForm2 } from "./useForm2";

export default function Level2() {
  
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    position: "",
    url: "",
    experience: "",
    interviewtime: "",
  };

  const { values, errors, touched, submission,handleBlur,resetForm, handleChange, handleSubmit } =
    useForm2(initialValues, Validate2,);



  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      {submission ? (
        <div className="bg-yellow-400 p-8 rounded-md text-center">
          <h1 className="text-2xl font-semibold">Submission Successful</h1>
          <div className="mt-4 text-left">
            <p>
              <span className="font-bold">Name:</span> {values.name}
            </p>
            <p>
              <span className="font-bold">Email:</span> {values.email}
            </p>
            <p>
              <span className="font-bold">Phone Number:</span>{" "}
              {values.phone}
            </p>
            <p>
              <span className="font-bold">Applied For:</span>{" "}
              {values.position}
            </p>
            <p>
              <span className="font-bold">Interview Time:</span>{" "}
              {values.interviewtime}
            </p>
          </div>
          <button
            className="bg-green-500 text-white mt-4 px-4 py-2 rounded-md"
            type="reset"
            onClick={() => (resetForm)}
          >
            Agree
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="bg-indigo-300 shadow-lg rounded-md p-8 space-y-4 w-full max-w-lg"
        >
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              className="rounded-sm w-full p-2 border border-gray-300"
              type="text"
              id="name"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            {touched.name && errors.name && (
              <span className="text-red-500">{errors.name}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              className="rounded-sm w-full p-2 border border-gray-300"
              type="email"
              id="email"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              className="rounded-sm w-full p-2 border border-gray-300"
              type="tel"
              id="phone"
              name="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
            />
            {touched.phone && errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">
              Applying for a Position
            </label>
            <select
              className="rounded-sm w-full p-2 border border-gray-300"
              id="position"
              name="position"
              value={values.position}
              onChange={handleChange}
              required
            >
              <option value="">Select a position</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
            {touched.position && errors.position && (
              <span className="text-red-500">{errors.position}</span>
            )}
          </div>
          {values.position === "designer" && (
            <div>
              <label className="block text-gray-700">Portfolio URL</label>
              <input
                className="rounded-sm w-full p-2 border border-gray-300"
                type="text"
                id="portfolio"
                name="url"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.url}
              />
              {touched.url && errors.url && (
                <span className="text-red-500">{errors.url}</span>
              )}
            </div>
          )}
          {values.position === "developer" && (
            <div>
              <label className="block text-gray-700">Relevant Experience</label>
              <input
                className="rounded-sm w-full p-2 border border-gray-300"
                type="number"
                id="experience"
                name="experience"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.experience}
              />
              {touched.experience && errors.experience && (
                <span className="text-red-500">{errors.experience}</span>
              )}
            </div>
          )}
          {values.position === "Manager" && (
            <div>
              <label className="block text-gray-700">
                Management Experience
              </label>
              <input
                className="rounded-sm w-full p-2 border border-gray-300"
                type="number"
                id="managementExperience"
                name="experience"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.experience}
              />
              {touched.experience && errors.experience && (
                <span className="text-red-500">{errors.experience}</span>
              )}
            </div>
          )}
          <div>
            <label className="block text-gray-700">
              Preferred Interview Time
            </label>
            <input
              className="rounded-sm w-full p-2 border border-gray-300"
              type="datetime-local"
              id="interviewtime"
              name="interviewtime"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.interviewtime}
            />
            {touched.interviewtime && errors.interviewtime && (
              <span className="text-red-500">{errors.interviewtime}</span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      <div className="flex ">
        <Link to="/">
          {" "}
          <button className="bg-indigo-400 text-white p-2">Level1</button>
        </Link>
        <Link to="/level3">
          {" "}
          <button className="bg-indigo-400 text-white p-2">Level3</button>
        </Link>
      </div>
    </div>
  );
}

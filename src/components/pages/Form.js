import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import emailjs from "emailjs-com";

import "../../global.css";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } =
    useForm(validate);
  console.log(errors);

  return (
    <div>
      <form onSubmit={(handleSubmit)}>
        <div className="form-input">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-input">
          <label>Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Enter your comments"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
          <div className="form-input">
            <label>Email</label>
            <input
              //   type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import { makeStyles } from "@material-ui/core";
import emailjs from "emailjs-com";

import "../../global.css";

const aboutStyles = makeStyles((theme) => ({
  formInput: {
    display: "flex",
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "#2c3531",
    color: "white",
    "@media (max-width: 900px)": {
      maxWidth: '95%',
    },
  },
  errorStyles: {
    color: "red",
    "@media (max-width: 900px)": {
      fontSize: '75%',
    },
  },
  messageStyles: {
    width: '400px',
    height: '200px',
    "@media (max-width: 900px)": {
      width: '100%',
    },
  },
  textStyles: {
    width: '400px',
    height: '25px',
    "@media (max-width: 900px)": {
      width: '100%',
    },
  },
  submit: {
    marginTop: '10px',
    fontSize: '25px',
    backgroundColor: 'white',
    color: "#313533",
    width: '150px',
    borderRadius: '10px',
    "&:hover": {
      backgroundColor: "#bbbbbb",
    },
  },
}));

const Form = () => {
  const { handleChange, handleSubmit, values, errors } =
    useForm(validate);
    const { formStyles, formInput, messageStyles, submit, textStyles, errorStyles } = aboutStyles();

  return (
    <div>
      <form className={formStyles} onSubmit={(handleSubmit)}>
        <div className={formInput}>
          <label>Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            value={values.username}
            className={textStyles}
            onChange={handleChange}
          />
          {errors.username && <p className={errorStyles}>{errors.username}</p>}
        </div>
        <div className={formInput}>
          <label>Message</label>
          <textarea
            type="text"
            name="message"
            className={messageStyles}
            placeholder="Enter your message"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p className={errorStyles}>{errors.message}</p>}
          <div className={formInput}>
            <label>Email</label>
            <input
              //   type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              className={textStyles}
              onChange={handleChange}
            />
            {errors.email && <p className={errorStyles}>{errors.email}</p>}
          </div>
        </div>
        <button className={submit} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
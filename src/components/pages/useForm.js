import { useState, useEffect } from "react";
import validate from "./validateInfo";
import emailjs from "emailjs-com";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    message: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validate(values));
    
      emailjs
        .sendForm("service_fzre51o", "template_vax2beq", event.target, "user_hcUfgLCcVYzVsAmZQEkU7")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
};

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
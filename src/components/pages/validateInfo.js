export default function validate(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = "Name required";
    };
  
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Email address is invalid";
    };
  
    if (!values.message) {
      errors.message = "Message required";
    };
  
    return errors;
  }
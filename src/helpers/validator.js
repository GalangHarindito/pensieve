import {
  createValidator,
  combineValidators,
  composeValidators,
  isRequired,
} from "revalidate";

const isEmail = (value) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

const isValidEmail = createValidator(
  (message) => (value) => {
    if (value && !isEmail(value)) {
      return message;
    }
  },
  "Wrong format email. Exp: XXX@email.id"
);

export const loginValidator = ({ ...props }) => {
  return combineValidators({
    user_name: composeValidators(
      isRequired({ message: "Please insert Email" }),
      isValidEmail
    )("user_name"),
    password: composeValidators(
      isRequired({ message: "Please Insert Password" })
    )("password"),
  })(props);
};

export const registerValidator = ({ ...props }) => {
  return combineValidators({
    name: composeValidators(
      isRequired({ message: "Please insert Name" }),
    )("name"),
    email: composeValidators(
      isRequired({ message: "Please insert Email" }),
      isValidEmail
    )("email"),
    password: composeValidators(
      isRequired({ message: "Please Insert Password" })
    )("password"),
  })(props);
};

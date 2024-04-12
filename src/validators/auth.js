import { z } from "zod";
import { emailValidator, nameValidator, passwordValidator } from "./utils";

const loginValidator = z.object({
  email: emailValidator,
  password: passwordValidator,
});

const signupValidator = loginValidator.extend({
  name: nameValidator,
  alternateEmail: emailValidator.optional(),
});

export { loginValidator, signupValidator };

// console.log(
//   signupValidator.parse({
//     name: "fgef",
//     email: "eewfhi@gmail.com",
//     password: "gkkfkdfqwhdfhl",
//     alternateEmail: undefined,
//     test: 123,
//   }),
// );

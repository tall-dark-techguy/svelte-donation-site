import zod from "zod";

export const checkoutSchema = zod.object({
  first_name: zod.string({ required_error: "Please enter your first name" }),
  last_name: zod.string({ required_error: "Please enter your last name" }),
  phone: zod
    .string({
      required_error: "We need your phone number to reach you",
    })
    .trim(),
  email: zod
    .string({ required_error: "Your email is needed please" })
    .trim()
    .toLowerCase(),
  amount: zod.coerce.number({
    invalid_type_error: "Please enter a number for amount",
  }),
  frequency: zod.string(),
  country: zod.string(),
});

import { checkoutSchema } from "$lib/schemas/checkout-schema.server.js";
import { fail } from "@sveltejs/kit";

export const actions = {
  checkout: async ({ request }) => {
    try {
      const result = checkoutSchema.safeParse(
        Object.fromEntries(await request.formData())
      );

      if (!result.success) {
        return fail(400, {
          status: "error",
          errors: result.error.format(),
        });
      }

      const values = result.data;

      const flw_res = await fetch("https://api.flutterwave.com/v3/payments", {
        method: "POST",
        headers: {
          Authorization: `YOUR-FLW-SECRET-KEY`,
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          amount:
            values.country === "Nigeria" ? +values.amount * 800 : values.amount,
          currency: values.country === "Nigeria" ? "NGN" : "USD",
          tx_ref: crypto.randomUUID(),
          redirect_url: "http://localhost:5173/redirect",
          customer: {
            email: values.email,
            phonenumber: values.phone,
            name: `${values.first_name} ${values.last_name}`,
          },
          customizations: {
            title: "Make your donation",
            logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
          },
        }),
      });

      const data = await flw_res.json();

      if (data.status !== "success") {
        return fail(400, {
          status: "error",
          message: data.message,
        });
      }

      return {
        data: data.data.link,
      };
    } catch (error) {
      return fail(500, {
        status: "error",
        message: "Server error",
      });
    }
  },
};

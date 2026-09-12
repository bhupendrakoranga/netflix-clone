import * as yup from "yup";

export type SignInFormValues = {
  identifier: string;
};

const identifierError = "Please enter a valid email or mobile number.";

const emailSchema = yup.string().email();
const mobilePattern = /^\+?[0-9][0-9\s-]{8,18}[0-9]$/;
const phoneIntentPattern = /^\+?[\d\s-]*$/;

export function isPhoneIdentifier(value: string) {
  const trimmedValue = value.trim();

  return trimmedValue.length > 0 && phoneIntentPattern.test(trimmedValue);
}

export const signInSchema: yup.ObjectSchema<SignInFormValues> = yup.object({
  identifier: yup
    .string()
    .trim()
    .required(identifierError)
    .test("email-or-mobile", identifierError, (value) => {
      if (!value) {
        return false;
      }

      const trimmedValue = value.trim();
      const normalizedMobile = trimmedValue.replace(/[\s-]/g, "");

      return emailSchema.isValidSync(trimmedValue) || mobilePattern.test(normalizedMobile);
    }),
});

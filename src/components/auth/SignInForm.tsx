"use client";

import { ChevronDown, CircleX } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useId, useState } from "react";
import { ValidationError } from "yup";

import { AuthIdentifierField } from "@/components/auth/AuthIdentifierField";
import { Button } from "@/components/ui/Button";
import { signInSchema, type SignInFormValues } from "@/lib/validation/signInSchema";

export function SignInForm() {
  const identifierId = useId();
  const [values, setValues] = useState<SignInFormValues>({ identifier: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof SignInFormValues, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (nextValues: SignInFormValues) => {
    try {
      signInSchema.validateSync(nextValues, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ValidationError) {
        const nextErrors: Partial<Record<keyof SignInFormValues, string>> = {};

        error.inner.forEach((fieldError) => {
          if (fieldError.path) {
            nextErrors[fieldError.path as keyof SignInFormValues] = fieldError.message;
          }
        });

        if (!error.inner.length && error.path) {
          nextErrors[error.path as keyof SignInFormValues] = error.message;
        }

        setErrors(nextErrors);
      }

      return false;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    validate(values);
  };

  const handleIdentifierChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValues = { identifier: event.target.value };

    setValues(nextValues);

    if (isSubmitted) {
      validate(nextValues);
    }
  };

  const identifierError = errors.identifier;

  return (
    <form className="mt-7" noValidate onSubmit={handleSubmit}>
      <AuthIdentifierField
        error={identifierError}
        id={identifierId}
        label="Email or mobile number"
        name="identifier"
        onChange={handleIdentifierChange}
        value={values.identifier}
      />

      {identifierError ? (
        <p
          className="mt-2 flex items-start gap-2 text-sm leading-5 font-bold text-[#eb3942]"
          id={`${identifierId}-error`}
        >
          <CircleX aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{identifierError}</span>
        </p>
      ) : null}

      <Button
        className="mt-3 min-h-12 w-full rounded-sm text-lg font-bold"
        icon={null}
        type="submit"
      >
        Continue
      </Button>

      <details className="group mt-14 w-fit text-white">
        <summary className="flex cursor-pointer list-none items-center gap-1.5 text-lg font-bold transition outline-none hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
          Get Help
          <ChevronDown aria-hidden className="h-5 w-5 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-4 space-y-3 text-sm text-[#b3b3b3]">
          <a className="block underline underline-offset-2 hover:text-white" href="#">
            Forgot email or phone number?
          </a>
          <a className="block underline underline-offset-2 hover:text-white" href="#">
            Need more help?
          </a>
        </div>
      </details>
    </form>
  );
}

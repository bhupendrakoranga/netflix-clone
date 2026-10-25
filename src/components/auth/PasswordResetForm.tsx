"use client";

import type { FormEvent } from "react";
import { useId, useState } from "react";

import { Button } from "@/components/ui/Button";

type ResetMethod = "email" | "sms";

const resetCopy = {
  email: {
    button: "Email Me",
    description: "We will send you an email with instructions on how to reset your password.",
    inputMode: "email" as const,
    placeholder: "Email",
  },
  sms: {
    button: "Message Me",
    description:
      "We will text you a verification code to reset your password. Message and data rates may apply.",
    inputMode: "tel" as const,
    placeholder: "Mobile number",
  },
};

export function PasswordResetForm() {
  const methodName = useId();
  const contactId = useId();
  const [method, setMethod] = useState<ResetMethod>("email");
  const copy = resetCopy[method];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className="min-h-[560px] bg-[#f3f3f3] px-6 pt-9 pb-8 text-black sm:min-h-[640px] sm:px-[50px] sm:pt-[52px] sm:pb-[50px]"
      noValidate
      onSubmit={handleSubmit}
    >
      <h1 className="max-w-[488px] text-[31px] leading-[1.14] font-bold tracking-[0] sm:text-[38px] sm:leading-[1.17]">
        Update password, email or <br className="hidden sm:block" />
        phone
      </h1>
      <fieldset className="mt-4">
        <legend className="text-lg leading-7">How would you like to reset your password?</legend>

        <div className="mt-6 space-y-3 pl-7">
          <label className="flex w-fit cursor-pointer items-center gap-4 text-lg leading-6">
            <input
              checked={method === "email"}
              className="h-[19px] w-[19px] accent-black"
              name={methodName}
              onChange={() => setMethod("email")}
              type="radio"
              value="email"
            />
            <span>Email</span>
          </label>
          <label className="flex w-fit cursor-pointer items-center gap-4 text-lg leading-6">
            <input
              checked={method === "sms"}
              className="h-[19px] w-[19px] accent-black"
              name={methodName}
              onChange={() => setMethod("sms")}
              type="radio"
              value="sms"
            />
            <span>Text Message (SMS)</span>
          </label>
        </div>
      </fieldset>

      <p className="mt-6 max-w-[470px] text-lg leading-6">{copy.description}</p>

      <label className="sr-only" htmlFor={contactId}>
        {copy.placeholder}
      </label>
      <input
        autoComplete={method === "sms" ? "tel" : "email"}
        className="mt-5 h-[58px] w-full rounded-[2px] border border-[#8c8c8c] bg-white px-5 text-lg text-black outline-none placeholder:text-[#555] focus:border-black focus:ring-1 focus:ring-black sm:text-xl"
        id={contactId}
        inputMode={copy.inputMode}
        placeholder={copy.placeholder}
        type={method === "sms" ? "tel" : "email"}
      />

      <Button
        className="mt-10 h-[58px] w-full [border-radius:4px] [box-shadow:none]"
        icon={null}
        style={{ fontSize: "22px", fontWeight: 700 }}
        type="submit"
      >
        {copy.button}
      </Button>

      <a
        className="mt-8 block text-lg leading-6 text-black underline underline-offset-2 hover:text-[#333]"
        href="#"
      >
        I can&apos;t remember my email address or phone number.
      </a>
    </form>
  );
}

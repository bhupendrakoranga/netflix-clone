import { ChevronDown } from "lucide-react";
import type { ChangeEventHandler } from "react";

import { cn } from "@/lib/utils";
import { isPhoneIdentifier } from "@/lib/validation/signInSchema";

type AuthIdentifierFieldProps = {
  error?: string;
  id: string;
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export function AuthIdentifierField({
  error,
  id,
  label,
  name,
  onChange,
  value,
}: AuthIdentifierFieldProps) {
  const isPhoneMode = isPhoneIdentifier(value);
  const shouldFloatLabel = value.trim().length > 0;

  return (
    <div>
      <div
        className={cn(
          "min-h-14 w-full rounded-sm border bg-[#171111]/86 text-white transition focus-within:bg-[#171111] focus-within:ring-1",
          error
            ? "border-[#eb3942] focus-within:border-[#eb3942] focus-within:ring-[#eb3942]"
            : "border-white/28 focus-within:border-white focus-within:ring-white",
          shouldFloatLabel ? "px-5 pt-2 pb-3" : "px-5"
        )}
      >
        <label
          className={cn(
            "block text-[#b3b3b3]",
            shouldFloatLabel ? "text-sm leading-5 font-semibold" : "sr-only"
          )}
          htmlFor={id}
        >
          {label}
        </label>

        <div
          className={cn(
            "flex items-center",
            shouldFloatLabel ? "mt-1" : "min-h-14",
            isPhoneMode ? "gap-5" : null
          )}
        >
          {isPhoneMode ? (
            <label className="relative flex shrink-0 items-center">
              <span className="sr-only">Country code</span>
              <select
                aria-label="Country code"
                className="w-[86px] appearance-none bg-transparent pr-6 text-base font-bold text-white outline-none"
                defaultValue="+91"
              >
                <option value="+91">IN +91</option>
              </select>
              <ChevronDown
                aria-hidden
                className="pointer-events-none absolute right-0 h-4 w-4 text-white"
              />
            </label>
          ) : null}

          <input
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={Boolean(error)}
            autoComplete="username"
            className="min-w-0 flex-1 bg-transparent text-base font-semibold text-white outline-none placeholder:text-[#b3b3b3]"
            id={id}
            inputMode={isPhoneMode ? "tel" : "text"}
            name={name}
            onChange={onChange}
            placeholder={shouldFloatLabel ? "" : label}
            type="text"
            value={value}
          />
        </div>
      </div>
    </div>
  );
}

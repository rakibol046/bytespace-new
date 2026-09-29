import type { InputHTMLAttributes } from "react";

type TextFieldProps = {
  label: string;
  name: string;
} & Pick<InputHTMLAttributes<HTMLInputElement>, "type" | "placeholder" | "autoComplete" | "required">;

export function TextField({ label, name, type = "text", ...inputProps }: TextFieldProps) {
  const id = `field-${name}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm leading-[17px] font-medium text-shuttle-950">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="body-l h-[52px] w-full rounded-xl border border-shuttle-100 bg-white px-6 text-shuttle-950 placeholder:text-shuttle-400"
        {...inputProps}
      />
    </div>
  );
}

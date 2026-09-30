import type { ComponentProps } from "react";
import type { CounterAction, CounterButtonConfig } from "../types";

type CounterButtonProps = Omit<ComponentProps<"button">, "onClick"> & {
  btnConfig: CounterButtonConfig;
  onclick: (type: CounterAction) => void;
};

function CounterButton({ btnConfig, onclick, ...props }: CounterButtonProps) {
  return (
    <button
      className={`counter-btn ${btnConfig.className}`}
      onClick={() => onclick(btnConfig.type)}
      {...props}
    >
      {btnConfig.text}
    </button>
  );
}

export default CounterButton;

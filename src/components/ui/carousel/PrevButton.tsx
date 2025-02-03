import { ChevronLeftIcon } from "lucide-react";
import { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <ChevronLeftIcon
        color={`${restProps.disabled ? "#6b7280" : "white"}`}
        className=" border border-gray-500 rounded-full"
      />
      {children}
    </button>
  );
};

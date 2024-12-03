import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
function Button({
  primary = false,
  size = "medium",
  backgroundColor,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        "storybook-button font-sans font-medium leading-none",
        "rounded-3xl border border-solid border-transparent",
        "transition-colors duration-300 ease-in-out",
        "focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",
        primary
          ? "bg-purple-600 text-white enabled:hover:bg-purple-500"
          : "bg-orange-600 text-white enabled:hover:bg-orange-500",
        size === "small"
          ? "text-sm py-1.5 px-3"
          : size === "large"
          ? "text-lg py-3.5 px-6"
          : "text-base py-3 px-4",
        "disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:text-gray-200",
        className,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

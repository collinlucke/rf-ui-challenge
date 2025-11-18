import "./Button.scss";

type ButtonProps = {
  children: React.ReactNode;
  title?: string;
  variant?: "primary" | "secondary" | "avatar";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;

  onClick?: () => void;
};

export const Button = ({
  children,
  title,
  variant,
  size,
  className,
  ariaLabel,
  ariaExpanded,
  ariaControls,

  onClick,
}: ButtonProps) => {
  const buttonClass = "btn";
  const variantClass = variant ? `btn-${variant}` : "";
  const sizeClass = size ? `btn-${size}` : "";
  const combinedClasses = `${buttonClass} ${variantClass} ${sizeClass} ${
    className || ""
  }`.trim();

  return (
    <button
      title={title ? title : ""}
      className={combinedClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {children}
    </button>
  );
};

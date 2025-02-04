import "./Button.css";

interface IButton {
  white?: boolean;
  text?: string;
  addcss?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  white = false,
  text,
  addcss,
  onClick,
  disabled = false,
}): JSX.Element => {
  return (
    <button
      className={`${white ? "button-white" : "button-green"} ${addcss || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p className={`${white ? "white-button-text" : "green-button-text"}`}>
        {text}
      </p>
    </button>
  );
};

export default Button;

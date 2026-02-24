import "./button-input.style.css";

export function ButtonInput({ children, ...props }) {
  return (
    <button className="button-input" {...props}>
      {children || "Salvar item"}
    </button>
  );
}

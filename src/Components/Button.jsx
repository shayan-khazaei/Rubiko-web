import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "solid",
  external,
  to,
  onClick,
}) {
  const baseClass =
    "flex items-center gap-2 block px-4 py-1.5 rounded-lg border-b border-l transition-colors cursor-pointer border-transparent";

  const variantClass =
    variant === "outline"
      ? "bg-green-600 text-white hover:bg-green-700"
      : "text-gray-700 hover:border-b hover:border-l hover:border-green-600";

  if (to) {
    if (external) {
      return (
        <a href={to} target="blank" className={`${baseClass} ${variantClass}`}>
          {children}
        </a>
      );
    } else
      return (
        <Link to={to} className={`${baseClass} ${variantClass}`}>
          {children}
        </Link>
      );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${variantClass}`}>
      {children}
    </button>
  );
}

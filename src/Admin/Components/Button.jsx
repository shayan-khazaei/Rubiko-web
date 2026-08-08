export default function Button({ children, variant = "solid" }) {
  const baseClass =
    "flex items-center gap-3 text-sm md:text-lg block text-center px-3.5 py-1 md:px-4 md:py-1.5 rounded-lg border-b border-l transition-colors cursor-pointer border-transparent";

  const variantClass =
    variant === "outline"
      ? "bg-green-600 text-white hover:bg-green-700"
      : "text-gray-300 hover:border-b hover:border-l hover:border-grey-600";

  return <button className={`${baseClass} ${variantClass}`}>{children}</button>;
}

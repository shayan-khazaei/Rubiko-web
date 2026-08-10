export default function Button({ children, variant = "solid", light }) {
  const baseClass =
    "flex items-center gap-3 text-sm md:text-lg block text-center px-3.5 py-1 md:px-4 md:py-1.5 rounded-lg border-b border-l transition-colors cursor-pointer border-transparent";

  const variantClass =
    variant === "outline"
      ? "bg-radial-[at_25%_25%] from-zinc-800 to-green-900 to-95% text-white hover:shadow-2xl"
      : `${
          light ? "text-gray-800" : "text-gray-300"
        } hover:border-b hover:border-l hover:border-grey-600`;

  return <button className={`${baseClass} ${variantClass}`}>{children}</button>;
}

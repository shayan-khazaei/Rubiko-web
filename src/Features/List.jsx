export default function List({ children, to, border }) {
  return (
    <li
      className={`cursor-pointer ${
        border === "noBorder" ? `` : `hover:border-b hover:border-green-600`
      } `}
    >
      <a href={to}>{children}</a>
    </li>
  );
}

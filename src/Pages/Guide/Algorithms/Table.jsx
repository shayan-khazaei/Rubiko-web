function Table({ children }) {
  return <table className="w-lg">{children}</table>;
}

function Th({ children }) {
  return <th className="text-xl text-grey-800 border border-green-700 pl-5 py-1 bg-grey-400">{children}</th>;
}

function Td({ children }) {
  return (
    <td className="border border-green-700">
      <div className=" flex items-center gap-7 pl-5 py-1">{children}</div>
    </td>
  );
}

function Tr({ children }) {
  return <tr className="even:bg-slate-100 odd:bg-slate-200">{children}</tr>;
}

export { Table, Th, Td, Tr };

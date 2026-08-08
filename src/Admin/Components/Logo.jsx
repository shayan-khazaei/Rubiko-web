export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <a href="/">
        <img
          className="cursor-pointer w-[4.5rem]"
          src="/images/logoIcon.png"
          alt="menuIcon"
        />
      </a>
      <div className="">
        <h2 className="text-2xl font-medium text-grey-200"> RUBIKO</h2>
        <h4 className="text-xs text-green-300">ADMIN</h4>
      </div>
    </div>
  );
}
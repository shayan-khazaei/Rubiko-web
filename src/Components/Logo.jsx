export default function Logo() {
  return (
    <>
      <a href="/">
        <img
          className="cursor-pointer w-[4.5rem] hidden md:block"
          src="/images/logoIcon.png"
          alt="menuIcon"
        />
      </a>
      <h2 className="text-lg md:text-2xl font-medium text-grey-800 hidden md:block">
        Rubiko
      </h2>
    </>
  );
}

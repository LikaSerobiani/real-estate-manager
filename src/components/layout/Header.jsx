import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="bg-white border border-border">
      <div className="flex items-center w-full max-w-[83.13%] m-auto py-[38px]">
        <img src={Logo} alt="Header Logo" />
      </div>
    </header>
  );
}

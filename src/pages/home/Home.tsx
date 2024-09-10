import Logo from "@/assets/Logo.png";

export default function Home() {
  return (
    <div>
      <img
        className=" mx-auto max-h-[80vh] animate-pulse"
        src={Logo}
        alt="logo"
      />
    </div>
  );
}

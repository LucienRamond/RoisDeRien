import Logo from "@/assets/Logo.png";

export default function Home() {
  return (
    <div>
      <img
        className="mt-8 sm:mt-0 my-auto mx-auto max-h-[80vh] animate-pulse"
        src={Logo}
        alt="logo"
      />
    </div>
  );
}

import Logo from "@/assets/Logo.png";

export default function Home() {
  return (
    <div>
      <img
        className="mt-8 sm:mt-0 my-auto mx-auto max-h-[80vh] xl:w-[600px] xl:h-auto xl:max-h-max animate-pulse"
        src={Logo}
        alt="logo"
      />
      <div className=" font-younger typing-animate text-white text-[3rem] sm:text-[5rem] lg:text-[7rem] text-center">
        ROIS DE RIEN
      </div>
    </div>
  );
}

import { Separator } from "@/components/ui/separator";
import Logo from "@/assets/Logo.png";

export default function Success() {
  return (
    <div className="mx-auto border border-foreground p-4 lg:max-w-[50%]  sm:max-w-[80%] min-h-[500px] sm:rounded bg-white shadow-lg">
      <div>
        <h2 className="text-center text-xl font-bold">Contact</h2>
      </div>
      <Separator className="h-[1px] w-[80%] my-2 mx-auto bg-foreground" />
      <div className=" text-center ">
        Merci pour votre prise de contact nous reviendrons vers vous au plus
        vite !
      </div>
      <div className="text-center font-bold">- Les Rois de Rien -</div>
      <div>
        <img
          className="mt-8 mx-auto h-[200px] animate-pulse"
          src={Logo}
          alt="logo"
        />
      </div>
    </div>
  );
}

import { useLocation } from "react-router-dom";
import Facebook from "../../assets/icons/facebook.svg";

export default function Footer() {
  const location = useLocation();
  return (
    <div
      className={`flex justify-center p-4 ${
        location.pathname == "/" && "mt-32"
      }`}
    >
      <div>Lucc3 &copy; 2024 | </div>
      <div className="flex gap-2 ml-2 hover:cursor-pointer">
        <div
          onClick={() =>
            window.open("https://www.facebook.com/roisderien31", "__blank")
          }
        >
          <img
            height="24"
            width="24"
            src={Facebook}
            className=" border rounded-full bg-white"
          />
        </div>
      </div>
    </div>
  );
}

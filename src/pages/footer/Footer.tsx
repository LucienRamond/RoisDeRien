import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";

export default function Footer() {
  return (
    <div className="flex justify-center p-4">
      <div>Lucc3 &copy; 2024 | </div>
      <div className="flex gap-2 ml-2">
        <div onClick={() => document.location.assign("www.google.fr")}>
          <img
            height="24"
            width="24"
            src={Facebook}
            className=" border rounded-full bg-white"
          />
        </div>
        <div onClick={() => document.location.assign("www.google.fr")}>
          <img
            height="24"
            width="24"
            src={Instagram}
            className=" border rounded-lg  bg-white"
          />
        </div>
      </div>
    </div>
  );
}

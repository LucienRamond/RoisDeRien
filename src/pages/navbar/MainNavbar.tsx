import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function MainNavbar() {
  return (
    <div>
      <div className="sm:block hidden">
        <Navbar />
      </div>
      <div className="sm:hidden block">
        <MobileNavbar />
      </div>
    </div>
  );
}

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo-navbar.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <div
      className={`flex  text-white  justify-around pl-4 pr-4 pt-4 ${
        location.pathname == "/" &&
        "opacity-10 hover:opacity-100 transition duration-700 ease-in-out "
      }`}
    >
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to={"/le-groupe"} className={navigationMenuTriggerStyle()}>
                Le groupe
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to={"/medias"} className={navigationMenuTriggerStyle()}>
                Médias
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to={"/"}>
                <img
                  className=" hover:animate-pulse h-[120px]"
                  src={Logo}
                  alt="logo"
                />
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to={"/concerts"} className={navigationMenuTriggerStyle()}>
                Concerts
              </Link>
            </NavigationMenuItem>
            {/* <Separator orientation="vertical" className="h-4 bg-white" /> */}
            <NavigationMenuItem>
              <Link to={"/contact"} className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

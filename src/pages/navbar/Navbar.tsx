import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <div className="flex text-white justify-around pl-4 pr-4 pt-4">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to={"/"} className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-4 bg-white" />
            <NavigationMenuItem>
              <Link to={"/le-groupe"} className={navigationMenuTriggerStyle()}>
                Le groupe
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-4 bg-white" />
            <NavigationMenuItem>
              <Link to={"/medias"} className={navigationMenuTriggerStyle()}>
                Médias
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-4 bg-white" />
            <NavigationMenuItem>
              <Link to={"/concerts"} className={navigationMenuTriggerStyle()}>
                Concerts
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-4 bg-white" />
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

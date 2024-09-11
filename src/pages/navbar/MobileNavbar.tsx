import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import {
  CalendarDaysIcon,
  CameraIcon,
  HomeIcon,
  MailIcon,
  UsersIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <div className="flex justify-around pt-4">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <Link to={"/"} className={navigationMenuTriggerStyle()}>
                <div className=" grid justify-items-center">
                  <HomeIcon className="pt-1" />
                  <div className="text-sm">Accueil</div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to={"/le-groupe"} className={navigationMenuTriggerStyle()}>
                <div className="grid justify-items-center">
                  <UsersIcon className="pt-1" />
                  <div className=" text-sm">Le groupe</div>
                </div>
              </Link>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <Link to={"/set-liste"} className={navigationMenuTriggerStyle()}>
                Set liste
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-4 bg-foreground" /> */}
            <NavigationMenuItem>
              <Link to={"/medias"} className={navigationMenuTriggerStyle()}>
                <div className="grid justify-items-center">
                  <CameraIcon className="pt-1" />
                  <div className=" text-sm">Médias</div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to={"/concerts"} className={navigationMenuTriggerStyle()}>
                <div className="grid justify-items-center">
                  <CalendarDaysIcon className="pt-1" />
                  <div className=" text-sm">Concerts</div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to={"/contact"} className={navigationMenuTriggerStyle()}>
                <div className="grid justify-items-center">
                  <MailIcon className="pt-1" />
                  <div className=" text-sm">Contact</div>
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

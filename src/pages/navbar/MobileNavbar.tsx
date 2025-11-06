import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import {
  CalendarDaysIcon,
  CameraIcon,
  HandMetalIcon,
  HomeIcon,
  MailIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <div className={`flex justify-around text-white min-[380px]:py-2 py-1  `}>
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="mx-1 grid grid-cols-5 items-center">
            <NavigationMenuItem>
              <Link
                to={"/"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  " h-14 first:w-full"
                )}
              >
                <div className="flex flex-col items-center">
                  <HomeIcon className="  translate-y-1" />
                  <div className="text-[.7rem]">Accueil</div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to={"/le-groupe"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "  h-14 first:w-full"
                )}
              >
                <div className="flex flex-col items-center">
                  <HandMetalIcon className="  translate-y-1" />
                  <div className="text-[.7rem]">Groupe</div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to={"/medias"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "  h-14 first:w-full"
                )}
              >
                <div className="grid justify-items-center">
                  <CameraIcon className="  translate-y-1" />
                  <div className="text-[.7rem]">Médias</div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to={"/concerts"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "  h-14 first:w-full"
                )}
              >
                <div className="grid justify-items-center">
                  <CalendarDaysIcon className="  translate-y-1" />
                  <div className="text-[.7rem]">Concerts</div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to={"/contact"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "  h-14 first:w-full"
                )}
              >
                <div className="grid justify-items-center">
                  <MailIcon className="  translate-y-1" />
                  <div className="text-[.7rem]">Contact</div>
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

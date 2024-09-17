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
    <div className="flex justify-around py-4">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="mx-1 grid grid-cols-5 items-center">
            <NavigationMenuItem>
              <Link
                to={"/"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  " h-15 first:w-full"
                )}
              >
                <div className="flex flex-col items-center">
                  <HomeIcon className="" />
                  <div className="hidden min-[380px]:block text-sm">
                    Accueil
                  </div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to={"/le-groupe"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "  h-15 first:w-full"
                )}
              >
                <div className="flex flex-col items-center">
                  <HandMetalIcon className="pt-1" />
                  <div className="hidden min-[380px]:block text-sm ">
                    Groupe
                  </div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to={"/medias"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "  h-15 first:w-full"
                )}
              >
                <div className="grid justify-items-center">
                  <CameraIcon className="pt-1" />
                  <div className="hidden min-[380px]:block text-sm">Médias</div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to={"/concerts"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "  h-15 first:w-full"
                )}
              >
                <div className="grid justify-items-center">
                  <CalendarDaysIcon className="pt-1" />
                  <div className="hidden min-[380px]:block text-sm">
                    Concerts
                  </div>
                </div>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to={"/contact"}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "  h-15 first:w-full"
                )}
              >
                <div className="grid justify-items-center">
                  <MailIcon className="pt-1" />
                  <div className="hidden min-[380px]:block text-sm">
                    Contact
                  </div>
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

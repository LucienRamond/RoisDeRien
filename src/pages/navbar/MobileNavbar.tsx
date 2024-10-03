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
    <div className="flex justify-around min-[380px]:py-4 py-1">
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
                  <HomeIcon className=" min-[380px]:translate-y-0 translate-y-1" />
                  <div className="min-[380px]:text-sm text-[.6rem]">
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
                  "  h-14 first:w-full"
                )}
              >
                <div className="flex flex-col items-center">
                  <HandMetalIcon className=" min-[380px]:translate-y-0 translate-y-1" />
                  <div className="min-[380px]:text-sm text-[.6rem]">Groupe</div>
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
                  <CameraIcon className="  min-[380px]:translate-y-0 translate-y-1" />
                  <div className="min-[380px]:text-sm text-[.6rem]">Médias</div>
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
                  <CalendarDaysIcon className="  min-[380px]:translate-y-0 translate-y-1" />
                  <div className="min-[380px]:text-sm text-[.6rem]">
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
                  "  h-14 first:w-full"
                )}
              >
                <div className="grid justify-items-center">
                  <MailIcon className="  min-[380px]:translate-y-0 translate-y-1" />
                  <div className="min-[380px]:text-sm text-[.6rem]">
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

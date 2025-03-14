import "react-day-picker/src/style.css";
import { Separator } from "@/components/ui/separator";
import { ArrowBigLeftIcon, ArrowBigRightIcon } from "lucide-react";
import concerts from "./ConcertList";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export interface ConcertType {
  date: string;
  event: string;
  location: string;
  url: string;
  id: number;
}

export default function Concerts() {
  return (
    <div className="sm:px-4  mx-auto py-4  lg:max-w-[80%]  sm:max-w-[90%] min-h-[60vh] sm:rounded bg-white shadow-lg">
      <div className="w-full  p-2">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 mx-auto ">
          {concerts &&
            concerts.map((concert: ConcertType) => {
              return (
                <Card
                  id="concert-card"
                  key={concert.id}
                  className={` bg-cover sm:h-[200px] grid items-center hover:shadow-black border-black h-full w-full  text-white font-bold ${
                    concert.id % 2 == 0
                      ? "bg-[url(/src/assets/icons/texture.jpg)]"
                      : "bg-[url(/src/assets/icons/texture2.jpg)]"
                  }`}
                >
                  <CardHeader className=" text-xl p-1 text-center bg-black/10">
                    {new Date(concert.date).toLocaleDateString("fr", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                  </CardHeader>
                  <Separator className=" bg-white" />
                  <CardContent className=" p-2 ">
                    <div className=" text-3xl text-center">
                      <div>{concert.event}</div>
                    </div>
                    <div className="mx-auto italic sm:text-base text-xl text-center">
                      ({concert.location})
                    </div>
                  </CardContent>
                  <Separator className=" bg-white" />
                  <CardFooter className="p-1 flex justify-center underline text-center bg-black/10">
                    <ArrowBigRightIcon
                      fill="white"
                      className=" animate-pulse"
                    />
                    <div
                      className=" cursor-pointer "
                      onClick={() =>
                        concert.url && window.open(concert.url, "__blank")
                      }
                    >
                      Plus d'infos ici
                    </div>
                    <ArrowBigLeftIcon fill="white" className=" animate-pulse" />
                  </CardFooter>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}

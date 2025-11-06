import "react-day-picker/src/style.css";
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
    <div className="lg:max-w-[75%]  sm:max-w-[90%] mx-auto border border-foreground p-4 min-h-[73vh] sm:rounded bg-white shadow-lg">
      <div className="max-w-[1200px] mx-auto p-2">
        <div className="grid sm:grid-cols-2 gap-2 sm:justify-center justify-center">
          {concerts &&
            concerts.map((concert: ConcertType) => {
              return (
                <Card
                  id="concert-card"
                  key={concert.id}
                  className={` p-2 bg-cover aspect-square max-h-[300px] min-w-[90vw] sm:min-w-full max-w-[500px] grid items-center hover:shadow-black border-black h-full  text-white font-bold ${
                    concert.id % 2 == 0
                      ? "bg-[url(/src/assets/icons/texture.jpg)] div-from-right"
                      : "bg-[url(/src/assets/icons/texture2.jpg)] div-from-left text-right"
                  }`}
                >
                  <CardHeader className=" text-xl p-1 italic bg-black/10">
                    {new Date(concert.date).toLocaleDateString("fr", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </CardHeader>
                  <CardContent className=" p-2 ">
                    <div className=" text-3xl ">
                      <div>{concert.event}</div>
                    </div>
                    <div className="mx-auto italic sm:text-base text-xl ">
                      ({concert.location})
                    </div>
                  </CardContent>
                  <CardFooter
                    onClick={() =>
                      concert.url && window.open(concert.url, "__blank")
                    }
                    className="cursor-pointer p-1 border rounded flex justify-center text-center bg-black/80"
                  >
                    <ArrowBigRightIcon
                      fill="white"
                      className=" animate-pulse"
                    />
                    <div>Plus d'infos ici</div>
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

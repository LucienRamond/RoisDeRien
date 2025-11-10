import "react-day-picker/src/style.css";
import { past_concerts, upcoming_concert } from "./ConcertList";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
      <div className=" grid grid-cols-[1fr_max-content_1fr] text-center items-center">
        <Separator className="bg-black" />
        <div className="px-2 font-bold text-xl">Concerts à venir</div>
        <Separator className="bg-black" />
      </div>

      {upcoming_concert.length != 0 && (
        <div className=" mx-auto p-2">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
            {upcoming_concert &&
              upcoming_concert.map((concert: ConcertType) => {
                return (
                  <Card
                    id="concert-card"
                    key={concert.id}
                    className={` hover:cursor-pointer hover:bg-[right] hover:opacity-80 p-2 bg-cover aspect-square max-h-[300px] min-w-[90vw] sm:min-w-full max-w-[500px] grid items-center hover:shadow-black border-black h-full  text-white font-bold ${
                      concert.id % 2 == 0
                        ? "bg-[url(/src/assets/icons/texture.jpg)] div-from-right"
                        : "bg-[url(/src/assets/icons/texture2.jpg)] div-from-left text-right"
                    }`}
                    onClick={() =>
                      concert.url && window.open(concert.url, "__blank")
                    }
                  >
                    <CardHeader className=" text-xl p-1 italic bg-black/10">
                      {new Date(concert.date).toLocaleDateString("fr", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </CardHeader>
                    <Separator
                      className={`${concert.id % 2 != 0 && " ml-auto"} w-[50%]`}
                    />
                    <CardContent className=" p-2 ">
                      <div className=" text-3xl ">
                        <div>{concert.event}</div>
                      </div>
                    </CardContent>
                    <Separator
                      className={`${concert.id % 2 != 0 && " ml-auto"} w-[50%]`}
                    />
                    <CardFooter
                      className={`${concert.id % 2 != 0 && "justify-end"}`}
                    >
                      ({concert.location})
                    </CardFooter>
                  </Card>
                );
              })}
          </div>
        </div>
      )}

      {upcoming_concert.length == 0 && (
        <div className=" text-center italic p-2">Aucun concerts à venir...</div>
      )}

      <div className=" grid grid-cols-[1fr_max-content_1fr] text-center items-center">
        <Separator className="bg-black" />
        <div className="px-2 font-bold text-xl">Concerts passés</div>
        <Separator className="bg-black" />
      </div>

      <div className=" mx-auto p-2">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
          {past_concerts &&
            past_concerts.map((concert: ConcertType) => {
              return (
                <Card
                  id="concert-card"
                  key={concert.id}
                  className={` hover:cursor-pointer hover:bg-[right] opacity-80 hover:opacity-100 p-2 bg-cover aspect-square max-h-[300px] min-w-[90vw] sm:min-w-full max-w-[500px] grid items-center hover:shadow-black border-black h-full  text-white font-bold ${
                    concert.id % 2 == 0
                      ? "bg-[url(/src/assets/icons/texture.jpg)] div-from-right"
                      : "bg-[url(/src/assets/icons/texture2.jpg)] div-from-left text-right"
                  }`}
                  onClick={() =>
                    concert.url && window.open(concert.url, "__blank")
                  }
                >
                  <CardHeader className=" text-xl p-1 italic bg-black/10">
                    {new Date(concert.date).toLocaleDateString("fr", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </CardHeader>
                  <Separator
                    className={`${concert.id % 2 != 0 && " ml-auto"} w-[50%]`}
                  />
                  <CardContent className=" p-2 ">
                    <div className=" text-3xl ">
                      <div>{concert.event}</div>
                    </div>
                  </CardContent>
                  <Separator
                    className={`${concert.id % 2 != 0 && " ml-auto"} w-[50%]`}
                  />
                  <CardFooter
                    className={`${concert.id % 2 != 0 && "justify-end"}`}
                  >
                    ({concert.location})
                  </CardFooter>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}

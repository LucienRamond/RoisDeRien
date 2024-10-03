import { useState } from "react";
import { fr } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CameraIcon, ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import concerts from "./ConcertList";

export default function Concerts() {
  const [selected, setSelected] = useState<Date>();

  const showEventDetails = () => {
    const match = concerts.find(
      (concert) =>
        new Date(concert.date).toLocaleDateString() ==
        selected?.toLocaleDateString()
    );
    return match ? (
      <Link to={"/"} className=" flex justify-center gap-2">
        <div className=" text-blue-800 font-semibold hover:underline">
          {match.event} à {match.location}
        </div>
        <CameraIcon color="blue" />
      </Link>
    ) : (
      ""
    );
  };

  const concertsList = () => {
    const list: Array<Date> = [];
    concerts.forEach((concert) => list.push(new Date(concert.date)));
    return list;
  };

  return (
    <div className="min-[930px]:flex-row flex flex-col-reverse gap-4 sm:px-4  mx-auto border border-foreground py-4  lg:max-w-[80%]  sm:max-w-[90%] min-h-[60vh] sm:rounded bg-white shadow-lg">
      <div className="border w-fit mx-auto">
        <DayPicker
          showOutsideDays
          mode="single"
          selected={selected}
          onSelect={setSelected}
          locale={fr}
          modifiers={{
            concerts: concertsList(),
          }}
          modifiersClassNames={{
            concerts: "calendar-event-class ",
          }}
          footer={showEventDetails()}
        />
      </div>
      <div className="w-full sm:border p-2">
        <div className=" font-bold">Concerts à venir :</div>
        <div>
          <Table className=" border rounded">
            <TableHeader className=" bg-gray-100 ">
              <TableHead>Date</TableHead>
              <TableHead>Evenement</TableHead>
              <TableHead>Lieu</TableHead>
              <TableHead>Infos</TableHead>
            </TableHeader>
            <Separator />
            <TableBody>
              {concerts.map((concert) => {
                return (
                  <TableRow key={concert.id}>
                    <TableCell>
                      {new Date(concert.date).toLocaleDateString("fr", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell>{concert.event}</TableCell>
                    <TableCell>{concert.location}</TableCell>
                    <TableCell>
                      <ExternalLinkIcon
                        className=" hover:cursor-pointer"
                        color="blue"
                        onClick={() => document.location.assign(concert.url)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

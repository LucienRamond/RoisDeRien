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
import { ExternalLinkIcon } from "lucide-react";
import concerts from "./ConcertList";

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
              {concerts &&
                concerts.map((concert: ConcertType) => {
                  return (
                    <TableRow key={concert.id}>
                      <TableCell>
                        {new Date(concert.date).toLocaleDateString("fr", {
                          day: "2-digit",
                          month: "long",
                          year: "2-digit",
                        })}
                      </TableCell>
                      <TableCell>{concert.event}</TableCell>
                      <TableCell>{concert.location}</TableCell>
                      <TableCell>
                        <ExternalLinkIcon
                          className=" hover:cursor-pointer"
                          color="blue"
                          onClick={() => window.open(concert.url, "__blank")}
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

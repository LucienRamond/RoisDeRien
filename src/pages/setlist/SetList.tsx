import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import songs from "./songs";
import youtube from "../../assets/icons/youtube.png";

export default function SetList() {
  return (
    <>
      <div className=" font-semibold max-w-[800px] mx-auto py-2 text-center border-b">
        Set List
      </div>
      <Table className=" mx-auto max-w-[800px]">
        <TableHeader className=" bg-black/5">
          <TableRow>
            <TableHead></TableHead>
            <TableHead className=" px-0">Groupe</TableHead>
            <TableHead className=" px-0 text-center">Chanson</TableHead>
            <TableHead className="text-right">Lien</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {songs
            .sort((a, b) => a.composer.localeCompare(b.composer))
            .map((song, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium p-0 text-center">
                  {index + 1}
                </TableCell>
                <TableCell className=" px-0 ita font-semibold">
                  {song.composer}
                </TableCell>
                <TableCell className=" px-0 text-center italic">
                  {song.name}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex w-auto justify-end cursor-pointer ">
                    <img
                      src={youtube}
                      width={25}
                      onClick={() =>
                        song.url && window.open(song.url, "__blank")
                      }
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className=" text-center">
              Et bien d'autres encore...
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}

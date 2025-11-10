import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import videos from "./Videos";
import events from "./Events";
import { CameraIcon, ScrollTextIcon, VideoIcon } from "lucide-react";
import SetList from "../setlist/SetList";

export default function Medias() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogImg, setDialogImg] = useState("");

  return (
    <div className="lg:max-w-[75%]  sm:max-w-[90%] mx-auto border border-foreground p-4  min-h-[500px] sm:rounded bg-white shadow-lg">
      <Tabs defaultValue="photos">
        <TabsList className=" rounded-none w-full grid grid-cols-3 p-0 bg-white">
          <TabsTrigger value="photos" className=" rounded-none">
            <div className="flex gap-2 items-center">
              <CameraIcon />
              <div className=" sm:block hidden font-bold uppercase">Photos</div>
            </div>
          </TabsTrigger>
          <TabsTrigger className=" rounded-none" value="videos">
            <div className="flex gap-2 items-center">
              <VideoIcon />
              <div className=" sm:block hidden font-bold uppercase">Vidéos</div>
            </div>
          </TabsTrigger>
          <TabsTrigger className=" rounded-none" value="set_list">
            <div className="flex gap-2 items-center">
              <ScrollTextIcon />
              <div className=" sm:block hidden font-bold uppercase">
                Set list
              </div>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <ColumnsPhotoAlbum
            spacing={1}
            photos={events}
            onClick={({ photo }) => {
              setDialogImg(photo.src);
              setOpenDialog(!openDialog);
            }}
          />
          <Dialog open={openDialog}>
            <DialogContent
              aria-describedby="Photo de concert"
              className="rounded sm:w-auto [&>button]:hidden p-0 gap-0 max-w-[95%] max-h-[95%] overflow-hidden"
              onClick={() => setOpenDialog(false)}
            >
              <DialogTitle></DialogTitle>
              <img src={dialogImg} />
            </DialogContent>
          </Dialog>
        </TabsContent>
        <TabsContent value="videos">
          <div className="grid sm:grid-cols-2 gap-2 mx-auto p-2 ">
            {videos.map((el) => {
              return (
                <Card key={el.id} className=" hover:shadow-black h-full w-full">
                  <CardContent className="p-0 w-full">
                    <video
                      controls
                      className="w-full h-full object-cover overflow-hidden border rounded-t-lg"
                      poster={el.img}
                    >
                      <source src={el.video} />
                    </video>
                  </CardContent>
                  <CardFooter className="py-2 grid">
                    <div className="mx-auto flex gap-2 font-bold sm:text-base text-xs text-center">
                      <div>{el.name}</div>
                      <div>{el.location}</div>
                    </div>
                    <div className="mx-auto italic sm:text-base text-xs text-center">
                      {el.title}
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="set_list">
          <SetList />
        </TabsContent>
      </Tabs>
    </div>
  );
}

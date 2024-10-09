import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import events from "./Events";
import { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Medias() {
  const [showPhotos, setShowPhotos] = useState(false);
  const [event, setEvent] = useState(events[0]);
  const [photosList, setPhotosList] = useState<Array<string>>([]);

  useEffect(() => {
    const img = [];
    for (const image in event.photos) {
      img.push(image);
    }
    setPhotosList(img);
  }, [showPhotos]);

  return (
    <div className="lg:max-w-[80%]  sm:max-w-[90%] mx-auto border border-foreground p-4  min-h-[500px] sm:rounded bg-white shadow-lg">
      <Tabs defaultValue="photos">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="photos" onClick={() => setShowPhotos(false)}>
            Photos
          </TabsTrigger>
          <TabsTrigger value="videos">Vidéos</TabsTrigger>
        </TabsList>
        <TabsContent value="photos" className="flex gap-2">
          {showPhotos ? (
            <div id="animated-thumbnails" className="w-full">
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="grid grid-cols-3 gap-1 sm:auto-rows-[300px] auto-rows-[150px]"
              >
                {photosList.map((image) => {
                  return (
                    <a key={image} href={image} className="h-full w-full">
                      <img
                        src={image}
                        className=" object-cover w-full h-full"
                      />
                    </a>
                  );
                })}
              </LightGallery>
            </div>
          ) : (
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-2 mx-auto ">
              {events.map((event) => {
                return (
                  <Card
                    className=" hover:shadow-black sm:h-[350px] h-[250px] w-full cursor-pointer"
                    onClick={() => {
                      setEvent(event);
                      setShowPhotos(true);
                    }}
                  >
                    <CardContent className="px-0 pb-2 h-[80%] w-full">
                      <img
                        alt=""
                        src={event.card}
                        className="w-full h-full object-cover overflow-hidden border rounded-t-lg"
                      />
                    </CardContent>
                    <CardFooter className=" h-[20%] pb-2 grid">
                      <div className="mx-auto font-bold text-xs text-center">
                        {event.name}
                      </div>
                      <div className="mx-auto italic sm:text-sm text-xs text-center">
                        {event.location}
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
        <TabsContent value="videos"></TabsContent>
      </Tabs>
    </div>
  );
}

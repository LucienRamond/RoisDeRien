import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import events from "./Events";
import videos from "./Videos";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Medias() {
  const displayPhotos = (event: Record<string, () => Promise<unknown>>) => {
    const imgs = [];
    let index = 0;
    for (const image in event) {
      imgs.push(
        <CarouselItem key={index}>
          <div className="p-1 h-full">
            <Card className=" h-full">
              <CardContent className=" h-full flex items-center justify-center p-1">
                <img
                  src={image}
                  className="rounded w-full h-full object-cover overflow-hidden"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      );
      index++;
    }
    return imgs;
  };

  return (
    <div className="lg:max-w-[80%]  sm:max-w-[90%] mx-auto border border-foreground p-4  min-h-[500px] sm:rounded bg-white shadow-lg">
      <Tabs defaultValue="photos">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Vidéos</TabsTrigger>
        </TabsList>
        <TabsContent value="photos" className="grid gap-2">
          <div className="grid sm:grid-cols-2 gap-2 mx-auto ">
            {events.map((event) => {
              return (
                <Card className=" hover:shadow-black h-full w-full">
                  <CardContent className=" p-0 flex justify-center">
                    <Carousel className="w-full max-w-[80%]">
                      <CarouselContent className=" h-[400px] lg:h-[500px] 2xl:h-[600px]">
                        {displayPhotos(event.photos)}
                      </CarouselContent>

                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </CardContent>
                  <CardFooter className="py-2 grid">
                    <div className="mx-auto flex gap-2 font-bold sm:text-base text-center">
                      <div>{event.name}</div>
                    </div>
                    <div className="mx-auto italic sm:text-base text-sm text-center">
                      {event.location}
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="videos">
          <div className="grid sm:grid-cols-2 gap-2 mx-auto ">
            {videos.map((el) => {
              return (
                <Card className=" hover:shadow-black h-full w-full">
                  <CardContent className="p-0 w-full">
                    <video
                      controls
                      className="w-full h-full object-cover overflow-hidden border rounded-t-lg"
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
      </Tabs>
    </div>
  );
}

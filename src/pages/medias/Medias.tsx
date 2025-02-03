import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import events from "./Events";
import videos from "./Videos";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import EmblaCarousel from "@/components/ui/carousel/carousel";

export default function Medias() {
  const displayPhotos = (event: Record<string, () => Promise<unknown>>) => {
    const imgs = [];
    for (const image in event) {
      imgs.push(
        <img
          src={image}
          className="rounded-t-lg h-full object-cover overflow-hidden"
        />
      );
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
          <div className="grid lg:grid-cols-2 gap-2 mx-auto ">
            {events.map((event) => {
              return (
                <Card
                  key={event.id}
                  className=" hover:shadow-black border-black h-full w-full"
                >
                  <CardContent className=" p-0 flex justify-center border-b">
                    <EmblaCarousel slides={displayPhotos(event.photos)} />
                  </CardContent>
                  <CardFooter className="py-1 grid">
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
                <Card key={el.id} className=" hover:shadow-black h-full w-full">
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

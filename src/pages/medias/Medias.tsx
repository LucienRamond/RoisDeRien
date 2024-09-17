import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Bessieres from "./img/Bessieres";

export default function Medias() {
  return (
    <div className="mx-auto border border-foreground p-4 sm:max-w-[80%] min-h-[500px] sm:rounded bg-white shadow-lg">
      <Tabs defaultValue="photos">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Vidéos</TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <Bessieres />
        </TabsContent>
        <TabsContent value="videos"></TabsContent>
      </Tabs>
    </div>
  );
}

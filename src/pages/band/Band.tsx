import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import Yves from "@/assets/members/yves.jpg";
import Laurent from "@/assets/members/laurent.jpg";
import Fred from "@/assets/members/fred.jpg";
import Vincent from "@/assets/members/vincent.jpg";
import Lucien from "@/assets/members/lucien.jpg";
import Mic from "@/assets/icons/microphone.svg";
import Guitar1 from "@/assets/icons/electric-guitar.svg";
import Guitar2 from "@/assets/icons/electric-guitar2.svg";
import Bass from "@/assets/icons/bass.svg";
import Drum from "@/assets/icons/drum.svg";

export default function Band() {
  return (
    <div className="lg:max-w-[80%]  sm:max-w-[90%] mx-auto border border-foreground p-4  min-h-[500px] sm:rounded bg-white shadow-lg">
      <div>
        <h2 className="text-center text-xl font-bold">Le groupe</h2>
      </div>
      <Separator className="h-[1px] w-[80%] my-2 mx-auto bg-foreground" />
      <p className=" mb-2">
        Composé de 5 amis de longue date, Les Rois de Rien, c'est avant tout une
        passion partagée pour le Rock et la bière ! Un chanteur, deux guitares
        électriques, une hache en guise de basse et un batteur: tout ce qu'il
        faut pour vous émoustiller vos tympans ! <br />
        Fans incontestés de Metallica dont ils reprennent de nombreux titres ("A
        quand le Tribute ?!" Calmez vous, ça arrive!), ils sont également
        influencés par Nirvana, Megadeath, SOAD, ainsi que par les grands
        classiques français : Noir Désir,Luke, Trust... <br />
        Le leader, chanteur et multi-instrumentiste Yves, aux travers de ses
        racines espagnoles, amène sa touche personnelle avec des reprises de
        Ska-P, Kaotiko mais aussi un répertoire complet de chansons françaises
        version Rock : Montand, Brel, Brassens... <br />
        Très actifs dans le Nord Toulousain ces 10 dernières années (Bouloc,
        Villeneuve-Lès-Bouloc, Bessières, Villaudric...), les Rois de Rien c'est
        également de nombreuses compositions engagées tels que
        <i>Président immigré</i>, <i>La chute</i>, <i>Plaisirs édulcorés</i>...
      </p>
      <div className="grid gap-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <Card className=" hover:shadow-black">
          <CardHeader>
            <CardTitle className="text-center">Yves</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <img className="h-[270px] w-full object-cover" src={Yves} alt="" />
          </CardContent>
          <CardFooter>
            <img src={Mic} alt="mic" className=" h-10 mx-auto" />
          </CardFooter>
        </Card>
        <Card className=" hover:shadow-black">
          <CardHeader>
            <CardTitle className="text-center">Laurent</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <img
              className="h-[270px] w-full object-cover"
              src={Laurent}
              alt=""
            />
          </CardContent>
          <CardFooter>
            <img src={Guitar1} alt="mic" className=" h-10 mx-auto" />
          </CardFooter>
        </Card>
        <Card className=" hover:shadow-black">
          <CardHeader>
            <CardTitle className="text-center">Vincent</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <img
              className="h-[270px] w-full object-cover"
              src={Vincent}
              alt=""
            />
          </CardContent>
          <CardFooter>
            <img src={Guitar2} alt="mic" className=" h-10 mx-auto" />
          </CardFooter>
        </Card>
        <Card className=" hover:shadow-black">
          <CardHeader>
            <CardTitle className="text-center">Fred</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <img className="h-[270px] w-full object-cover" src={Fred} alt="" />
          </CardContent>
          <CardFooter>
            <img src={Bass} alt="mic" className=" h-10 mx-auto" />
          </CardFooter>
        </Card>
        <Card className=" hover:shadow-black">
          <CardHeader>
            <CardTitle className="text-center">Lucien</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <img
              className="h-[270px] w-full object-cover"
              src={Lucien}
              alt=""
            />
          </CardContent>
          <CardFooter>
            <img src={Drum} alt="mic" className=" h-10 mx-auto" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

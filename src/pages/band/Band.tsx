import { Separator } from "@radix-ui/react-separator";
import Group from "@/pages/medias/assets/maboulrock/card.jpg";

export default function Band() {
  return (
    <div className="lg:max-w-[80%]  sm:max-w-[90%] mx-auto border border-foreground p-4  min-h-[500px] sm:rounded bg-white shadow-lg">
      <div>
        <h2 className="text-center text-xl font-bold">Le groupe</h2>
      </div>
      <Separator className="h-[1px] w-[80%] my-2 mx-auto bg-foreground" />
      <p className=" mb-2 sm:p-4">
        Composé de <b>5 amis </b>de longue date, <b>Les Rois de Rien</b>, c'est
        avant tout une passion partagée pour <b>le Rock et la bière</b> ! Un
        chanteur, deux guitares électriques, une hache en guise de basse et un
        batteur: tout ce qu'il faut pour émoustiller vos tympans et vous donner
        soif ! Fans incontestés de
        <b> Metallica</b> dont ils reprennent de nombreux titres (
        <i>"A quand le Tribute ?!" Calmez vous, ça arrive!</i>), ils sont
        également influencés par <b>Nirvana</b>, <b>Megadeath</b>, <b>SOAD</b>,
        ainsi que par les grands classiques français : <b>Noir Désir</b>,
        <b>Luke</b>, <b>Trust</b>... <br />
        Le leader, chanteur et multi-instrumentiste
        <b> Yves</b>, fort de ses racines espagnoles, amène sa touche
        personnelle avec des reprises de <b>Ska-P</b>, <b>Kaotiko</b> mais aussi
        un répertoire complet de chansons françaises version Rock :
        <b> Montand</b>, <b>Brel</b>,<b>Brassens</b>... <br />
        Très actifs dans le
        <b> Nord Toulousain</b> ces 10 dernières années (Bouloc,
        Villeneuve-Lès-Bouloc, Bessières, Villaudric...), les Rois de Rien c'est
        également de nombreuses compositions engagées tels que
        <i> Président immigré</i>, <i>La chute</i>, <i>Plaisirs édulcorés</i>...
      </p>
      <div className=" flex justify-center">
        <img
          src={Group}
          alt=""
          className=" max-h-[400px] border rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

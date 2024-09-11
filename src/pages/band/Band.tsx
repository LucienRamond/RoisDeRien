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
    <div className="mx-auto border border-foreground p-4 my-8  sm:max-w-[80%] min-h-[500px] sm:rounded bg-white shadow-lg">
      <div>
        <h2 className="text-center text-xl font-bold">Le groupe</h2>
      </div>
      <Separator className="h-[1px] w-[80%] my-2 mx-auto bg-foreground" />
      <p className=" mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi
        amet inventore libero accusantium delectus, odio dicta sunt tempora aut
        quod porro pariatur consectetur doloribus. Ratione tempore, eos
        exercitationem praesentium quidem deleniti totam quos officia quas. Est
        saepe, nemo facere provident in pariatur. Porro nobis, inventore dolores
        eum in quas voluptate aliquid fugit doloribus adipisci modi odit. Ipsa
        numquam veritatis delectus vel eveniet doloribus ut, deserunt neque,
        debitis sint autem eaque ea. Sapiente, fugiat similique. Libero sit eum
        iusto esse delectus laudantium hic aperiam obcaecati, unde explicabo
        fugiat. Excepturi libero quisquam aperiam a eaque tenetur autem
        voluptatum iste maiores reiciendis!
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

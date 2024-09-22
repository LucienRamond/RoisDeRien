import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import imagea from "@/assets/img/concerts/concert_acoustique/1.jpg";
import imageaa from "@/assets/img/concerts/concert_acoustique/2.jpg";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Bessieres() {
  const [showImages, setShowImages] = useState(false);

  return (
    <div>
      {showImages ? (
        <div id="animated-thumbnails">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-3 gap-1"
          >
            <a href={imagea}>
              <img alt="" src={imagea} />
            </a>
            <a href={imageaa}>
              <img alt="" src={imageaa} />
            </a>
          </LightGallery>
        </div>
      ) : (
        <Card
          className=" hover:shadow-black w-fit cursor-pointer"
          onClick={() => setShowImages(true)}
        >
          <CardContent className="px-0 pb-2">
            <img
              alt=""
              src={imagea}
              className=" object-cover wrap h-[250px] w-[400px] border rounded-t-lg"
            />
          </CardContent>
          <CardFooter className=" pb-2">
            <div className="mx-auto font-bold">Bessieres 2022</div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

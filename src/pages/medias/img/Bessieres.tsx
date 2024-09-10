import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import imagea from "@/assets/img/concerts/concert_acoustique/1.jpg";
import imageaa from "@/assets/img/concerts/concert_acoustique/2.jpg";

export default function Bessieres() {
  return (
    <div id="animated-thumbnails">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-3"
      >
        <a href={imagea}>
          <img alt="" src={imagea} />
        </a>
        <a href={imageaa}>
          <img alt="" src={imageaa} />
        </a>
      </LightGallery>
    </div>
  );
}

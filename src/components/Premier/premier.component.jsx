import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/poster.component";

//configs
import PosterCarouselSettings from "../../Config/PosterCarousel.config";
import PremierImages from "../../Config/tempPostersconfig";



export const Premier= () => {

    return (
        <div>
          <div className="flex flex-col items-start">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm">Brand new movies every time we release</p>
          </div>
        <Slider {...PosterCarouselSettings}>
            {PremierImages.map((image)=>(
                <Poster {...image} isDark/>
            ))}
        </Slider>
        </div>
    );
}

export default Premier;
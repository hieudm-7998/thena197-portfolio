import React, { useEffect } from "react";
import FilmPhotosData from "./../../datas/FilmPhotos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function FilmPhotos() {
  useEffect(() => {
    document.title = "theNa197 Portfolio | Film Photos";
  }, []);

  return (
    <div id="thena197-filmphotos">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FilmPhotosData?.map((item) => {
          return (
            <div
              key={item.id}
              className="mb-5 gallery-block w-full text-center"
            >
              <Link to={item.tag}>
                <LazyLoadImage
                  src={item.thumbnail}
                  alt=""
                  className="object-cover w-full rounded-lg mb-3"
                />
                <p className="uppercase font-semibold tracking-wide">
                  {item.title}
                </p>
                <p className="text-gray-600 uppercase tracking-wide italic text-sm">
                  {item.date}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

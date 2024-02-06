import React from "react";
import ants_cover from "../../art/ants_cover_w_binder.jpeg";
import bjork_cover from "../../art/bjork_cover.png";
import trees from "../../art/trees.JPG";
import dog_single from "../../art/rain.jpeg";
import rust_single from "../../art/blue_rust.jpg";
import lwu_cover from "../../art/1001lwu.JPG";

export default function ReleaseContent() {
  let releaseInfo = [
    [
      "EP",
      "And If You Truly Liked Ants...",
      "https://labelofgoods.bandcamp.com/album/and-if-you-truly-liked-ants",
      ants_cover,
    ],
    [
      "EP",
      "20BJÖRKCOVERCOMP23",
      "https://cohortbbb.bandcamp.com/album/20bj-rkcovercomp23",
      bjork_cover,
    ],
    [
      "EP",
      "1001REMIXEDUSA",
      "https://cohortbbb.bandcamp.com/album/1001remixedusa",
      trees,
    ],
    [
      "EP",
      "1001 Lukewarm USA",
      "https://cohortbbb.bandcamp.com/album/1001-lukewarm-usa",
      lwu_cover,
    ],
    [
      "Single",
      "Dog Bite",
      "https://cohortbbb.bandcamp.com/track/dog-bite",
      dog_single,
    ],
    [
      "Single",
      "Rust",
      "https://cohortbbb.bandcamp.com/track/rust",
      rust_single,
    ],
  ];

  function openLink(link: string) {
    window.open(link, "_blank");
  }

  return (
    <div className="release-content">
      {releaseInfo.map((info) => {
        return (
          <div className="release-info" onClick={() => openLink(info[2])}>
            <div>
              {info[0]} : {info[1]}
            </div>
            <img src={info[3]} alt="ants_cover" className="release-img" />
          </div>
        );
      })}
    </div>
  );
}

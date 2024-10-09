import React from "react";

export default function ShowContent() {
  // place, date, link, hover
  let showInfo = [
    {
      where: "Gold Sounds, NYC",
      when: "Sat Sept, 14",
      how: "https://dice.fm/event/l8qowb-unsee-cohort-b-shiverboard-cometa-negra-14th-sep-gold-sounds-new-york-tickets?lng=en-US",
      active: true,
    },
    {
      where: "The Wood Shop, NYC",
      when: "Fri Sept, 20",
      how: "https://dice.fm/event/8ee7y5-trophy-husband-servants-holiem-cohort-b-20th-sep-the-wood-shop-new-york-city-tickets?lng=en-US",
      active: true,
    },
    {
      where: "Main Drag, NYC",
      when: "Fri Oct, 11",
      how: "https://maindragmusic.com/collections/live-at-main-drag/products/10-11-24-a-deer-a-horse-cohort-b-special-guest-tba",
      active: true,
    },
  ];

  function openLink(link: string) {
    window.open(link, "_blank");
  }

  return (
    <div className="show-content">
      {showInfo.map((info) => {
        const { where, when, how, active } = info;

        let content = active ? (
          <div className="show-info" onClick={() => openLink(how)}>
            <div>{where}</div>
            <div>{when}</div>
          </div>
        ) : (
          <div className="noClick">
            <div>{where}</div>
            <div>{when}</div>
          </div>
        );

        return <>{content}</>;
      })}
    </div>
  );
}

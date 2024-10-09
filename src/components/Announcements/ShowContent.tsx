import React from "react";

export default function ShowContent() {
  // place, date, link, hover
  let showInfo = [
    {
      where: "Main Drag, NYC",
      when: "Fri Oct, 11",
      how: "https://maindragmusic.com/collections/live-at-main-drag/products/10-11-24-a-deer-a-horse-cohort-b-special-guest-tba",
      active: true,
      who: "A Deer A Horse, Netherlands",
    },
    {
      where: "Brooklyn Steel, NYC",
      when: "Wed Dec, 11",
      how: "https://www.bowerypresents.com/shows/detail/580730-the-jesus-lizard",
      active: true,
      who: "The Jesus Lizard",
    },
  ];

  function openLink(link: string) {
    window.open(link, "_blank");
  }

  return (
    <div className="show-content">
      {showInfo.map((info) => {
        const { who, where, when, how, active } = info;

        let content = active ? (
          <div className="show-info" onClick={() => openLink(how)}>
            <div className="show-who">{who}</div>
            <div>{where}</div>
            <div>{when}</div>
          </div>
        ) : (
          <div className="noClick">
            <div className="show-who">{who}</div>
            <div>{where}</div>
            <div>{when}</div>
          </div>
        );

        return <>{content}</>;
      })}
    </div>
  );
}

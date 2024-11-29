import React from "react";

export default function ShowContent() {
  // place, date, link, hover
  let showInfo = [
    {
      who: "THE JESUS LIZARD",
      where: "Brooklyn Steel, NYC",
      when: "Wed Dec, 11",
      how: "https://www.axs.com/events/580730/the-jesus-lizard-tickets?skin=brooklynsteel",
      active: true,
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
            <div className="show-header">{who}</div>
            <div>{where}</div>
            <div>{when}</div>
          </div>
        ) : (
          <div className="noClick">
            <div className="show-header">{who}</div>
            <div>{where}</div>
            <div>{when}</div>
          </div>
        );

        return <>{content}</>;
      })}
    </div>
  );
}

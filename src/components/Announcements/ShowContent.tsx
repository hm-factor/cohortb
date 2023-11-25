import React from "react";

export default function ShowContent() {
  // place, date, link, active
  let showInfo = [
    {
      where: "Knitting Factory, NY",
      when: "Wednesday Dec 6",
      how: "https://www.knittingfactory.com/tm-event/libby-quinn-cold-court-cohort-b/",
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

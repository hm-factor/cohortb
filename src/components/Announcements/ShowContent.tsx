import React from "react";

export default function ShowContent() {
  // place, date, link, active
  // {
  //   where: ,
  //   when: ,
  //   how: ,
  //   active: ,
  // },
  let showInfo = [
    {
      where: "Trans Pecos, NY",
      when: "Thurs May, 16",
      how: "https://www.thetranspecos.com/cal/2024/5/16/wiring-naras-room-screenager-cohort-b",
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

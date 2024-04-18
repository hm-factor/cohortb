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
      where: "Light Club Lamp Shop, VT",
      when: "Tuesday April 23",
      how: "https://www.instagram.com/lightclublampshop/?hl=en",
      active: true,
    },
    {
      where: "DM 4 ADDY, MA",
      when: "Wednesday April 24",
      how: "https://www.instagram.com/cohortbbb/?hl=en",
      active: true,
    },
    {
      where: "Stupid Baby, PA",
      when: "Thursday April 25",
      how: "https://www.instagram.com/stupidbabyphl/?locale=fr",
      active: true,
    },
    {
      where: "DM 4 ADDY, NYC",
      when: "Sunday April 28",
      how: "https://www.instagram.com/cohortbbb/?hl=en",
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

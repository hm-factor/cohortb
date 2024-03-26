import React from "react";

export default function ShowContent() {
  // place, date, link, active
  let showInfo = [
    {
      where: "Mercury Lounge, NY",
      when: "Sunday Mar 31",
      how: "https://mercuryeastpresents.com/tm-event/sleepwell-holiem-glimmer-cohort-b/",
      active: true,
    },
    {
      where: "The Broadway, NY",
      when: "Friday Apr 4",
      how: "https://www.eventbrite.com/e/tula-vera-w-drook-cohort-b-tickets-819267730837?aff=oddtdtcreator",
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

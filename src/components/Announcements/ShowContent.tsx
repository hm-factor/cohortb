import React from "react";

export default function ShowContent() {
  // place, date, link, active
  let showInfo = [
    {
      where: "Trans Pecos, NY",
      when: "Friday Feb 9",
      how: "https://www.venuepilot.co/events/94547/orders/new#/",
      active: true,
    },
    {
      where: "The Broadway, NY",
      when: "Thursday Feb 15",
      how: "https://www.eventbrite.com/e/mother-cell-w-fatboi-sharif-cronies-cohort-b-tickets-798935687147?aff=oddtdtcreator",
      active: true,
    },
    {
      where: "Saint Vitus, NY",
      when: "Friday Mar 1",
      how: "https://dice.fm/event/axvpd-couch-slut-splinternet-cohort-b-eaten-by-bees-1st-mar-saint-vitus-bar-new-york-tickets?pid=5456a411&_branch_match_id=1090979828181667380&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1Q9NtkhJNLAwskg2SLMvyEyxNTUxNUs0MTQEANx5rJkuAAAA",
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

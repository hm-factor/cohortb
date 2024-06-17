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
      where: "El Dorado, Troy",
      when: "Sun June, 23",
      how: "",
      active: false,
    },
    {
      where: "The Garrison, Toronto",
      when: "Tues June, 25",
      how: "https://dice.fm/event/25yr6-lip-critic-25th-jun-the-garrison-toronto-tickets?pid=530cb286&_branch_match_id=1090979828181667380&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1S8ysDBKNE4zSE41TrYvyEyxNTU2SE4ysjADAKCkrJIuAAAA",
      active: true,
    },
    {
      where: "The 27 Club, Ottawa",
      when: "Wed June, 26",
      how: "https://www.ticketweb.ca/event/lip-critic-los3r-scrip-issue-the-27-club-tickets/13544513?irgwc=1&clickid=yg8SaI2XaxyNTy8wNYVfgyhTUkHTMhWAw0TJSU0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272",
      active: true,
    },
    {
      where: "O'Briens Pub, Boston",
      when: "Thurs June, 27",
      how: "https://obrienspubboston.com/show/lip-critic/",
      active: true,
    },
    {
      where: "Gold Sounds, NYC",
      when: "Sat June, 29",
      how: "",
      active: false,
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

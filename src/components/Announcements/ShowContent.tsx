export default function ShowContent() {
  // place, date, link, active
  let showInfo = [
    {
      where: "ALPHAVILLE, BK",
      when: "Saturday May 13",
      how: "https://dice.fm/event/eb8rd-blessed-mulva-maneka-cohort-b-13th-may-alphaville-new-york-tickets?pid=be8f0021&_branch_match_id=1068170040227914763&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1Y9ISjM3M00xNjI1TbUvyEyxTUq1SDMwMDIEADn1XJIuAAAA",
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

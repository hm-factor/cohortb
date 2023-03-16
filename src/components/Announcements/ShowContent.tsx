export default function ShowContent() {
  // place, date, link, active
  let showInfo = [
    {
      where: "Heaven Can Wait",
      when: "Sunday March 19",
      how: "https://heavencanwaitnyc.com/event/12959315/cohort-b-butthole-university-no-room-at-the-morgue-and-cometa-negra/",
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

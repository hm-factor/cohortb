export default function ShowContent() {
    
    // place, date, link
    let showInfo = [
        ['Arlenes Grocery', 'Sunday, April 17th', 'https://www.arlenesgrocerynyc.com/events/aux-blood-cohort-b-the-variants-appalling-use/'],
        ['Baby\'s All Right', 'Tuesday May 10th', 'https://www.seetickets.us/event/Cohort-B/479978'],
        // ['Purgatory', 'Sunday June 19th', ''],
        // ['Trans Pecos', 'Sunday July 3rd', ''],
        // ['Mercury Lounge', 'Sunday July 17th', ''],
    ]

    function openLink(link:string) {
        window.open(link, "_blank")
    }

    return (
        <div className="show-content">
            {showInfo.map( (info) => {
                return (
                    <div className="show-info" onClick={()=>openLink(info[2])}>
                        <div>{info[0]}</div>
                        <div>{info[1]}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default function ShowContent() {
    let showInfo = [
        // place, date, link
        ['Arlenes Grocery', 'April 17th', 'https://www.arlenesgrocerynyc.com/events/aux-blood-cohort-b-the-variants-appalling-use/'],
        ['Nowherre', 'April 32th', ''],
        ['Arlenes Grocery', 'April 17th', ''],
        ['Nowherre', 'April 32th', ''],
        ['Arlenes Grocery', 'April 17th', ''],
        ['Nowherre', 'April 32th', ''],
        ['Arlenes Grocery', 'April 17th', ''],
        ['Nowherre', 'April 32th', '']
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
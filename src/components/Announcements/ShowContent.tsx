export default function ShowContent() {
    let showInfo = [
        // place, date, link
        ['Arlenes Grocery', 'April 17th', ''],
        ['Nowherre', 'April 32th', ''],
        ['Arlenes Grocery', 'April 17th', ''],
        ['Nowherre', 'April 32th', ''],
        ['Arlenes Grocery', 'April 17th', ''],
        ['Nowherre', 'April 32th', ''],
        ['Arlenes Grocery', 'April 17th', ''],
        ['Nowherre', 'April 32th', '']
    ]

    return (
        <div className="show-content">
            {showInfo.map( (info) => {
                return (
                    <div className="show-info">
                        <div>{info[0]}</div>
                        <div>{info[1]}</div>
                    </div>
                )
            })}
        </div>
    )
}
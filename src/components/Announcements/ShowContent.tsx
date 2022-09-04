export default function ShowContent() {
    
    // place, date, link, active
    let showInfo = [
        {
            where: 'Berlin Under A',
            when: 'Thursday Sept 15th',
            how: 'https://dice.fm/event/ag2qx-joudy-residency-night-one-15th-sep-berlin-under-a-new-york-tickets',
            active: true
        },
    ]

    function openLink(link:string) {
        window.open(link, "_blank")
    }

    return (
        <div className="show-content">
            {showInfo.map( (info) => {
                const {where, when, how, active} = info;

                let content = active ? (
                    <div className='show-info' onClick={()=>openLink(how)}>
                        <div>{where}</div>
                        <div>{when}</div>
                    </div>
                ) : (
                    <div className='noClick'>
                        <div>{where}</div>
                        <div>{when}</div>
                    </div>
                );
                
                return (
                    <>
                        {content}
                    </>
                )
            })}
        </div>
    )
}
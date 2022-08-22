export default function ShowContent() {
    
    // place, date, link, active
    let showInfo = [
        {
            where:'The Broadway', 
            when:'Thursday August 25th', 
            how:'https://www.eventbrite.com/e/cindy-cane-w-cohort-b-cronies-tickets-380086076687', 
            active: true
        },
        {
            where: 'Bonfire Festival',
            when: 'Sunday August 28th',
            how: 'https://www.eventbrite.com/e/bonfire-2022-peace-bonfire-tickets-396752556577?aff=ebdssbdestsearch',
            active: true
        },
        {
            where: 'Bar Freda',
            when: 'Friday Sept 9th',
            how: '',
            active: false
        },
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
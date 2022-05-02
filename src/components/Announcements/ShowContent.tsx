export default function ShowContent() {
    
    // place, date, link, active
    let showInfo = [
        {
            where:'Baby\'s All Right', 
            when:'Tuesday May 10th', 
            how:'https://www.seetickets.us/event/Cohort-B/479978', 
            active:true
        },
        {
            where:'Purgatory', 
            when:'Sunday June 19th', 
            how:'', 
            active:false
        },
        {
            where:'Trans Pecos', 
            when:'Sunday July 3rd', 
            how:'', 
            active:false
        },
        {
            where:'Mercury Lounge', 
            when:'Sunday July 17th', 
            how:'', 
            active:false
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
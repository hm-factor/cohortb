export default function ShowContent() {
    
    // place, date, link, active
    let showInfo = [
        {
            where:'St Vitus', 
            when:'Thursday June 16th', 
            how:'', 
            active:false
        },
        {
            where:'Purgatory', 
            when:'Sunday June 19th', 
            how:'', 
            active:false
        },
        {
            where:'Trans Pecos', 
            when:'Tuesday June 28', 
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
            where:'Our Wicked Lady', 
            when:'Tuesday June 12th', 
            how:'', 
            active:false
        },
        {
            where:'Mercury Lounge', 
            when:'Monday July 18th', 
            how:'', 
            active:false
        },
        {
            where:'The Broadway', 
            when:'Friday August 19th', 
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
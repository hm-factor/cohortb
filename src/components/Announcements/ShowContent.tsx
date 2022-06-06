export default function ShowContent() {
    
    // place, date, link, active
    let showInfo = [
        {
            where:'St Vitus', 
            when:'Thursday June 16th', 
            how:'https://dice.fm/event/2prxm-smock-cronies-cohort-b-grave-blankets-16th-jun-saint-vitus-bar-new-york-tickets?pid=5456a411&_branch_match_id=711984420778857475&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1Q%2BxSLZMMkpOM0pJMbMvyEyxNTUxNUs0MTQEABKKxDouAAAA', 
            active: true
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
            when:'Tuesday July 12th', 
            how:'', 
            active:false
        },
        {
            where:'The Broadway', 
            when:'Thursday August 35th', 
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
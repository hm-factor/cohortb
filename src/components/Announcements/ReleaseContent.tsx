export default function ReleaseContent() {

    let releaseInfo = [
        ['EP', '1001 Lukewarm USA', 'https://distrokid.com/hyperfollow/cohortb/1001-lukewarm-usa'],
        ['Single', 'Dog Bite', 'https://cohortbbb.bandcamp.com/track/dog-bite'],
        ['Single', 'Rust', 'https://cohortbbb.bandcamp.com/track/rust']
    ]

    function openLink(link:string) {
        window.open(link, "_blank")
    }

    return (
        <div className="release-content">
            {releaseInfo.map( (info) => {
                return (
                    <div className="release-info" onClick={()=>openLink(info[2])}>
                        <div>{info[0]} : {info[1]}</div>
                    </div>
                )
            })}
        </div>
    )
}
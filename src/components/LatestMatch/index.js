import './index.css'

const LatestMatch = props => {
  const {details} = props

  const camelCaseDetails = {
    umpires: details.umpires,
    result: details.result,
    manOfTheMatch: details.man_of_the_match,
    id: details.id,
    date: details.date,
    venue: details.venue,
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    firstInnings: details.first_innings,
    secondInnings: details.second_innings,
    matchStatus: details.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = camelCaseDetails

  const element = (
    <div className="latest-match-container">
      <div className="container-2">
        <div className="match-information-container">
          <p className="oppent-team">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="cometing-team-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="horizontal-line" />
      <div className="innings-details-container">
        <p className="Innings">First Innings</p>
        <p className="Innings-team">{firstInnings}</p>
        <p className="Innings innings-2">Second Innings</p>
        <p className="Innings-team">{secondInnings}</p>
        <p className="man-of-the-match">Man Of The Match</p>
        <p className="Player-name">{manOfTheMatch}</p>
        <p className="umpire">Umpires</p>
        <p className="umpires-names">{umpires}</p>
      </div>
    </div>
  )
  return element
}

export default LatestMatch

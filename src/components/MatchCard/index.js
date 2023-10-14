import './index.css'

const MatchCard = props => {
  const {details} = props

  const camelCaseDetails = {
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    matchStatus: details.match_status,
    result: details.result,
  }
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = camelCaseDetails

  const color = matchStatus === 'Lost' ? 'lose' : 'won'
  const element = (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="match-card-competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-oppnent-team-name">{competingTeam}</p>
      <p className="match-card-match-result">{result}</p>
      <p className={`match-card-match-result-2 ${color}`}>{matchStatus}</p>
    </li>
  )
  return element
}

export default MatchCard

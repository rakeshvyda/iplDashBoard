import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const camelCaseDetails = {
    id: details.id,
    name: details.name,
    teamImageUrl: details.team_image_url,
  }
  const {id, name, teamImageUrl} = camelCaseDetails
  const element = (
    <li className="teamCard">
      <Link to={`/team-matches/${id}`} className="teamCard-2">
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
  return element
}

export default TeamCard

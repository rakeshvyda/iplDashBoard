import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
    Id: '',
  }

  componentDidMount() {
    this.getTeamStats()
  }

  getTeamStats = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    this.setState({
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
      isLoading: false,
      Id: id,
    })
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      isLoading,
      Id,
    } = this.state

    let backGroundColor = null
    switch (Id) {
      case 'RCB':
        backGroundColor = 'royalChallengersBanglore'
        break
      case 'CSK':
        backGroundColor = 'chennaiSuperKings'
        break
      case 'KKR':
        backGroundColor = 'kolkataKnightRiders'
        break
      case 'RR':
        backGroundColor = 'rajastanRoyals'
        break
      case 'SRH':
        backGroundColor = 'sunrisersHyderbad'
        break
      case 'MI':
        backGroundColor = 'mumbaiIndians'
        break
      case 'DC':
        backGroundColor = 'dehliCaptails'
        break
      default:
        backGroundColor = 'kingsXIIPunjab'
        break
    }
    const element = (
      <>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div className={`Team-matches-container ${backGroundColor}`}>
            <img src={teamBannerUrl} className="team-image" alt="team banner" />
            <div className="latest-matches-container">
              <p className="latest-matches-heading">Latest Matches</p>
              <LatestMatch details={latestMatchDetails} />
              <ul className="match-cards-container">
                {recentMatches.map(eachItem => (
                  <MatchCard details={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
    return element
  }
}

export default TeamMatches

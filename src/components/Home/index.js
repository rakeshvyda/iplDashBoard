import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    this.setState({teamCardList: teams, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state
    const element = (
      <>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div className="bg-container">
            <div className="dashboard-title-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="ipl-logo"
                alt="ipl logo"
              />
              <h1 className="dashboard-title">IPL Dashboard</h1>
            </div>
            <ul className="team-list-container">
              {teamCardList.map(eachItem => (
                <TeamCard details={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
    return element
  }
}

export default Home

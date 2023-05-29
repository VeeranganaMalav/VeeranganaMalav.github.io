import React from 'react'
import "../css/Github.css"
import GitHubCalendar from 'react-github-calendar';

const Github = () => {

  return (
    <div className="github-profile">
      <h1>Github Profile</h1>
      {/* <GitHubCalendar username="VeeranganaMalav"/> */}
      {/* <img src="https://ghchart.rshah.org/47689e/VeeranganaMalav" alt="github-calendar" className="react-activity-calendar" /> */}
      <div className="react-activity-calendar">
        <img src="https://ghchart.rshah.org/47689e/VeeranganaMalav" alt="github-calendar" />
      </div>
      <div className="github-charts">
        <img src="https://github-readme-streak-stats.herokuapp.com?user=VeeranganaMalav&theme=prussian&type=png" alt="github-streaks" id="github-streak-stats" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=VeeranganaMalav&theme=prussian&layout=compact" alt="languages-chart" height="195px" width="400px" id="github-top-langs" />
        <img src="https://github-readme-stats.vercel.app/api?username=VeeranganaMalav&theme=prussian" alt="readme-stats" id="github-stats-card" />
      </div>
    </div>
  )
}

export default Github
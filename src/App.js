import React from 'react';


import User from './components/User';
class App extends React.Component {
  render() {
    return(<div>
      <h1>User Information</h1>
      <form>
        <input filler="Github Handle"/>
        <button>Search</button>
      </form>
      <div id="usercard">
        <img width="300px" src="https://avatars.githubusercontent.com/u/89322517?v=4" />
        <a target="_blank" href="https://github.com/JoshuaPattonWeb"><h3>Joshua Patton</h3></a>
        <p>(JoshuaPattonWeb)</p>
        <p>Total Repos: 32</p>
        <p>Total Followers: 21</p>
      </div>
      <div id="followers">
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/45055471?v=4" />
          <a target="_blank" href="https://github.com/Jmz0127"><p>login</p></a>
        </div>
      </div>
    </div>);
  }
}

export default App;

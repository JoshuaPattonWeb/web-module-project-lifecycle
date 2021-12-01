import React, { Component } from 'react'

export default class User extends Component {
    render() {
        const {user} = this.props;
        return (
        <div id="usercard">
            <img width="300px" src={user.avatar_url} />
            <a target="_blank" href="user.html_url"><h3>{user.login}</h3></a>
            <p>({user.login})</p>
            <p>Total Repos: {user.public_repos}</p>
            <p>Total Followers: {user.followers}</p>
        </div>
        )
    }
}

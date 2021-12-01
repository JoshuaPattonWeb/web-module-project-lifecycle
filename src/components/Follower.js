import React, { Component } from 'react'
import FollowerList from './FollowerList';

export default class Follower extends Component {


    render() {
        const {follower} = this.props;
        return (
            <div className="follower">
            <img width="200px" src={follower.avatar_url} />
            <a target="_blank" href={follower.html_url}><p>{follower.login}</p></a>
        </div>
        )
    }
}

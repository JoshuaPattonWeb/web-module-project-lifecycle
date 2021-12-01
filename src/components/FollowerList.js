import React, { Component } from 'react'
import Follower from './Follower'

export default class FollowerList extends Component {
    render() {
        return (
            <div id="followers">
                {
                    this.props.followers.map(follower => {
                        return(
                            <Follower key={follower.login} follower={follower} />
                        )
                    })
                }
            </div>
        )
    }
}

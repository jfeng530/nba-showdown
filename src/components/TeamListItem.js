import React from 'react';
import { NavLink } from 'react-router-dom'

const TeamListItem = (props) => {

    const { team } = props;

    return (
        <NavLink to={"/teams/" + team.id}>
            <div className="item">
                <img className="ui avatar image" src={team.logo} />
                <div className="content">
                    <div className="description">{team.full_name}</div>    
                </div>
            </div>
        </NavLink>
    );

}

export default TeamListItem;

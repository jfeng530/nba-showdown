import React from 'react';
import { NavLink } from 'react-router-dom'

const TeamListItem = (props) => {

    const { team } = props;

    return (
        <>
        <br></br>
        <NavLink to={"/teams/" + team.id}>
            <div className="item">
                <img className="icon" src={team.logo} alt={team.full_name}/>
            </div>
        </NavLink>
        <br></br>
        </>
    );

}

export default TeamListItem;

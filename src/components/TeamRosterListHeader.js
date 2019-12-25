import React from 'react';

const TeamRosterListHeader = () => {
    return (
        <thead>
            <tr className="center aligned">
                <th >Name</th>
                <th>G</th>
                <th>FG</th>
                <th>FGA</th>
                <th>3P</th>
                <th>3PA</th>
                <th>FT</th>
                <th>FTA</th>
                <th>ORB</th>
                <th>DRB</th>
                <th>TRB</th>
                <th>AST</th>
                <th>STL</th>
                <th>BLK</th>
                <th>TO</th>
                <th>PF</th>
                <th>PTS</th>
            </tr>
        </thead>
    );
}

export default TeamRosterListHeader;
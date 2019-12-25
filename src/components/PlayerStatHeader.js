import React from 'react';

const PlayerStatHeader = () => {
    return (
        <thead>
            <tr className="center aligned">
                <th>Name</th>
                <th>Team</th>
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

export default PlayerStatHeader;


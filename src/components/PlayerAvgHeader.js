import React from 'react';

const PlayerAvgHeader = () => {
    return (
        <thead>
            <tr className="center aligned">
                <th>Name</th>
                <th>Team</th>
                <th>GP</th>
                <th>FG</th>
                <th>FGA</th>
                <th>FG%</th>
                <th>3P</th>
                <th>3PA</th>
                <th>3P%</th>
                <th>FT</th>
                <th>FTA</th>
                <th>FT%</th>
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

export default PlayerAvgHeader;
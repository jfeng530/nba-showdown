import React, { Component } from 'react';
import CompareCard from '../components/CompareCard'
import { Grid } from 'semantic-ui-react'

export class CompareContainer extends Component {

    state = {
        player1: {},
        player2: {}
    }

    setPlayer1 = (player) => {
        this.setState({
            player1: player
        })
    }

    setPlayer2 = (player) => {
        this.setState({
            player2: player
        })
    }

    render() {
        return (
            <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <CompareCard setPlayer1={this.setPlayer1}/>
                </Grid.Column>
                <Grid.Column>
                    <CompareCard setPlayer2={this.setPlayer2}/>  
                </Grid.Column>
            </Grid.Row>
            </Grid>
        );
    }
}

export default CompareContainer;

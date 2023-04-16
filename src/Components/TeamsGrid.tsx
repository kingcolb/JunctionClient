import React from 'react';
import styled from 'styled-components'
import { Team } from '../Types'
import TeamBox from './TeamBox';

const Grid = styled.div`
    width: auto;
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 898px) {
        grid-template-columns: repeat(2, 1fr); 
        gap: 5rem 5rem;
    }

    @media (min-width: 2000px) {
        grid-template-columns: repeat(2, 1fr); 
        gap: 3rem 3rem;
    }


`

const TeamsGrid = ({teams}: {teams: Array<Team>}) => {
    return (
        <Grid>
            {teams.map(team => (
                <TeamBox key={team._id} team={team}></TeamBox>
            ))}

        </Grid>
    )
}

export default TeamsGrid
import React from 'react';
import { Team } from '../Types';
import styled from 'styled-components';

const Card = styled.div`
    background-color: white;
    color: white;
    padding: 1rem;
    padding-bottom: 1.5rem;
    height: 17rem;
    max-width: 950px;
    color: black;
    position: relative;
    overflow: visible;

    @media (min-width: 1250px) {
        height: 650px;
    }

`

const Title = styled.div`
    font-size: 38px;
    height: 51px;
    overflow: hidden;

    @media (min-width: 1250px) {
        font-size: 48px;
        height: 140px;
    }
`
const Description = styled.div`
    font-size: 14px;
    margin-top: 15px;
    height: 57px;
    overflow: hidden;
    @media (min-width: 1250px) {
        font-size: 30px;
        height: 150px;
    }
`

const Idea = styled.div`
    font-size: 14px;
    margin-top: 10px;
    height: 57px;
    overflow: hidden;

    @media (min-width: 1250px) {
        font-size: 30px;
        height: 150px;
    }

`
const Role = styled.div`
    font-size: 12px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 0px 5px;
    padding: 1px 5px;
`

const RolesContainer = styled.div`
    font-size: 20px;
    margin-top: 5px;
    height: 60px;
    overflow: hidden;

    @media (min-width: 1250px) {
        font-size: 38px;
        height: 160px;

        ${Role} {
            font-size: 24px;
        }
    }
`

const Roles = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`



const ShowMoreButton = styled.button`
        position: absolute;
        margin-top: 10px;
        bottom: 10px;
        left: calc(50% - 10px);
        width: 1rem;
        height: 1rem;
        background: white;
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
       
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);

        
        @media (min-width: 1250px) {
            width: 2rem;
            height: 2rem;
            border-width: 0 6px 6px 0;
            bottom: 20px;
        }
`

const MoreInfo = styled.div`
    background: white;
    position: relative;
    bottom: -41px;
    min-height: 20rem;
    z-index: 100;
    padding: 20px 15px 70px;
    border: solid black;
    border-width: 0 1px 1px 1px;
    border-radius: 5px;
`

const Pictures = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 20px;
    overflow: hidden;
    flex-wrap: wrap;
    
`
const PictureContainer = styled.div`

`
const Picture = styled.div`
    background: #DADADA;
    height: 120px;
    width: 80px;
    border-radius: 30px;
    border: 9px solid #A3F7CB;
`

const Name = styled.div`
    font-size: 16px;
`

const Contact = styled.div`

`

const Email = styled.div`

`

const ApplyButton = styled.button`
    background: #A3F7CB;
    border: none;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 20px;
    width: 100px;
    height: 30px;
    margin: auto;
    border-radius: 4px;
`
const TeamBox = ({team}: {team: Team}) => {
    const [showMore, setShowMore] = React.useState(false) 

    const handleClick = () => {
        setShowMore(!showMore)
    }
    return (
        <Card>
            <Title>{team.title}</Title>
            <Description>{team.description}</Description>
            <Idea>{team.idea}</Idea>
            <RolesContainer>
                Looking for:
                <Roles>
                    {team.roles ? team.roles.map(role => <Role key={role}>{role}</Role> ) : null }
                </Roles>
            </RolesContainer>
            <ShowMoreButton onClick={handleClick}></ShowMoreButton>  
            { showMore && <MoreInfo>
                <Pictures>
                    {team.members ? team.members.map(member => (
                        <PictureContainer>
                            <Picture></Picture>
                            <Name>{member.split(' ')[0]}</Name>
                        </PictureContainer>
                    )): null}    
                </Pictures>    
                <Contact>
                    Get in touch
                    <Email>{team.contactInfo}</Email>
                </Contact>
                <ApplyButton>Apply Now</ApplyButton>
            </MoreInfo>
        }
        </Card>
    )
}

export default TeamBox
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Team } from './Types'
import TeamsGrid
 from './Components/TeamsGrid';
import styled from 'styled-components';
type State = {
  teams: Array<Team>
}

const mockUserCV = {
  name: "Lauri Markkanen",
  education: {
    school: "Aalto",
    program: "Computer Science",
    graduationDate: "2020-06-13"
  },
  work: [{
    title: "software developer",
    company: "Company B",
    startDate: "2017-05-01",
    endDate: "2018-02-28"
  }, 
  {
    title: "frontend developer",
    company: "Company A",
    startDate: "2015-02-01",
    endDate: "2017-04-30"
  }]
}

const ApplicationForm = (props: {team_id: string}) => {
  const [letter, setLetter] = React.useState<string>('')
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLetter(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      team_id: props.team_id,
      letter: letter,
      userCV: mockUserCV
    }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      ContentType: 'application/json'
    }
    fetch('http://127.0.0.1:8080', requestOptions)
      .then(response => response.json())
      .then(json => {
          console.log(JSON.stringify(json))  

      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cover letter:
      <input type="text" value={letter} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  )  
}

const ApplicationPage = styled.div`
  
  width: 100%;
`

const GridContainer = styled.div`
  margin: 15px 80px 0px;
  width: auto;
`

function App() {

  const [appState, setAppState] = React.useState<State>({teams: []})

  const getTeams = () => {
    const requestOptions = {
      method: 'GET',
    }
    fetch('http://127.0.0.1:8080', requestOptions)
      .then(response => response.json())
      .then(json => {
            setAppState({...appState, teams: json})

      })
      .catch(e => console.log(e))
  }

  React.useEffect(() => {
    getTeams()
  }, [])

  const renderTeams = () => {
    return appState.teams.map(e => (
      <ApplicationForm team_id={e._id} />
    ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <ApplicationPage>
          
          <GridContainer>
            <TeamsGrid teams={appState.teams} />
          </GridContainer>
        </ApplicationPage> 
     
      </header>
    </div>
  );
}

export default App;

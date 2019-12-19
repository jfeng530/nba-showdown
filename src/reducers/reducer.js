const initialState = {
  teams: [],
  players: [],
  seasons: []
}

const reducer = (oldState = initialState, action) => {
  switch(action.type) {
    case "POPULATE_PLAYERS":
      return {
        ...oldState,
        players: action.players 
      };
    case "POPULATE_TEAMS":
      return {
        ...oldState,
        teams: action.teams 
      };
    case "POPULATE_SEASONS":
      return {
        ...oldState,
        seasons: action.seasons
      }; 
  }
}

export default reducer
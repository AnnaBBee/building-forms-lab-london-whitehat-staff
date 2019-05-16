export const addBand = (newBand) => {
  return {
    type: 'ADD_BAND',
    newBand
  }
};

export default function manageBand(state = {
  bands: [],}, action) {
  switch (action.type){
    case 'ADD_BAND':
      console.log('state',state);
      return { bands: state.bands.concat({name:action.newBand})};
    default:
      return state
  }
}

// import { MOVEUP } from "../action/action";

function reducer(state, action) {
  console.log(state, action);
  // switch (action.type) {
  //   case MOVEUP:
  //     let moveArr = state.occupants;
  //     console.log(moveArr);

  //     const index = state.occupants.findIndex((occupant) => {
  //       return occupant.id === action.payload.id;
  //     });
  //     let selected = moveArr.splice(index, 1);
  //     let result = selected.concat(moveArr);

  //     console.log(moveArr);
  //     console.log(index);
  //     console.log(selected);
  //     console.log(result);

  //     return { ...state, occupants: result };
  //   default:
  //     return state;
  // }
}
export default reducer;

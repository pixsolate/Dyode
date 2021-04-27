import { LAYOUT_MENU_SHOW } from "../actions/layout";

const initialState = {
  menuShow: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LAYOUT_MENU_SHOW:
      return Object.assign({}, state, { menuShow: action.menuShow });
    default:
      return state;
  }
}

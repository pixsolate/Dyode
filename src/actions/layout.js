export const LAYOUT_MENU_SHOW = "USER_LIST";

export const setShowMenu = (menuShow) => {
  return {
    type: LAYOUT_MENU_SHOW,
    menuShow,
  };
};

export default (state={}, action) => {
    switch(action.type) {
      case 'ABOUT_PAGE_LOADED':
        return {
          ...state,
          
        };
      default:
        return state;
    }
  };
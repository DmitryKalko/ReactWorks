
export const deleteTech = (id) => ({ type: 'DELETE_TECH', payload: id });

export const addTech = (oneTech) => ({ type: 'ADD_TECH', payload: oneTech });

export const addTechToFavoriteList = (id) => ({ type: 'ADD_TECH_TO_FAVORITE', payload: id });

export const removeTechFromFavoriteList = (id) => ({type: 'REMOVE_TECH_FROM_FAVOURUTE', payload: id});


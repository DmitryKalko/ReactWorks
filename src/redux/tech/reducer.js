const initialTech = [
  {
    id: 1,
    title: 'Телефон iPhone SE2',
    price: 100,
  },
  {
    id: 2,
    title: 'Телевизор Samsung',
    price: 500,
  },
  {
    id: 3,
    title: 'Приставка PS5',
    price: 400,
  },
  {
    id: 4,
    title: 'Телефон iPhone 12',
    price: 1000,
  },
  {
    id: 5,
    title: 'Ультрабук MacBook Air',
    price: 1500,
  },
  {
    id: 6,
    title: 'Ноутбук Asus',
    price: 900,
  },
  {
    id: 7,
    title: 'Ноутбук Lenovo',
    price: 800,
  },
  {
    id: 8,
    title: 'Ноутбук MSI',
    price: 1700,
  },
  {
    id: 9,
    title: 'Фотоаппарат Nikon',
    price: 800,
  },
  {
    id: 10,
    title: 'Телефон iPhone 7',
    price: 500,
  },
];

const initialId = 10;

const initialState = {
  tech: initialTech,
  uniqId: initialId,
};

const techReducer = (state = initialState, action) => {

  let tech;
  let uniqId;

  switch (action.type) {
    case 'DELETE_TECH':
      tech = state.tech.filter(it => it.id !== action.payload);

      return { ...state, tech: tech };

    case 'ADD_TECH':

      uniqId = state.uniqId += 1;
      let oneTech = { ...action.payload, id: uniqId };
      tech = [...state.tech, oneTech];

      return { ...state, uniqId: uniqId, tech: tech };


    case 'ADD_TECH_TO_FAVORITE':
      tech = state.tech.map(item => {
        if (item.id !== action.payload) {
          return item;
        }

        return { ...item, favorite: true };
      });

      return { ...state, tech: tech };

    case 'REMOVE_TECH_FROM_FAVOURUTE':
      tech = state.tech.map(item => {
        if (item.id !== action.payload) {
          return item;
        }

        return { ...item, favorite: false };
      });

      return { ...state, tech: tech };

    default: 
      return state;
  }
}


export default techReducer;


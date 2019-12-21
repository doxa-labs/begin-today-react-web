const SET_USER = 'auth/SET_USER';

const LOGOUT = 'auth/LOGOUT';

const initialState = {
   role: null,
   token: null,
   user: null
};

export default function reducer(state = initialState, action = {}) {
   switch (action.type) {
      case LOGOUT:
         return {
            ...state,
            role: null,
            token: null,
            user: null,
         };
      case SET_USER:
         return {
            ...state,
            role: action.role,
            token: action.token,
            user: action.user
         };
      default:
         return state;
   }
}

export function logout() {
   return {type: LOGOUT};
}

export function setUser(role,token,user) {
   return {
      type: SET_USER,
      role: role,
      token: token,
      user: user
   };
}


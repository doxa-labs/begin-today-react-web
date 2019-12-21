import {REHYDRATE} from 'redux-persist/lib/constants';

export default function reducer(state = {}, action = {}) {
   if (action.type === REHYDRATE) {
      return {
         loaded: true
      };
   }

   return state;
}

import { Actions, charactersActions } from './store';

export const reducer = (currentAction: Actions, currentState: SquadState): SquadState => {
  const { type, payload } = currentAction;

  switch (type) {
    case charactersActions.ADDCHARACTER:
      return {
        ...currentState,
        [payload.id]: {
          ...currentState[payload.id],
          status: 'active',
        },
      };

    case charactersActions.REMOVECHARACTER:
      return {
        ...currentState,
        [payload.id]: {
          ...currentState[payload.id],
          status: 'inactive',
        },
      };
      
    default:
      return currentState;
  }
};

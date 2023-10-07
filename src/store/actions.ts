import { charactersActions } from './store';

export const addCharacter = (characterId: number) => {
    return {
        type: charactersActions.ADDCHARACTER,
        payload: {
            id: characterId,
            status: 'active'
        }
    };
};

export const removeCharacter = (characterId: number) => {
    return {
        type: charactersActions.REMOVECHARACTER,
        payload: {
            id: characterId,
            status: 'inactive'
        }
    };
};

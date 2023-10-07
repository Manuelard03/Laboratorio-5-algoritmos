export type Updater = { refresh: () => void } & HTMLElement;

export enum CharacterActions {
    'ADD_CHARACTER' = 'ADD_CHARACTER',
    'REMOVE_CHARACTER' = 'REMOVE_CHARACTER'
}

export interface AddCharacterToRoster {
    action: CharacterActions.ADD_CHARACTER;
    payload: 'active';
}

export interface RemoveCharacterFromRoster {
    action: CharacterActions.REMOVE_CHARACTER;
    payload: 'inactive';
}

export type Actions = AddCharacterToRoster | RemoveCharacterFromRoster;
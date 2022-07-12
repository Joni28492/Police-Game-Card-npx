import { ICard } from '../../interfaces';
import { TableState } from './TableProvider';

type TableActionType =
    | {type:'[Table]- PutCardOnTable', payload: ICard}
    | {type:'[Table]- DeleteCardFromTable'}

export const tableReducer =(state:TableState, action: TableActionType):TableState=>{

    switch (action.type) {
    case '[Table]- PutCardOnTable':
        return {
            ...state,
            card: action.payload,
        }
    case '[Table]- DeleteCardFromTable':
        return {
            card: undefined,
        }

        default:
        return state;
    }

}
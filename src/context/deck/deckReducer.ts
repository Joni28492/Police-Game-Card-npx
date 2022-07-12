import {  addedFirstPlace, deleteById, deleteFirstAndReturnArr } from '../../helpers/arrays';
import { ICard } from '../../interfaces';
import { DeckState } from './DeckProvider';

type DeckActionType =
    | {type:'[Deck]- DrawCard'} 
    | {type:'[Deck]- PutCardOnTop', payload: ICard} 
    | {type:'[Deck]- UseCard', payload: ICard} 
    | {type:'[Deck]- DisCard', payload: ICard} 

export const deckReducer =(state:DeckState, action: DeckActionType):DeckState=>{

    switch (action.type) {
        
        case '[Deck]- DrawCard':
            return {
                ...state,
                hand: [...state.hand, state.deck[0] ],
                deck: deleteFirstAndReturnArr(state.deck)
            }
      
    
        case '[Deck]- PutCardOnTop': 
            return {
                ...state,
                deck: addedFirstPlace(state.deck, action.payload),
                hand: deleteById(state.hand, action.payload.uid)
                 
            }
        case '[Deck]- UseCard':
                return {
                ...state,
                hand: deleteById(state.hand, action.payload.uid)
          
            }
        case '[Deck]- DisCard':
            return {
                ...state,
                hand: deleteById(state.hand, action.payload.uid)
            }
        default:
            return state;
    }

}
import { FC, PropsWithChildren, useReducer } from 'react';
import { DeckContext, deckReducer } from './';
import { cards } from '../../data/cards';
import { ICard } from '../../interfaces';
import { randomDeck, randomHand } from '../../helpers/arrays';



export interface DeckState {
    discards?: ICard[]
    deck: ICard[];
    hand: ICard[];
    //methods
}


const Deck_INITIAL_STATE: DeckState = {
    deck: randomDeck(cards, 60).slice(),
    hand: randomHand(cards, 5)
}

interface Props { }

export const DeckProvider: FC<PropsWithChildren<Props>> = ({ children }) => {

    const [state, dispatch] = useReducer(deckReducer, Deck_INITIAL_STATE)

    const drawCard = () => {
        if (state.deck.length !== 0)
            dispatch({ type: '[Deck]- DrawCard' })
        else {
            console.log('No quedan cartas en el deck');
        }
    }

    // al usar quitarla de la mano
    const utilizarCard = (cardUsed: ICard) => {
        dispatch({ type: '[Deck]- UseCard', payload: cardUsed })
    }
    const putOnDeck = (cardUsed: ICard) => {
        dispatch({ type: '[Deck]- PutCardOnTop', payload: cardUsed })
    }
    const discardCard = (cardUsed: ICard) => {
        dispatch({ type: '[Deck]- DisCard', payload: cardUsed })
    }




    return (
        <DeckContext.Provider value={{
            deck: state.deck,
            hand: state.hand,
            discards: state.discards,

            //mehotds
            drawCard,
            utilizarCard,
            putOnDeck,
            discardCard,
        }}>
            {children}
        </DeckContext.Provider>
    )

}
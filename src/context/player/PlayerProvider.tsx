import { FC, PropsWithChildren, useReducer } from 'react';
import { Categories, RestrictionsType } from '../../interfaces';
import { PlayerContext, playerReducer } from './';


    export interface PlayerState {
        name: string;
        category: Categories
        restritions: RestrictionsType[];
        carcel: number;
        stars: number;
    }

    const Player_INITIAL_STATE:PlayerState = {
        name: 'Player1',
        category: 'Auxiliar',
        restritions: [],
        carcel: 0,
        stars: 0,
    }

    interface Props {}

    export const PlayerProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(playerReducer, Player_INITIAL_STATE)

        const increaseStars=()=>{
            dispatch({type:'[Player]- Increase Stars'})
        }
        const decreaseStars=()=>{
            dispatch({type:'[Player]- Decrease Stars'})
        }
        const increaseJail=()=>{
            dispatch({type:'[Player]- Increase Jail'})
        }
        const decreaseJail=()=>{
            dispatch({type:'[Player]- Decrease Jail'})
        }

        const setCategories = () =>{
            dispatch({type:'[Player]- Set Category'})
        }

        const putQuitGrilletes = () =>{
            dispatch({type: '[Player]- Set Grilletes'})
        }

        const freezeTurno = () =>{
            dispatch({type: '[Player]- Set Turno'})
        }

        const copyRestrictions = () =>{
            dispatch({type: '[Player]- Copy Restrictions'})
        }


        return ( 
            <PlayerContext.Provider value={{
                ...state,
                //methods
                increaseStars,
                decreaseStars,
                increaseJail,
                decreaseJail,
                setCategories,
                putQuitGrilletes,
                freezeTurno,
                copyRestrictions,
                
            }}>
                {children}
            </PlayerContext.Provider>
        )

    }
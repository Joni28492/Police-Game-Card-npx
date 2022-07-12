import {createContext} from 'react';
import { Categories, RestrictionsType } from '../../interfaces';



interface ContextProps {
    name: string;
    category: Categories;
    restritions: RestrictionsType[];
    carcel: number;
    stars: number;

    //methods
    increaseStars:()=>void,
    decreaseStars:()=>void,
    increaseJail:()=>void,
    decreaseJail:()=>void,
    setCategories:()=>void,
    putQuitGrilletes:()=>void,
    freezeTurno:()=>void,
    copyRestrictions:()=>void,

}

export const PlayerContext = createContext({} as ContextProps )
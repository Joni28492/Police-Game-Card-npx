import {createContext} from 'react';

export type ScreensType = 
    | "Stars"  
    | "Restrictions"  
    | "Questions"   
    | "Deck"  
    | "Empty"

interface ContextProps {
    openHandMenu: boolean;
    screen:  ScreensType[];
    //methods
    toggleHand: ()=>void;
    setScreensOnTable: (screeToAdded: ScreensType) => void;


}

export const UIContext = createContext({} as ContextProps )
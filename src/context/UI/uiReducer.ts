import { setScreensOnArr } from '../../helpers/arrays';
import { ScreensType } from './UIContext';
import { UIState } from './UIProvider';

type UIActionType =
    | {type:'[UI]- ToggleHand'}
    | {type:'[UI]- SetScreen', payload: ScreensType}

  

export const uiReducer =(state:UIState, action: UIActionType):UIState=>{

    switch (action.type) {
    case '[UI]- ToggleHand':
        return {
            ...state,
            openHandMenu:!state.openHandMenu,
        }
    case '[UI]- SetScreen':
        return {
            ...state,
           screen: setScreensOnArr(action.payload, state.screen),
        }
    



        default:
            return state;
    }

}
import { setRestrictionsOnArr } from '../../helpers/arrays';
import { setCategory } from '../../helpers/settersToreducer';
import { PlayerState } from './PlayerProvider';

type PlayerActionType =
    | {type:'[Player]- Increase Stars'}
    | {type:'[Player]- Decrease Stars'}
    | {type:'[Player]- Increase Jail'}
    | {type:'[Player]- Decrease Jail'}
    | {type:'[Player]- Set Category'}
    | {type:'[Player]- Set Grilletes'}
    | {type:'[Player]- Set Turno'}
    | {type:'[Player]- Copy Restrictions'}

export const playerReducer =(state:PlayerState, action: PlayerActionType):PlayerState=>{

    switch (action.type) {
    case '[Player]- Increase Stars':
        return {
            ...state,
            stars: (state.stars < 25)
                    ?state.stars + 1
                    :state.stars,
        }
    case '[Player]- Decrease Stars':
        return {
            ...state,
            stars: (state.stars === 0)
                ? 0
                : state.stars - 1
        }
    case '[Player]- Increase Jail':
        return {
            ...state,
            stars: state.stars + 1
        }
    case '[Player]- Decrease Jail':
        return {
            ...state,
            stars: state.stars - 1
        }
    case '[Player]- Set Category':
        return {
            ...state,
            category: setCategory(state.stars),
        }
    case '[Player]- Set Grilletes':
        return {
            ...state,
            restritions: setRestrictionsOnArr('Grilletes',state.restritions)

        }
    case '[Player]- Set Turno':
        return {
            ...state,
            restritions: setRestrictionsOnArr('Sin Turno',state.restritions)

        }
    case '[Player]- Copy Restrictions':
        return {
            ...state,
            restritions: setRestrictionsOnArr('Copiar Restricciones', state.restritions)
        }
    default:
        return state;
    }

}
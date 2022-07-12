import { questions } from '../../data/questions';
import { randomQuestion } from '../../helpers/arrays';
import { QuestionState } from './QuestionProvider';

type QuestionActionType =
    | {type:'[Question]- RandomQuestion'}

export const questionReducer =(state:QuestionState, action: QuestionActionType):QuestionState=>{

    switch (action.type) {
    case '[Question]- RandomQuestion':
        return {
            ...state,
            question: randomQuestion(questions, questions.length)
        }

        default:
        return state;
    }

}
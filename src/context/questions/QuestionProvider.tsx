import { FC, PropsWithChildren, useReducer } from 'react';
import { questions } from '../../data/questions';
import { IQuestion } from '../../interfaces';
import { QuestionContext, questionReducer } from './';


    export interface QuestionState {
        question: IQuestion;
    }

    const Question_INITIAL_STATE:QuestionState = {
        question: questions[1],
    }

    interface Props {}

    export const QuestionProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(questionReducer, Question_INITIAL_STATE)

        const setRandomQuestion = () =>{
            dispatch({type:'[Question]- RandomQuestion'});
        }


        return ( 
            <QuestionContext.Provider value={{
                ...state,
                //methods
                setRandomQuestion

            }}>
                {children}
            </QuestionContext.Provider>
        )

    }
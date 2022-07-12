import {createContext} from 'react';
import { IQuestion } from '../../interfaces';

interface ContextProps {
    question: IQuestion;
    //methods
    setRandomQuestion: ()=>void;
}

export const QuestionContext = createContext({} as ContextProps )
import { IQuestion } from "../interfaces";
import {v4 as uuid} from 'uuid'

export const questions: IQuestion[] = [
    {
        id: 1,
        uid: uuid(),
        question: "Quien ostenta la Jefatura de la policia local",
        solution: "El Alcalde",
        stars: 2,
      
    },
    {   
        id: 2,
        uid: uuid(),
        question: "Quien nombra a los miembros del tribunal constitucional segun el Art 159 de la CE",
        solution: "El Rey",
        stars: 2,
      
    },
    {   
        id: 3,
        uid: uuid(),
        question: "En que Art. de la CE se recoge el principio de jerarquia normativa",
        solution: 9,
        stars: 3,
      
    },
    {   
        id: 4,
        uid: uuid(),
        question: "??????",
        solution: "????",
        stars: 1,
   
    },


]
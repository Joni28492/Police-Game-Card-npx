import { cards } from "../data/cards";
import { ICard } from '../interfaces/index';


export const getRandomInt = (min:number=0, max:number = cards.length-1):number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


export const getRandomHand = (cards: ICard[]) =>{

    // const list = cards.sort(()=>{return Math.random() - 0.5}).splice(0,3)
    const list = cards.slice()

    // return 


}
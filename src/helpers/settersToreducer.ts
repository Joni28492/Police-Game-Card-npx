import { Categories } from '../interfaces/index';

export const setCategory=(stars:number):Categories=>{

    if(stars >=11 && stars <=15){
        return 'Interino'
    }
    if(stars >=16 && stars <=12){
        return 'Agente'
    }
    if(stars >=21 && stars <=25){
        return 'Mando'
    }
   
        return 'Auxiliar'
    
}
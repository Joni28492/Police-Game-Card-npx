export interface IStyles {
    style?: React.CSSProperties;
    className?: string; 
}

export interface ITitle extends IStyles {title:string}
export interface IDescription extends IStyles{desc:string}
export interface IImage extends IStyles {src:string}
export interface IButton extends IStyles {label: string,  background?: string }
export interface IIconButton extends IStyles {icon: JSX.Element,  background?: string }
export interface IListItem extends IStyles {text:string}


export interface ICard extends IStyles{
    uid: string; 
    id:number;
    background?: Colors;
    title:string;
    desc:string;
    src:string;
}




export interface IQuestion extends IStyles {
    id: number;
    uid:string;
    question: string;
    solution: string | number | string [];
    stars: number;
    author?:string;
    img?:string;
    hint?:string;
}


export interface IRestrictions extends IStyles {
    restrictions:RestrictionsType[]
}

//Types

export type RestrictionsType = 
    | "Sin Turno" 
    | "Grilletes"
    | "Copiar Restricciones"

type Colors = 
    | 'DarkOliveGreen' 
    | 'MediumOrchid' 
    | 'Tomato'
    | 'DarkBlue'
    | 'DarkGoldenRod'
    | 'DarkSlateGrey'
    | 'FireBrick'
    | 'Tan'


export type Categories = 
    | 'Auxiliar'
    | 'Interino'
    | 'Agente'
    | 'Mando'
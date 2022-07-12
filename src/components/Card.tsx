import { ITitle, IDescription, IImage, ICard, IButton, IIconButton } from '../interfaces/index';

import { useContext } from 'react';
import { DeckContext } from '../context/deck';
import { TableContext } from '../context/table/TableContext';

const placeHolder = 'https://www.alro-group.com/wp-content/uploads/2014/12/placeholder.jpg';


export const Card = (card: ICard) => {
  const { src, title, desc, background, style } = card;

  const { discardCard, putOnDeck, utilizarCard } = useContext(DeckContext)
  const { deleteCardOnTable } = useContext(TableContext)


  const handleCard = (cardToUse: ICard) => {
    utilizarCard(cardToUse)
    deleteCardOnTable()
  }
  const handleDiscard = (cardToDiscard: ICard) => {
    discardCard(cardToDiscard)
    deleteCardOnTable()
  }


  const handleToDeck = (cardToDeck: ICard) => {
    putOnDeck(cardToDeck)
    deleteCardOnTable()
  }



  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "300px",
        height: '400px',
        backgroundColor: (background) ? background : 'LightSlateGrey',
        borderRadius: '15px',
        border: `12px solid LightGrey`,
        ...style,
      }}
    >

      <Title title={title} />
      <Image src={src} />
      <Description desc={desc} />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>



        <div onClick={() => handleCard(card)}>
          <Button label='Usar' />
        </div>

        <div onClick={() => handleDiscard(card)}>
          <Button label='Descartar' background='darkred' />
        </div>

        <div onClick={() => handleToDeck(card)}>
          <Button label='Al Deck' background='goldenrod' />
        </div>
        <div style={{ marginTop: 10 }} onClick={deleteCardOnTable}>
          <Button label='A la Mano' background='dodgerblue' />
        </div>
      </div>


    </div>
  )
}




export const Title = ({ title, style }: ITitle) => {
  return (
    <h3 style={{
      ...style,
      color: 'white'
    }}>{title}</h3>
  )
}



export const Description = ({ desc, style }: IDescription) => {
  return (
    <p style={{
      color: 'white',
      fontSize: '16px',
      overflow: 'hidden',
      margin: '15px',
      ...style,
    }}>{desc}</p>
  )
}




export const Image = ({ src = placeHolder, style }: IImage) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '250px',
        height: '180px',
        borderRadius: '10px',
        overflow: 'hidden',
        ...style,
      }}
    >
      <img src={src} alt="" />

    </div>
  )
}







export const Button = ({ label, background, style, className }: IButton) => {
  return (

    <button
      className={className}
      style={{
        backgroundColor: (background) ? background : 'green',
        color: 'lightgray',
        borderRadius: '16px',
        border: '1px solid transparent',
        marginLeft: '4px',
        marginRight: '4px',
        fontSize: '18px',
        height: '26px',
        ...style
      }}
    >{label}</button>

  )
}

export const IconButton = ({ icon, background, style, className }: IIconButton) => {
  return (

    <button
      className={className}
      style={{
        backgroundColor: (background) ? background : 'DarkGrey',
        color: 'lightgray',
        borderRadius: '16px',
        border: '1px solid transparent',
        marginLeft: '4px',
        marginRight: '4px',
        fontSize: '18px',
        width: '75px',
        height: '45px',
        marginBottom: '5px',
        ...style
      }}
    >
      {icon}

    </button>

  )
}


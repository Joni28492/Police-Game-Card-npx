import { IListItem } from '../../interfaces'
import { FC, useContext } from 'react';
import { UIContext } from '../../context/UI';

export const Navbar: FC = () => {

  const { setScreensOnTable } = useContext(UIContext)




  return (

    <ul style={{
      position: 'sticky',
      margin: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#282c34',
      padding: '12px',
      fontSize: '20px'
    }}>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setScreensOnTable("Stars")
        }}
      >
        <ListItem text='Estrellas' />
      </div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setScreensOnTable("Restrictions")
        }}>
        <ListItem text='Restricciones' />
      </div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setScreensOnTable("Questions")
        }}>
        <ListItem text='Preguntas' />
      </div>

      {/* <div 
            style={{cursor: 'pointer'}} 
                onClick={()=>{
                  setScreensOnTable("Deck")
                }}>
            <ListItem text='Baraja'/>
        </div>
                     */}
    </ul>

  )
}




const ListItem = ({ text, style, className }: IListItem) => {
  return (
    <li
      className={className}
      style={{
        color: 'white',
        listStyle: 'none',
        marginTop: 12,
        ...style
      }}
    >{text}</li>
  )
}


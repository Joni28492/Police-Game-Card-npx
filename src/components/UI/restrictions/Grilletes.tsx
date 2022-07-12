
import { Button } from '../../Card';
import { useContext } from 'react';
import { PlayerContext } from '../../../context/player/PlayerContext';


export const Grilletes = () => {

  const { restritions, putQuitGrilletes } = useContext(PlayerContext)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>

      {
        (restritions.includes('Grilletes'))
        &&
        <>
          <i style={{ fontSize: '45px' }} className="fa-solid fa-handcuffs" />
          <strong style={{ color: 'red', fontSize: '28px' }}>Grilletes</strong>
        </>

      }
      <div onClick={putQuitGrilletes}>
        <Button
          style={{
            backgroundColor:
              restritions.includes('Grilletes')
                ? 'green'
                : 'darkred',
            height: '60px'
          }}
          label={restritions.includes('Grilletes')
            ? 'Liberar'
            : 'Engrilletar'
          }
        />
      </div>


    </div>
  )
}

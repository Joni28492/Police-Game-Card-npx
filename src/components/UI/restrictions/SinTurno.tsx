

import { useContext } from 'react';
import { PlayerContext } from '../../../context/player';
import { Button } from '../../Card';

export const SinTurno = () => {

  const { restritions, freezeTurno } = useContext(PlayerContext)
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>

      {
        (restritions.includes('Sin Turno'))
        &&
        <>
          <i style={{ fontSize: '45px' }} className="fa-solid fa-ban" />
          <strong style={{ color: 'red', fontSize: '28px' }}>Sin Turno</strong>
        </>

      }
      <div onClick={freezeTurno}>
        <Button
          style={{
            backgroundColor:
              restritions.includes('Sin Turno')
                ? 'green'
                : 'darkred',
            height: '60px'
          }}
          label={restritions.includes('Sin Turno')
            ? 'Desbloquear Turno'
            : 'Bloquear Turno'
          }
        />
      </div>


    </div>
  )
}

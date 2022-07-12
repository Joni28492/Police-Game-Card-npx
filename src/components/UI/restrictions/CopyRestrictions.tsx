
import { useContext } from 'react';
import { PlayerContext } from '../../../context/player/PlayerContext';
import { Button } from '../../Card';

export const CopyRestrictions = () => {

  const { restritions, copyRestrictions } = useContext(PlayerContext);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>

      {
        (restritions.includes('Copiar Restricciones'))
        &&
        <>
          <i style={{ fontSize: '45px' }} className="fa-solid fa-person-chalkboard" />
          <strong style={{ color: 'red', fontSize: '28px' }}>Sin Turno</strong>
        </>

      }
      <div onClick={copyRestrictions}>
        <Button
          style={{
            backgroundColor:
              restritions.includes('Copiar Restricciones')
                ? 'green'
                : 'darkred',
            height: '60px'
          }}
          label={restritions.includes('Copiar Restricciones')
            ? 'Liberar Restricciones'
            : 'Copiar restricciones'
          }
        />
      </div>


    </div>
  )
}

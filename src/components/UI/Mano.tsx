import { useContext } from 'react'
import { DeckContext } from '../../context/deck'
import { MiniCard } from '../MiniCard'
import { Button } from '../Card';
import { v4 as uuid } from 'uuid';
import { MiniCardReverse } from '../MiniCardReverse';
import { UIContext } from '../../context/UI';




export const Mano = () => {

  const { hand, drawCard } = useContext(DeckContext)
  const { openHandMenu } = useContext(UIContext)


  return (

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#282c34', paddingBottom: '70px' }}>
      {
        hand.map(({ title, desc, src, background, id, uid }) => (

          (openHandMenu) ?
            <MiniCard
              key={uuid()}
              uid={uid}
              id={id}
              title={title}
              desc={desc}
              src={src}
              background={background}
              style={{ margin: '15px' }}
            />
            : <MiniCardReverse key={uuid()} />
        ))
      }

      <div onClick={drawCard}>
        <Button style={{
          height: '45px',
          width: '90px',
          marginTop: '45px'
        }} label={'robar'} />
      </div>

    </div>
  )
}

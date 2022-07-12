
import { useContext, useEffect } from 'react';
import { PlayerContext } from '../../context/player';



export const Stars = () => {


    const { name, stars, category, increaseStars, decreaseStars, setCategories } = useContext(PlayerContext)

    useEffect(() => {

        setCategories();

    }, [stars])


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <section>
                <article>
                    <strong>Nombre: </strong>
                    <label>{name}</label>
                </article>
                <article>
                    <strong>Rango: </strong>
                    <label>{category}</label>
                </article>

            </section>



            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}>

                <h3 style={{ fontSize: '35px' }}>{stars}</h3>

                <i

                    style={{
                        color: 'goldenrod',
                        fontSize: '36px'
                    }} className="fa-solid fa-star" />


            </div>




            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',

            }}>

                <i style={{
                    fontSize: '35px',
                    color: 'firebrick',
                    marginRight: '25px',
                }}
                    onClick={decreaseStars}
                    className="fa-solid fa-circle-minus" />
                <i style={{
                    fontSize: '35px',
                    color: 'lightgreen',
                    marginLeft: '25px',
                }}
                    onClick={increaseStars}
                    className="fa-solid fa-circle-plus" />

            </div>
        </div>

    )
}

import React from 'react'

import { useState } from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const {setAlerta} = useLetras();

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = (e) => { 
        e.preventDefault();

        if (Object.values(busqueda).includes('')) {
            setAlerta('Coloca Artista y Canción');
            return;
        }

        setAlerta('');

    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Busca por artistas y canción</legend>

        <div className="form-grid">
            <div className="">
                <label htmlFor="">Artista </label>
                <input 
                    type='text'
                    name='artista'
                    placeholder='Nombre Artista'
                    value={busqueda.artista}
                    onChange={ e=> setBusqueda({
                        ...busqueda, [e.target.name] : e.target.value
                    })}
                />
            </div>

            <div className="">
                <label htmlFor="">Canción </label>
                <input 
                    type='text'
                    name='cancion'
                    placeholder='Nombre Canción'
                    value={busqueda.cancion}
                    onChange={ e=> setBusqueda({
                        ...busqueda, [e.target.name] : e.target.value
                    })}
                />
            </div>

            <input type="submit" value='Buscar'/>
        </div>
    </form>
  )
}

export default Formulario
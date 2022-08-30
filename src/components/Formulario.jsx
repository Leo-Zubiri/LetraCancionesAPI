import React from 'react'

const Formulario = () => {
  return (
    <form>
        <legend>Busca por artistas y canción</legend>

        <div className="form-grid">
            <div className="">
                <label htmlFor="">Artista </label>
                <input 
                    type='text'
                    name='artista'
                    placeholder='Nombre Artista'
                />
            </div>

            <div className="">
                <label htmlFor="">Canción </label>
                <input 
                    type='text'
                    name='canción'
                    placeholder='Nombre Canción'
                />
            </div>

            <input type="submit" value='Buscar'/>
        </div>
    </form>
  )
}

export default Formulario
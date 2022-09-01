import { useState,createContext } from "react";

const LetrasContext = createContext();

const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('');

    const busquedaLetra = async (busqueda) => { 
        try {
            const {artista,cancion} = busqueda;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

            console.log(url)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <LetrasContext.Provider
            value={{
                alerta,setAlerta,busquedaLetra
            }}
        >
        {children}
        </LetrasContext.Provider>
    )
}

export {LetrasProvider}

export default LetrasContext;
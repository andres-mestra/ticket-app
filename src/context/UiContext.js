import * as React from 'react'

export const UiContext = React.createContext();

export const UiProvider = ({ children }) => {

  const [ocultarMenu, setOcultarMenu] = React.useState(false);


  const showMenu =  () => {
    setOcultarMenu( false );
  }

  const hideMenu = () => {
    setOcultarMenu( true );
  }
  
  
  return (
    <UiContext.Provider value={{ 
      ocultarMenu,
      showMenu,
      hideMenu,
    }}>
      { children }
    </UiContext.Provider>
  )
}

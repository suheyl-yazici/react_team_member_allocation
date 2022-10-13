import React, {useContext} from "react";


const AppContext = React.createContext();

const AppProvider = ({children}) => {


    return <AppContext.Provider value={{name:"suheyl", role: "student"}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
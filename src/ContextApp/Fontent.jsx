import React, { createContext, useState } from 'react'



export const FontentAPI = createContext();

export const FontentAPIProvider = ({children}) =>{
    let [showSideBar, setShowSideBar] = useState(false);
    const showSideBarClick = () =>{
        setShowSideBar(true);
    }
    const removeSideBarClick = () =>{
        setShowSideBar(false);
    }
    return <FontentAPI.Provider value={{showSideBarClick, removeSideBarClick, showSideBar}}>{children}</FontentAPI.Provider>
}

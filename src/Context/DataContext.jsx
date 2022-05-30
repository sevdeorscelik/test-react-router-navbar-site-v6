import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext()

export const DataContextProvider = (props) => {

    const [data, setData] = useState('Technology')

    return (
        <DataContext.Provider value={{data, setData}}>
            {props.children}
        </DataContext.Provider>
    )
};

export default DataContext;

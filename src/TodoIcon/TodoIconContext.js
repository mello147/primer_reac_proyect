import React from "react";
const TodoIconContext = React.createContext();

function TodoIConProvider(props) {
    const TYPEICONCHECK="CHECK";
    const TYPEICONDELETE="DELETE";
    return (<TodoIconContext.Provider value={{
        TYPEICONCHECK,
        TYPEICONDELETE
    }}>
        {props.children}
    </TodoIconContext.Provider>
    );

}

export { TodoIconContext, TodoIConProvider };
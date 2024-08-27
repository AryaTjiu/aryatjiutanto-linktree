const { createContext, useState, useContext } = require("react")

const HoverContext = createContext()

const HoverProvider = ({children}) => {
    const [hovered, setHovered] = useState(false);

    const value = {
        hovered,
        setHovered
    }

    return <HoverContext.Provider value={value}>{children}</HoverContext.Provider>
}

const useHover = () => {
    const context = useContext(HoverContext);
    return context;
}

export {HoverProvider, useHover}
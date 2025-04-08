import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
  } from "react";
  import { useCallback, useMemo } from "../@lib";
  import { generateItems } from "../utils";
  import type { Item } from "../types";
  
  export interface ItemsContextType {
    items: Item[];
    addItems: () => void;
  }
  
  const ItemsContext = createContext<ItemsContextType | undefined>(undefined);
  
  export const ItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<Item[]>(generateItems(1000));
  
    const addItems = useCallback(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...generateItems(1000, prevItems.length),
      ]);
    }, []);
  
    const value = useMemo(() => ({ items, addItems }), [items, addItems]);
  
    return (
      <ItemsContext.Provider value={value}>
        {children}
      </ItemsContext.Provider>
    );
  };
  
  export const useItemsContext = (): ItemsContextType => {
    const context = useContext(ItemsContext);
    if (!context) {
      throw new Error("useItemsContext must be used within an ItemsProvider");
    }
    return context;
  };
  
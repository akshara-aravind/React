import { createContext, type Dispatch, type SetStateAction } from "react";

type GlobalContextType ={
    isToggle:boolean;
    setIsToggle:Dispatch<SetStateAction<boolean>>;
}
export const GlobalContext = createContext<GlobalContextType | null>(null);


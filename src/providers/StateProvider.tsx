import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  VFC,
} from "react";

type Props = {
  children: ReactNode;
};

type StateContextType = {
  menubarColor: boolean;
  setMenubarColor: Dispatch<SetStateAction<boolean>>;
};

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const StateProvider: VFC<Props> = ({ children }) => {
  const [menubarColor, setMenubarColor] = useState<boolean>(false);

  return (
    <StateContext.Provider value={{ menubarColor, setMenubarColor }}>
      {children}
    </StateContext.Provider>
  );
};

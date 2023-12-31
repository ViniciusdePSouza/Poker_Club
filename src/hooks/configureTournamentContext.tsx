import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { TournamentConfig } from "../@types/tournamentConfig";

interface TournamentConfigType {
  configuration: TournamentConfig;
  configureTournament: (data: TournamentConfig) => void;
}

interface TournamentConfigProviderProps {
  children: ReactNode;
}

export const TournamentConfigContext = createContext(
  {} as TournamentConfigType
);

function TournamentConfigProvider({ children }: TournamentConfigProviderProps) {
  const [configuration, setConfiguration] = useState<TournamentConfig>(
    {} as TournamentConfig
  );

  function configureTournament(data: TournamentConfig) {
    setConfiguration(data);
  }

  return (
    <TournamentConfigContext.Provider
      value={{ configuration, configureTournament }}
    >
      {children}
    </TournamentConfigContext.Provider>
  );
}

function useConfiguration() {
  const context = useContext(TournamentConfigContext);

  return context;
}

export { TournamentConfigProvider, useConfiguration };

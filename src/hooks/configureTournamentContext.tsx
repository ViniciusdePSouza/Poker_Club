import { ReactNode, createContext, useContext, useState } from "react";
import { TournamentConfig } from "../@types/tournamentConfig";

interface TournamentConfigType {
  configuration: TournamentConfig;
  configureTournament: (data: TournamentConfig) => void;
  resetConfiguration: () => void;
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

  function resetConfiguration() {
    const resetedPrize = {
      awardedNumber: 0,
      first: 0,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0,
      sixth: 0,
    };
    const data = {
      addOn: 0,
      buyIn: 0,
      rebuy: 0,
      prize: resetedPrize,
    };

    setConfiguration(data);
  }

  return (
    <TournamentConfigContext.Provider
      value={{ configuration, configureTournament, resetConfiguration }}
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

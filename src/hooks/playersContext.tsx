import { ReactNode, createContext, useContext, useState } from "react";
import { Players } from "../@types/players";
import { Alert } from "react-native";

interface PlayersContextType {
  players: Players[];
  addNewPlayer(name: string): void;
  deletePlayer(id: number): void;
  disqualify(id: number): void;
}

interface PlayersProviderProps {
  children: ReactNode;
}

export const PlayersContext = createContext({} as PlayersContextType);

function PlayersProvider({ children }: PlayersProviderProps) {
  const [players, setPlayers] = useState<Players[]>([
    { id: 1, name: "Vini", addOn: true, rebuys: 0, isPlaying: true, total: 40 },
    {
      id: 2,
      name: "Junim",
      addOn: true,
      rebuys: 0,
      isPlaying: true,
      total: 40,
    },
    { id: 3, name: "Ian", addOn: true, rebuys: 0, isPlaying: false, total: 40 },
    {
      id: 4,
      name: "Luan",
      addOn: true,
      rebuys: 0,
      isPlaying: false,
      total: 40,
    },
  ]);

  function addNewPlayer(name: string) {
    const id = Math.random() * 100 + 1;

    const newPlayer = {
      id,
      name,
      addOn: false,
      rebuys: 0,
      isPlaying: true,
      total: 40,
    };

    setPlayers([...players, newPlayer]);
  }

  function deletePlayer(id: number) {
    const newPlayersArray = players.filter((player) => player.id !== id);

    setPlayers(newPlayersArray);
  }

  function disqualify(id: number) {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (player.id === id) {
          return { ...player, isPlaying: !player.isPlaying };
        }
        return player;
      });
    });
  }

  return (
    <PlayersContext.Provider
      value={{ players, addNewPlayer, deletePlayer, disqualify }}
    >
      {children}
    </PlayersContext.Provider>
  );
}

function usePlayers() {
  const context = useContext(PlayersContext);

  return context;
}

export { PlayersProvider, usePlayers };

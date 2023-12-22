import { AddButton, InputWrapper, PlayersList, Title, Tittle2 } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";
import { Input } from "../../components/Input";
import { useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";
import { Players } from "../../@types/players";

export function Championship() {
  const [players, setPlayers] = useState<Players[]>([
    { id: 1, name: "Vini", addOn: true, rebuys: 5, isPlaying: true, total: 40 },
    { id: 2, name: "Junim", addOn: true, rebuys: 5, isPlaying: true, total: 40 },
    { id: 3, name: "Ian", addOn: true, rebuys: 5, isPlaying: true, total: 40},
    { id: 4, name: "Luan", addOn: true, rebuys: 5, isPlaying: true, total: 40 },
  ]);

  const HeaderFlatList = () => {
    return (
      <>
        <Title>Championship Info</Title>
        <InputWrapper>
          <Input placeholder="Insira o nome do jogador" />
          <AddButton>
            <Icon type="ant-design" name="pluscircle" size={24} />
          </AddButton>
        </InputWrapper>

        <Tittle2>Players List</Tittle2>
      </>
    );
  };

  return (
    <SafeAreaView>
      <PlayersList
        ListHeaderComponent={<HeaderFlatList />}
        data={players}
        renderItem={({ item }: { item: Players }) => (
          <PlayerCard name={item.name} isPlaying={item.isPlaying} rebuys={item.rebuys} addOn={item.addOn} />
        )}
        keyExtractor={({ id }: Players) => String(id)}
      />
    </SafeAreaView>
  );
}

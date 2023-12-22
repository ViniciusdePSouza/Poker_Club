import { AddButton, InputWrapper, PlayersList, Title, Tittle2 } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";
import { Input } from "../../components/Input";
import { useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";

export function Championship() {
  const [players, setPlayers] = useState<String[]>([
    "Vini",
    "Ian",
    "Junim",
    "Luan",
  ]);
  const [inputPlayer, setInputPlayer] = useState("");

  function handleButton(newPlayer: string) {
    setPlayers([...players, newPlayer]);
  }

  const HeaderFlatList = () => {
    return (
      <>
        <Title>Championship Info</Title>
        <InputWrapper>
          <Input
            placeholder="Insira o nome do jogador"
            onChangeText={(text: string) => {
              setInputPlayer(text);
            }}
          />
          <AddButton>
            <Icon
              type="ant-design"
              name="pluscircle"
              size={24}
              onPress={() => handleButton(inputPlayer)}
            />
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
          renderItem={({ item }: { item: string }) => (
            <PlayerCard name={item} />
          )}
          keyExtractor={({ item }: { item: string }) => item}
        />
    </SafeAreaView>
  );
}

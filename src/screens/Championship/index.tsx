import {
  AddButton,
  DeletePlayerMenu,
  InputWrapper,
  PlayersList,
  Title,
  Tittle2,
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, SocialIcon } from "@rneui/themed";
import { Input } from "../../components/Input";
import { useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";
import { Players } from "../../@types/players";

import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Pressable, StyleSheet } from "react-native";
import theme from "../../theme";
import { Swipeable } from "react-native-gesture-handler";

type AddPlayerFormData = {
  name: string;
};

const AddPlayerSchema = yup.object({
  name: yup.string().required("Nome necessário para incluir jogador"),
});

export function Championship() {
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
    { id: 3, name: "Ian", addOn: true, rebuys: 0, isPlaying: true, total: 40 },
    { id: 4, name: "Luan", addOn: true, rebuys: 0, isPlaying: true, total: 40 },
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddPlayerFormData>({
    resolver: yupResolver(AddPlayerSchema),
  });

  function handleAddPlayer({ name }: AddPlayerFormData) {
    const id = Math.random() * 100 + 1;

    const newPlayer = {
      id,
      name,
      addOn: true,
      rebuys: 0,
      isPlaying: true,
      total: 40,
    };

    setPlayers([...players, newPlayer]);
  }

  function handleRemovePlayer(id: number) {
    console.log('chegnado')
    const newPlayersArray = players.filter(player => player.id !== id)

    setPlayers(newPlayersArray)
  }

  const HeaderFlatList = () => {
    return (
      <>
        <Title>Championship Info</Title>
        <InputWrapper>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={errors.name?.message}
                  placeholder="Insira o nome do jogador"
                />
              );
            }}
          />

          <AddButton onPress={handleSubmit(handleAddPlayer)}>
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
          <Swipeable
            renderLeftActions={() => {
              return (
                <DeletePlayerMenu onPress={() => handleRemovePlayer(item.id)}>
                  <Icon
                    type="entypo"
                    name="trash"
                    color={theme.COLORS.GRAY_400}
                    size={28}
                  />
                </DeletePlayerMenu>
              );
            }}
          >
            <PlayerCard
              name={item.name}
              isPlaying={item.isPlaying}
              rebuys={item.rebuys}
              addOn={item.addOn}
            />
          </Swipeable>
        )}
        keyExtractor={({ id }: Players) => String(id)}
      />
    </SafeAreaView>
  );
}


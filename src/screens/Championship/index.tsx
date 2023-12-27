import { Players } from "../../@types/players";

import theme from "../../theme";

import {
  AddButton,
  InputWrapper,
  PlayersList,
  PressablePlayerMenu,
  Title,
  Tittle2,
} from "./styles";

import { Input } from "../../components/Input";
import { PlayerCard } from "../../components/PlayerCard";

import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Animated } from "react-native";

import { Icon } from "@rneui/themed";

import { useState } from "react";

import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Swipeable } from "react-native-gesture-handler";
import { FooterFlatList } from "../../components/FooterFlatList";
import { usePlayers } from "../../hooks/playersContext";

type AddPlayerFormData = {
  name: string;
};

const AddPlayerSchema = yup.object({
  name: yup.string().required("Nome necessário para incluir jogador"),
});

export function Championship() {
  const { players, addNewPlayer, deletePlayer, disqualify, eliminatedPlayers } = usePlayers();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddPlayerFormData>({
    resolver: yupResolver(AddPlayerSchema),
  });

  function handleAddPlayer({ name }: AddPlayerFormData) {
    const doesPlayerExists = players.find((player) => player.name === name);

    if (doesPlayerExists) {
      Alert.alert("This player is already registered in the tournament");

      return;
    }

    addNewPlayer(name);
  }

  function handleRemovePlayer(id: number) {
    Alert.alert(
      "Remove Player",
      "Are you sure you want to remove this player?",
      [
        { text: "Yes", onPress: () => deletePlayer(id) },
        { text: "No", style: "cancel" },
      ]
    );
  }

  function disqualifyPlayer(id: number) {
    const currentPlayer = players.find((player) => player.id === id);

    const titleButton = currentPlayer?.isPlaying
      ? "Disqualify Player"
      : "Rejoin Player";
    const textButton = currentPlayer?.isPlaying
      ? "Are you sure you want to disqualify this player?"
      : "Are you sure you want to rejoin this player?";

    Alert.alert(titleButton, textButton, [
      { text: "Yes", onPress: () => disqualify(id)},
      { text: "No", style: "cancel" },
    ]);
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
                  onSubmitEditing={handleSubmit(handleAddPlayer)}
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
        ListFooterComponent={<FooterFlatList />}
        data={players}
        renderItem={({ item }: { item: Players }) => (
          <Swipeable
            renderRightActions={() => {
              return (
                <PressablePlayerMenu
                  variant="DECLASSIFIED"
                  onPress={() => disqualifyPlayer(item.id)}
                >
                  <Icon
                    type="font-awesome"
                    name="close"
                    color={theme.COLORS.GRAY_400}
                    size={46}
                  />
                </PressablePlayerMenu>
              );
            }}
            renderLeftActions={() => {
              return (
                <PressablePlayerMenu
                  variant="REMOVE"
                  onPress={() => handleRemovePlayer(item.id)}
                >
                  <Icon
                    type="entypo"
                    name="trash"
                    color={theme.COLORS.GRAY_400}
                    size={28}
                  />
                </PressablePlayerMenu>
              );
            }}
          >
            <PlayerCard
            
            id={item.id}
              variant={item.isPlaying}
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

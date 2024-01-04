import { Players } from "../../@types/players";

import { Modal, Pressable } from "react-native";

import theme from "../../theme";

import {
  AddButton,
  InputWrapper,
  PlayersList,
  PressablePlayerMenu,
  Title,
  Title2,
} from "./styles";

import { Input } from "../../components/Input";
import { PlayerCard } from "../../components/PlayerCard";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  Alert,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Icon } from "@rneui/themed";

import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Swipeable } from "react-native-gesture-handler";
import { usePlayers } from "../../hooks/playersContext";

type AddPlayerFormData = {
  name: string;
};

const AddPlayerSchema = yup.object({
  name: yup.string().required("Nome necessário para incluir jogador"),
});

export function Championship() {
  const { players, addNewPlayer, deletePlayer, disqualify, eliminatedPlayers } =
    usePlayers();

  const { control, handleSubmit, reset } = useForm<AddPlayerFormData>({
    resolver: yupResolver(AddPlayerSchema),
  });

  function handleAddPlayer({ name }: AddPlayerFormData) {
    const doesPlayerExists = players.find((player) => player.name === name);

    if (doesPlayerExists) {
      Alert.alert("Esse jogador já foi cadastrado no torneio");

      return;
    }

    addNewPlayer(name);

    reset();
  }

  function handleRemovePlayer(id: number) {
    Alert.alert(
      "Remover jogador",
      "Tem certeza que deseja remover o jogador do torneio?",
      [
        { text: "Sim", onPress: () => deletePlayer(id) },
        { text: "Não", style: "cancel" },
      ]
    );
  }

  function disqualifyPlayer(id: number) {
    const currentPlayer = players.find((player) => player.id === id);

    const titleButton = currentPlayer?.isPlaying
      ? "Eliminar Jogador"
      : "Voltar Jogador ";
    const textButton = currentPlayer?.isPlaying
      ? "Tem certeza que deseja eliminar esse jogador?"
      : "Tem certeza que deseja voltar com esse jogador?";

    Alert.alert(titleButton, textButton, [
      { text: "Sim", onPress: () => disqualify(id) },
      { text: "Não", style: "cancel" },
    ]);
  }

  const HeaderFlatList = () => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <Title>Participantes do Torneio</Title>
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
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Title2>Lista de Jogadores</Title2>
          <Title2>
            Restantes:{" "}
            <Text style={{ color: theme.COLORS.YELLOW_700 }}>
              {players.length - eliminatedPlayers.length}
            </Text>
            /{players.length}
          </Title2>
        </View>
      </>
    </TouchableWithoutFeedback>
  );

  const FooterFlatList = () => {
    return <View style={{ height: 28 }}></View>;
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

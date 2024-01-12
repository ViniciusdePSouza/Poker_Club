import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { ConfigWrapper, Container, Header, LogoImg, Title } from "./styles";
import { Alert, Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useConfiguration } from "../../hooks/configureTournamentContext";
import { ConfigInput } from "../../components/ConfigInput";
import Logo from "../../assets/299.png";

type ConfigureTournamentData = {
  buyIn?: string;
  rebuy?: string;
  addOn?: string;
};

const ConfigureTournamentSchema = yup.object({
  buyIn: yup.string(),
  rebuy: yup.string(),
  addOn: yup.string(),
});

export function TournamentConfig() {
  const { configureTournament } = useConfiguration();
  const { control, handleSubmit, reset } = useForm<ConfigureTournamentData>({
    resolver: yupResolver(ConfigureTournamentSchema),
  });

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("HomeStack" as never);
  }

  function handleConfigureTournament({
    addOn,
    buyIn,
    rebuy,
  }: ConfigureTournamentData) {
    if (!addOn || !buyIn || !rebuy) {
      return Alert.alert(
        "Informe todos os valores para configurarmos seu torneio"
      );
    }

    const configData = {
      buyIn: Number(buyIn),
      addOn: Number(addOn),
      rebuy: Number(rebuy),
    };

    Alert.alert(
      "Configuração de Torneio",
      `Torneio configurado com sucesso, aqui estão os valores que você selecionou: 

    Buy-In: ${configData.buyIn}

    Add-On:${configData.addOn}

    Rebuy:${configData.rebuy}

    Tem certeza que deseja prosseguir ? 
    `,
      [
        {
          text: "Sim",
          onPress: () => {
            configureTournament(configData);
            Keyboard.dismiss();
            reset();
            Alert.alert("Torneio configurado! ");
            handleNavigation()
          },
        },
        {
          text: "Não",
          style: "cancel",
          onPress: () => {
            Keyboard.dismiss();
            reset();
          },
        },
      ]
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <LogoImg source={Logo} alt="Logo image" />
          <Title>Configure seu torneio</Title>
        </Header>
        <ConfigWrapper>
          <Controller
            control={control}
            name="buyIn"
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <ConfigInput
                  label={"Buy-In"}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              );
            }}
          />

          <Controller
            control={control}
            name="rebuy"
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <ConfigInput
                  label={"Rebuy"}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              );
            }}
          />

          <Controller
            control={control}
            name="addOn"
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <ConfigInput
                  label={"Add-On"}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  onSubmitEditing={handleSubmit(handleConfigureTournament)}
                />
              );
            }}
          />
        </ConfigWrapper>
        <Button title={"Configurar"} onPress={handleSubmit(handleConfigureTournament)}/>
      </Container>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

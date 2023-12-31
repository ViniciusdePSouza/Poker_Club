import { ConfigWrapper, Container, Header, LogoImg, Title } from "./styles";

import Logo from "../../assets/299.png";
import { ConfigInput } from "../../components/ConfigInput";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useConfiguration } from "../../hooks/configureTournamentContext";

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

export function Home() {
  const { configureTournament } = useConfiguration();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConfigureTournamentData>({
    resolver: yupResolver(ConfigureTournamentSchema),
  });

  function handleConfigureTournament({
    addOn,
    buyIn,
    rebuy,
  }: ConfigureTournamentData) {
    if (!addOn || !buyIn || !rebuy) {
      return Alert.alert(
        "All the fields is required so we can configure your tournament"
      );
    }

    const configData = {
      buyIn: Number(buyIn),
      addOn: Number(addOn),
      rebuy: Number(rebuy),
    };

    Alert.alert(
      "Tournament Configuiration",
      `Tournament succefully configured, here it is your tournament values: 

    Buy-In: ${configData.buyIn}

    Add-On:${configData.addOn}

    Rebuy:${configData.rebuy}

    Are you sure you want to proceed?
    `,
      [
        {
          text: "Yes",
          onPress: () => {
            configureTournament(configData);
            Keyboard.dismiss();
            reset();
          },
        },
        {
          text: "No",
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
      <Container>
        <Header>
          <LogoImg source={Logo} alt="Logo image" />

          <Title>Configure your tournament </Title>
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
        </Header>
        <Button
          title={"Configure"}
          onPress={handleSubmit(handleConfigureTournament)}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}

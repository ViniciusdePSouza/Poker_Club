import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import {
  AwardedNumberButton,
  AwardedNumberText,
  ConfigWrapper,
  Container,
  Header,
  Label,
  LabelAwardedNumber,
  LogoImg,
  NumberAwardedPlayersView,
  Title,
} from "./styles";
import {
  Alert,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useConfiguration } from "../../hooks/configureTournamentContext";
import { ConfigInput } from "../../components/ConfigInput";
import Logo from "../../assets/299.png";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";

type ConfigureTournamentData = {
  buyIn?: string;
  rebuy?: string;
  addOn?: string;
  awardedNumber?: string;
};

const ConfigureTournamentSchema = yup.object({
  buyIn: yup.string(),
  rebuy: yup.string(),
  addOn: yup.string(),
  awardedNumber: yup.string(),
});

export function TournamentConfig() {
  const { configureTournament } = useConfiguration();
  const { control, handleSubmit, reset } = useForm<ConfigureTournamentData>({
    resolver: yupResolver(ConfigureTournamentSchema),
  });

  const [awardedNumberValue, setAwardedNumberValue] = useState<
    number | undefined
  >(3);

  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [percentage4, setPercentage4] = useState(0);
  const [percentage5, setPercentage5] = useState(0);
  const [percentage6, setPercentage6] = useState(0);

  const setPercentageArray = [
    setPercentage1,
    setPercentage2,
    setPercentage3,
    setPercentage4,
    setPercentage5,
    setPercentage6,
  ];

  const percentageArray = [
    percentage1,
    percentage2,
    percentage3,
    percentage4,
    percentage5,
    percentage6,
  ];

  const navigation = useNavigation();

  function awardedNumberActions(action: string) {
    if (action === "SUM") {
      setAwardedNumberValue((state) => state! + 1);

      return;
    }

    setAwardedNumberValue((state) => state! - 1);
  }

  function handleNavigation() {
    navigation.navigate("HomeStack" as never);
  }

  function callSetPercentageArray(index: number, value: string) {
    setPercentageArray[index](Number(value));
  }

  function calculatePercentage(number: number) {
    return number / 100;
  }

  function handleConfigureTournament({
    addOn,
    buyIn,
    rebuy,
    awardedNumber,
  }: ConfigureTournamentData) {
    if (awardedNumber == undefined) {
      return Alert.alert("Informe o número de jogadores premiados");
    }

    let totalPercentage = 0;
    for (let i = 0; i < Number(awardedNumber); i++) {
      totalPercentage = totalPercentage + percentageArray[i];
    }

    if (Number(totalPercentage) != 100) {
      return Alert.alert("A soma da porcentagem da premiação deve ser de 100%");
    }

    if (!addOn || !buyIn || !rebuy) {
      return Alert.alert(
        "Informe todos os valores para configurarmos seu torneio"
      );
    }

    const configData = {
      buyIn: Number(buyIn),
      addOn: Number(addOn),
      rebuy: Number(rebuy),
      prize: {
        awardedNumber: Number(awardedNumber),
        first: calculatePercentage(percentage1),
        second: calculatePercentage(percentage2),
        third: calculatePercentage(percentage3),
        forth: calculatePercentage(percentage4),
        fifth: calculatePercentage(percentage5),
        sixth: calculatePercentage(percentage6),
      },
    };

    Alert.alert(
      "Configuração de Torneio",
      `Torneio configurado com sucesso, aqui estão os valores que você selecionou: 

    Buy-In: ${configData.buyIn}

    Add-On:${configData.addOn}

    Rebuy:${configData.rebuy}

    Número de premiados: ${configData.prize.awardedNumber}

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
            handleNavigation();
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
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <Container>
            <View>
              <Header>
                <LogoImg source={Logo} alt="Logo image" />
                <Title>Configure seu torneio</Title>
              </Header>

              <Label>Valores:</Label>

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
                        onSubmitEditing={handleSubmit(
                          handleConfigureTournament
                        )}
                      />
                    );
                  }}
                />
              </ConfigWrapper>

              <Label>Premiação:</Label>

              <ConfigWrapper>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                  }}
                >
                  <AwardedNumberButton
                    onPress={() => awardedNumberActions("MINUS")}
                    disabled={awardedNumberValue!! <= 3}
                  >
                    <Icon type="ant-design" name="minus" />
                  </AwardedNumberButton>
                  <NumberAwardedPlayersView>
                    <LabelAwardedNumber>Número de premiados</LabelAwardedNumber>

                    <AwardedNumberText>{awardedNumberValue}</AwardedNumberText>
                  </NumberAwardedPlayersView>
                  <AwardedNumberButton
                    onPress={() => awardedNumberActions("SUM")}
                    disabled={awardedNumberValue!! >= 6}
                  >
                    <Icon type="ant-design" name="plus" />
                  </AwardedNumberButton>
                </View>
              </ConfigWrapper>

              <ConfigWrapper>
                {Array.from({ length: 3 }).map((_, index) => (
                  <ConfigInput
                    label={`% ${index + 1}`}
                    key={index}
                    onChangeText={(value) =>
                      callSetPercentageArray(index, value)
                    }
                  />
                ))}
              </ConfigWrapper>
              <ConfigWrapper>
                {Array.from({ length: Number(awardedNumberValue) - 3 }).map(
                  (_, index) => (
                    <ConfigInput
                      label={`% ${index + 4}`}
                      key={index}
                      onChangeText={(value) =>
                        callSetPercentageArray(index + 3, value)
                      }
                    />
                  )
                )}
              </ConfigWrapper>
            </View>
            <Button
              title={"Configurar"}
              onPress={handleSubmit(handleConfigureTournament)}
            />
          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

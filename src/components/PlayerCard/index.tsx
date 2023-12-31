import {
  AddOnBox,
  Box,
  Button,
  Card,
  CardText,
  ChipImg,
  Container,
  ContentModal,
  EliminationText,
  ModalView,
  PlayerCardVariantColor,
  PlayerImg,
  TextContent,
  Title,
} from "./styles";

import Chip from "../../assets/chip.png";
import Elimination from "../../assets/elimination.png";
import theme from "../../theme";
import { Icon } from "@rneui/themed";
import { useEffect, useState } from "react";
import { CheckBox } from "react-native-elements";
import { Players } from "../../@types/players";
import { usePlayers } from "../../hooks/playersContext";
import { Modal, Pressable, Text, View } from "react-native";

import PokerPlayer from "../../assets/playerbulldog.png";
import { useConfiguration } from "../../hooks/configureTournamentContext";

interface PlayerCardProps extends Omit<Players, "total"> {
  variant: PlayerCardVariantColor;
}

interface ModalPlayerProps {
  name: string;
}

export function PlayerCard({
  id,
  name,
  addOn,
  isPlaying,
  rebuys,
}: PlayerCardProps) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const [isChecked, setIsChecked] = useState(addOn);
  const [rebuysCounter, setRebuysCounter] = useState(rebuys);
  const [player, setPlayer] = useState<Players>({} as Players);
  const { players, modifyRebuy, modifyAddon } = usePlayers();
  const [showModal, setShowModal] = useState(false);

  const { configuration } = useConfiguration();

  function openModal() {
    setShowModal(true);
  }

  function operation(isAdding: boolean) {
    if (isAdding) {
      setRebuysCounter((state) => state + 1);

      modifyRebuy(id, rebuysCounter + 1);
      return;
    }
    setRebuysCounter((state) => state - 1);

    modifyRebuy(id, rebuysCounter - 1);
  }

  function changeAddOn() {
    setIsChecked(!isChecked);

    modifyAddon(id, !isChecked);
  }

  useEffect(() => {
    const currentPlayer = players.find((player) => player.id === id);

    if (currentPlayer) setPlayer(currentPlayer);
  }, [id, players]);

  return (
    <Container variant={isPlaying} onPress={openModal}>
      <ChipImg source={isPlaying ? Chip : Elimination} />

      <Title>{name.length > 13 ? `${name.substring(0, 13)}...` : name}</Title>

      {isPlaying ? (
        <Box>
          <AddOnBox>
            <TextContent>ADD-ON</TextContent>
            <CheckBox
              checkedColor={theme.COLORS.YELLOW_700}
              checked={isChecked}
              onPress={changeAddOn}
            />
          </AddOnBox>
          <Button onPress={() => operation(false)}>
            <Icon type="entypo" name="minus" color={theme.COLORS.WHITE} />
          </Button>

          <Title>{String(rebuysCounter)}</Title>

          <Button onPress={() => operation(true)}>
            <Icon type="entypo" name="plus" color={theme.COLORS.WHITE} />
          </Button>
        </Box>
      ) : (
        <EliminationText>
          Eliminado! Position: {`${player.position}/${players.length}`}{" "}
        </EliminationText>
      )}

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <ModalView>
          <ContentModal>
            <View
              style={{
                width: "100%",
                justifyContent: "flex-end",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Title>{name}</Title>
              <Pressable
                onPress={() => setShowModal(false)}
                style={{ marginLeft: 120 }}
              >
                <Icon
                  type="evil-icons"
                  name="close"
                  size={28}
                  color={theme.COLORS.YELLOW_700}
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 28,
                width: "70%",
                paddingHorizontal: 8,
                justifyContent: "space-between",
              }}
            >
              <PlayerImg source={PokerPlayer} />
              <View style={{ width: "60%", gap: 8 }}>
                <Card variant="ITEM">
                  <CardText
                    variant="TITLE"
                    style={{ color: theme.COLORS.BRONZE_500 }}
                  >
                    Buy-In :
                  </CardText>

                  <CardText variant="VALUE">
                    {formatter.format(configuration.buyIn)}
                  </CardText>
                </Card>
                <Card variant="ITEM">
                  <CardText
                    variant="TITLE"
                    style={{ color: theme.COLORS.BRONZE_500 }}
                  >
                    Add-On :
                  </CardText>

                  <CardText variant="VALUE">
                    {player.addOn ? formatter.format(configuration.addOn) : 0}
                  </CardText>
                </Card>
                <Card variant="ITEM">
                  <CardText
                    variant="TITLE"
                    style={{ color: theme.COLORS.BRONZE_500 }}
                  >
                    Rebuys :
                  </CardText>

                  <CardText variant="VALUE">
                    {formatter.format(configuration.rebuy * rebuysCounter)}
                  </CardText>
                </Card>

                <Card variant="TOTAL">
                  <CardText
                    variant="TITLE"
                    style={{ color: theme.COLORS.BRONZE_500 }}
                  >
                    Total :
                  </CardText>

                  <CardText variant="VALUE">
                    {formatter.format((configuration.rebuy * rebuysCounter) +
                      (player.addOn ? configuration.addOn : 0) +
                      configuration.buyIn)}
                  </CardText>
                </Card>
              </View>
            </View>
          </ContentModal>
        </ModalView>
      </Modal>
    </Container>
  );
}

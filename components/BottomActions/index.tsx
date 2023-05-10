import React from "react";
import { StyleSheet, View } from "react-native";

import UnderlineText from "../UnderlineText";
import CopyIcon from "../../assets/svg/js/CopyIcon";
import CutIcon from "../../assets/svg/js/CutIcon";
import BinIcon from "../../assets/svg/js/BinIcon";
import ActionsLinks from "../ActionsLinks";
import Button from "../Button";
import Divider from "../Divider";

export default function BottomActions() {
  const [isChoose, setIsChoose] = React.useState(false);
  const [isCome, setIsCome] = React.useState(false);
  const [isNotCome, setIsNotCome] = React.useState(false);

  const chooseText = "Choisi(e)";
  const comeText = "Venu";
  const notComeText = "Pas venu";

  function handleChoose() {
    setIsChoose(!isChoose);
  }
  function handleCome() {
    setIsCome(!isCome);
    isNotCome && setIsNotCome(false);
  }
  function handleNotCome() {
    setIsNotCome(!isNotCome);
    isCome && setIsCome(false);
  }

  return (
    <View>
      <View style={styles.left}>
        {isChoose ? (
          <Button onPress={handleChoose} label={chooseText} theme="green" />
        ) : (
          <UnderlineText
            onPress={handleChoose}
            text={chooseText}
            disabled={false}
          />
        )}

        {isCome ? (
          <Button onPress={handleCome} label={comeText} theme="darkBlue" />
        ) : (
          <UnderlineText
            onPress={handleCome}
            text={comeText}
            disabled={false}
          />
        )}

        {isNotCome ? (
          <Button onPress={handleNotCome} label={notComeText} theme="red" />
        ) : (
          <UnderlineText
            onPress={handleNotCome}
            text={notComeText}
            disabled={false}
          />
        )}
      </View>

      <Divider />

      <ActionsLinks containerStyles={styles.actionsLinks}>
        <UnderlineText text="Copier" icon={<CopyIcon />} />
        <UnderlineText text="Couper" icon={<CutIcon />} />
        <UnderlineText text="Supprimer" icon={<BinIcon />} />
      </ActionsLinks>

      <Divider />

      <View style={styles.right}>
        <Button
          stylesContainer={[styles.button, { flex: 1 }]}
          label="Plus d'options (produits, remises, ...)"
        />
        <Button
          stylesContainer={[styles.button, { maxWidth: 180 }]}
          label="Encaisser 230,00 €"
          theme="green"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  right: {
    gap: 16,
  },
  button: {
    alignSelf: "center",
    height: 56,
  },
  actionsLinks: {
    justifyContent: "center",
  },
});

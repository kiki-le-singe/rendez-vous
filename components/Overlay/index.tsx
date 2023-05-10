import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { OverlayProps } from "./types";
import Card from "../Card";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Overlay = ({
  onClose = () => {},
  onSelectItem = (item: string, selectName: string) => {},
  isOpen = false,
  values = [],
  selectName = "",
}: OverlayProps) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  const snapPoints = React.useMemo(() => ["25%", "70%"], []);

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index === -1) {
      handleClosePress();
    }
  }, []);

  function handleClosePress() {
    bottomSheetRef.current?.close();
    onClose();
  }

  function handleSelectItem(item: string, selectName: string) {
    handleClosePress();
    onSelectItem(item, selectName);
  }

  const renderItem = React.useCallback(
    (item: string, index: number) => (
      <Card key={`PickerValue_${index}`}>
        <TouchableOpacity
          onPress={() => {
            handleSelectItem(item, selectName);
          }}
        >
          <Text style={styles.item}>{item}</Text>
        </TouchableOpacity>
      </Card>
    ),
    [selectName]
  );

  return !isOpen ? null : (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.overlayContainer}
          onPress={handleClosePress}
        >
          <View style={styles.overlay} />
        </TouchableOpacity>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {values.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

export default Overlay;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  bottomSheetContentContainer: {
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    gap: 12,
    paddingHorizontal: 12,
  },
  item: {
    fontSize: 13,
    color: Colors.light.darkGreen,
  },
});

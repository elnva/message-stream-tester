import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const stencilBlockStyles = StyleSheet.create({
  stencil: {
    flex: 3,
    flexDirection: "column"
  },
  stencilBlock: {
    flexGrow: 0,
    flexShrink: 0
  },
  stencilChildren: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "auto"
  },
  stencilMiddle: {
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "auto"
  }
});

function StencilBlock({
  children,
  margin,
  stencilColor,
  borderRadius,
  overlayColor
}) {
  stencilColor = stencilColor || "#ffffff";
  borderRadius = borderRadius || 0;
  margin = margin || 0;
  overlayColor = overlayColor || "transparent";

  let [
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius
  ] = Array(4).fill(0);

  if (Array.isArray(borderRadius) && borderRadius.length === 4) {
    [
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    ] = borderRadius;
  } else {
    [
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    ] = Array(4).fill(borderRadius);
  }

  let maxRadius = Math.max(
    ...[
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    ]
  );

  let borderStyle = {
    borderTopLeftRadius,
    borderBottomLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    position: "absolute",
    top: (-1 * maxRadius) / 2,
    bottom: (-1 * maxRadius) / 2,
    left: (-1 * maxRadius) / 2,
    right: (-1 * maxRadius) / 2,
    borderWidth: maxRadius / 2,
    borderColor: stencilColor
  };

  let [marginTop, marginRight, marginBottom, marginLeft] = Array(4).fill(0);

  if (Array.isArray(margin) && margin.length === 4) {
    [marginTop, marginRight, marginBottom, marginLeft] = margin;
  } else {
    [marginTop, marginRight, marginBottom, marginLeft] = Array(4).fill(margin);
  }

  return (
    <View style={stencilBlockStyles.stencil}>
      <View
        style={[
          stencilBlockStyles.stencilBlock,
          { flexBasis: marginTop, backgroundColor: stencilColor }
        ]}
      ></View>
      <View style={stencilBlockStyles.stencilMiddle}>
        <View
          style={[
            stencilBlockStyles.stencilBlock,
            { flexBasis: marginLeft, backgroundColor: stencilColor }
          ]}
        ></View>
        <View
          style={[
            stencilBlockStyles.stencilChildren,
            { backgroundColor: overlayColor }
          ]}
        >
          <View style={borderStyle}></View>
          {children}
        </View>
        <View
          style={[
            stencilBlockStyles.stencilBlock,
            { flexBasis: marginRight, backgroundColor: stencilColor }
          ]}
        ></View>
      </View>
      <View
        style={[
          stencilBlockStyles.stencilBlock,
          { flexBasis: marginBottom, backgroundColor: stencilColor }
        ]}
      ></View>
    </View>
  );
}

export default StencilBlock;

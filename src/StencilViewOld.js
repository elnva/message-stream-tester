import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const StencilView = ({
  stencilWidth,
  stencilLeftWidth,
  stencilTopWidth,
  stencilRightWidth,
  stencilBottomWidth,
  stencilRadius,
  stencilTopLeftRadius,
  stencilTopRightRadius,
  stencilBottomRightRadius,
  stencilBottomLeftRadius,
  stencilColor,
  children
}) => {
  const canvasRef = React.useRef(null);
  const childRef = React.useRef(null);

  if (stencilWidth) {
    [
      stencilLeftWidth,
      stencilTopWidth,
      stencilRightWidth,
      stencilBottomWidth
    ] = Array(4).fill(stencilWidth);
  }

  if (stencilRadius) {
    [
      stencilTopLeftRadius,
      stencilTopRightRadius,
      stencilBottomRightRadius,
      stencilBottomLeftRadius
    ] = Array(4).fill(stencilRadius);
  }

  const draw = (ctx) => {
    const width = childRef.current.clientWidth;
    const height = childRef.current.clientHeight;

    ctx.rect(0, 0, width, height);

    ctx.roundRect(
      stencilLeftWidth,
      stencilTopWidth,
      width - stencilRightWidth - stencilLeftWidth,
      height - stencilTopWidth - stencilBottomWidth,
      [
        (stencilTopLeftRadius,
        stencilTopRightRadius,
        stencilBottomRightRadius,
        stencilBottomLeftRadius)
      ]
    );

    ctx.fillStyle = stencilColor;
    ctx.fill("evenodd");
  };

  const onLayout = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = childRef.current.clientWidth;
    canvas.height = childRef.current.clientHeight;

    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 999;
    canvas.style.imageRendering = "crisp-edges";

    draw(ctx);
  };

  return (
    <>
      <canvas ref={canvasRef} />
      <View onLayout={onLayout} ref={childRef}>
        {children}
      </View>
    </>
  );
};

export default StencilView;

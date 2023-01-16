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
  //const childRef = React.useRef(null);

  /*
  const [bubbleSize, setBubbleSize] = React.useState({});
  const [messageSize, setMessageSize] = React.useState({});

  const onBubbleLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    console.log({ x, y, width, height });
    setBubbleSize({ x, y, width, height });
  };

  const onMessageLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setMessageSize({ x, y, width, height });
  };
  */

  stencilColor = stencilColor || "rgba(255, 255, 255, 1)";

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

  /*eslint-disable */
  const draw = (ctx) => {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;

    ctx.roundRect(
      stencilLeftWidth,
      stencilTopWidth,
      canvasWidth - stencilRightWidth - stencilLeftWidth,
      canvasHeight - stencilTopWidth - stencilBottomWidth,
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

  React.useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;

    //canvas.style.visibility = "hidden";
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    canvas.width = canvasRef.current.offsetWidth;
    canvas.height = canvasRef.current.offsetHeight;
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.right = 0;
    canvas.style.bottom = 0;
    canvas.style.zIndex = 999;
    canvas.style.imageRendering = "crisp-edges";
    animationFrame = requestAnimationFrame(() => draw(ctx));

    //const onResize = () => draw(ctx);

    //window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animationFrame);
    };
    //return () => window.removeEventListener("resize", onResize);
  }, [draw]);

  /*
  const onLayout = (event) => {};

  const child = React.cloneElement(React.Children.toArray(children)[0], {
    ref: childRef,
    onLayout
  });
  */

  return <canvas ref={canvasRef} />;
};

export default StencilView;

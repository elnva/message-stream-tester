import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StencilView from "./StencilView";

function Message({ content, isOwn }) {
  const bubbleRef = React.useRef({});
  const messageRef = React.useRef({});

  const [bubbleSize, setBubbleSize] = React.useState({});
  const [messageSize, setMessageSize] = React.useState({});

  const onBubbleLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setBubbleSize({ x, y, width, height });
  };

  const onMessageLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setMessageSize({ x, y, width, height });
  };

  let messageStyle = {
    flexDirection: isOwn ? "row" : "row-reverse"
  };
  let messageBubbleStyle = {
    backgroundColor: isOwn ? "transparent" : "#292929"
    /* Borders for testing. Remove */
    // borderColor: isOwn ? "#f0f0f0" : "transparent",
    // borderWidth: 1
  };

  let messageTextStyle = {
    color: "#fff"
  };

  let messageWidth = messageRef.current.clientWidth;
  let bubbleWidth = bubbleRef.current.clientWidth;

  let messageHeight = messageRef.current.clientHeight;
  let bubbleHeight = bubbleRef.current.clientHeight;

  let stencilTopWidth = bubbleRef.current.offsetTop;
  let stencilLeftWidth = bubbleRef.current.offsetLeft;

  let stencilBottomWidth = messageHeight - stencilTopWidth - bubbleHeight;
  let stencilRightWidth = messageWidth - stencilLeftWidth - bubbleWidth;

  return (
    <View
      ref={messageRef}
      onLayout={onMessageLayout}
      style={[styles.message, messageStyle]}
    >
      <StencilView
        stencilTopWidth={stencilTopWidth}
        stencilRightWidth={stencilRightWidth}
        stencilBottomWidth={stencilBottomWidth}
        stencilLeftWidth={stencilLeftWidth}
        stencilRadius={18}
        stencilColor={"#141414"}
      ></StencilView>
      <View
        ref={bubbleRef}
        onLayout={onBubbleLayout}
        style={[styles.messageBubble, messageBubbleStyle]}
      >
        <Text style={[styles.messageText, messageTextStyle]}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    padding: 10,
    justifyContent: "flex-end"
    /* Borders for testing. Remove */
    //borderColor: "#0a93f6",
    //borderWidth: 1
  },
  messageBubble: {
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 16,
    maxWidth: "70%"
  }
});

export default Message;

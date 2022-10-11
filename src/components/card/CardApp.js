import React from "react";
import Card2 from "./Card2";
import CardList from "./CardList";
import { GlobalStyles } from "../../GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    myBlue: "#2979ff",
  },
};

const CardApp = () => {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <ThemeProvider theme={theme}>
        <CardList>
          <Card2 secondary></Card2>
          <Card2 secondary={false} fontSize="22px"></Card2>
          <Card2></Card2>
          <Card2></Card2>
          <Card2></Card2>
          <Card2></Card2>
        </CardList>
      </ThemeProvider>
    </div>
  );
};

export default CardApp;

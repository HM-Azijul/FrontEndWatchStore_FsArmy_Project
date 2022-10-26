import GlobalStyle from "../components/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../components/UI/theme";
import WeeklyProducts from "../components/shared/weeklyProducts";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WeeklyProducts />
      </ThemeProvider>
    </>
  );
}

import GlobalStyle from "../components/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../components/UI/theme";
import WeeklyProducts from "../components/shared/weeklyProducts";
import MostPremiumWatch from "../components/shared/mostPremiumWatch";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WeeklyProducts />
        <MostPremiumWatch />
      </ThemeProvider>
    </>
  );
}

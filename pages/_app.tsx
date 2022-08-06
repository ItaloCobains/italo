import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../src/components/Header";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { useEffect, useState } from "react";
import { themeDark, themeLight } from "./../src/UI/cores";

type Color = {
  Color1: string;
  Color2: string;
  Color3: string;
  Color4: string;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [colorPatterns, setColorPatterns] = useState<Color>(themeLight);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const handleIcon = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      setColorPatterns(themeDark);
    } else {
      setColorPatterns(themeLight);
    }
  }, [darkMode]);

  return (
    <>
      <Header
        IconColor={colorPatterns.Color2}
        ColorBgHeader={colorPatterns.Color1}
        MenuMobileColor={colorPatterns.Color1}
        StringLogo="ItaloCobains"
      />
      <Component {...pageProps} />
      {/* {darkMode === true ? (
        <WiNightClear
          size="2em"
          color="#000"
          className="btn_dark_mode"
          style={{ backgroundColor: colorPatterns.Color1 }}
          onClick={handleIcon}
        />
      ) : (
        <WiDaySunny
          size="2em"
          color="#000"
          className="btn_dark_mode"
          style={{ backgroundColor: colorPatterns.Color1 }}
          onClick={handleIcon}
        />
      )} */}
    </>
  );
}

export default MyApp;

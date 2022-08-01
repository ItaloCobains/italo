import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { themeLight, themeDark } from "../../UI/cores";
import navItem from "../../utils/data";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type Props = {
  StringLogo: string;
  // DarkTheme: boolean;
};

export const Header = ({ StringLogo }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width) {
      if (width >= 800) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    }
  }, [width]);

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: themeDark.Color1 }}
    >
      <div className={styles.Logo}>{StringLogo}</div>
      <nav className={styles.nav}>
        {isActive === true ? (
          <CgMenu color="#fff" />
        ) : (
          <>
            {navItem.map((data, index) => {
              return (
                <Link key={index} href={data.path}>
                  <a>
                    <li>{data.name}</li>
                  </a>
                </Link>
              );
            })}
          </>
        )}
      </nav>
    </header>
  );
};

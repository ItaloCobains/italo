import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import navItem from "../../utils/data";
import Link from "next/link";
import { CgMenu, CgClose } from "react-icons/cg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type Props = {
  StringLogo: string;
  ColorBgHeader: string;
  MenuMobileColor: string;
};

export const Header = ({
  StringLogo,
  ColorBgHeader,
  MenuMobileColor,
}: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { height, width } = useWindowDimensions();
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

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
      style={{ backgroundColor: ColorBgHeader }}
    >
      <div className={styles.Logo}>{StringLogo}</div>
      <nav className={styles.nav}>
        {isActive === true ? (
          <CgMenu color="#fff" onClick={handleMenu} />
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
      {menuActive === true ? (
        <div
          className={styles.navMobile}
          style={{ backgroundColor: MenuMobileColor }}
        >
          {navItem.map((data, index) => {
            return (
              <>
                <Link key={index} href={data.path}>
                  <a>
                    <li>{data.name}</li>
                  </a>
                </Link>
              </>
            );
          })}
        </div>
      ) : null}
    </header>
  );
};

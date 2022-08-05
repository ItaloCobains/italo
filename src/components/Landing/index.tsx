import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import action from "./../../../public/img/boy.png";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitles}>
        <div className={styles.Title}>
          Olá, Eu sou <br />
          ItaloCobains
        </div>
        <div className={styles.AreaDownload}>
          <div className={styles.TitleDownload}>Download Resume</div>
          <div className={styles.EffectDownload}></div>
        </div>
        <div className={styles.areaScroll}>
          <div className={styles.ScrollIcon}>
            <div className={styles.CiruloScrollEffect}></div>
          </div>
          <div className={styles.ScrollTitle}>Scrol Down</div>
        </div>
      </div>
      <div>
        <Image
          src={action}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Landing;

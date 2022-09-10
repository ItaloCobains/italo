import Image from "next/image";
import React, { useState } from "react";
import styles from "./style.module.css";

import graph from "../../../public/img/graph.png";

const Skills = () => {
  const handleDownLoadResume = () => {
    const URL = "#";
    if (typeof window !== undefined) {
      window.location.href = URL;
    }
  };
  return (
    <main className={styles.Container}>
      <div className={styles.Graph}>
        <Image src={graph} alt="graph" width={300} height={300} />
      </div>
      <div className={styles.Labels}>
        <h3 className={styles.h3}>Minhas Melhores Habilidades</h3>
        <small>
          Como desenvolvedor fullstacks tenho varias habilidades e como um ótimo
          curioso minhas habilidades não se limitam apenas no desenvolvimento
          web.
        </small>
        <div className={styles.skill}>
          <span>React</span>
          <span>NextJs</span>
          <span>NestJs</span>
          <span>React-Native</span>
        </div>
        <div className={styles.AreaDownload}>
          <div onClick={handleDownLoadResume} className={styles.TitleDownload}>
            Download Resume
          </div>
          <div className={styles.EffectDownload}></div>
        </div>
      </div>
    </main>
  );
};

export default Skills;

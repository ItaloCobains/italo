import Image from "next/image";
import React, { useState } from "react";
import styles from "./style.module.css";

import arrow from "../../../public/img/arrow.png";

const noticia = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    


    setEmail("");
  };

  return (
    <section className={styles.container}>
      <div className={styles.TextArea}>
        <h1 className={styles.Title}>Notícias</h1>
        <p className={styles.SubTitle}>
          Faça seu site full stacks com desconto
        </p>
      </div>
      <div className={styles.InputArea}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.InputField}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entre com seu email"
          />
        </form>
        <div className={styles.button}>
          <div className={styles.msg} onClick={handleSubmit}>
            Enviar agora
          </div>
          <div onClick={handleSubmit}>
            <Image src={arrow} alt="Arrow" width={15} height={15} />
            <Image src={arrow} alt="Arrow" width={15} height={15} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default noticia;

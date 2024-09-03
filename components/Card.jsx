import React from 'react';
import Image from 'next/image';
import styles from "@/styles/Card.module.css"

const Card = ({ imageSrc, title, description, imageAlt }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.imagen}
        width={340}
        height={180}
        priority={true}
        src={imageSrc}
        alt={imageAlt}
      />
      <div className={styles.text}>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

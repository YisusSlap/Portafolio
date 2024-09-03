import React from 'react';
import styles from "@/styles/ListCard.module.css"

const ListCard = ({ title, description, date, slug }) => {
    return (
      <div className={styles.card}>
        <a href={`/${slug}`} className={styles.link}>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
              <span className={styles.resaltar}>{date}</span>
            </p>
          </div>
        </a>
      </div>
    );
  };

export default ListCard;
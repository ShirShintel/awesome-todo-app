import React from "react";
import styles from "ExitButton.module.css";

interface ExitButtonProps {
    onClick: () => void;
};

export const ExitButton: React.FC<ExitButtonProps> = props =>
    <button className={styles.exitButton} onClick={props.onClick}>
        X
    </button>;
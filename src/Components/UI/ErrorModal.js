import React from "react";
import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModol.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card classname={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p> {props.message} </p>
        </div>
        <footer className={classes.actions} onClick={props.onConfirm}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

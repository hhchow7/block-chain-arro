import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { InputGroup, FormControl } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
    margin: "auto",
    padding: "1rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  action: {
    paddingLeft: "1rem",
  },
});

export default function EthereumKeypair() {
  const classes = useStyles();

  //   useEffect(() => {

  // }, []);

  const KeyInputGroup = ({ id, label }) => {
    return (
      <InputGroup key={id} className="mb-3">
        <FormControl
          placeholder={label}
          aria-label={label}
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          style={{ backgroundColor: "grey" }}
        >
          Copy
        </Button>
      </InputGroup>
    );
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Ethereum Keypair Generater
        </Typography>
        <div className="mt-5" />
        <KeyInputGroup id="publicKey" label="Public Key" />
        <div className="mt-3" />
        <KeyInputGroup id="privateKey" label="Private Key" />
        <div className="mt-3" />
        <KeyInputGroup id="mnemonicPhrases" label="Mnemonic Phrases" />
      </CardContent>
      <CardActions className={classes.action}>
        <Button
          size="small"
          style={{
            backgroundColor: "grey",
            borderRadius: "unset",
            padding: "0.5rem 1rem",
          }}
        >
          Generate
        </Button>
      </CardActions>
    </Card>
  );
}

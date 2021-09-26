import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { InputGroup, FormControl, Form } from "react-bootstrap";

import StellarHDWallet from "stellar-hd-wallet";

import "./style.css";

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

  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [mnemonic, setMnemonic] = useState("");

  //   useEffect(() => {

  // }, []);

  function toHex(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

  const handleGenerate = () => {
    // generate ethereum keypair
    const mnemonic = StellarHDWallet.generateMnemonic();
    const wallet = StellarHDWallet.fromMnemonic(mnemonic);

    let publicKey = toHex(wallet.getPublicKey(0));
    let privateKey = toHex(wallet.getSecret(0));
    // console.log(publicKey);
    // console.log(privateKey);
    // console.log(mnemonic);
    setPublicKey(publicKey);
    setPrivateKey(privateKey);
    setMnemonic(mnemonic)
  };

  const KeyInputGroup = ({ id, label,value}) => {
    return (
      // <InputGroup key={id} className="mb-3">
      <Form.Group key={id} controlId={id} className="mb-3" style={{textAlign:"left"}}>
        <Form.Label >{label}</Form.Label>
        <FormControl
          placeholder={label}
          aria-label={label}
          aria-describedby="basic-addon2"
          defaultValue={value}
          readOnly={true}
        />
        </Form.Group>
      // </InputGroup>
    );
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Ethereum Keypair Generater
        </Typography>
        <div className="mt-5" />
        <KeyInputGroup id="publicKey" label="Public Key" value={publicKey} />
        <div className="mt-3" />
        <KeyInputGroup id="privateKey" label="Private Key" value={privateKey} />
        <div className="mt-3" />
        <KeyInputGroup
          id="mnemonicPhrases"
          label="Mnemonic Phrases"
          value={mnemonic}
        />
      </CardContent>
      <CardActions className={classes.action}>
        <Button
          size="small"
          className="card-action__btn"
          onClick={() => {
            handleGenerate();
          }}
        >
          Generate
        </Button>
      </CardActions>
    </Card>
  );
}

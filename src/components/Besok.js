import React from "react";
import image2 from "../utils/images/dödsbo-värdering.png";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column"
    }
  },
  para: {
    margin: "0.5rem 0",
    letterSpacing: "1px",
    lineHeight: "27px",
    maxWidth: "500px",
    "@media screen and (max-width: 800px)": {
      fontSize: "0.9rem"
    }
  }
});
const Besok = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section style={{ margin: "1rem 0" }}>
        <h2 style={{ color: "#0369a1" }}>Kostnadsfri värdering</h2>
        <div
          style={{
            margin: "0.7rem auto",
            width: "45%",
            background: "#0369a1",
            height: "1px"
          }}
        ></div>
        <p className={classes.para}>
          Vi erbjuder <strong>kostnadsfri</strong> kostnadsfri värdering inom
          Göteborg, Kungälv, Ale, Stenungsund och Tjörn. Vi har säljkanalerna
          och egen butiker. Dödsbo Jouren är ett företag som tänker miljösmart
          och på återanvändning. Vi skänker till behandlingshem, olika typer av
          boenden, kyrkor, <strong>hjälporganisationer</strong> och till
          behövande. Vi har valt att skänka 100 kronor per uppdrag till olika
          hjälporganisationer. Efter att vi har tömt dödsboet inklusive förråd,
          källare och övriga utrymmen så gör vi en noggrann flyttstädning av
          bohaget, dödsboet eller huset. Söker du en uppköpare av dödsbon kan du
          vända dig till oss.
        </p>
      </section>
      <section style={{ margin: "1rem 0" }}>
        <img src={image2} className="besok-img" />
      </section>
    </div>
  );
};

export default Besok;
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "3rem",
    flexDirection: "row",
    background: "#a7c957",
    margin: "0 0.5rem",
    color: "white",
    justifyContent: "space-evenly",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
      textAlign: "center"
    }
  },
  sec1: {
    marginBottom: "1rem"
  },
  sec2: {
    marginBottom: "2rem"
  },
  paragraph: {
    lineHeight: "28px",
    fontSize: "0.9rem",
    margin: "0 auto",
    "@media screen and (min-width: 800px)": {
      width: "400px"
    }
  },
  title: {
    color: "white",
    marginBottom: "0.5rem"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  btn: {
    background: "#e3c148",
    color: "white",
    border: "none",
    height: "2rem",
    borderRadius: "5px",
    marginTop: "0.3rem",
    fontWeight: "bold"
  },
  input: {
    height: "2rem",
    marginBottom: "0.3rem",
    width: "100%"
  }
});

const Helhetslosningdodsbo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="helhet">
      <section className={classes.sec1}>
        <h2 className={classes.title}>Helhetslösning för dödsbo</h2>
        <p className={classes.paragraph}>
        Vi erbjuder en komplett helhetslösning för hantering av dödsbo, inklusive professionell service för rensning, försäljning, avveckling av abonnemang och juridisk rådgivning. Vår tjänst gör hela processen smidig och enkel, så att du kan fokusera på det som är viktigt. Kontakta oss idag för en kostnadsfri konsultation angående dödsbo, dödsbo tömning och relaterade tjänster.

Vi förstår att ett dödsbo kan vara mer krävande än vad man först tror. Det finns många krav på sortering, avfallshantering och tömning av dödsbo, vilket gör att det är viktigt att ha rätt hjälp. Vi på Trygga Dödsbon tar hela ansvaret från att sortera{" "}
          <a href="/dodsboet" style={{ color: "white" }} title="dödsboet">
            dödsboet
          </a>
          , bortforsling av dödsboet,{" "}
          <a
            href="/tomma-dodsbo"
            style={{ color: "white" }}
            title="tömma dödsbo"
          >
            tömning av dödsboet
          </a>{" "}
          och sedan städning av dödsboet. Vi gör även luktsaneringar av dödsbo
          eller röksanering av dödsbo.
          Behöver du hjälp med att tömma ett dödsbo? Vi är här för att underlätta för dig och göra hanteringen av ditt dödsbo enkel och smidig.
        </p>
      </section>
    </div>
  );
};

export default Helhetslosningdodsbo;

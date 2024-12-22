import React from "react";
import HogerSection from "../HogerSection";
const Divider = () => {
  return (
    <div>
     <div style={{ marginBottom: "3rem" }} className="main-comp-divider-comp">
      <img
        style={{
          objectFit: "contain",
          width: "340px",
          height: "300px",
          marginLeft: "0.5rem"
        }}
        src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="tömma lägenheter"
        title="tömma lägenheter"
      />
      <section>
        <h2 style={{ marginBottom: "0.5rem", marginLeft: "0.5rem" }}>
        Låt proffsen guida dig!
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            maxWidth: "440px",
            marginBottom: "0.5rem",
            marginLeft: "0.5rem",
            marginRight: "0.5rem"
          }}
        >
      Vårt professionella och rutinerade team jobbar snabbt och med precision för att underlätta för våra kunder i svåra tider. Vi köper, tömmer och städar dödsbon i Göteborg (Västra Götaland).
        </p>
      </section>
    </div>
            <HogerSection textsecond={'Vi erbjuder kostnadsfri och professionell värdering av dödsbon, bohag och enskilda föremål. Genom vår tjänst kan vi hjälpa dig att få en noggrann uppskattning av hemmets lösöre, vilket är ett viktigt steg inför en eventuell tömning av dödsboet. Vår bedömning ger dig ett fast pris för tömningen, och vi kan även lämna ett specifikt erbjudande för uppköp av värdefulla föremål vi är intresserade av att köpa.'} servicesec={'Dödsbo'} titlesecond={'Värdering av dödsbo och bohag'} bannerText={'Utnyttja ditt RUT-avdrag 50% när du flyttar till ett boende'} service={'Dödsbo'} title={'Sälja dödsbo?'} text={'Vi erbjuder professionell hantering av dödsbon, inklusive tömning, städning och försäljning av föremål. Vi köper upp dödsbon och säljer vidare värdefulla objekt på ett effektivt sätt, samtidigt som vi ser till att tömma och städa dödsbot. Vårt mål är att underlätta processen för anhöriga genom att ta hand om allt från värdering och bortforsling av dödsbo till slutstädning, med omtanke och respekt.'} imgUrl={'https://images.pexels.com/photos/26731823/pexels-photo-26731823/free-photo-of-tra-bank-sommar-stenar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
    </div>
   
  );
};

export default Divider;

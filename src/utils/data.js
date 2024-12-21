import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCalculator } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";

export const navlinks = [
  {
    id: 2,
    label: "Tömning",
    path: "/tomma-bohag"
  },
  {
    id: 3,
    label: "Värdering",
    path: "/vardera-dodsbo"
  },
  {
    id: 4,
    label: "Städning",
    path: "/stadning-av-dodsbo"
  },
  {
    id: 5,
    label: "Flytt",
    path: "/bohagsflytt"
  },
  {
    id: 6,
    label: "Uppköp",
    path: "/uppkop-av-dodsbo"
  },
  {
    id: 7,
    label: "Bortforsling",
    path: "/bortforsling-dodsbo"
  },
  {
    id: 8,
    label: "Återvinning",
    path: "/atervinning"
  },
  {
    id: 9,
    label: "Avfallshantering",
    path: "/avfallshantering"
  },
  {
    id: 10,
    label: "Återvinningsstation",
    path: "/atervinningsstation"
  },
  {
    id: 11,
    label: "Återvinningscentral",
    path: "/atervinningscentral"
  }
];
export const erbjuder = [
  {
    id: 22,
    title: "Dödsbo Hantering",
    icon: <BiHomeAlt />
  },
  {
    id: 55,
    title: "Värdering av Dödsbo och Bohag",
    icon: <AiOutlineCalculator />
  },
  {
    id: 33,
    title: "Flytt & Packning",
    icon: <FaTruckMoving />
  },
  {
    id: 43,
    title: "Städning, Flyttstäd & Sanering",
    icon: <MdCleaningServices />
  },
  {
    id: 51,
    title: "Uppköp & Försäljning",
    icon: <AiOutlineCreditCard />
  }
];

export const customerReviews = [
  {
    id: 1,
    service: "Bohagsflytt",
    kund: "Anders Svensson",
    path: "/bohagsflytt",
    comment:
      "Fantastisk service! Flyttgubbarna var effektiva och varsamma med mina saker. Rekommenderas varmt."
  },
  {
    id: 2,
    service: "Flyttstäd",
    kund: "Sara Nilsson",
    path: "/flyttstad",
    comment:
      "Städningen var toppen! Alla ytor blev skinande rena och hyresvärden var nöjd. Tack för hjälpen!"
  },
  {
    id: 3,
    service: "Fönsterputs",
    kund: "Johan Persson",
    path: "/fonsterputs",
    comment:
      "Fönstren blev som nya! Noggranna och trevliga, jag kommer definitivt att anlita dem igen."
  },
  {
    id: 4,
    service: "Privatflytt",
    kund: "Emelie Karlsson",
    path: "/privatflytt",
    comment:
      "Helt underbar personal! De gjorde min flytt smidig och stressfri. Tack så mycket!"
  },
  {
    id: 5,
    service: "Kontorsflytt",
    kund: "Anna Eriksson",
    path: "/kontorsflytt",
    comment:
      "Vår kontorsflytt gick väldigt snabbt och smidigt. Professionell service hela vägen."
  },
  {
    id: 6,
    service: "Magasinering",
    kund: "Peter Andersson",
    path: "/magasinering",
    comment:
      "Bra lösningar för förvaring, och allt kändes säkert och tryggt. Väldigt nöjd!"
  },
  {
    id: 7,
    service: "Tungtransport",
    kund: "Oskar Lund",
    path: "/tungtransport",
    comment:
      "De hjälpte oss med att flytta ett piano. Väldigt skickliga och försiktiga. Imponerande!"
  },
  {
    id: 8,
    service: "Uppköp av dödsbo",
    kund: "Liselott Andersson",
    path: "/uppkop-av-dodsbo",
    comment:
      "De kom ut på en kostnadsfri värdering för uppköp av vårt dödsbo. Svenska Dödsbo köpte en hel del av oss och resten forsla dom bort och skänkte. Tack för hjälpen med vårt dödsbo."
  },
  {
    id: 9,
    service: "Bohagsflytt",
    kund: "Lisa Berg",
    path: "/bohagsflytt",
    comment:
      "Snabb och pålitlig flyttfirma som verkligen höll vad de lovade. Kan inte vara mer nöjd."
  },
  {
    id: 10,
    service: "Flyttstäd",
    kund: "Mikael Johansson",
    path: "/flyttstad",
    comment:
      "Flyttstädningen var över förväntan! Jättebra resultat och till ett rimligt pris."
  },
  {
    id: 11,
    service: "Fönsterputs",
    kund: "Karin Holmqvist",
    path: "/fonsterputs",
    comment:
      "Snabbt och smidigt med ett otroligt bra resultat. Rekommenderar verkligen detta företag."
  },
  {
    id: 12,
    service: "Privatflytt",
    kund: "Emma Nilsson",
    path: "/privatflytt",
    comment:
      "Flyttkillarna var trevliga och hjälpsamma, allt gick som på räls. Tack för all hjälp!"
  },
  {
    id: 13,
    service: "Kontorsflytt",
    kund: "Stefan Gustafsson",
    path: "/kontorsflytt",
    comment:
      "Mycket smidig flytt av hela vårt kontor. Punktliga och organiserade. Supernöjd!"
  },
  {
    id: 14,
    service: "Magasinering",
    kund: "Maria Larsson",
    path: "/magasinering",
    comment:
      "Jättebra lösningar för tillfällig förvaring av våra möbler under renoveringen. Rekommenderas!"
  },
  {
    id: 15,
    service: "Tungtransport",
    kund: "Henrik Olsson",
    path: "/tungtransport",
    comment:
      "Flytt av vårt kassaskåp gick utan problem. Proffsiga och noggranna, kan inte klaga."
  },
  {
    id: 16,
    service: "Flyttstäd",
    kund: "Sofia Mattsson",
    path: "/flyttstad",
    comment:
      "Helt suveränt arbete! Lägenheten såg ut som ny, och vi fick tillbaka hela depositionen."
  },
  {
    id: 17,
    service: "Bohagsflytt",
    kund: "Magnus Sjöberg",
    path: "/bohagsflytt",
    comment:
      "Snabb och problemfri flytt. Personalen var supertrevlig och hjälpsam!"
  },
  {
    id: 18,
    service: "Privatflytt",
    kund: "Camilla Åström",
    path: "/privatflytt",
    comment:
      "Så imponerad av detta företag! De gjorde min flytt till en fröjd. Rekommenderar starkt!"
  },
  {
    id: 19,
    service: "Fönsterputs",
    kund: "Erik Wallin",
    path: "/fonsterputs",
    comment:
      "Fönstren blev fläckfria och fina. Enkelt att boka och ett jättebra resultat."
  },
  {
    id: 20,
    service: "Kontorsflytt",
    kund: "Linda Holm",
    path: "/kontorsflytt",
    comment:
      "Flytt av vårt kontor gick smidigt och utan bekymmer. Fantastiskt jobbat!"
  },
  {
    id: 144444,
    service: "Tömning av dödsbo",
    kund: "Marie Lindqvist",
    path: "/tomning-av-dodsbo",
    comment:
      "Jag fick hjälp med at tömma mammas dödsbo och sedan städas dödsboet. Vi är jättenöjda med deras helhetslösning"
  },
  {
    id: 221,
    service: "Uppköp av dödsbo",
    kund: "Liselott Andersson",
    path: "/uppkop-av-dodsbo",
    comment:
      "De kom ut på en kostnadsfri värdering för uppköp av vårt dödsbo. Svenska Dödsbo köpte en hel del av oss och resten forsla dom bort och skänkte. Tack för hjälpen med vårt dödsbo."
  },
  {
    id: 222,
    service: "Försäljning av dödsbo",
    kund: "Bosse Eriksson",
    path: "/salja-dodsbo-goteborg",
    comment:
      "Jag fick hjälp med att sälja lösöre ur mitt dödsbo och det gick hur bra som helst. Svenska Dödsbo helhetslösning passade mig perfekt när de sedan tömde dch städade dödsboet."
  },
  {
    id: 243,
    service: "Bohagsflytt",
    kund: "Jasem Hossan",
    path: "/bohagsflytt",
    comment:
      "Kanon! Packning, Flytt och flyttstädning av vårt hus. Proffsigt, smidigt och billigt då vi fick äntliigen nyttja vår rut. Bohagsflytten gick hur bra som helst."
  },
  {
    id: 435,
    service: "Flyttstädning",
    kund: "Petra Dahl",
    path: "/flyttstadning",
    comment:
      "Vi fick hjälp med att flyttstäda vårt bohag och Svenska Dödsbo forslade bort lite gammla möbler vi hade i förrådet. Enkelt och prisvärt."
  },
  {
    id: 5777,
    service: "Bortforsling av dödsbo",
    kund: "Kirsten Abbasi",
    path: "/bortforsling-dodsbo-goteborg",
    comment:
      "Svenska Dödsbo hjälpte oss med att sortera och forsla bort vårt dödsbo. Vi fick lite avdrag på priset då de köpte lite lösöre ur dödsboet. Jag rekommenderar Svenska Dödsbo starkt."
  },
  {
    id: 6777775,
    service: "Städning av dödsbo",
    kund: "John Pettersson",
    path: "/stadning-av-dodsbo",
    comment:
      "Städningen av vårt dödsbo gick utmärkt. Vi fick ett bra pris för städet och det slängde lite gammla prylar åt oss. Bra firma verkligen."
  },
  {
    id: 7456,
    service: "Sälja dödsbo Göteborg",
    kund: "Ali Hussein",
    path: "/salja-dodsbo-goteborg",
    comment:
      "Vi ville sälja vårt dödsbo i Göteborg och Svenska Dödsbo hjälpte oss med en helhetslösning där de köpte upp lösöre ur dödsboet, tömde dödsboet, forslade bort dödsboet och sedan slutstädade."
  },
  {
    id: 8688,
    service: "Tömma dödsbo Göteborg",
    kund: "Lisa Magnusson",
    path: "/tomma-dodsbo-goteborg",
    comment:
      "De tömde vårt dödsbo i Göteborg vilket gick utmärkt. Svenska Dödsbo gav oss även en liten slant för våra gammla prylar."
  },
  {
    id: 996986,
    service: "Städning av dödsbo Göteborg",
    kund: "Britt Marie",
    path: "/stada-dodsbo-goteborg",
    comment:
      "Trevliga killar som gjorde ett jättebra jobb med att städa vårt dödsbo i Göteborg."
  },
  {
    id: 15460,
    service: "Uppköp av dödsbo Göteborg",
    kund: "Tony Sloth",
    path: "/uppkop-dodsbo-goteborg",
    comment:
      "Vi fick en kostnadsfri värdering och sedan gjord de ett uppköp av vårt dödsbo i Göteborg."
  },
  {
    id: 146461,
    service: "Dödsbo uppköpare",
    kund: "Liselott Thor",
    path: "/uppkop-dodsbo-goteborg",
    comment:
      "Svenska Dödsbo hjälpte oss med att köpa upp lösöre ur vårt dödsbo. De köpte en hel del."
  },
  {
    id: 166462,
    service: "Köper dödsbo Göteborg",
    kund: "Per-Olof Andersson",
    path: "/uppkop-dodsbo-goteborg",
    comment: "Bra firma i Göteborg som köper dödsbo och tömmer samt städar"
  },
  {
    id: 166463,
    service: "Flyttstädning i Göteborg",
    kund: "Janne Jansson",
    path: "/flyttstadning-i-goteborg",
    comment:
      "Vi fick hjälp med att röja vårt dödsbo och sen gjorde Svenska Dödsbo flyttstädning av dödsboet. Enkel kommunikation och smidigt."
  },
  {
    id: 166466868,
    service: "Röja dödsbo i Göteborg",
    kund: "Karl Einersson",
    path: "/roja-dodsbo-goteborg",
    comment:
      "Röjning av dödsboet gick som vi ville. Svenska Dödsbo skötte allt trots att vi inte kunde vara på plats. Pålitligt företag och rekommenderar dem starkt. "
  }
];

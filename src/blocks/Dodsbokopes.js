import React, { useEffect, useState } from "react";
import MainComp from "../components/MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import AboutUs from "../components/AboutUs/AboutUs";
import Tips from "../components/Tips/Tips";
import Nav from "../components/Nav/Nav";
import Erbjuder from "../components/Erbjuder/Erbjuder";
import { getElement } from "../redux-toolkit/scrollElement/scrollElementSlice";
import Kostnadsfri from "../components/Kostnadsfri/Kostnadsfri";
import { Helmet } from "react-helmet-async";
import { getNewsData } from "../redux-toolkit/news/newsSlice";
import LottieBooking from "../LottieAnimation/LottieBooking";
import booking from "../utils/animation/booking.json";
import BookingModal from "../components/BookingModal";
const Dodsbokopes = ({ videoText }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const mainquery = "dödsbo köpes";
  const newsData = useSelector(getNewsData);
  const [content, setContent] = useState({
    metaTitle: "Dödsbo köpes - Få snabb och rättvis hantering | Trygga Dödsbon",
    metaContent:
      "Vi köper dödsbo och erbjuder enkel och smidig hantering. Vår erfarna personal ger dig ett rättvist och konkurrenskraftigt pris för dödsboet.",
    query: "Dödsbo Köpes",
    formTitle: "Dödsbo Köpes",
    subTitle2:
      "Din auktoriserade hanterare av dödsbo, bohag, uppköp, försäljning, tömning, bortforsling, sanering, flytt och städning av dödsbo",
    subTitle3: `Behöver du professionell hjälp med ${mainquery}`
  });
  const customerData = useSelector(getCustomerData);

  const services =
    "uppköp, tömning, bortforsling, sanering, luktsanering, flytt, städ, försäljning av dödsbo och bohag";

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Dödsbo Köpes. Trygga Dödsbon vi hjälper dig med städning, flytt, tömning, bortforsling, värdering och uppköp av dödsbo och hushåll samt återvinning och avfallshantering",
    description:
      "Dödsbo köpes. Behöver du hjälp med flytt, städning, tömning eller uppköp av dödsbo? Välkommen till Trygga Dödsbon  vi erbjuder allt från bortforsling och värdering till uppköp av dödsbo och hushåll. Vi tar hand om både små och stora projekt, från kontor och lägenheter till fastigheter och hus. Kontakta oss idag för en smidig och stressfri lösning. Vi hjälper även till med återvinning och avfallshantering",
    image:
      "https://xn--ddsbo-jua.com/wp-content/uploads/2019/07/family-room-382150_640.jpg",
    datePublished: new Date("2023-04-04T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "Louie Stokk"
    }
  };

  const element = useSelector(getElement);
  useEffect(() => {
    document
      .querySelector(`.${element}`)
      .scrollIntoView({ behavior: "smooth" });
  }, [element]);
  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaContent} />
        <meta property="og:description" content={content.metaContent} />
        <link
          rel="canonical"
          href="https://trygga-dodsbon.com/dodsbo-kopes"
          hrefLang="sv"
        />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div className="Hem">
        <MainComp
          query={content.query}
          formTitle={content.formTitle}
          icon={<BsHouseDoor />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={content.subTitle2}
          subTitle3={content.subTitle3}
          text={`Behöver du hjälp med ${mainquery}? Då är vi på ${customerData.business} det självklara valet. Vi är en firma som verkligen kan allt kring ${mainquery}. Vi kan också hjälpa dig med ${services}. Vi erbjuder en full helhetslösning med målet att ge det bästa valet för dig och din plånbok. Som kund hos har du allt samlat hos ett och samma företag.`}
          subTitle4={`Helhetslösning för ${mainquery}`}
          text1={`Vårt företag har varit i branschen i över 20år. Vi har flera samarbeten med auktionsfirmor, olika typer va hjälp boenden, och hjälp organisationer. Vi skänker lösöre och möbler samt sorterar och och värnar om miljön`}
          subTitle5={"Våra tjänster"}
          text2={`Vi kan hjälpa dig med ${services}`}
        />
      </div>

      <div className="Om">
        <AboutUs
          query={mainquery.toUpperCase()}
          oss={`Vilka är vi? Och hur gör vi för att kunna hjälpa dig ${mainquery}?`}
          om={`är det självklara valet för hantering av bohag och dödsbo med 20 års erfarenhet.`}
        />
      </div>
      {newsData && (
        <div className="Tips">
          <Tips query={mainquery.toUpperCase()} newsData={newsData} />
        </div>
      )}
      <div className="Tjänster">
        <Erbjuder />
      </div>

      <div className="booking-lottie">
        <div className="booking-content">
          <h2>Hjälp {mainquery}?</h2>
          <h4>
            Vi erbjuder helt kostnadfritt besök/genomgång för att kunna hjälpa
            dig som kund med att {mainquery}. Besöket/genomgången tar ca 45min
            och du som kund får en offert på plats om hur vi kan hjälpa dig
            <strong style={{ fontWeight: "700" }}> {mainquery}.</strong>
          </h4>
          <button
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
            style={{ display: modalOpen ? "none" : "block" }}
          >
            BOKA
          </button>
        </div>
        <LottieBooking lotti={booking} height={400} width={400} />
        {modalOpen && (
          <BookingModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
      </div>

      <div className="Kostnadsfri">
        <Kostnadsfri
          vad={"Värdering"}
          mainquery={mainquery}
          text={`${videoText}${mainquery}.`}
        />
      </div>
    </div>
  );
};

export default Dodsbokopes;

import React from 'react'
import { Box } from '@material-ui/core'
import Divider from './Divider'
const HogerSection = ({title,text,imgUrl,service,bannerText,titlesecond,servicesec,textsecond,imgUrlsec,idtwo}) => {
  return (
    <div style={{marginTop:'25px',width:'100%'}}>
       <Divider text={'Vi värderar, köper, tömmer och städar dödsbon'}/>
    <div className="senaste-mainen" id={idtwo?idtwo:'stadning'}>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 >{service?service:'Sälja dödsbo'}</h4>
     <h2  >{title?title:'Vi utför alla typer av städningar'}</h2>
     <p style={{maxWidth:'500px'}}>
    {text?text:<>     Tant Rut erbjuder en rad städtjänster som underlättar din vardag och skapar en trivsam miljö, oavsett behov. Vi hjälper dig med regelbunden <a  href='#hemstadning' title='hemstädning'>hemstädning</a>, professionell <a  href='#kontorsstadning' title='kontorsstädning'>kontorsstädning</a>, <a  href='#stadning-av-dodsbo' title='städning av dödsbon'>städning av dödsbon</a> och specialanpassade städningar. Vårt team arbetar noggrant och respektfullt, med fokus på kvalitet och kundens trygghet. Oavsett om du behöver städhjälp för hemmet, arbetsplatsen eller i en känslig situation, finns vi här för att skapa en ren och välordnad miljö. Tack vare RUT-avdraget kan vi erbjuda våra tjänster till ett förmånligt pris – så att du kan slappna av och lita på att städningen är i goda händer.</>}
     </p>
     </Box>
       </Box>
       <Box>
                <img className='senaste-bild' alt={title?title:'sälja dödsbo'} src={imgUrl?imgUrl:'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} style={{width:'100%',height:'240px',objectFit:'contain'}}/>
     </Box>
     </div>
     <article style={{height:'30px'}}></article>
   <Divider text={bannerText?bannerText:'Billig flyttstäd med Rut-avdrag'}/>
   <article style={{height:'30px'}}></article>
     <div className="senaste-mainen" id='flytt'>
     <Box>
                <img alt={titlesecond?titlesecond:'Flyttfirma'} src={imgUrlsec?imgUrlsec:'https://images.pexels.com/photos/271711/pexels-photo-271711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} style={{width:'100%',height:'240px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4>{servicesec?servicesec:'Flytt'}</h4>
     <h2>{titlesecond?titlesecond:'Smidig och Trygg Flytt'}</h2>
     <p style={{maxWidth:'500px'}}>
  {textsecond?textsecond : <>Flytten behöver inte vara stressig eller tidskrävande. Med Tant Rut får du professionell hjälp från start till mål. Vi hanterar packning, transport och uppackning med största omsorg, så att du kan fokusera på andra viktiga delar av din <a  href='/flyttfirma-goteborg' title='flyttfirma göteborg'>flytt</a>. Oavsett om det gäller en liten lägenhet eller ett stort hus, ser vi till att allt går snabbt och smidigt. Med RUT-avdraget blir din flytt både enklare och mer prisvärd.</>}
     </p>
     </Box>
       </Box>
     </div>
     <article style={{height:'50px'}}></article>
     </div>
  )
}

export default HogerSection


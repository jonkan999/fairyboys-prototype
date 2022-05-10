
import React from 'react';
import callAPI from './callAPI.js';
import Confetti from 'react-confetti'
import './Wheel.css';

let westers_url='https://main.dsqebyydqj5cn.amplifyapp.com/'
let sf_url='https://www.filmstaden.se/'
let elite_url='https://elite.se/?gclid=Cj0KCQjw06OTBhC_ARIsAAU1yOXUs-gA3HJevZLtnnPjmnZ15UI51_YSatVpnMqy97T2c3ySAQoXNEgaAklVEALw_wcB'
let hm_url='https://www2.hm.com/sv_se/index.html'

export default class Winning extends React.Component {
    
  render() {
    if (["0", "2", "4","6", "8", "10"].includes(this.props.win)) {
        callAPI(this.props.values.business,this.props.values.email,"nowin")
        return (
            <div className="winner-text">
                Tyvärr! Ingen vinst idag, men gå gärna ändå in och kika på vad vi skulle kunna erbjuda er i form av digitala lösningar till Mässor och Event: <a style={{ color: "hotpink"}} href={westers_url} target="_blank" title="Opens in a new window">www.fairyboys.se</a>
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    colors={['black']}
                    />
            </div>
            );
    } else if (["5", "11"].includes(this.props.win)) {
        callAPI(this.props.values.business,this.props.values.email,"Kock")
        return (
            <div className="winner-text">
                Grattis! Wow! Du är nu med i utlottningen till att vinna ett presentkort för 500kr som du kan använda på valfri Filmstaden, du kan hitta närmsta här: <a style={{ color: "hotpink"}} href={sf_url} target="_blank" title="Opens in a new window">www.filmstaden.se</a>. Vi hör av oss på mail om du vinner. Så länge kan du kika på vad vi skulle kunna erbjuda er i form av digitala lösningar till Mässor och Event: <a style={{ color: "hotpink"}} href={westers_url} target="_blank" title="Opens in a new window">www.fairyboys.se</a>
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    colors={['black']}
                    />
            </div>
            );

    } else if (["3", "9"].includes(this.props.win)) {
        callAPI(this.props.values.business,this.props.values.email,"SoL")
        return (
            <div className="winner-text">
                  Grattis! Wow! Du är nu med i utlottningen till att vinna en hotellövernattning inklusive frukost på något av Elites hotell, du kan hitta närmsta här: <a style={{ color: "hotpink"}} href={elite_url} target="_blank" title="Opens in a new window">www.elite.se</a>. Vi hör av oss på mail om du vinner. Så länge kan du kika på vad vi skulle kunna erbjuda er i form av digitala lösningar till Mässor och Event: <a style={{ color: "hotpink"}} href={westers_url} target="_blank" title="Opens in a new window">www.fairyboys.se</a>
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    colors={['black']}
                    />
            </div>
            );

    } else if (["1", "7"].includes(this.props.win)) {
        callAPI(this.props.values.business,this.props.values.email,"Grill")
        return (
            <div className="winner-text">
                Grattis! Du är nu med i utlottningen till att vinna ett presentkort på 1000 kr i Hennes & Mauritz onlineshop. Läs mer på: <a style={{ color: "hotpink"}} href={hm_url} target="_blank" title="Opens in a new window">www.hm.com</a>. Vi hör av oss på mail om du vinner. Så länge kan du kika på vad vi skulle kunna erbjuda er i form av digitala lösningar till Mässor och Event: <a style={{ color: "hotpink"}} href={westers_url} target="_blank" title="Opens in a new window">www.fairyboys.se</a>
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    colors={['black']}
                    />

            </div>
            );

    }
    
    

    
  }
}
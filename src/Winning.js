
import React from 'react';
import callAPI from './callAPI.js';
import Confetti from 'react-confetti'
import './Wheel.css';

let westers_url='https://www.westers.se/artiklar/westers-lyckohjul/'

export default class Winning extends React.Component {
    
  render() {
    if (["0", "2", "4","6", "8", "10"].includes(this.props.win)) {
        callAPI(this.props.values.business,this.props.values.email,"nowin")
        return (
            <div className="winner-text">
                Tyvärr! Ingen vinst idag, men gå gärna ändå in och kika på vad vi skulle kunna erbjuda er i form av Catering och Event på: <a style={{ color: "hotpink"}} href={westers_url} target="_blank" title="Opens in a new window">www.westers.se</a>
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
                Grattis! Wow! Du är nu med i utlottningen till att vinna en personlig kock i hemmet. Vi kommer och serverar och tillagar en tre rätters meny, i ditt hem! Vi hör av oss på mail om du vinner, så länge kan du läsa mer om det och våra andra tjänster för Catering och Event på: <a style={{ color: "hotpink"}} href={westers_url} target="_blank" title="Opens in a new window">www.westers.se</a>
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
                 Grattis! Wow! Du är nu med i utlottningen till att vinna en trerätters meny för 4 personer på Westers sommarkrog Sjö & Land. Mitt på strandvägens kaj! Vi hör av oss på mail om du vinner, så länge kan du läsa mer om det och våra andra tjänster för Catering och Event på: <a style={{ color: "hotpink"}} href={westers_url} target="_blank" title="Opens in a new window">www.westers.se</a> och på restaurangen: <a style={{ color: "hotpink"}} href='https://sjoochland.se/' target="_blank" title="Opens in a new window">www.sjoochland.se</a>
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
                Grattis! Du är nu med i utlottningen till att vinna en grillkasse fylld med råvaror för 10 personer. Såser, marinader och råvaror för en helkväll med dina nära och kära. Vi hör av oss på mail om du vinner, så länge kan du läsa mer om det och våra andra tjänster för Catering och Event på: <a style={{ color: "hotpink"}} href={westers_url} target="_blank" title="Opens in a new window">www.westers.se</a>
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
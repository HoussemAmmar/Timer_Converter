import React, {Component} from 'react'


class Time extends Component {

    constructor(props){
        super(props)

        this.state = {
            givenSeconds : 0 ,
             hours : 0 , 
             minutes : 0, 
             seconds :0,
             
        }

    }

    handler = (event) => {
        
        this.setState({
            
            givenSeconds : event.target.value
        })
        
        
    }

   
    SecondsToHours = ()=> {
        this.setState ({
            hours : Math.floor(this.state.givenSeconds/ 3600),
            minutes : Math.floor((this.state.givenSeconds /60) % 60), 
            seconds :  Math.floor(this.state.givenSeconds%60)
      })
      }
    
      start = () => {
        this.myInterval = setInterval(() => {
          this.setState({
           
            givenSeconds: parseInt(this.state.givenSeconds) + 1
          });
        }, 1000);
    };

    pause = () => {
        this.myInterval = clearInterval(this.myInterval);
       
    };
    
    reset = () => {
        this.setState({ givenSeconds: 0 });
        clearInterval(this.myInterval);
    };

    render() {
        return(
            <form >
                <h2>Seconds converter</h2>
                <input type = 'text' value = {this.state.givenSeconds} onChange ={this.handler} />
                <button className="btn-conv" type="button" onClick = {this.SecondsToHours}>Convert</button>
                <h2 className ="time">{this.state.hours} : {this.state.minutes} : {this.state.seconds}</h2>
                <div>
                    
                     <img class="btn" onClick={() => this.start()} src="https://biotechno.fr/IMG/scenari/codifadweb/res/play_activity.png"/>
                     <img class="btn" onClick={() => this.pause()} src="https://image.flaticon.com/icons/png/512/61/61039.png"/>
                     <img class="btn" onClick={() => this.reset()} src="https://img2.freepng.fr/20180329/ajq/kisspng-computer-icons-reset-clip-art-clothes-button-5abcca10b92ed7.1217573015223219367585.jpg" />
                </div>  
            </form>

        );
    }
}

export default Time;




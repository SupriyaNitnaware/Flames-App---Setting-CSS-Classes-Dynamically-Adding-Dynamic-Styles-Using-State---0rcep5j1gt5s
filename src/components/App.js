import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            inputVal1: "",
            inputVal2: "",
            Answer: ""
        }
    }

    render() {

        const input1Fn = (e) => {

            this.setState({
                inputVal1: e.target.value
            })
        }
        const input2Fn = (e) => {
            
            this.setState({
                inputVal2: e.target.value
            })

        }
        const calRelFn = () => {
            if (this.state.inputVal1 === '' || this.state.inputVal2 === '') 
            {
                this.setState({
                    Answer: "Please Enter valid input "
                })
            } 
            else 
            {
                let arr = [];
                const val1 = this.state.inputVal1.split("")
                const val2 = this.state.inputVal2.split("")

                val1.map((element) => {
                    if (val2.includes(element)) 
                    {
                        for (let i = 0; i < val2.length; i++)
                        {
                            if (val2[i] === element) 
                            {
                                val2.splice(i, 1)
                                break;
                            }
                        }
                    } 
                    else 
                    {
                        arr.push(element);
                    }
                })

                if (val2.length > 0) {
                    arr.push(...val2);
                }
                console.log(arr)
                console.log('arr', arr.length);
                let modulo = (arr.length) % 6;
                console.log('mod', modulo)
                this.setState({
                    Answer: switchFn(modulo)
                })
            }


        }
        const clearFn = () => {
            this.setState({ inputVal1: "" })
            this.setState({ inputVal2: "" })
            this.setState({ Answer: '' })
        }
        function switchFn(Answer) {

            switch (Answer) {
                case 1: return "Friends"

                case 2: return "Love"

                case 3: return "Affection"

                case 4: return "Marriage"

                case 5: return "Enemy"

                case 0: return "Siblings"

                default: return "Please Enter valid input "

            }
        }
        return (
            <div id="main">
                {/* Do not remove the main div */}
                <input data-testid="input1" value={this.state.inputVal1} onChange={input1Fn} />
                <input data-testid="input2" value={this.state.inputVal2} onChange={input2Fn} />
                <button data-testid="calculate_relationship" onClick={calRelFn}>Calculate Relationship Future</button>
                <button data-testid="clear" onClick={clearFn}>Clear Button</button>
                <h3 data-testid="answer">{this.state.Answer}</h3>
            </div>
        )
    }
}


export default App;

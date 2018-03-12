/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const element = <h1>Hello, world!</h1>;
function printPal (pal) {
    return pal.firstname + ' '+ pal.lastname;
}

// Clock component that takes the date property
// Can reuse for different dates
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
        this.timerID = setInterval(
                () => this.tick(),
                1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render () {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
    
    
}
    function App () {
        return (
                <div>
                    <Clock />
                    <Clock />
                    <Clock />
                </div>
                );
    }
            
// Implements the actual renderning of the clock
    ReactDOM.render(
        <App />,
        document.getElementById('heading')
    );



const pal = {
    firstname: 'Itai',
    lastname: 'Flam',
    role: 'Native Speaker',
    year: 'Junior',
    gender: 'Male'
};

const palName = printPal(pal);


ReactDOM.render(
    palName,
    document.getElementById('root')
);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const navigationBar = <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="PalMatcher.html">English Pal Matcher</a></li>
            </ul>
        </nav>;
ReactDOM.render(
        navigationBar,
        document.getElementById('navigation')
        );


class PalProfile extends React.Component
{
    constructor(props)
    {
        super (props);
        this.state = {firstName: props.firstName,
            lastName: props.lastName};
    }
    
    render () 
    {
        return (
                <div>
                    <h2>Hello World!</h2>
                    <h3>{this.state.firstName} {this.state.lastName}</h3>
                </div>
                );
    }
    
}

var buttonTest = document.querySelector('button');
var boolean = 0;
buttonTest.onclick = function () {
    if (boolean === 0) 
    {
        ReactDOM.render(
                <div>
                    <PalProfile firstName='Itai' lastName='Flam'/>
                </div>,
                document.getElementById('root')
        );
        boolean = 1;
    }
    else
    {
        ReactDOM.render(
                'poop',
                document.getElementById('root')
        );
        boolean = 0;
    }
    
}
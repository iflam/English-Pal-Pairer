/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//check that it's a file

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
buttonTest.onclick = function () {
        
//        ReactDOM.render(
//                People[0],
//                document.getElementById('root')
//        );
//        boolean = 1;   
};

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.textContent = contents;
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);


var input = document.querySelector('input');
var bob = 'hellow';
ReactDOM.render(
        input,
        document.getElementById('test')
        )
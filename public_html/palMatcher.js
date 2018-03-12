/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//check that it's a file
class Person{
    constructor(data,i){
        this.id = i; //int
        this.name = data[2]; //strange
        this.gender = data[4]; //string    //1
        this.type = data[1];//string i.e english learner or speaker
        this.year = data[7]; //int    //2
        this.schedule = [data[13].split(", "),data[14].split(", "),data[15].split(", ")
                        ,data[16].split(", "),data[17].split(", "),data[18].split(", ")
                        ,data[19].split(", ")];
                        //array of array of strings i.e [[morning][evening],[evening],etc] //3
        this.age = parseInt(data[5]); //int //4
        this.major = data[20]; // string //5
        this.hobbies = data[21].split(", ");;  //array of strings //6
    };
}

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

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    var People = parseData(contents);
  };
  reader.readAsText(file);
}

function parseData(contents) {
  var people = contents.split("\n");
  var element = document.getElementById('file-content');
  var allPeople = [];
  for(var i = 1; i < people.length; i++){
      allPeople[i-1] = new Person(people[i].split("\t"),i   );
  }
  return allPeople;
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);


var input = document.querySelector('input');
var bob = 'hellow';
ReactDOM.render(
        input,
        document.getElementById('test')
        )
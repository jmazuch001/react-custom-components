import React from 'react'
import {useState, useEffect} from 'react'


export default function ChangeStateButton() {
    // let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const [resource, setResource] = useEffect('');

    const handleClick = () => {
        // name = 'luigi - without a capital "L" ';
        // console.log(name);
        // you pass in a new value to what you want the name/state to change to!
        setName('Luigi - with a capital "L"');
        setAge(30);
        console.log(name);
        
    }

  return (
    <div>
        <h2>Homepage</h2>
        <p>{ name }, is { age } years old</p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

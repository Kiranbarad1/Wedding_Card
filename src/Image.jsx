import React ,{useState}from "react";
import { Route,Routes, useNavigate } from "react-router-dom";
import { useViewport } from 'react-viewport-hooks';
const Image = ( props) => {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [reception, setReception] = useState('');
    const [address, setAddress] = useState('');
    const url = `http://localhost:3000/output`
    const nav = useNavigate();
    const onChangePicture = (e) => {
      if (e.target.files[0]) {
        console.log("picture: ", e.target.files);
        setPicture(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    };
    const user={
        image:imgData,
        name:name,
        fname:fname,
        day:day,
        time:time,
        month:month,   
        date:date,
        address:address,
        reception:reception
    }
    const onClick = ( ) => {
        props.sendData(user);
        nav('/output')
      };
    return (
        <>
        <h3>image</h3>
            <input id="profilePic" type="file" onChange={onChangePicture} />
            <h3>groom</h3>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <h3>bride</h3>
            <input type="text" onChange={(e)=>setFname(e.target.value)} />
            <h3>day</h3>
            <input type="text" onChange={(e)=>setDay(e.target.value)} />
            <h3>time</h3>
            <input type="text" onChange={(e)=>setTime(e.target.value)} />
            <h3>date</h3>
            <input type="text" onChange={(e)=>setDate(e.target.value)} />
            <h3>month</h3>
            <input type="text" onChange={(e)=>setMonth(e.target.value)} />
            <h3>address</h3>
            <input type="text" onChange={(e)=>setAddress(e.target.value)} />
            
            <h3>Reception</h3>
            <input type="text" onChange={(e)=>setReception(e.target.value)} />
            
            <button onClick={onClick}>Click Here</button>
            
        </>
    );
}

export default Image;
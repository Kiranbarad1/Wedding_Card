import React, { useState, useRef } from "react";
import styled from "styled-components";
import mypic from "./photandvideo/mypic.png";
import html2canvas from "html2canvas";

export const Card = () => {
  const canvasRef = useRef(null);
  const generateImage = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      // Convert the canvas to a data URL
      const imgDataUrl = canvas.toDataURL("image/png");
      // Create a link to download the image
      const downloadLink = document.createElement("a");
      downloadLink.href = imgDataUrl;
      downloadLink.download = "generated_image.png";
      // Trigger a click event to initiate the download
      downloadLink.click();
    });
  };

  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [reception, setReception] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <form>
        <h3>groom</h3>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h3>bride</h3>
        <input type="text" onChange={(e) => setFname(e.target.value)} />
        <h3>day</h3>
        <input type="text" onChange={(e) => setDay(e.target.value)} />
        <h3>time</h3>
        <input type="text" onChange={(e) => setTime(e.target.value)} />
        <h3>date</h3>
        <input type="text" onChange={(e) => setDate(e.target.value)} />
        <h3>month</h3>
        <input type="text" onChange={(e) => setMonth(e.target.value)} />
        <h3>address</h3>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
        <h3>Reception</h3>
        <input type="text" onChange={(e) => setReception(e.target.value)} />
      </form>

      <div>
        <Span></Span>
      </div>
      <div
        ref={canvasRef}
        style={{
          width: "33%",
          height: "100vh",
        }}
      >
        <Container>
          <Sec>
            <img style={{ width: "33%" }} src={mypic} alt="image_card" />
          </Sec>
          <Head>
            <Welcome>Together with </Welcome>
            <Welcome2>their family </Welcome2>
          </Head>
          <Sec2>
            <Name>{name}</Name>
            <To>&amp; </To>
            <Sname>{fname}</Sname>
          </Sec2>
          <Sec3>
            <Below>Request the pleasure of your company at</Below>
            <Below2> the ceremony of their wedding</Below2>
          </Sec3>
          <Sec4>
            <Day>{day} </Day>
            <Date>{date} </Date>
            <Time>At {time} </Time>
            <Month>{month}</Month>
          </Sec4>
          <Sec5>
            <Place>{address}</Place>
            <Place2>{reception}</Place2>
          </Sec5>
        </Container>
      </div>
      <button onClick={generateImage}>Download Image</button>
    </>
  );
};

const Span = styled.span`
  display: flex;
  width: 33%;
  background: repeating-radial-gradient(black, transparent 600px);
  height: 100%;
  position: absolute;
  z-index: 1;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  height: 100%;
`;
const Sec = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
`;
const Head = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 32vw;
  height: 20vh;
`;
const Welcome = styled.span`
  font-family: "Dancing Script", cursive;
  font-weight: 900;
  font-size: 15px;
  position: absolute;
  top: 60px;
  text-transform: capitalize;
  color: #492929a0;
`;
const Welcome2 = styled.span`
  font-family: "Dancing Script", cursive;
  font-weight: 900;
  font-size: 15px;
  position: absolute;
  text-transform: capitalize;
  top: 85px;
  color: #492929a0;
`;
const Sec2 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 32vw;
  height: 40vh;
`;
const Name = styled.span`
  display: flex;
  position: absolute;
  font-family: "Satisfy", cursive;
  top: 120px;
  text-transform: capitalize;
  font-size: 30px;
`;
const To = styled.span`
  display: flex;
  position: absolute;
  top: 150px;
  font-family: "Dancing Script", cursive;
  font-size: 50px;
`;
const Sname = styled.span`
  display: flex;
  position: absolute;
  top: 200px;
  text-transform: capitalize;
  font-family: "Satisfy", cursive;
  font-size: 30px;
`;
const Sec3 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 31vw;
  height: 47vh;
`;
const Below = styled.span`
  display: flex;
  position: absolute;
  top: 250px;
  font-family: "Dancing Script", cursive;
  font-family: "Noto Serif", serif;
  font-size: 10px;
  margin-left: 20px;
`;
const Below2 = styled.span`
  display: flex;
  position: absolute;
  top: 265px;
  font-family: "Dancing Script", cursive;
  font-family: "Noto Serif", serif;
  font-size: 10px;
`;
const Sec4 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 31%;
  height: 60vh;
`;
const Day = styled.span`
  position: absolute;
  top: 300px;
  font-size: 15px;
  padding: 10px;
  border-style: solid;
  border-image: linear-gradient(to top, #ffef99, #ffef99) 1;
  border-left: none;
  border-right: none;
  text-transform: uppercase;
  margin-right: 172px;
  font-family: "Noto Serif", serif;
`;
const Time = styled.span`
  position: absolute;
  top: 300px;
  text-transform: uppercase;
  font-size: 15px;
  padding: 10px;
  border-style: solid;
  border-image: linear-gradient(to top, #ffef99, #ffef99) 1;
  border-left: none;
  border-right: none;
  margin-left: 208px;
  font-family: "Noto Serif", serif;
`;
const Date = styled.span`
  position: absolute;
  top: 300px;
  font-size: 50px;
  margin-right: -14px;
  margin-top: -20px;
  font-family: "Dancing Script", cursive;
  font-family: "Noto Serif", serif;
`;
const Month = styled.span`
  position: absolute;
  text-transform: uppercase;
  top: 335px;
  font-family: "Noto Serif", serif;
  font-size: 13px;
`;
const Sec5 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 31%;
  height: 87vh;
`;
const Place = styled.span`
  font-size: 15px;
  position: absolute;
  font-family: "Noto Serif", serif;
  top: 380px;
  color: #411616;
`;
const Place2 = styled.span`
  font-size: 15px;
  position: absolute;
  font-family: "Dancing Script", cursive;
  top: 400px;
  color: #492929a0;
`;

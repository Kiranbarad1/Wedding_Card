import React, { useRef } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

const Output = ({ data }) => {
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
  return (
    <>
      <div
        ref={canvasRef}
        style={{
          width: "32vw",
          height: "97vh",
        }}
      >
        <Container onClick={generateImage}>
          <Sec>
            <img style={{ width: "32vw" }} src={data.image} alt="image" />
          </Sec>
          <Head>
            <Welcome>Together with </Welcome>
            <Welcome2>their family </Welcome2>
          </Head>
          <Sec2>
            <Name>{data.name}</Name>
            <To>&amp; </To>
            <Sname>{data.fname}</Sname>
          </Sec2>
          <Sec3>
            <Below>Request the pleasure of your company at</Below>
            <Below2> the ceremony of their wedding</Below2>
          </Sec3>
          <Sec4>
            <Day>{data.day} </Day>
            <Date>{data.date} </Date>
            <Time>At {data.time} </Time>
            <Month>{data.month}</Month>
          </Sec4>
          <Sec5>
            <Place>{data.address}</Place>
            <Place2>{data.reception}</Place2>
          </Sec5>
        </Container>
        {/* <button onClick={generateImage}>Generate & Download Image</button> */}
      </div>
    </>
  );
};

export default Output;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  /* width: 33%; */
  /* border: 2px solid black; */
  height: 100vh;
`;
const Sec = styled.div`
  width: 100%;
  height: 97vh;
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
  /* border: 2px solid black; */
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
  /* border: 2px solid black; */
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
  /* border: 2px solid black; */
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
  /* border: 2px solid black; */
`;

const Day = styled.span`
  position: absolute;
  top: 300px;
  font-size: 15px;
  padding: 10px;
  /* padding-bottom: 30px; */
  /* border-width: 10px; */
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
  /* border-width: 10px; */
  padding: 10px;
  /* padding-bottom: 30px; */
  border-style: solid;
  border-image: linear-gradient(to top, #ffef99, #ffef99) 1;
  border-left: none;
  border-right: none;
  margin-left: 208px;
  font-family: "Noto Serif", serif;
  /* width: 290px; */
`;

const Date = styled.span`
  position: absolute;
  top: 300px;
  font-size: 50px;
  /* padding: 10px; */
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
  /* margin-right: -20px; */
  /* margin-top: -29px; */
`;
const Sec5 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 31%;
  height: 87vh;
  /* border: 2px solid black;  */
`;

const Place = styled.span`
  font-size: 15px;
  position: absolute;
  /* text-transform:uppercase; */
  font-family: "Noto Serif", serif;
  top: 380px;
  color: #411616;
`;
const Place2 = styled.span`
  font-size: 15px;
  position: absolute;
  /* text-transform:uppercase; */
  font-family: "Dancing Script", cursive;
  top: 400px;
  color: #492929a0;
`;
 
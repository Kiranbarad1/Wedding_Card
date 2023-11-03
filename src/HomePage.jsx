import React, { useRef } from 'react';
import styled from "styled-components";
import html2canvas from 'html2canvas';
export const HomePage = ({ data }) => {
  console.log(data);
  const canvasRef = useRef(null);

  const generateImage = () => {
    html2canvas(canvasRef.current).then((canvas) => {
      // Convert the canvas to a data URL
      const imgDataUrl = canvas.toDataURL('image/png');

      // Create a link to download the image
      const downloadLink = document.createElement('a');
      downloadLink.href = imgDataUrl;
      downloadLink.download = 'generated_image.png';

      // Trigger a click event to initiate the download
      downloadLink.click();
    });
  };
  return (
      <div
      ref={canvasRef}
      style={{
        width:'30%',height:'97vh'
      }}
      >
        <Container onClick={generateImage}>
      
      <Sec>
        <img  src={data.image} alt="" />
      </Sec>
      <Sec2>
        <Head>
          <Welcome>Together with </Welcome>
          <Welcome2>their family </Welcome2>
        </Head>
        <Name>{data.name}</Name>
        <To>&amp; </To>
        <Sname>{data.fname}</Sname>
      </Sec2>
      <Sec3>
        <Below>Request the pleasure of your company at</Below>
        <Below2> the ceremony of their wedding</Below2>
      </Sec3>
      <Sec4>
        <Below4>{data.day} </Below4>
        <Date>{data.date} </Date>
        <Below5>At {data.time} </Below5>
        <Month>{data.month}</Month>
      </Sec4>
      <Sec5>
        <Place>{data.address}</Place>
        <Place2>Reception to follow</Place2>
      
      </Sec5>

    </Container>
    {/* <button onClick={generateImage}>Generate & Download Image</button> */}
    </div>
  );
};

const Head = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 97vh;
  border: 2px solid black;
`;
const Welcome = styled.span`
  font-family: "Dancing Script", cursive;
  font-weight: 600;
  font-size: 65px;
  position: absolute;
  top: 230px;
  text-transform: capitalize;
  color: #492929a0;
`;
const Welcome2 = styled.span`
  font-family: "Dancing Script", cursive;
  font-weight: 600;
  font-size: 65px;
  position: absolute;
  text-transform: capitalize;
  top: 300px;
  color: #492929a0;
`;
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
const Sec2 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 31%;
  height: 97vh;
  border: 2px solid black;
`;
const Sec3 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 31%;
  height: 97vh;
  border: 2px solid black;
`;
const Sec4 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 31%;
  height: 97vh;
  border: 2px solid black;
`;
const Sec5 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 31%;
  height: 97vh;
  /* border: 2px solid black;  */
`;
const Name = styled.span`
  display: flex;
  position: absolute;
  font-family: "Dancing Script", cursive;
  top: 400px;
  text-transform: capitalize;
  font-size: 150px;
`;

const To = styled.span`
  display: flex;
  position: absolute;
  top: 530px;
  font-family: "Dancing Script", cursive;
  font-size: 150px;
`;
const Sname = styled.span`
  display: flex;
  position: absolute;
  top: 650px;
  text-transform: capitalize;
  font-family: "Dancing Script", cursive;
  font-size: 150px;
`;
const Below = styled.span`
  display: flex;
  position: absolute;
  top: 900px;
  font-family: "Dancing Script", cursive;
  font-family: "Noto Serif", serif;
  font-size: 35px;
`;
const Below2 = styled.span`
  display: flex;
  position: absolute;
  top: 950px;
  font-family: "Dancing Script", cursive;
  font-family: "Noto Serif", serif;
  font-size: 35px;
`;
const Below4 = styled.span`
  position: absolute;
  top: 1020px;
  font-size: 50px;
  padding: 30px;
  /* padding-bottom: 30px; */
  border-width: 10px;
  border-style: solid;
  border-image: linear-gradient(to top, #ffef99, #ffef99) 1;
  border-left: none;
  border-right: none;
  text-transform: uppercase;
  margin-right: 452px;
  font-family: "Noto Serif", serif;
`;
const Below5 = styled.span`
  position: absolute;
  top: 1020px;
  text-transform: uppercase;
  font-size: 50px;
  border-width: 10px;
  padding: 30px;
  /* padding-bottom: 30px; */
  border-style: solid;
  border-image: linear-gradient(to top, #ffef99, #ffef99) 1;
  border-left: none;
  border-right: none;
  margin-left: 508px;
  font-family: "Noto Serif", serif;
  /* width: 290px; */
`;

const Date = styled.span`
  position: absolute;
  top: 1020px;
  font-size: 120px;
  margin-right: -35px;
  margin-top: -20px;
  font-family: 'Dancing Script', cursive;
font-family: 'Noto Serif', serif;
`;
const Month = styled.span`
  position: absolute;
  text-transform:uppercase;
  top: 1156px;
  font-family: "Noto Serif", serif;
  font-size: 40px;
  margin-right: -30px;
  margin-top: -29px;
  `;

  const Place = styled.span`
  font-size: 50px;
  position: absolute;
  /* text-transform:uppercase; */
  font-family: "Noto Serif", serif;
  top: 1280px;
  color:  #411616;
  `
  const Place2 = styled.span`
  font-size: 90px;
  position: absolute;
  /* text-transform:uppercase; */
  font-family: "Dancing Script", cursive;
  top: 1386px;
  color: #492929a0;
  `
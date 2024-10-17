import React, { useState } from "react";
import HeaderComponent from "../../../components/client/HeaderComponent/HeaderComponent";
import FooterComponent from "../../../components/client/FooterComponent/FooterComponent";
import styled from "styled-components";
import { Button, Image, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

const Container = styled.div`
  margin-top: 80px;
  // background-color: aqua;
  padding: 0 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  // background-color: grey;
  font-weight: bold;
  font-size: 48px;
`;

const SubTitle = styled.div`
  width: 100%;
  text-align: center;
  // background-color: grey;
  font-weight: bold;
  font-size: 32px;
`;

const ContainerUpload = styled.div`
  width: 960px;
  height: 530px;
  background-color: var(--dark-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const UploadBtn = styled(Button)`
  width: 300px;
  height: 100px;
  background-color: blue;
  border-radius: 20px;
  font-weight: bold;
  font-size: 24px;
`;

const ContainerStep = styled.div`
  // background-color: aqua;
  // padding: 0 135px;
  display: flex;
  gap: 20px;
`

const Step = styled.div`
  background-color: var(--grey);
  width: 310px;
  padding: 40px 20px;
  border-radius: 10px;

`

const StepBtn = styled.div`
  background-color: var(--orange);
  width: 127px;
  height: 56px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  &:hover{
    cursor: pointer;
    background-color: black;
  }
`

const StepTitle = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 24px;
`

const StepDesc = styled.div`
  font-size: 24px;
  font-weight: regular;
  margin-top: 20px;
`

const UploadPicture = () => {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <>
      <HeaderComponent />
      <Container>
        <Title>Tranh mosaics DIY</Title>
        <ContainerUpload>
          <ImgCrop rotationSlider>
            <Upload style={{width: 'auto'}}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              fileList={fileList}
              onChange={onChange}
              previewImage={false}
              multiple= {false}
            >
              {/* {fileList.length < 5 && "+ Upload"} */}
              <UploadBtn type="primary" icon={<UploadOutlined />}>
              Upload Image
            </UploadBtn>
            </Upload>
          </ImgCrop>
        </ContainerUpload>
        <SubTitle>
          How to generate your images into
          <br/>
          mosaic arts in seconds?
        </SubTitle>
        <ContainerStep>
          <Step>
            <StepBtn>
              Step 1
            </StepBtn>
            <StepTitle>
            Select an image
            </StepTitle>
            <StepDesc>
            First, choose the image you want to generate from by clicking on “Upload image”.
            Your image format can be PNG or JPG. We support all image dimensions.
            </StepDesc>
          </Step>
          <Step>
            <StepBtn>
              Step 2
            </StepBtn>
            <StepTitle>
            Let magic begin!            
            </StepTitle>
            <StepDesc>
            Our tool automatically generate from your image. Next, you can provide us Gmail or Phone number. We will give you the best outcome and provide futher custom serviece. 
            </StepDesc>
          </Step>
          <Step>
            <StepBtn>
              Step 3
            </StepBtn>
            <StepTitle>
            Purchasing        
            </StepTitle>
            <StepDesc>
            After selecting a frame, filling down all your shipping information required and choose your payment method.
            </StepDesc>
          </Step>
        </ContainerStep>
      </Container>
      <FooterComponent />
    </>
  );
};

export default UploadPicture;

import React from "react";
import HeaderComponent from "../../../components/client/HeaderComponent/HeaderComponent";
import FooterComponent from "../../../components/client/FooterComponent/FooterComponent";
import image1 from "../../../assets/images/exe/image1.png";

import styled from "styled-components";

const Container = styled.div`
  padding: 0 135px;
  // background-color: aqua;
`;
const ContainerAbout = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  gap: 100px;
`;
const ImageAbout = styled.img`
  height: 500px;
  min-width: 500px;
`;
const RightAbout = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const TitleAbout = styled.div`
  font-weight: bold;
  font-size: 32px;
`;
const DescAbout = styled.div`
  font-size: 20px;
`;

const ContainerMean = styled.div`
  margin-top: 100px;
  // background-color: aqua;
`;

const TitleMean = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
`;
const ContainerContent = styled.div`
  display: flex;
`;

const Introduction = () => {
  return (
    <>
      <HeaderComponent />
      <Container>
        <ContainerAbout>
          <ImageAbout src={image1} />
          <RightAbout>
            <TitleAbout>Giới thiệu</TitleAbout>
            <DescAbout>
              Murad dä tråi qua mét hånh trinh dåi dé cö dugc vi tri vå Stu tin
              tudng cüa khåch hång trong chon Iva sån phårn chäm söc da mat. Häy
              cüng chüng töi tim hiéu vé nhå sång läp, Båc ST Howard Murad, cang
              nhl-r ch4ng dudng lich Sd, y nghTa thddng hiéu vå triét IY thUdng
              hi$u.
            </DescAbout>
          </RightAbout>
        </ContainerAbout>
        <ContainerMean>
          <TitleMean>Ý nghĩa thương hiệu</TitleMean>
          <ContainerAbout>
            <DescAbout>
              Lấy cảm hứng từ tôn chỉ sống của bác sĩ Murad cam kết chăm sóc sức
              khoẻ bằng khoa học, chúng tôi tạo ra những sản phẩm và trải nghiệm
              không chỉ cho làn da khỏe mạnh mà còn cho cuộc sống hạnh phúc
              hơn.“Stress less. Be imperfect. Live longer.” <br />
              <br />
              – ““Bớt căng thẳng. Bớt cầu toàn. Sống thọ hơn. ”<br />
              <br />- Bác sĩ Howard Murad."  01 NUÔI DƯỠNG LÀN DA CỦA BẠN "Làn
              da trở nên đẹp đẽ khi nó khoẻ mạnh từ ở cấp độ tế bào, vì thế nên
              chúng tôi tạo ra những sản phẩm với các thành phần cấp ẩm mạnh mẽ
              giúp hỗ trợ chức năng của hàng rào bảo vệ da đó là bảo vệ các tế
              bào khỏi tác hại từ môi trường và sự mất nước, đồng thời thúc đẩy
              quá trình sản sinh tế bào mới khoẻ mạnh." 02 ĂN THỰC PHẨM MỌNG
              NƯỚC “Bằng việc ăn những loại trái cây và rau quả chứa nhiều nước,
              chất dinh dưỡng sẽ được hấp thụ vào cơ thể tốt hơn để có làn da
              khoẻ mạnh. Đôi khi uống quá nhiều nước có thể khiến các vitamin và
              khoáng chất bị đào thải ra ngoài ”. 03 ĐÁNH THỨC CƠ THỂ CỦA
              BẠN “Bằng cách tập thể dục, bạn sẽ giúp thúc đẩy tuần hoàn và da
              lại là cơ quan lớn nhất của cơ thể. Tăng lưu lượng máu giúp mang
              oxy đến các tế bào và giúp mang đi các chất thải như các gốc tự do
              có hại ” 04 HÃY ĐỐI TỐT VỚI TÂM TRÍ CỦA BẠN “Bằng cách quan tâm
              đến cảm xúc của mình, bạn có thể giảm tác động của căng thẳng tới
              tế bào, vốn có thể dẫn đến các dấu hiệu của làn da không khỏe
              mạnh”.
            </DescAbout>
            <ImageAbout src={image1} />
          </ContainerAbout>
        </ContainerMean>
      </Container>
      <FooterComponent />
    </>
  );
};

export default Introduction;

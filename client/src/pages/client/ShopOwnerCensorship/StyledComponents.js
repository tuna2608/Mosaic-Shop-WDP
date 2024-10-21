import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const InputField = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`
export const TermsBox = styled.div`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  
  h2 {
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
    color: #555;
  }

  ul {
    margin-left: 20px;
    list-style-type: disc;
  }

  label {
    display: block;
    margin-top: 10px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }
`
export const ImageUploadContainer = styled.div`
  margin: 20px 0;
`;

export const ImagePreview = styled.img`
  margin-top: 10px;
  width: 200px;
  height: auto;
  object-fit: cover;
  border: 1px solid #ddd;
  padding: 5px;
  background-color: #f4f4f4;
`;

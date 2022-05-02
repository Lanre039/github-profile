import Styled from "styled-components";

const Wrapper = Styled.section`
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .heading {
        font-size: 2rem;
          margin-bottom: 0;
      }

    .login-container {
      background-color: #000;
      padding: 20px;
      border-radius: 13px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: fit-content;
      margin-top: 30px;
      

      a {
          display: flex;
          flex-direction: row;
          cursor: pointer;
      }

      span {
        font-size: 1.1rem;
        color: #fff;
        margin: 0;
      }
   
    }

    .loader-container {
        background-color: #fff;
        height: 100%;
        width: 100%;
        margin-top: 20px;
    }
  }
}
`;

export default Wrapper;

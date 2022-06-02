import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 에러페이지
function Error() {
  const SideNavState = useSelector((state) => state.SideNavState);
  const navigate = useNavigate();

  // Error View
  return (
    <ErrorContainer width={SideNavState.width}>
      <img src={require("../assets/Bookky/북키_에러.png")} alt="bookky Error" />
      <div className="notice">잘못된 경로입니다</div>
      <div className="menu">
        <div className="btn" onClick={() => window.history.back()}>
          이전 페이지로
        </div>
        <div className="btn" onClick={() => navigate("/")}>
          홈으로
        </div>
      </div>
    </ErrorContainer>
  );
}

//////////////////////////////////////// Styled-Components
const ErrorContainer = styled.div`
  width: ${(props) => props.width};
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    min-width: 500px;
    width: 30%;
  }

  .notice {
    font-size: 2em;
    font-weight: bold;
    margin: 30px 0 80px 0;
  }
  .menu {
    display: flex;
    flex-direction: row;
    margin: 20px 0;

    .btn {
      font-weight: bold;
      font-size: 1.2em;
      margin: 0 20px;
      text-decoration: underline 2px solid rgba(0, 0, 0, 0);
      transition: all 0.3s;

      :hover {
        text-decoration: underline 2px solid var(--main-color);
        cursor: pointer;
      }
    }
  }
`;
export default Error;

import styled from "styled-components";
import CarPng from "../images/rb.png";
import { useTheme, useThemeUpadate } from "../Context/themeContext.jsx";
import colorThemes from "../colorThemes";
const Header = () => {
  const theme = useTheme();
  const setTheme = useThemeUpadate();
  return (
    <HeaderStyled theme={theme}>
      <nav className="navigation">
        <div className="logo">
          <h1>RedBull</h1>
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Join</a>
          </li>
          <li>
            {colorThemes.map((theme, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setTheme(i)}
                  style={{ backgroundColor: theme.background }}
                ></button>
              );
            })}
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <div className="left-content">
          <h1>RB20</h1>
          <h4>Unleash the Speed: Red Bull F1 - Racing Beyond Limits!</h4>
          <div className="cta-btns">
            <a href="#" className="btn">
              Join Now
            </a>
            <a href="#" className="btn cta">
              Message Us
            </a>
          </div>
        </div>
        <div className="right-content">
          <img src={CarPng} alt="car" />
        </div>
      </div>
      <div className="bg-overlay"></div>
      <div className="dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 100%;
  width: 100%;
  padding: 2rem 140px;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.secondary};
  .logo {
    h1 {
      font-size: 2rem;
      font-weight: 800;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items {
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5rem;
        a {
          color: #718096;
        }
        button {
          outline: none;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          height: 30px;
          width: 30px;
          &:not(:last-child) {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
  .bg-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    z-index: -1;
    clip-path: polygon(0 0, 50% 0, 85% 100%, 0% 100%);
    background-color: ${(props) => props.theme.background};
  }
  .header-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 150px;
    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme.title};
    }
    h4 {
      margin: 1rem 0;
    }
    .cta-btns {
      display: flex;
      a {
        padding: 0.7rem 2rem;
        font-weight: initial;
        color: #fff;
        border-radius: 35px;
        &:not(:first-child) {
          margin-left: 1.4rem;
          border: 1px solid ${(props) => props.theme.primary};
        }
        &:first-child {
          background-color: ${(props) => props.theme.primary};
        }
      }
    }
    .right-content {
      position: relative;
      width: 100%;
      img {
        width: 100%;
        filter: drop-shadow(1px 2px 10px ${(props) => props.theme.primary});
      }
    }
  }
  .dots {
    position: absolute;
    left: 50%;
    bottom: 7%;
    transform: translateX(-50%);
    display: flex;
    opacity: 0.8;
    .dot {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: slateblue;
      margin: 0 1px;
      background-color: #fff;
      cursor: pointer;
    }
    .dot-1 {
      margin-right: 3px;
    }
    .dot-2,
    .dot-3 {
      transform: scale(0.85);
      background-color: #d7c4c4;
    }
  }
`;

export default Header;

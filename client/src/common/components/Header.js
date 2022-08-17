import "./Header.css";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@mui/material";


const Header = () => {
  // 야매:라우팅 권한관리로 개선되어야할 로직---------------
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.userData === undefined) {
      navigate("/");
    }
  }, [cookies]);

  // -----------------------------------------

  const onClickSignUp = () => {
    navigate("/signUp");
  };

  const onClickLogin = () => {
    navigate("/login");
  };
  const onClickLogOut = () => {
    console.log("a");
    removeCookie("userData", { path: "/" });
    navigate("/");
  };

  const logoSizeNum = 15;
  return (
    <header className="p-3  text-bg-dark header-container">
      <div className="logo-box">
        <img
          src={`${process.env.PUBLIC_URL}/InssaFood_logo2.png`}
          alt="logo"
          style={{ height: 3 * logoSizeNum, width: 8 * logoSizeNum }}
        />
      </div>
      <div className="nav-container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                onClick={() => {
                  navigate("/");
                }}
                className="nav-link px-2 text-white"
              >
                Home
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  navigate("/core");
                }}
                href=""
                className="nav-link px-2 text-white"
              >
                Search
              </a>
            </li>
            <li>
              <a
                href=""
                className="nav-link px-2 text-white"
                onClick={() => {
                  navigate("/history/list");
                }}
              >
                History
              </a>
            </li>
            <li>
              <a href="" onClick={()=> {navigate('about')}} className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="logBtn-box text-end">
        {cookies.userData === undefined ? (
          <div className="logTrue-box">
            <button
              onClick={onClickLogin}
              className="logIn-btn log-btn btn btn-secondary "
            >
              Login
            </button>
          </div>
        ) : (
          <div className="logFalse-box">
            <button
              className="signUp-btn log-btn btn btn-outline-secondary"
              onClick={onClickLogOut}
            >
              LogOut
            </button>
            <Button
            className="social-btn google"
            // startIcon={<googleLogo />}
            variant="contained"
            onClick={() => navigate('/login/resetpassword')}
          >
            Reset Password
          </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

//import SignInForm from "./pages/user/SignInForm";
import SignUpForm from "./pages/user/SignUpForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import SignInForm from "./pages/user/SignInForm";

const Login= ()=>{
    const [view, setView] = useState({
        signIn : false,
        signUp : false,
      });
      const [signInData, setSignInData ] = useState( {
        email: "",
        password: "",
      } );
    
      const [signUpData, setSignUpData ] = useState( {
        email: "",
        password: "",
        rePassword: "",
        name: "",
      } );
    
      const onSignInChange = (e) => {
        setSignInData({
          ...signInData,
          [e.target.name] : e.target.value,
        })
        console.log(signInData);
      };
    
      const onSignUpChange = (e) => {
        setSignUpData({
          ...signUpData,
          [e.target.name] : e.target.value,
        });
        console.log(signUpData)
      }
      

      const [ cookies, , ] = useCookies('userData');
      
      return (
            <main>
    
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">MOVIE</h1>
            <p className="lead text-muted">리뷰하고 싶은 영화를 추가하고, 별점을 주세요! <br /></p>
          </div>
        </div>
            {
              !cookies.userData ? (
                <p>
              <button className="btn btn-primary my-2 m-1" onClick={ () => {
                setView(
                  {
                  signIn : true,
                  signUp : false,
              }
              )}} >로그인</button>
              <button className="btn btn-secondary my-2 m-1" onClick={ () => {
                setView(
                  {
                  signIn : false,
                  signUp : true,
              }
              )}} >회원 가입</button></p> )
              :
              (
                <div>
              <h3>Welcome to MOVIE MOVIE</h3>
              <h3>You are logged in</h3>
              </div>
              )
            } 
    </section>
      {
        view.signIn ? (<SignInForm signInData={signInData} onSignInChange={onSignInChange} />) : (<></>)
      }
      {
        view.signUp ? (<SignUpForm signUpData={signUpData} onSignUpChange={onSignUpChange}  setSignUpData={setSignUpData} />) : (<></>)
      }
    
    
    
    
    </main>
        )
    }


    

export default Login;
import React, { useState } from "react";
import $ from 'jquery';
import axios from "axios";
import port from './../../data/port.json'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';


const SigninForm = ( {signInData, onSignInChange} ) => {
    
    const navigate = useNavigate();
    
    const [errorMessage, setErrorMessage] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies(["userData"]);


    const onLoginClick = () => {
        
        // 유효성검사 - 빈칸인지
        if (!signInData.email) {
            $('#email').focus(); //jQuery 라이브러리 버전 업데이트돼서 줄끄임 -> 그래도 지원은 해주더라.
            alert('이메일을 입력하세요');
            return;
        }

        if (!signInData.password) {
            $('#password').focus();
            alert('비밀번호를 입력하세요');
            return;
        }
        
        console.log('로그인 요청');


        // 데이터 post 요청 보내기 - axios. DB에 접속하기 때문에 await 사용.
        sendSignInData()
        .then(
            res => {
                    console.log(res);
                    setCookie("userData", res.data, { path: "/" });
                    console.log(cookies.userData);
                    alert('로그인이 완료되었습니다.');
                    navigate('review/list');
                    
                    }
            )
        .catch(e => {
            setErrorMessage(e.response.data.fail);
            });
    }
    
    const sendSignInData = async () => {
        return await axios.post(`${port.url}/user/login`, signInData );
    }


    return (
    <div className="container">
        <div className="album">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={onSignInChange} value={signInData.email} className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={onSignInChange} value={signInData.password} className="form-control" id="password" name="password" />
                </div>
                <div className="mb-3">
                    <p className="text-danger">{errorMessage}</p>
                </div>
                <button type="button" onClick={onLoginClick} className="btn btn-primary">로그인</button>
            </form>
        </div> 
    </div>
    )
}

export default SigninForm;
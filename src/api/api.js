import axios from "axios";

const instance = axios.create({
	dataURL: "http://localhost:4000",
//  timeout : 1,    // 단위가 1ms(1 밀리세컨)이므로 수신할 수 있는 시간이 안되서 수신 오류가 남.
});

instance.interceptors.request.use(
  function (config) { // 콜백함수 : 요청을 보내기 전 수행하는 부분
    // console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {  // 콜백함수 : 오류 요청을 보내기 전 수행하는 부분
    // console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) { // 콜백함수 : 서버로부터 정상 응답을 받은 경우 , 이름은 상관없다 rep도 됨!
    // console.log("인터셉트 정상 응답 수신!");
    return response;
  },

  function (error) {  // 콜백함수 : 서버로부터 오류 응답을 받은 경우
    // console.log("인터셉트 오류 응답 수신");
    return Promise.reject(error);
  }
);

export default instance;
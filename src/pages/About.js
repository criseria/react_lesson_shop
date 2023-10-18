import { Outlet } from "react-router-dom";

function About() {
    return (
        <div className="container">
            <h1>우리 회사 소개</h1>
            {/* 내장된 라우터의 저장 위치 */}
            <Outlet></Outlet>
            {/* <div className="col-md-4">
                <img src="https://jamsuham75.github.io/image/shoes2.jpg" width={300} height={300} ></img>
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">황영조</h4>
                <p>Born in Seoul</p>
                <p>1994</p>
                <button className="btn btn-warning">연락하기</button>
            </div> */}
        </div>
    )
}




export default About;
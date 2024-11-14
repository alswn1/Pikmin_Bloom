import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 임포트
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'; // 부트스트랩 컴포넌트 임포트
import '../css/Pikmins.css';
import PikminCard from './PikminCard';

function Pikmins() {
    const [pikminList, setPikminList] = useState([]);
    const getPikmins = async() => {
        let url = "http://localhost:5000/pikmins"; // 데이터를 가져올 API 주소
        let response = await fetch(url); // 해당 url로 HTTP 요청을 보내 데이터를 가져옴
        let data = await response.json(); // json 형식으로 변환
        setPikminList(data); // pikminList에 저장
    }
    useEffect(() => {
        getPikmins();
    }, []);

    return (
        <div className='wrapper'>
            <div>
                <Container>
                    <Row>
                        {pikminList && pikminList.map(pikmin => (
                            <Col lg={3} key={pikmin.id}><PikminCard pikmin={pikmin} /></Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Pikmins;
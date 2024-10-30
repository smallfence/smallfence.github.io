import '@/components/caseStudy/caseStudy.css';
import { Fragment, useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {CfSave, CfClean} from '@/redux/action/CashflowAction';
import newCashflowData from "@/components/caseStudy/chartData/NoData.json";
// import 강욜로 from "@/images/강욜로.jpeg";
// import 박투잘 from "@/images/박투잘.jpeg";
// import 오잘나 from "@/images/오잘나.jpeg";
// import 김건실 from "@/images/김건실.jpeg";

const Setting = ({children}) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(CfSave(newCashflowData));
    });

    return (
        <Fragment>
        <div className="case-study-conten-top">
            <div>
                <h4 className='title'>장세 시뮬레이션 값</h4>
                <p>⊙ 물가상승률 : 3.0%</p>
                <p>⊙ 예금 금리 : 2.7%</p>
                <p>⊙ 대출 금리 : 5.0%</p>
                <p>⊙ 부동산 상승률 : 3.0%</p>
                <br/>
                <h4 className='title'>개인 시뮬레이션 값</h4>
                <p>⊙ 개인 투자수익률 : 4.0%(* 우량주 배당 수준)</p>
                <p>⊙ 전체 자산 중 예금/투자 비율 : 8대2</p>
                <p>⊙ 사회초년생 나이 : 28세</p>
                <p>⊙ 평균 연봉상승률 : 6.5%(1년차) ~ 2.0%(25년차)</p>
                <br/>
                <h4 className='title'>참고</h4>
                <p>※ 예금/투자수익에 종합소득세와 같은 세금계산은 하지 않습니다.</p>
                <p>※ 시뮬레이션 시나리오는 통계를 참고한 주관적인 생각입니다.</p>
            </div>
        </div>
        </Fragment>
    )
}
export default Setting;
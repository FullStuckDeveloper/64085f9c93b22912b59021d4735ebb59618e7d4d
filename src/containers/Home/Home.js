import React from "react"
import { Col, Container} from "reactstrap"
import styled from "styled-components"
import SwipeDate from "../../components/SwipeDate"
import Location from "../../components/Location"
import Menu from "../../components/Menu/Menu"


const ContainerHome = styled(Container)`
    margin-right: 0px;
    padding:0px;
`

const ContainerFlex = styled.div`
    width: 375px;
    border: 0px solid;
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: 5px 5px 40px #999;
    height: 100%;
    // overflow: scroll;
`

const Line = styled.hr`
    margin-top: 8px;
    margin-bottom: 8px;
`

const buttons = ["Lunch", "Dinner"];

const dates = [
    { date: 10, day: "SEN", status: "weekday" },
    { date: 11, day: "SEL", status: "weekday" },
    { date: 12, day: "RAB", status: "weekday" },
    { date: 13, day: "KAM", status: "weekday" },
    { date: 14, day: "JUM", status: "weekday" },
    { date: 15, day: "SAB", status: "weekend" },
    { date: 16, day: "MIN", status: "weekend" },
    { date: 17, day: "SEN", status: "weekday" },
    { date: 18, day: "SEL", status: "weekday" },
    { date: 19, day: "RAB", status: "weekday" },
    { date: 20, day: "KAM", status: "weekday" },
    { date: 21, day: "JUM", status: "weekday" },
    { date: 22, day: "SAB", status: "weekend" },
    { date: 23, day: "MIN", status: "weekend" }
];

const Home = () => {

    return (
        <ContainerHome>
            <Col md={{ offset: 4 }}>
                <ContainerFlex>
                    <Location />
                    <SwipeDate dates={dates} />
                    <Line />
                    <Menu buttons={buttons} />
                </ContainerFlex>
            </Col>
        </ContainerHome>
    )
}

export default Home
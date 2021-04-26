import { useState } from "react"
import { Button } from "reactstrap"
import styled from "styled-components"

const FlexContainer = styled.ul`
    display: flex;
    flex-direction: row;
    // gap: 4px;
    padding: 0;
    margin: 0;
    list-style: none;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

const FlexItem = styled.li`
    margin:5px 5px 0px 0px;
    width: 56px;
    height: 56px;
    color: #424749;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
`

const SwipeDateSection = styled.section`
    padding-left: 12px;
    padding-right: 12px;
`

const Day = styled.div`
    font-size: 8pt;
    margin-bottom: 0px;
`

const Date = styled.strong`
    font-size: 10pt;
    margin-top: 0px;
    margin-bottom: 0px;
`

const ButtonDate = styled(Button)`
    border-radius: 50%;
    border-color: transparent;
    &.active {
        background-color: #424749;
    }
`

const SwipeDate = ({ dates }) => {

    const [tanggal, setTanggal] = useState(10);

    return (
        <SwipeDateSection>
            <FlexContainer>
                {dates.map((date, i) => (
                    <FlexItem key={date.date}>
                        <ButtonDate
                            name={date.date}
                            onClick={() => setTanggal(date.date)}
                            className={(date.status === "weekend" ? "disabled" : "") || (date.date === tanggal ? "active" : "")}
                            outline
                        >
                            <Day>{date.day}<br/><Date>{date.date}</Date></Day>
                        </ButtonDate>
                    </FlexItem>
                ))}
            </FlexContainer>
        </SwipeDateSection >
    )
}

export default SwipeDate
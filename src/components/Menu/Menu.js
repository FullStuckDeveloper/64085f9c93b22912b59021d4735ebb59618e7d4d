import { Star, StarHalf } from "@material-ui/icons"
import { useState } from "react"
import { Button, ButtonGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap"
import styled from "styled-components"
import './menu.css'

const AddButton = styled(Button)`
    background-color: #f9423a; 
    border: 0px;
    width: 80px;
`

const CardTitleKulina = styled(CardTitle)`
    color: #424749 !important;
    font-weight: 500;
    font-size: 18px;
`

const CardSubtitleKulina = styled(CardSubtitle)`
    color: #6e7679 !important;
    font-weight: 500;
    font-size: 12px;
`

const PriceAddKulina = styled.div`
    color: #424749 !important;
    font-weight: 500;
    font-size: 24px;
    margin-top: 18px;
`

const CardMenu = styled(Card)`
    border: 0px solid;
    border-radius: 10px;
    margin-top: 16px;
    margin-bottom: 32px;
    box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
`

const CardImgMenu = styled(CardImg)`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
`

const MenuSection = styled.section`
    padding-left: 12px;
    padding-right: 12px;
    overflow-y: scroll;
    height: 750px;
    &::-webkit-scrollbar {
        display: none;
    }

`

const Today = styled.p`
    margin-top:32px;
    font-size: 14pt;
    font-weight: bold;
`

const ButtonCategory = styled(Button)`
    &.active {
        background-color: #424749;
    }
`

const CardRating = styled.div`
    color: #6e7679;
    font-size: 16px;
`

const RatingStar = styled(Star)`
    color: #f9423a;
`

const RatingHalfStar = styled(StarHalf)`
    color: #f9423a;
`

const Menu = ({ buttons }) => {

    const [active, setActive] = useState("Lunch");

    return (
        <MenuSection>
            <Row>
                <ButtonGroup className="col-md-12">
                    {buttons.map((button, i) => (
                        <ButtonCategory
                            key={i}
                            name={button}
                            onClick={() => setActive(button)}
                            className={button === active ? "active" : "outline"}
                            outline
                        >
                            {button}
                        </ButtonCategory>
                    ))}
                </ButtonGroup>
                <Col md="12">
                    <Today>Kamis. 13 Maret 2019</Today>
                    <CardMenu>
                        <CardImgMenu src="https://kln.imgix.net/production/9JWAZOV0H0-b317e69029a352367e8d0b16df0bf0d2-cover-2.jpg"></CardImgMenu>
                        <CardBody>
                            <CardRating>4.5 <RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingHalfStar /></CardRating>
                            <CardTitleKulina>Roasted Chicken with Scramble Egg</CardTitleKulina>
                            <CardSubtitleKulina>by Kulina &bull; Uptown Lunch</CardSubtitleKulina>
                            <PriceAddKulina className="col-md-12">
                                Rp 35,000
                                <AddButton className="col-md-6 float-end">
                                    ADD +
                                </AddButton>
                            </PriceAddKulina>
                        </CardBody>
                    </CardMenu>

                    <CardMenu>
                        <CardImgMenu src="https://kln.imgix.net/production/9JWAZOV0H0-b317e69029a352367e8d0b16df0bf0d2-cover-2.jpg"></CardImgMenu>
                        <CardBody>
                            <CardRating>4.5 <RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingHalfStar /></CardRating>
                            <CardTitleKulina>Roasted Chicken with Scramble Egg</CardTitleKulina>
                            <CardSubtitleKulina>by Kulina &bull; Uptown Lunch</CardSubtitleKulina>
                            <PriceAddKulina className="col-md-12">
                                Rp 35,000
                                <AddButton className="col-md-6 float-end">
                                    ADD +
                                </AddButton>
                            </PriceAddKulina>
                        </CardBody>
                    </CardMenu>

                    <CardMenu>
                        <CardImgMenu src="https://kln.imgix.net/production/9JWAZOV0H0-b317e69029a352367e8d0b16df0bf0d2-cover-2.jpg"></CardImgMenu>
                        <CardBody>
                            <CardRating>4.5 <RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingHalfStar /></CardRating>
                            <CardTitleKulina>Roasted Chicken with Scramble Egg</CardTitleKulina>
                            <CardSubtitleKulina>by Kulina &bull; Uptown Lunch</CardSubtitleKulina>
                            <PriceAddKulina className="col-md-12">
                                Rp 35,000
                                <AddButton className="col-md-6 float-end">
                                    ADD +
                                </AddButton>
                            </PriceAddKulina>
                        </CardBody>
                    </CardMenu>

                    <CardMenu>
                        <CardImgMenu src="https://kln.imgix.net/production/9JWAZOV0H0-b317e69029a352367e8d0b16df0bf0d2-cover-2.jpg"></CardImgMenu>
                        <CardBody>
                            <CardRating>4.5 <RatingStar /><RatingStar /><RatingStar /><RatingStar /><RatingHalfStar /></CardRating>
                            <CardTitleKulina>Roasted Chicken with Scramble Egg</CardTitleKulina>
                            <CardSubtitleKulina>by Kulina &bull; Uptown Lunch</CardSubtitleKulina>
                            <PriceAddKulina className="col-md-12">
                                Rp 35,000
                                <AddButton className="col-md-6 float-end">
                                    ADD +
                                </AddButton>
                            </PriceAddKulina>
                        </CardBody>
                    </CardMenu>
                </Col>
            </Row>
        </MenuSection>
    )
}

export default Menu
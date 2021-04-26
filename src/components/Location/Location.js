import styled from "styled-components"
import { MdArrowBack, MdExpandMore } from "react-icons/md"
import { Input, Container } from 'reactstrap'
import { Col, Row } from "reactstrap"
import { useState } from "react"
import { BottomSheet } from "react-spring-bottom-sheet"
import 'react-spring-bottom-sheet/dist/style.css'
import { LocationOn } from "@material-ui/icons"

const LocationTitle = styled.div`
    font-size: 10px;
    color: #6e7679 !important;
    text-transform:uppercase;
    text-align: left;
`;

const TheLocation = styled.a`
    font-size: 16px;
    color: #424749;
    text-align: left;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
`

const ExpandMoreKulina = styled(MdExpandMore)`
    color: #f9423a;
`

const LocationSection = styled.section`
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
`

const Name = styled.div`
    font-size: 14px;
    color: #424749 !important;
    text-align: left;
    font-weight: 500;
`

const Address = styled.div`
    font-size: 12px;
    color: #6e7679;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid #f1f1f2;
    padding-bottom: 8px;
`

const LocationBottomSheet = styled(BottomSheet)`
    // width: 375px;
`

const LocationOnKulina = styled(LocationOn)`
    color: #f9423a;
    position: absolute;
    bottom: 8px;
    left: 24px;
    width: 20px;
    height: 20px;
`

const InputLocation = styled(Input)`
    margin: 0;
    padding-left: 40px;
`

const InputContainer = styled.div`
    position: relative;
    padding: 0px 18px 0px 18px;
    margin: 0;
    padding-top: 8px;
`

const LocationOnSugestion = styled(LocationOn)`
    position: absolute;
    bottom: 16px;
    left: 24px;
    width: 20px;
    color: #6e7679;
`

const TextLocation = styled.div`
    margin: 0;
    padding-left: 40px;
`

const PopupTitle = styled.p`
    font-size: 20px;
    padding: 0px 18px 0px 18px;
    font-weight: bold;
`

const BackMenuLocation = styled(MdArrowBack)`
    position: absolute;
    bottom: 8px;
    left: 0px;
    width: 35px;
    height: 35px;
    color: #424749;
`

const TextHeaderLocation = styled.div`
    margin: 0;
    padding-left: 25px;
`

const HeaderContainer = styled.div`
    position: relative;
    padding: 0px 18px 0px 18px;
    margin: 0;
`

const Location = (props) => {
    const [open, setOpen] = useState(false)

    function onDismiss() {
        setOpen(false)
    }

    return (
        <LocationSection>
            <HeaderContainer>
                <BackMenuLocation />
                <TextHeaderLocation>
                    <LocationTitle className="col-md-6">Alamat Pengantaran</LocationTitle>
                    <TheLocation onClick={() => setOpen(true)}>
                        Tokopedia Tower <ExpandMoreKulina />
                    </TheLocation>
                </TextHeaderLocation>
            </HeaderContainer>

            <LocationBottomSheet
                open={open}
                onDismiss={onDismiss}
                skipInitialTransition
                defaultSnap={({ maxHeight }) => maxHeight / 1}
                snapPoints={({ maxHeight }) => [
                    maxHeight - maxHeight / 5,
                    maxHeight / 2,
                    maxHeight * 0.6,
                ]}
            >
                <Container>
                    <PopupTitle>Cek makanan yang tersedia di lokasi kamu!</PopupTitle>
                    <InputContainer>
                        <InputLocation /> <LocationOnKulina />
                    </InputContainer>
                    <InputContainer>
                        <LocationOnSugestion>
                            <LocationOn />
                        </LocationOnSugestion>
                        <TextLocation>
                            <Name>Kulina</Name>
                            <Address>Jalan Tulodong Atas 28, Senayan, Kebayoran Baru</Address>
                        </TextLocation>
                    </InputContainer>
                    <InputContainer>
                        <LocationOnSugestion>
                            <LocationOn />
                        </LocationOnSugestion>
                        <TextLocation>
                            <Name>Pancoran Riverside Apartement</Name>
                            <Address>RT. 6/RW 1, Pengadengan, Pancoran, South Jakarta</Address>
                        </TextLocation>
                    </InputContainer>
                    <InputContainer>
                        <LocationOnSugestion>
                            <LocationOn />
                        </LocationOnSugestion>
                        <TextLocation>
                            <Name>Jalan Tulodong Atas 28</Name>
                            <Address>Jalan Tulodong Atas 28, Senayan, Kebayoran Baru</Address>
                        </TextLocation>
                    </InputContainer>
                    <InputContainer>
                        <LocationOnSugestion>
                            <LocationOn />
                        </LocationOnSugestion>
                        <TextLocation>
                            <Name>Block71 Jakarta</Name>
                            <Address>Ariobimo Sentral, South Jakarta, RT. 9/RW. 4</Address>
                        </TextLocation>
                    </InputContainer>
                </Container>
            </LocationBottomSheet>

            {/* <ModalLocation isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </ModalLocation> */}


        </LocationSection >
    )
}

export default Location
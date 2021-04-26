import { Col, ButtonGroup, Button } from "reactstrap"

const Category = () => {
    return (
        <Col md="12">
            <ButtonGroup>
                <Button active>Lunch</Button>
                <Button>Dinner</Button>
            </ButtonGroup>
        </Col>
    )
}

export default Category
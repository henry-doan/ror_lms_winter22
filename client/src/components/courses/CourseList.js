import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CourseList = ({ courses  }) => (
  <Container>
    <Row sm='12' md='4'>
      { courses.map( c =>
        <Col key={c.id}>
          <Card style={{ width: '16rem', height: '20rem' }}>
            <Card.Body>
              <Card.Title>{c.title}</Card.Title>
              <Card.Text>
                {c.desc}
              </Card.Text>
              <Link 
                to={`/courses/${c.id}`}
                state={ {...c} }
              >
                <Button variant="primary">
                  Show
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
)

export default CourseList;
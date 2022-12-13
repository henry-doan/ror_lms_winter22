import { useState, useEffect } from 'react';
import axios from 'axios';
import CourseList from './CourseList';
import CourseForm from './CourseForm';
import { Button } from 'react-bootstrap';

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect(() => {
    axios.get('/api/courses')
      .then( res => setCourses(res.data))
      .catch( err => console.log(err))
  }, [])

  const addCourse = (course) => {
    axios.post('/api/courses', { course })
      .then( res => setCourses([...courses, res.data]))
      .catch( err => console.log(err))
  }

  // toggling add form and using conditional rendering option
  return (
    <>
      { adding ? 
        <>
          <CourseForm
            addCourse={addCourse}
            setAdd={setAdd}
          />
          <Button onClick={() => setAdd(false)}>
            Cancel
          </Button>
        </>
        :
        <Button
        onClick={() => setAdd(true)}
        >
          +
        </Button>
      }
      <h1>All Courses</h1>
      <CourseList 
        courses={courses}
      />
    </>
  )
}

export default Courses;
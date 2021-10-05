import React, { useEffect, useState } from 'react';
import './Courses.css'

const Courses = () => {
    const [courses,setCourses] = useState([]);

    useEffect( ()=>{
        fetch('Details.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    console.log(courses);
    return (
        <div className='course-container my-5'>
            <h1>OUR COURSES</h1>
            <hr />
            <div className='courses'>
                <div className='row my-5'>
                    {
                        courses.map(course => <div className='col-md-6 my-4'>
                            <div className="cart">
                                <div className="image">
                                    <img className='w-50' src={course.img} alt="" />
                                    <h2>{course.name}</h2>
                                    <p>Fee:{course.cost}BDT</p>
                                    <p><small>Seat:{course.seat}</small></p>
                                    <p>{course.description}</p>
                                    
                                    
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;
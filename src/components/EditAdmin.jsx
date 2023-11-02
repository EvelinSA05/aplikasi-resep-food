// //import hook useState dan useEffect from react
// import { useState, useEffect } from 'react';

// //import component Bootstrap React
// import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';

// //import axios
// import axios from 'axios';

// //import hook history dan params dari react router dom
// import { useNavigate, useParams } from "react-router-dom";

// function EditAdmin() {

//     //state
//     const [title, setTitle] = useState('');
//     const [image, setImage] = useState('');
//     const [ingredients, setIngredients] = useState('');
//     const [step, setStep] = useState('');
//     const [content, setContent] = useState('');

//     //state validation
//     const [errors, setErrors] = useState({});

//     //history
//     const navigate = useNavigate();

//     //get ID from parameter URL
//     const { id } = useParams();

//     //hook useEffect
//     useEffect(() => {

//         //panggil function "getPOstById"
//         getPostById();
        
//     }, []);

//     //function "getPostById"
//     const getPostById = async() => {

//         //get data from server
//         const response = await axios.get(`http://127.0.0.1:8000/api/reseps/${id}`);
//         //get response data
//         const data = await response.data.data

//         //assign data to state
//         setTitle(data.title);
//         setImage(data.image);
//         setIngredients(data.ingredients);
//         setStep(data.step);
//         setContent(data.content);

//     };

//     //function "updatePost"
//     const updatePost = async (e) => {
//         e.preventDefault();
        
//         //send data to server
//         await axios.post(`http://127.0.0.1:8000/api/reseps/${id}`, {
//             title: title,
//             image: image,
//             ingredients: ingredients,
//             step: step,
//             content: content
//         })
//         .then(() => {

//             //redirect
//             navigate('/recipeAdmin');

//         })
//         .catch((error) => {

//             //assign validation on state
//             setErrors(error.response.data);
//         })
        
//     };

//     return (
//         <Container className="mt-3">
//             <Row>
//                 <Col md="{12}">
//                     <Card className="border-0 rounded shadow-sm">
//                         <Card.Body>

//                             {
//                                 errors.errors &&
//                                     <Alert variant="danger">
//                                         <ul class="mt-0 mb-0">
//                                             { errors.errors.map((error, index) => (
//                                                 <li key={index}>{ `${error.param} : ${error.msg}` }</li>
//                                             )) }
//                                         </ul>
//                                     </Alert>
//                             }

//                             <Form onSubmit={ updatePost }>
//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label>TITLE</Form.Label>
//                                     <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Title" />
//                                 </Form.Group>
//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label>IMAGE</Form.Label>
//                                     <Form.Control type="file" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Masukkan Image" />
//                                 </Form.Group>
//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label>INGREDIENTS</Form.Label>
//                                     <Form.Control type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Masukkan Ingredients" />
//                                 </Form.Group>
//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label>STEP</Form.Label>
//                                     <Form.Control type="text" value={step} onChange={(e) => setStep(e.target.value)} placeholder="Masukkan Step" />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                                     <Form.Label>CONTENT</Form.Label>
//                                     <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Content" />
//                                 </Form.Group>

//                                 <Button variant="primary" type="submit">
//                                     UPDATE
//                                 </Button>
//                             </Form>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default EditAdmin;

//import useState
import { useState, useEffect } from 'react';

//import useNavigate
import { useNavigate, useParams } from 'react-router-dom';

//import API
import axios from 'axios';

export default function EditAdmin() {

    //define state
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [step, setStep] = useState('');
    const [content, setContent] = useState('');

    //state validation
    const [errors, setErrors] = useState([]);

    //useNavigate
    const navigate = useNavigate();

    //destruct ID
    const { id } = useParams();

    //method fetchDetailPost
    const fetchDetailPost = async () => {
        
        //fetch data
        await axios.get(`http://127.0.0.1:8000/api/reseps/${id}`)
            .then(response => {
                
                //assign to state
                setTitle(response.data.title);
                setIngredients(response.data.ingredients);
                setStep(response.data.step);
            })
    }

    //hook useEffect
    useEffect(() => {
        
        //call method "fetchDetailPost"
        fetchDetailPost();

    }, []);

    //method handle file change
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }

    //method update post
    const updatePost = async (e) => {
        e.preventDefault();
        
        //init FormData
        const formData = new FormData();

        //append data
        formData.append('image', image);
        formData.append('title', title);
        formData.append('ingredients', ingredients);
        formData.append('step', step);
        formData.append('_method', 'PUT')

        //send data with API
        await axios.post(`http://127.0.0.1:8000/api/reseps/${id}`, formData)
            .then(() => {
                
                //redirect to posts index
                navigate('/recipeAdmin');

            })
            .catch(error => {
                
                //set errors response to state "errors"
                setErrors(error.response.data);
            })
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <form onSubmit={updatePost}>
                            
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Image</label>
                                    <input type="file" onChange={handleFileChange} className="form-control"/>
                                    {
                                        errors.image && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.image[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Title</label>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title Post"/>
                                    {
                                        errors.title && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.title[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Ingredients</label>
                                    <textarea className="form-control" value={ingredients} onChange={(e) => setIngredients(e.target.value)} rows="5" placeholder="Content Post"></textarea>
                                    {
                                        errors.ingredients && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.ingredients[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Step</label>
                                    <textarea className="form-control" value={step} onChange={(e) => setStep(e.target.value)} rows="5" placeholder="Content Post"></textarea>
                                    {
                                        errors.step && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.step[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
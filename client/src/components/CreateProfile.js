import React from 'react';
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {createAction} from '../store/asyncMethods/PostMethods';
export const CreateProfile = (props) => {
    const { createErrors, redirect } = useSelector(
		(state) => state.PostReducer
	);
    const [currentImage, setCurrentImage] = useState('Choose image');
    const [imagePreview, setImagePreview] = useState('');
    const dispatch = useDispatch();
    const {
        user: { _id, email },
	} = useSelector((state) => state.AuthReducer);

   
    
    const fileHandle = (e) => {
        if(e.target.files.length !== 0)
        {
        setCurrentImage(e.target.files[0].name);
        setState({
            ...state,
            [e.target.name]: e.target.files[0],
        });
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    };
    const handleInputs = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
		
	};
    const [state, setState] = useState({
        image: '',
        name: '',
        phone: '',
        age: '',
        address: '',
        city: '',
        user_state: '',
        zipcode: '',
        hobby: '',
        school_name: '',
        subject_name: '',
        passing_year: '',
        school_aggregate: '',
        college_name: '',
        college_course: '',
        college_branch: '',
        college_passing_year: '',
        college_aggregate: '',
        Degree_college_name: '',
        Degree_college_course: '',
        Degree_college_branch: '',
        Degree_college_passing_year: '',
        Degree_college_aggregate: '',
        Instiute_name: '',
        Instiute_course: '',
        Instiute_branch: '',
        Instiute_passing_year: '',
        Instiute_aggregate: '',
        first_project_name: '',
        first_project_start_date: '',
        first_project_end_date: '',
        first_project_desription: '',
        first_project_key_technologies: '',
        second_project_name: '',
        second_project_start_date: '',
        second_project_end_date: '',
        second_project_desription: '',
        second_project_key_technologies: '',
        third_project_name: '',
        third_project_start_date: '',
        third_project_end_date: '',
        third_project_desription: '',
        third_project_key_technologies: '',
        fourth_project_name: '',
        fourth_project_start_date: '',
        fourth_project_end_date: '',
        fourth_project_desription: '',
        fourth_project_key_technologies: '',
        skill_1: '',
        skill_1_percentage: '',
        skill_2: '',
        skill_2_percentage: '',
        skill_3: '',
        skill_3_percentage: '',
        skill_4: '',
        skill_4_percentage: '',
        skill_5: '',
        skill_5_percentage: '',
        skill_6: '',
        skill_6_percentage: '',
        skill_7: '',
        skill_7_percentage: '',
        skill_8: '',
        skill_8_percentage: '',









    });

    const createProfile = (e) => {
		e.preventDefault();
        const {image,
            name,
            phone,
            age,
            address,
            city,
            user_state,
            zipcode,
            hobby,
            school_name,
            subject_name,
            passing_year,
            school_aggregate,
            college_name,
            college_course,
            college_branch,
            college_passing_year,
            college_aggregate,
            Degree_college_name,
            Degree_college_course,
            Degree_college_branch,
            Degree_college_passing_year,
            Degree_college_aggregate,
            Instiute_name,
            Instiute_course,
            Instiute_branch,
            Instiute_passing_year,
            Instiute_aggregate,
            first_project_name,
            first_project_start_date,
            first_project_end_date,
            first_project_desription,
            first_project_key_technologies,
            second_project_name,
            second_project_start_date,
            second_project_end_date,
            second_project_desription,
            second_project_key_technologies,
            third_project_name,
            third_project_start_date,
            third_project_end_date,
            third_project_desription,
            third_project_key_technologies,
            fourth_project_name,
            fourth_project_start_date,
            fourth_project_end_date,
            fourth_project_desription,
            fourth_project_key_technologies,
            skill_1,
            skill_1_percentage,
            skill_2,
            skill_2_percentage,
            skill_3,
            skill_3_percentage,
            skill_4,
            skill_4_percentage,
            skill_5,
            skill_5_percentage,
            skill_6,
            skill_6_percentage,
            skill_7,
            skill_7_percentage,
            skill_8,
            skill_8_percentage}=state;
        const formData = new FormData(); //handle images
        formData.append('image',image);
        formData.append('name',name);
        formData.append('id',_id);
        formData.append('email',email);
        formData.append('phone',phone);
        formData.append('age',age);
        formData.append('address',address);
        formData.append('city',city);
        formData.append('user_state',user_state);
        formData.append('zipcode',zipcode);
        formData.append('hobby',hobby);
        formData.append('school_name',school_name);
        formData.append('subject_name',subject_name);
        formData.append('passing_year',passing_year);
        formData.append('school_aggregate',school_aggregate);
        formData.append('college_name',college_name);
        formData.append('college_course',college_course);
        formData.append('college_branch',college_branch);
        formData.append('college_passing_year',college_passing_year);
        formData.append('college_aggregate',college_aggregate);
        formData.append('Degree_college_name',Degree_college_name);
        formData.append('Degree_college_course',Degree_college_course);
        formData.append('Degree_college_branch',Degree_college_branch);
        formData.append('Degree_college_passing_year',Degree_college_passing_year);
        formData.append('Degree_college_aggregate',Degree_college_aggregate);
        formData.append('Instiute_name',Instiute_name);
        formData.append('Instiute_course',Instiute_course);
        formData.append('Instiute_branch',Instiute_branch);
        formData.append('Instiute_passing_year',Instiute_passing_year);
        formData.append('Instiute_aggregate',Instiute_aggregate);
        formData.append('first_project_name',first_project_name);
        formData.append('first_project_start_date',first_project_start_date);
        formData.append('first_project_end_date',first_project_end_date);
        formData.append('first_project_desription',first_project_desription);
        formData.append('first_project_key_technologies',first_project_key_technologies);
        formData.append('second_project_name',second_project_name);
        formData.append('second_project_start_date',second_project_start_date);
        formData.append('second_project_end_date',second_project_end_date);
        formData.append('second_project_desription',second_project_desription);
        formData.append('second_project_key_technologies',second_project_key_technologies);
        formData.append('third_project_name',third_project_name);
        formData.append('third_project_start_date',third_project_start_date);
        formData.append('third_project_end_date',third_project_end_date);
        formData.append('third_project_desription',third_project_desription);
        formData.append('third_project_key_technologies',third_project_key_technologies);
        formData.append('fourth_project_name',fourth_project_name);
        formData.append('fourth_project_start_date',fourth_project_start_date);
        formData.append('fourth_project_end_date',fourth_project_end_date);
        formData.append('fourth_project_desription',fourth_project_desription);
        formData.append('fourth_project_key_technologies',fourth_project_key_technologies);
        formData.append('skill_1',skill_1);
        formData.append('skill_1_percentage',skill_1_percentage);
        formData.append('skill_2',skill_2);
        formData.append('skill_2_percentage',skill_2_percentage);
        formData.append('skill_3',skill_3);
        formData.append('skill_3_percentage',skill_3_percentage);
        formData.append('skill_4',skill_4);
        formData.append('skill_4_percentage',skill_4_percentage);
        formData.append('skill_5',skill_5);
        formData.append('skill_5_percentage',skill_5_percentage);
        formData.append('skill_6',skill_6);
        formData.append('skill_6_percentage',skill_6_percentage);
        formData.append('skill_7',skill_7);
        formData.append('skill_7_percentage',skill_7_percentage);
        formData.append('skill_8',skill_8);
        formData.append('skill_8_percentage',skill_8_percentage);
        formData.append('id', _id);
		dispatch(createAction(formData));
		
	};
    useEffect(() => {
		if (redirect) {
			props.history.push('/dashboard');
		}
		if (createErrors.length !== 0) {
			createErrors.map((err) => toast.error(err.msg));
		}
	}, [createErrors, redirect]);
    return (
        < >
        {/* https://i.ibb.co/0rQt7rD/1.png */}
            <Helmet>
                <title>Create Your Profile-PORTFOLIO MAKER'S</title>
                <meta name='description' content="Portfolio Maker Free" ></meta>
            </Helmet>
            <div className="container emp-profile">
            <Toaster
                    position="top-right"
                    reverseOrder={false}
                    toastOptions={{
                        style:{
                            fontSize:'10px',
                        }
                    }}
                />
                <form onSubmit={createProfile}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                               { imagePreview ? <img src={imagePreview} alt="profile photo" /> : <img src="https://i.ibb.co/WGd34Vs/depositphotos-134255626-stock-illustration-avatar-male-profile-gray-person.jpg" alt="profile photo" />}
                                <div className="file btn btn-lg btn-primary">
                                    {currentImage}
                                    <input type="file" name="image" id="image" onChange={fileHandle} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="profile-head">

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Education</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="project-tab" data-toggle="tab" href="#project" role="tab" aria-controls="project" aria-selected="true">Project</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="skills-tab" data-toggle="tab" href="#skills" role="tab" aria-controls="skills" aria-selected="true">Skills</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">


                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Name</label>
                                            <input type="text" name="name" class="form-control" value={state.name} onChange={handleInputs} id="name" placeholder="User Name"  />
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4"></label>
                                            <input type="text" name="phone" class="form-control" value={state.phone} onChange={handleInputs} id="phone" placeholder=""  />
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" name="email" class="form-control" value={email} onChange={handleInputs} id="inputEmail4"  placeholder="Email" readOnly />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputAge">Age</label>
                                            <input type="text" name="age" class="form-control" value={state.age} onChange={handleInputs} id="inputAge" placeholder="Age" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" name="address" class="form-control" value={state.address} onChange={handleInputs} id="inputAddress" placeholder="1234 Main St" />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputCity">City</label>
                                            <input type="text" name="city" class="form-control" value={state.city} onChange={handleInputs} id="inputCity" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputState">State</label>
                                            <select id="inputState" name="user_state" class="form-control" value={state.user_state} onChange={handleInputs}>
                                                <option selected>Choose...</option>
                                                <option>Maharastra</option>
                                                <option>Maharastra</option>
                                                <option>Maharastra</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputZip">Zip</label>
                                            <input type="text" name="zipcode" class="form-control" value={state.zipcode} onChange={handleInputs} id="inputZip" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress2">Hobby</label>
                                        <input type="text" name="hobby" class="form-control" value={state.hobby} onChange={handleInputs} id="inputAddress2" placeholder="Hobby" />
                                    </div>




                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                    <div class="list_wrapper">
                                        <p>10th details</p>

                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">School Name</label>
                                                <input type="text" name="school_name" class="form-control" value={state.school_name} onChange={handleInputs}  placeholder="College Name"  />
                                            </div>

                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">Subjects</label>
                                                <input type="text" name="subject_name" class="form-control" value={state.subject_name} onChange={handleInputs}  placeholder="Course Name" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Year </label>
                                                <input type="text" name="passing_year" class="form-control" value={state.passing_year} onChange={handleInputs}  placeholder="Year " />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Aggregate </label>
                                                <input type="text" name="school_aggregate" class="form-control" value={state.school_aggregate} onChange={handleInputs}  placeholder="Aggregate " />
                                            </div>
                                        </div>


                                    </div>
                                    <hr />
                                    <div class="list_wrapper">
                                        <p>12th details</p>

                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">College Name</label>
                                                <input type="text" name="college_name" class="form-control" value={state.college_name} onChange={handleInputs}  placeholder="College Name"  />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Course Name</label>
                                                <input type="text" name="college_course" class="form-control" value={state.college_course} onChange={handleInputs}  placeholder="Course Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Branch </label>
                                                <input type="text" name="college_branch" class="form-control" value={state.college_branch} onChange={handleInputs} id="" placeholder="Branch " />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Year </label>
                                                <input type="text" name="college_passing_year" class="form-control" value={state.college_passing_year} onChange={handleInputs} id="" placeholder="Year " />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Aggregate </label>
                                                <input type="text" name="college_aggregate" class="form-control" value={state.college_aggregate} onChange={handleInputs} id="" placeholder="Aggregate " />
                                            </div>
                                        </div>


                                    </div>
                                    <hr />
                                    <div class="list_wrapper">
                                        <p>Degree details</p>

                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">College Name</label>
                                                <input type="text" name="Degree_college_name" class="form-control" value={state.Degree_college_name} onChange={handleInputs} id="name" placeholder="College Name"  />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Course Name</label>
                                                <input type="text" name="Degree_college_course" class="form-control" value={state.Degree_college_course} onChange={handleInputs} id="" placeholder="Course Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Branch </label>
                                                <input type="text" name="Degree_college_branch" class="form-control" value={state.Degree_college_branch} onChange={handleInputs} id="" placeholder="Branch " />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Year </label>
                                                <input type="text" name="Degree_college_passing_year" class="form-control" value={state.Degree_college_passing_year} onChange={handleInputs} id="" placeholder="Year " />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Aggregate </label>
                                                <input type="text" name="Degree_college_aggregate" class="form-control" value={state.Degree_college_aggregate} onChange={handleInputs} id="" placeholder="Aggregate " />
                                            </div>
                                        </div>


                                    </div>
                                    <hr />
                                    <div class="list_wrapper">
                                        <p>Higher Studies details(Optional)</p>

                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">Instiute Name</label>
                                                <input type="text" name="Instiute_name" class="form-control" value={state.Instiute_name} onChange={handleInputs} id="name" placeholder="College Name"  />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Course Name</label>
                                                <input type="text" name="Instiute_course" class="form-control" value={state.Instiute_course} onChange={handleInputs} id="" placeholder="Course Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Branch </label>
                                                <input type="text" name="Instiute_branch" class="form-control" value={state.Instiute_branch} onChange={handleInputs} id="" placeholder="Branch " />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Year </label>
                                                <input type="text" name="Instiute_passing_year" class="form-control" value={state.Instiute_passing_year} onChange={handleInputs} id="" placeholder="Year " />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Aggregate </label>
                                                <input type="text" name="Instiute_aggregate" class="form-control" value={state.Instiute_aggregate} onChange={handleInputs} id="" placeholder="Aggregate " />
                                            </div>
                                        </div>


                                    </div>
                                    <br></br>



                                </div>

                                <div className="tab-pane fade" id="project" role="tabpanel" aria-labelledby="project-tab">

                                    <div class="list_wrapper1">
                                        <p>#1</p>
                                        <div class="form-row">

                                            <div class="form-group col-md-12">
                                                <label for="inputCollege">Project Title</label>
                                                <input type="text" name="first_project_name" class="form-control" value={state.first_project_name} onChange={handleInputs} id="name" placeholder="Enter College Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputCollege">Start Date</label>
                                                <input type="date" name="first_project_start_date" class="form-control" value={state.first_project_start_date} onChange={handleInputs} id="name" placeholder="Start Date" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputCollege">End Date</label>
                                                <input type="date" name="first_project_end_date" class="form-control" value={state.first_project_end_date} onChange={handleInputs} id="name" placeholder="End Date" />
                                            </div>

                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">Description</label>
                                                <textarea type="text" name="first_project_desription" class="form-control" value={state.first_project_desription} onChange={handleInputs} id="" placeholder="Description" />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputAge">key Technologies Used</label>
                                                <input type="password" name="first_project_key_technologies" class="form-control" value={state.first_project_key_technologies} onChange={handleInputs} id="inputAge" placeholder="key Technologies" />
                                            </div>

                                        </div>

                                    </div>
                                    <hr />
                                    <div class="list_wrapper1">
                                        <p>#2</p>
                                        <div class="form-row">

                                            <div class="form-group col-md-12">
                                                <label for="inputCollege">Project Title</label>
                                                <input type="text" name="second_project_name" class="form-control" value={state.second_project_name} onChange={handleInputs} id="name" placeholder="Enter College Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputCollege">Start Date</label>
                                                <input type="date" name="second_project_start_date" class="form-control" value={state.second_project_start_date} onChange={handleInputs} id="name" placeholder="Start Date" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputCollege">End Date</label>
                                                <input type="date" name="second_project_end_date" class="form-control" value={state.second_project_end_date} onChange={handleInputs} id="name" placeholder="End Date" />
                                            </div>

                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">Description</label>
                                                <textarea type="text" name="second_project_desription" class="form-control" value={state.second_project_desription} onChange={handleInputs} id="" placeholder="Description" />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputAge">key Technologies Used</label>
                                                <input type="password" name="second_project_key_technologies" class="form-control" value={state.second_project_key_technologies} onChange={handleInputs} id="inputAge" placeholder="key Technologies" />
                                            </div>

                                        </div>

                                    </div>
                                    <hr />
                                    <div class="list_wrapper1">
                                        <p>#3</p>
                                        <div class="form-row">

                                            <div class="form-group col-md-12">
                                                <label for="inputCollege">Project Title</label>
                                                <input type="text" name="third_project_name" class="form-control" value={state.third_project_name} onChange={handleInputs} id="name" placeholder="Enter College Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputCollege">Start Date</label>
                                                <input type="date" name="third_project_start_date" class="form-control" value={state.third_project_start_date} onChange={handleInputs} id="name" placeholder="Start Date" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputCollege">End Date</label>
                                                <input type="date" name="third_project_end_date" class="form-control" value={state.third_project_end_date} onChange={handleInputs} id="name" placeholder="End Date" />
                                            </div>

                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">Description</label>
                                                <textarea type="text" name="third_project_desription" class="form-control" value={state.third_project_desription} onChange={handleInputs} id="" placeholder="Description" />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputAge">key Technologies Used</label>
                                                <input type="password" name="third_project_key_technologies" class="form-control" value={state.third_project_key_technologies} onChange={handleInputs} id="inputAge" placeholder="key Technologies" />
                                            </div>

                                        </div>

                                    </div>
                                    <hr />
                                    <div class="list_wrapper1">
                                        <p>#4</p>
                                        <div class="form-row">

                                            <div class="form-group col-md-12">
                                                <label for="inputCollege">Project Title</label>
                                                <input type="text" name="fourth_project_name" class="form-control" value={state.fourth_project_name} onChange={handleInputs} id="name" placeholder="Enter College Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputCollege">Start Date</label>
                                                <input type="date" name="fourth_project_start_date" class="form-control" value={state.fourth_project_start_date} onChange={handleInputs} id="name" placeholder="Start Date" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputCollege">End Date</label>
                                                <input type="date" name="fourth_project_end_date" class="form-control" value={state.fourth_project_end_date} onChange={handleInputs} id="name" placeholder="End Date" />
                                            </div>

                                            <div class="form-group col-md-12">
                                                <label for="inputEmail4">Description</label>
                                                <textarea type="text" name="fourth_project_desription" class="form-control" value={state.fourth_project_desription} onChange={handleInputs} id="" placeholder="Description" />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label for="inputAge">key Technologies Used</label>
                                                <input type="password" name="fourth_project_key_technologies" class="form-control" value={state.fourth_project_key_technologies} onChange={handleInputs} id="inputAge" placeholder="key Technologies" />
                                            </div>

                                        </div>

                                    </div>
                                    <br></br>





                                </div>

                                <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">

                                    <div class="list_wrapper2">
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label for="inputCity">Skill 1</label>
                                                <input type="text" name="skill_1" class="form-control" value={state.skill_1} onChange={handleInputs} id="inputCity" />
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="inputZip">Percentage</label>
                                                <input type="text" name="skill_1_percentage" class="form-control" value={state.skill_1_percentage} onChange={handleInputs} id="inputZip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_wrapper2">
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label for="inputCity">Skill 2</label>
                                                <input type="text" name="skill_2" class="form-control" value={state.skill_2} onChange={handleInputs} id="inputCity" />
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="inputZip">Percentage</label>
                                                <input type="text" name="skill_2_percentage" class="form-control" value={state.skill_2_percentage} onChange={handleInputs} id="inputZip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_wrapper2">
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label for="inputCity">Skill 3</label>
                                                <input type="text" name="skill_3" class="form-control" value={state.skill_3} onChange={handleInputs} id="inputCity" />
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="inputZip">Percentage</label>
                                                <input type="text" name="skill_3_percentage" class="form-control" value={state.skill_3_percentage} onChange={handleInputs} id="inputZip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_wrapper2">
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label for="inputCity">Skill 4</label>
                                                <input type="text" name="skill_4" class="form-control" value={state.skill_4} onChange={handleInputs} id="inputCity" />
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="inputZip">Percentage</label>
                                                <input type="text" name="skill_4_percentage" class="form-control" value={state.skill_4_percentage} onChange={handleInputs} id="inputZip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_wrapper2">
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label for="inputCity">Skill 5</label>
                                                <input type="text" name="skill_5" class="form-control" value={state.skill_5} onChange={handleInputs} id="inputCity" />
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="inputZip">Percentage</label>
                                                <input type="text" name="skill_5_percentage" class="form-control" value={state.skill_5_percentage} onChange={handleInputs} id="inputZip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_wrapper2">
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label for="inputCity">Skill 6</label>
                                                <input type="text" name="skill_6" class="form-control" value={state.skill_6} onChange={handleInputs} id="inputCity" />
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="inputZip">Percentage</label>
                                                <input type="text" name="skill_6_percentage" class="form-control" value={state.skill_6_percentage} onChange={handleInputs} id="inputZip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_wrapper2">
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label for="inputCity">Skill 7</label>
                                                <input type="text" name="skill_7" class="form-control" value={state.skill_7} onChange={handleInputs} id="inputCity" />
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="inputZip">Percentage</label>
                                                <input type="text" name="skill_7_percentage" class="form-control" value={state.skill_7_percentage} onChange={handleInputs} id="inputZip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list_wrapper2">
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <label for="inputCity">Skill 8</label>
                                                <input type="text" name="skill_8" class="form-control" value={state.skill_8} onChange={handleInputs} id="inputCity" />
                                            </div>

                                            <div class="form-group col-md-4">
                                                <label for="inputZip">Percentage</label>
                                                <input type="text" name="skill_8_percentage" class="form-control" value={state.skill_8_percentage} onChange={handleInputs} id="inputZip" />
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>






                                </div>




                            </div>

                        </div>

                        {/* <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
                    </div>

                    {/* <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="">Website Link</a><br />
                                <a href="">Bootsnipp Profile</a><br />
                                <a href="">Bootply Profile</a>
                                <p>SKILLS</p>
                                <a href="">Web Designer</a><br />
                                <a href="">Web Developer</a><br />
                                <a href="">WordPress</a><br />
                                <a href="">WooCommerce</a><br />
                                <a href="">PHP, .Net</a><br />
                            </div>
                        </div>
                        <div className="col-md-8">
                           
                        </div>
                    </div> */}
                    <hr />

                    <div class="col text-center">
                        <button type="submit" id="submitButton" class="btn btn-reg  py-2 pull-center"><i class="fa fa-check-circle-o" aria-hidden="true"></i><span class="ml-2">Submit</span></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateProfile
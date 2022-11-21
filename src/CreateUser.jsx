import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startdate: "",
      salary: "",
    },

    validate : (values) => {

      let errors = {};

      if (values.name == "" && values.name.length<5){
        errors.name = "Please Enter name"
      }
      if (values.name == "" && values.position.length<5){
        errors.position = "Please Enter Position"
      }

      return errors;

    },

    onSubmit: async (values) => {

      let users = await axios.post ("https://6283ca4a38279cef71dc6090.mockapi.io/users",values);
      navigate("/portal/users")
      alert("Users Created")
      
     
    },
  });

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                className={`form-control ${formik.errors.name ? `input-error`:``}`}
                type={"text"}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{color:'red'}}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
               className={`form-control ${formik.errors.position ? `input-error`:``}`}
                type={"text"}
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
              />
              <span style={{color:'red'}}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
              />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
              />
            </div>
            <div className="col-lg-6">
              <label>StartDate</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.startdate}
                onChange={formik.handleChange}
                name="startdate"
              />
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
              />
            </div>
            <div className="col-lg-6">
              <input
                className="btn btn-primary mt-2"
                type={"submit"}
                value="submit"
                disabled={!formik.isValid}
              />
            </div>
          </div>
        </form>
      </div>
    </> 
  );
}

export default CreateUser;

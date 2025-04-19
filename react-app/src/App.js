import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  // notification show
  // const notify = () => {
  //   toast.success("Success message", {
  //     position: "top-right",
  //     autoClose: 3000,
  //   });

  // let [uname,setUname]=useState('')
  // let [password,setPassword]=useState('')

  // let handleSubmit=(event)=>{
  //      event.preventDefault()
  //      console.log(uname,password);

  // }
  // let getName=(event)=>{
  //    setUname(event.target.value)
  // }

  // enquiry form
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });
  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  // form submit
  let [userData, setUserData] = useState([]);
  let handleSubmit = (event) => {
    let currUserData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };
    // check if exist or not email and phone
    let checkFilterUser = userData.filter(
      (v) => v.uemail == formData.uemail || v.uphone == formData.uphone
    );

    if (formData.index === "") {
      if (checkFilterUser.length == 1) {
        toast.error("Email or Mobile num already exists..");
      } else {
        let oldUserData = [...userData, currUserData];
        setUserData(oldUserData);
        setFormData({
          uname: "",
          uemail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      }
    } else {
      let editIndex = formData.index;
      let oldData = userData;

      let checkFilterUser = userData.filter(
        (v, i) =>
          (v.uemail == formData.uemail || v.uphone == formData.uphone) &&
          i != editIndex
      );
      if (checkFilterUser.length == 0) {
        oldData[editIndex]["uname"] = formData.uname;
        oldData[editIndex]["uemail"] = formData.uemail;
        oldData[editIndex]["uphone"] = formData.uphone;
        oldData[editIndex]["umessage"] = formData.umessage;
        setUserData(oldData);
        setFormData({
          uname: "",
          uemail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      } else {
        toast.error("Email or Mobile num already exists..");
      }
    }
    event.preventDefault();
  };

  // delete button working
  let deleteRow = (indexNum) => {
    let filterDataAfterDelete = userData.filter((v, i) => i != indexNum);
    setUserData(filterDataAfterDelete);
    toast.success("Data deleted Successfull");
  };

  // update buttton working
  let updateRow = (index) => {
    let editData = userData.filter((v, i) => i == index)[0];
    editData["index"] = index;
    setFormData(editData);
  };

  return (
    <div className="App">
      {/* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */}

      {/* Form control */}
      {/* <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <form onSubmit={handleSubmit}>
                 <div className='text-start my-3'>
                     <label >UserName</label>
                     <input type="text" onChange={(event)=>setUname(event.target.value)} className='form-control' value={uname}/>
                 </div>
                 <div className='text-start my-3'>
                     <label >PassWord</label>
                     <input type="password" onChange={(event)=>setPassword(event.target.value)} className='form-control' value={password}/>
                 </div>
                 <div className='text-start my-3'>
                    <button className='p-3 px-5 bg-grey'>Login</button>
                 </div>
              </form>
            </div>
          </div>
        </div> */}

      <ToastContainer />
      <div className="fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12 text-center py-4">
              <h1>Enquiry Now</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="pb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    onChange={getValue}
                    value={formData.uname}
                    name="uname"
                    className="form-control"
                  />
                </div>
                <div className="pb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    onChange={getValue}
                    name="uemail"
                    value={formData.uemail}
                    className="form-control"
                  />
                </div>
                <div className="pb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    onChange={getValue}
                    name="uphone"
                    value={formData.uphone}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    onChange={getValue}
                    value={formData.umessage}
                    name="umessage"
                    rows={3}
                  ></textarea>
                </div>

                <button className="btn btn-primary w-100">
                  {formData.index !== "" ? "Update" : "Save"}
                </button>
              </form>
            </div>

            <div className="col-lg-7 col-md-12 mt-4 mt-lg-0">
              <div className="table-responsive">
                <table className="table">
                  <thead className="table-primary">
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Message</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.length >= 1 ? (
                      userData.map((obj, i) => (
                        <tr key={i}>
                          <td data-label="Id">{i + 1}</td>
                          <td data-label="Name">{obj.uname}</td>
                          <td data-label="Email">{obj.uemail}</td>
                          <td data-label="Phone">{obj.uphone}</td>
                          <td data-label="Message">{obj.umessage}</td>
                          <td data-label="Action">
                            <button
                              className="btn btn-sm btn-danger me-1"
                              onClick={() => deleteRow(i)}
                            >
                              Delete
                            </button>
                            <button
                              className="btn btn-sm btn-warning"
                              onClick={() => updateRow(i)}
                            >
                              Update
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No Data Found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

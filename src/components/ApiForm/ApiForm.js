import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ApiForm = () => {
  const [users, setUsers] = useState([]);

  const defaultValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    age: 0,
  };

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5001/getNewUsers")
      .then((response) => {
        console.log("The Response is:", response?.data);
        setUsers(response.data.result);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  }, []);

  const onSubmitForm = (data) => {

    reset(); 
     let postObject={
      firstName:data?.firstName,
      middleName:data?.middleName,
      lastName:data?.lastName,
      age:Number(data?.age)
     }
    axios.post('http://localhost:5001/postNewUser',postObject)
    .then((response)=>response.data)
    .then((res)=>{
      console.log("The responce after saving User:",res)    
    })
    .catch((error)=>{
      console.log( "Error While Creating User....!",error)
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm())}>
      <div className="px-6 py-1 flex justify-center font-semibold text-xl my-5">
        <h1>API Form</h1>
      </div>
      <div className="grid grid-cols-4 gap-2 items-center">
        <div>
          <TextField
            variant="outlined"
            name="firstName"
            label="First Name"
            placeholder="First Name"
            {...register("firstName")}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            name="middleName"
            label="Middle Name"
            placeholder="Middle Name"
            {...register("middleName")}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            {...register("lastName")}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            name="age"
            label="Age"
            placeholder="Age"
            type="number"
            {...register("age")}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="my-3 px-3 bg-green-700 rounded text-white"
        >
          Submit
        </button>
      </div>
      <div>
        {users.length > 0
          ? users.map((user, userIndex) => {
              return (
                <div className="flex gap-2 items-center" key={userIndex}>
                  <div>{user?.firstName}</div>
                  <div>{user?.middleName}</div>
                  <div>{user?.lastName}</div>
                  <div>{user?.age}</div>
                </div>
              );
            })
          : ""}
      </div>
    </form>
  );
};

export default ApiForm;

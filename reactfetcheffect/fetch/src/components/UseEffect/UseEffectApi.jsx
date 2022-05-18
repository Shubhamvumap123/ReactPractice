import React, { useEffect, useState } from 'react'
import Loading from './Github/Loading';
import GithubUser from "./Github/githubUser"
const UseEffectApi = () => {
    const [users, setUsers] = useState([]);
    const [loading, showLoading] = useState(true);
    const getUsers = async () => {
        try {
            showLoading(false);
              const response = await fetch("https://api.github.com/users");
              setUsers(await response.json());
        } catch (error) {
           showLoading(false);
            console.log("my error is:",error);
        }
    }
    useEffect(() => {
        getUsers();
    }, [])

    if(loading) {
return (
  <h1>
    {" "}
    <Loading />
  </h1>
); 
    }
    else
    {
    return (
      <>
        <GithubUser users={users} />
      </>
    );
}
}
export default UseEffectApi
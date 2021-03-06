import React from "react";
import { FcApproval } from "react-icons/fc";
 const GithubUser = ({ users }) => {
   return (
     <>
       <h2>List of GitHub Users</h2>
       <div className="container-fluid mt-5">
         <div className="row text-center">
           {users.map((curElem) => {
             const { url, id, title, login,avatar_url } = curElem;
             return (
               <div className="col-10 col-md-4 mt-5" key={id}>
                 <div className="card p-2">
                   <div className="d-flex align-items-center">
                     <div className="image">
                       {" "}
                       <img src="" className="rounded" width="155" />{" "}
                     </div>
                     <div className="ml-3 w-100">
                       <h4 className="mb-0 mt-0 textLeft">{login}<FcApproval/></h4>
                       {/* <span className="text-left">{type }</span> */}
                       <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                         <div className="d-flex flex-column">
                           <span className="articles">{title}</span>{" "}
                           <span className="number1">38</span>{" "}
                         </div>
                         <div className="d-flex flex-column">
                           <span className="followers">Followers</span>{" "}
                           <img src="{avatar_url}"/>{" "}
                         </div>
                         <div className="d-flex flex-column">
                           <span className="rating">{curElem.type}</span>{" "}
                           <span className="number3">{curElem.site_admin}</span>{" "}
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             );
           })}
         </div>
       </div>
     </>
   );
 };

export default GithubUser;
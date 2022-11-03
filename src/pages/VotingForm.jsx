import React, {useState} from "react";

import Select from "react-select";
import { options } from "./countries";
import {client } from '../sanityClient.js'
import Swal from 'sweetalert2'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const VotingForm = () => {
  let location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [fullName, setFullName] = useState("");

 const navigate = useNavigate();
  const vote = () => {
    let voting_category = "";
    switch(location.pathname){
        case "/fashion":
            voting_category = "fashion";
            break;
        case "/food":
            voting_category = "food";
            break;
        case "/decoration":
            voting_category = "decoration";
            break;
        default:
            voting_category = "fashion";

    }
    const ballot = {
        _type: voting_category,
        name: fullName,
       
        country: selectedOption.value,
      };
  
      client
        .create(ballot)
        .then(res => Swal.fire({
          title: 'Success!',
          text: 'Thank you for voting!',
          icon: 'success',
          confirmButtonText: 'Continue'
        })).then(
          setTimeout(() => {
            navigate("/")
          }, 2000), 
          )
        .catch(((err) => Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Continue'
          })));
    };


  return (
    <div className="flex flex-col items-center min-h-[90vh] bg-pat">
      <div className="min-h-[80vh] flex flex-col w-full justify-center items-center">
        <div className="container px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <h2 className="mb-8 sm:text-3xl text-2xl text-gray-200 font-monumentlight">
                  Vote {location.pathname.slice(1, location.pathname.length)}
                </h2>
              </div>
              <div className="grid mt-2">
                <label className="text-gray-200 font-poppins  sm:text-sm text-xs" >
                  Full Name
                </label>
                <input
                onChange ={(e) => setFullName(e.target.value)}
                  type="text"
                  className="group h-8 px-1 mt-1 rounded-md transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                />
              </div>
            
              <div className="mt-2">
                <label className="text-gray-200 font-poppins sm:text-sm text-xs mt-5">
                  Select your candidate
                </label>
                <Select className="mt-1" options={options} onChange ={(e) => setSelectedOption(e)} />
              </div>
              <button onClick={vote} className=" bg-primary text-gray-200 font-poppins font-bold text-xs border-2 border-primary rounded-xl py-3 w-full px-5  mt-8">
                Vote
              </button>
              <div className="mt-32 space-y-4 text-gray-200 text-center sm:-mb-8">
                <p className="text-xs">Any duplicate votes will be removed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingForm;

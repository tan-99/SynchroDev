import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Onboarding = () => {

    const [formData, setFormData] = useState({
        user_id: '',
        first_name: '',
        year: '',
        show_domain: false,
        skill_in_domains: {
          webDevelopment: {
              interested: false,
              skills: []
          },
          appDevelopment: {
              interested: false,
              skills: [],
          },
          aiml: {
              interested: false,
              skills: [],
          },
          block: {
              interested: false,
              skills: [],
          },
        },
        email: '',
        url: '',
        location: '',
        about: '',
        matches: [],
    })
    
      const validate = (e) => {
        
      }

      const handleChanges = (e) => {
        //if input type is text, then simply reflect changes that are made
        //if input type is checkbox, then change the respective skill_in_domains

        if (e.target.type === 'text' || e.target.type === 'number') {

          let value = e.target.value
          let name_attr = e.target.name

          setFormData((prevState) => {
            const updatedState = {
              ...prevState,
              [name_attr]: value,
            };
            return updatedState;
          });
          console.log(formData)
        } 
        
        else {
          let name_attr = e.target.name
          handleCheckboxChange(name_attr)
          
          console.log(formData)
        }

      }

      const handleCheckboxChange = (domain) => {
        console.log("im in handleCheckboxChange")
        console.log(domain)
        setFormData((prevFormData) => {
          const updatedState = {
            ...prevFormData,
            skill_in_domains: {
              ...prevFormData.skill_in_domains,
              [domain]: {
                ...prevFormData.skill_in_domains[domain],
                interested: !prevFormData.skill_in_domains[domain].interested,
              },
            },
          }
          return updatedState;
        }
        );
        console.log(formData)
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          console.log('hi')
        } catch (err) {
          console.log(err)
        }
      }
    
      return (
        <div>
          <h1 className='text-4xl font-bold text-center mt-8 mb-4'>Registration Form: </h1>
            <form class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <section>
                <label htmlFor="first_name" className="block text-gray-700 text-xl font-bold mb-2">First Name</label>
    
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="firstName"
                  required={true}
                  value={formData.first_name}
                  onChange={handleChanges}
                  className="w-full border rounded py-2 px-3"
                />
            
                <h2 className="block text-gray-700 text-xl font-bold mb-2 mt-4">Domain</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2">
                  <div className='flex items-center'>
                    <input
                      id="webDevelopmentIdentity"
                      type="checkbox"
                      name="webDevelopment"
                      value="webDevelopment"
                      onChange={handleChanges}
                      className="mr-2 h-6 w-6"
                    />
                    <label htmlFor="webDevelopmentIdentity">Web Development</label>
                  </div>

                  <div className='flex items-center'>
                    <input
                      id="appDevelopmentIdentity"
                      type="checkbox"
                      name="appDevelopment"
                      value="appDevelopment"
                      onChange={handleChanges}
                      className="mr-2 h-6 w-6"
                    />
                    <label htmlFor="appDevelopmentIdentity">App Development</label>
                  </div>
                  
                  <div className='flex items-center'>
                    <input
                      id="aimlIdentity"
                      type="checkbox"
                      name="aiml"
                      value="aiml"
                      onChange={handleChanges}
                      className="mr-2 h-6 w-6"
                    />
                    <label htmlFor="aimlIdentity">AI/ML</label>
                  </div>

                  <div className='flex items-center'>
                    <input
                      id="blockIdentity"
                      type="checkbox"
                      name="block"
                      value="block"
                      onChange={handleChanges}
                      className="mr-2 h-6 w-6"
                    />
                    <label htmlFor="blockIdentity">Blockchain</label>
                  </div>
                
                </div>

                  <h2 className='block text-gray-700 text-xl font-bold mb-2 mt-4'>Location</h2>
                  
    
                  <h2 className='block text-gray-700 text-xl font-bold mb-2 mt-4'>Email</h2>
                  <input
                    id="emailid"
                    type="text"
                    name="email"
                    placeholder="Email-id"
                    required={true}
                    value={formData.email}
                    onChange={handleChanges}
                    className="w-full border rounded py-2 px-3"
                  />
    
                <h2 className='block text-gray-700 text-xl font-bold mb-2 mt-4'>About Me</h2>
                <input
                  type="text"
                  id="about"
                  name="about"
                  required={true}
                  placeholder="A bit about yourself and your coding skills"
                  value={formData.about}
                  onChange={handleChanges}
                  className="w-full border rounded py-2 px-3"
                />

                <h2 className='block text-gray-700 text-xl font-bold mb-2 mt-4'>Year <span className='text-gray-700 text-sm font-bold mb-2 mt-4'>(in college)</span></h2>
                <input
                  type="text"
                  id="year"
                  name="year"
                  required={true}
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChanges}
                  pattern="/^[1-4]$/"
                  className="w-full border rounded py-2 px-3"
                />

               
                </section>

                <input type="submit" onClick={handleSubmit} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"/>
            </form>
        </div>
    )
}

export default Onboarding
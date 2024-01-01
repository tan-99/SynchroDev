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

          setFormData((prevState) => {
            let name_attr = e.target.name

            const updatedState = {
              ...prevState,
              skill_in_domains: {
                ...prevState.skill_in_domains,
                [name_attr]: {
                  interested: e.target.checked,
                  skills: []
                }
              }
            }
            return updatedState;
          })
          console.log(formData)
        }

      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          console.log('hi')
        } catch (err) {
          console.log(err)
        }
      }
    
      return (
        <div className="App">
          <h1>User Information Form: </h1>
            <form>
                <section>
                <label htmlFor="first_name">First Name</label>
    
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="firstName"
                  required={true}
                  value={formData.first_name}
                  onChange={handleChanges}
                />
            
                <h2>domain</h2>
                <div className="multiple-input-container">
                  <input
                    id="webDevelopmentIdentity"
                    type="checkbox"
                    name="domain_identity"
                    value="webDevelopment"
                    onChange={handleChanges}
                  />
                  <label htmlFor="webDevelopmentIdentity">webDevelopment</label>
                  <input
                    id="appDevelopmentIdentity"
                    type="checkbox"
                    name="domain_identity"
                    value="appDevelopment"
                    onChange={handleChanges}
                  />
                  <label htmlFor="appDevelopmentIdentity">appDevelopment</label>
                  <input
                    id="aimlIdentity"
                    type="checkbox"
                    name="domain_identity"
                    value="aiml"
                    onChange={handleChanges}
                  />
                  <label htmlFor="aimlIdentity">AI/ML</label>
                  <input
                    id="blockIdentity"
                    type="checkbox"
                    name="domain_identity"
                    value="block"
                    onChange={handleChanges}
                  />
                  <label htmlFor="blockIdentity">blockchain</label>

                  <h2>location</h2>
                  
    
                  <h2>email</h2>
                  <input
                    id="emailid"
                    type="text"
                    name="email"
                    placeholder="email-id"
                    required={true}
                    value={formData.email}
                    onChange={handleChanges}
                  />
    
                <h2>About Me</h2>
                <input
                  type="text"
                  id="about"
                  name="about"
                  required={true}
                  placeholder="A bit about yourself and your coding skills"
                  value={formData.about}
                  onChange={handleChanges}
                />

                <h2>Year</h2>
                <input
                  type="text"
                  id="year"
                  name="year"
                  required={true}
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChanges}
                  pattern="/^[1-4]$/"
                />

    
                </div>            
                </section>

                <input type="submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default Onboarding
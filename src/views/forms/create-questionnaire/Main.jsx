import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "survey-creator-core/survey-creator-core.min.css"
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react'
import * as Survey from "survey-core"
import 'survey-core/defaultV2.min.css';
import { StylesManager } from 'survey-core';
import { findParentNode } from 'survey-creator-core';
import axios from "axios";
import { toast } from "react-toastify";


const creatorOptions = { 
  showLogicTab: true, 
  isAutoSve:true,
  generateValidJSON: true,
  // showState: true,
  showSurveyTitle: false,
 haveCommercialLicense: true,
  // allowModifyPages: false,
  questionTypes: ['text', 'radiogroup', 'file']
}

function SurveyCreatorWidget(){
  
  const navigate = useNavigate();
  const { id } = useParams();
  const creator = new SurveyCreator(creatorOptions); 
  creator.text = window.localStorage.getItem("survey-json");

    creator.saveSurveyFunc = async function(saveNo, callback) {

      const jdata = creator.JSON;    
      const json = JSON.stringify(jdata); 
      const res = JSON.parse(json).pages[0].elements;
      function addUniqueID(arr, idstr = '') {
        arr.forEach((obj, i) => {
          obj.questionPosition = `${idstr}${i+1}`;
          if (obj.elements) {
            addUniqueID(obj.children, `${obj.questionPosition}`);
          }
        });
      }
      addUniqueID(res);  
      //const resconvert = JSON.stringify(res);
      //save the survey json 
      //console.log(resconvert);

       try {
            const items = JSON.parse(localStorage.getItem('userData')); 
            const token = items.token
            const createdBy = items.id
            const formId = id

            console.log(token);

            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
            const postQ = await axios.post("https://endpoints.cervello.com.gh/agriews/createQuestionnaire",
                  {
                      formId: formId, 
                      createdBy: createdBy,
                      questionnaire: res,
                      formStatus: 1,
                    }, config);

              
                  
            console.log(postQ); 
            toast.success('Questionnaire created successfully', {
              position: "top-center",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            navigate('/superadmin/view-form')
       }catch(error){
          console.log(error);
       }


    }

  return (
    <div>
     
     <div>
     <SurveyCreatorComponent creator={creator} />
     </div>

    

    </div>
    
    
  )

}


export default function CreateQuestionnaire() {
    let { id } = useParams();

    

  useEffect(() => {

    console.log(id);
  }, []);


  return (
    <>
      <div className='col-span-12 lg:col-span-9 2xl:col-span-10'>
        <h2 className='text-lg font-medium mr-auto'>Create Form</h2>
        {SurveyCreatorWidget()}
      </div>
     
    </>
  );
}

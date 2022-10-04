import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CreateQuestionnaire() {
    let { id } = useParams();

  useEffect(() => {

    console.log(id);
  }, []);

  return (
    <>
      <div className='intro-y flex items-center mt-12'>
        <h2 className='text-lg font-medium mr-auto'>Create Form</h2>
      </div>
    </>
  );
}

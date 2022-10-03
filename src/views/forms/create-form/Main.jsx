import { ClassicEditor, TomSelect } from "@/base-components";
import { useState } from "react";

function Main() {
  const [categories, setCategories] = useState([""]);
  const editorConfig = {
    toolbar: {
      items: ["bold", "italic", "link"],
    },
  };
  const [editorData, setEditorData] = useState("<p>Description of the form</p>");

  return (
    <>
      <div className="intro-y flex items-center mt-12">
        <h2 className="text-lg font-medium mr-auto">Create Form</h2>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Form Layout */}
          <div className="intro-y box p-5">
            <div>
              <label htmlFor="crud-form-1" className="form-label">
                Form Name
              </label>
              <input
                id="crud-form-1"
                type="text"
                className="form-control w-full"
                placeholder="Input text"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="crud-form-2" className="form-label">
                Category
              </label>
              <TomSelect
                id="crud-form-2"
                value={categories}
                onChange={setCategories}
                className="w-full"
                multiple
              >
                <option value="1">Sport & Outdoor</option>
                <option value="2">PC & Laptop</option>
                <option value="3">Smartphone & Tablet</option>
                <option value="4">Photography</option>
              </TomSelect>
            </div>
           
           
           
            <div className="mt-3">
              <label>Active Status</label>
              <div className="form-switch mt-2">
                <input type="checkbox" className="form-check-input" />
              </div>
            </div>
            <div className="mt-3">
              <label>Description</label>
              <div className="mt-2">
                <ClassicEditor
                  value={editorData}
                  onChange={setEditorData}
                  config={editorConfig}
                />
              </div>
            </div>
            <div className="text-right mt-5">
              <button
                type="button"
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary w-24">
                Save
              </button>
            </div>
          </div>
          {/* END: Form Layout */}
        </div>
      </div>
    </>
  );
}

export default Main;

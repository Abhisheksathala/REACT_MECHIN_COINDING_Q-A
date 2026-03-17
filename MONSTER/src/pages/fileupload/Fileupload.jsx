import React, { useRef, useState } from 'react';

const Fileupload = () => {
  const [file, setFile] = useState();
  const uploadRef = useRef();
  const prgressRef = useRef();
  const statusRef = useRef();
  const loadRef = useRef();

  function handleuploadfile() {
    const file = uploadRef.current.files[0];
    setFile(URL.createObjectURL(file));
    let formData = new FormData();
    formData.append('image', file);

    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', handleprogress, false);
    xhr.addEventListener('load', handlesuccess, false);
    xhr.addEventListener('error', handleerror, false);
    xhr.addEventListener('abort', handleabort, false);
    xhr.open('POST', 'https://v2.convertapi.com/upload');
    xhr.send(formData);
  }

  function handleprogress(e) {
    loadRef.current.innerHTML = `uploaded ${e.loaded}bytes are loaded ${e.total}`;
    const perscentage = (e.loaded / e.total) * 100;
    prgressRef.current.value = Math.round(perscentage);
    statusRef.current.innerHTML = `${Math.round(perscentage)} % uploaded..`;
  }

  function handlesuccess(e) {
    statusRef.current.innerHTML = e.target.responseText;
    prgressRef.current.value = 100;
  }

  function handleerror() {
    statusRef.current.innerHTML = 'upload failed please try again...';
    prgressRef.current.value = 0;
  }
  function handleabort() {
    statusRef.current.innerHTML = 'upload abort please try again...';
    prgressRef.current.value = 0;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">📂 File Upload</h1>

        <input
          onChange={handleuploadfile}
          type="file"
          name="file"
          ref={uploadRef}
          className="block w-full text-sm text-gray-300 border border-gray-600 rounded-lg cursor-pointer bg-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-500"
        />

        <label className="block mt-4 text-sm">
          File Progress:
          <progress
            ref={prgressRef}
            value="0"
            max="100"
            className="w-full h-2 rounded mt-2 bg-gray-600 text-green-500"
          ></progress>
        </label>

        <p ref={statusRef} className="mt-3 text-sm text-gray-300"></p>
        <p ref={loadRef} className="text-xs text-gray-500 mt-1"></p>

        {file && (
          <img
            src={file}
            alt="fileupload"
            className="w-60 h-60 object-cover rounded-lg mt-4 border border-gray-600"
          />
        )}
      </div>
    </div>
  );
};

export default Fileupload;

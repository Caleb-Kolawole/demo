import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React from 'react'
import { useState, useEffect } from 'react';
import readXlsxFile from 'read-excel-file';
import * as XLSX from 'xlsx';
import Home from './Home';
import { storage } from './firebase';
export default function Excel() {

    // const [jsonData, setJsonData] = useState(null);
    // function handleFileUpload(event) {
    //     const file = event.target.files[0];
    //     readXlsxFile(file).then((rows) => {
    //         const headers = rows.shift();
    //         const jsonData = rows.map((row) => {
    //         return headers.reduce((obj, header, index) => {
    //             obj[header] = row[index];
    //             setJsonData(obj);
    //         }, {});
    //         });
    //     });
    // }

    console.log(object);

    const [file, setFile] = useState(null);
    const [jsonData, setJsonData] = useState([]);

    const convertJsonToFileAndUpload = async (jsonData) => {
        // Convert JSON to Blob
        const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
      
        // Create a File object from the Blob
        const file = new File([blob], 'data.json', { type: 'application/json' });
      
        // Create a reference to the file location
        const storageRef = ref(storage, 'uploads/data.json');
      
        // Upload the file to Firebase Storage
        const uploadTask = uploadBytesResumable(storageRef, file);
      
        uploadTask.on('state_changed', 
          (snapshot) => {
            // You can monitor the progress here
          }, 
          (error) => {
            // Handle unsuccessful uploads
            console.error(error);
          }, 
          () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              alert('File available at now');
            });
          }
        );
      };

    const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            // Convert the worksheet to JSON with headers as keys
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            // Transform the data into the desired format
            const transformedData = data.slice(1).map(row => {
                const obj = {};
                row.forEach((value, index) => {
                    obj[data[0][index]] = value;
                });
                return obj;
            });
            setJsonData(transformedData);
            convertJsonToFileAndUpload(transformedData);
        };
        reader.readAsBinaryString(file);
        console.log(jsonData);
    };

  return (
    <div>
        <Home/>
        {/* <div>
            <input type="file" onChange={handleFileUpload} />
            {jsonData && (
                <div>
                <h2>JSON Data:</h2>
                <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                </div>
            )}
        </div> */}
        <div>
            <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Convert to JSON</button>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
    </div>
  )
}

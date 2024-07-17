import React from 'react'
import {db} from "./firebase";
import { doc, getDoc } from 'firebase/firestore';
export default function FetchData() {
    async function fetchDocumentData() {
        try {
        const docRef = doc(db, "loans-testing", "1");
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            alert("done!!")
            console.log(docSnap.data());
        } else {
            alert("No such document!");
            return null;
        }
        } catch (error) {
        console.error("Error fetching document: ", error);
        throw error;
        }
    };

    fetchDocumentData();
  return (
    <div>
      <p>Hii... from Caleb 👋👋😁</p>
    </div>
  )
}

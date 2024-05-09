import React from 'react'
import { Paginator } from 'primereact/paginator';
import { useState, useEffect } from 'react';
import readXlsxFile from 'read-excel-file';
import * as XLSX from 'xlsx';
import { getFirestore, collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';
import {db} from './firebase';
import Home from './Home';

export default function Paginate() {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    // Fetch initial data
    useEffect(() => {
        const fetchData = async () => {
        const q = query(collection(db, 'users'), orderBy('name', 'desc'), limit(itemsPerPage));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({ key: doc.id,...doc.data() }));
        setList(items);
        };

        fetchData();
    }, []);

    // Function to fetch next set of data
    const showNext = async () => {
        const lastItem = list[list.length - 1];
        const q = query(collection(db, 'users'), orderBy('name', 'desc'), startAfter(lastItem.name), limit(itemsPerPage));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({ key: doc.id,...doc.data() }));
        setList([...list,...items]);
        setPage(page + 1);
    };

    const showPrevious = async () => {
        const lastItem = list[list.length - 1];
        const q = query(collection(db, 'users'), orderBy('name', 'desc'), startAfter(lastItem.name), limit(itemsPerPage));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({ key: doc.id,...doc.data() }));
        setList([...list,...items]);
        setPage(page - 1);
    };

  return (
    <div>
      <Home/>
      <div>
        {list && list.map((item, index) => (
          <p key={index}>
            <b>First Name:</b> {item.name} <br />
            <b>Email:</b> {item.email}
          </p>
        ))}
        <button onClick={showPrevious}>Previous</button>
        <button onClick={showNext}>Next</button>
    </div>
    </div>
  )
}

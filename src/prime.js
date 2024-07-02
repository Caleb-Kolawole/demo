import React, { useState } from 'react'
import { Button as Btn } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Steps } from 'primereact/steps';
import { Checkbox } from 'primereact/checkbox';
import { Slider } from 'primereact/slider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export default function Prime() {
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(50);
    const items = [
        {
            label: 'Personal Info'
        },
        {
            label: 'Reservation'
        },
        {
            label: 'Review'
        }
    ];

    const [data, setData] = useState([
        { id: 1, name: 'John Doe', country: 'USA', age: 30 },
        { id: 2, name: 'Jane Smith', country: 'Canada', age: 25 },
        { id: 3, name: 'Mike Brown', country: 'UK', age: 40 },
        { id: 4, name: 'John Doe', country: 'USA', age: 30 },
        { id: 5, name: 'Jane Smith', country: 'Canada', age: 25 },
        { id: 6, name: 'Mike Brown', country: 'UK', age: 40 },
        { id: 7, name: 'John Doe', country: 'USA', age: 30 },
        { id: 8, name: 'Jane Smith', country: 'Canada', age: 25 },
        { id: 9, name: 'Mike Brown', country: 'UK', age: 40 },
        { id: 10, name: 'John Doe', country: 'USA', age: 30 },
        { id: 11, name: 'Jane Smith', country: 'Canada', age: 25 },
        { id: 12, name: 'Mike Brown', country: 'UK', age: 40 },
      ]);
    
      const handleAddRow = () => {
        // Implement logic to add a new row to the data array
        // (e.g., prompt user for new data and update setData)
        alert('Add new row functionality not yet implemented!');
      };
  return (
    <div>
        <div className="card">
            {/* <Steps model={items} />
            <Btn label="Info" severity="info" />
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
            <Checkbox/>
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> */}

        <div className="card">
            <DataTable value={data} paginator rows={5} dataKey="id">
                <template slot="header"> {/* Use the header slot for custom header */}
                <h1>My Simple Data Table</h1>
                <Button label="Add Row" className="p-button-secondary" onClick={handleAddRow} />
                </template>
                <Column field="id" header="ID" style={{ width: '50px' }} />
                <Column field="name" header="Name" style={{ minWidth: '150px' }} />
                <Column field="country" header="Country" style={{ minWidth: '100px' }} />
                <Column field="age" header="Age" style={{ width: '75px' }} />
            </DataTable>
        </div>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Button as Btn } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Steps } from 'primereact/steps';
import { Checkbox } from 'primereact/checkbox';
import { Slider } from 'primereact/slider';
// import 'primereact/resources/themes/saga-blue/theme.css'; // Example theme
// import 'primereact/resources/primereact.min.css'; // Core CSS
// // import 'primeicons/primeicons.css'; // Icons

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
  return (
    <div>
        <div className="card">
            <Steps model={items} />
            <Btn label="Info" severity="info" />
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
            <Checkbox/>
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    </div>
  )
}

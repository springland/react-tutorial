import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import 'ag-grid-community/styles/ag-theme-balham.css'; // Optional theme CSS



/*
* use valueGet and CellRender
*/
const ValueGetter = () => {


    const data = require('../data/data.json');

    const columnDefs = [
        { headerName: "Name", field: "name" },
        { headerName: "Street", field: "address.street1" },
        { headerName: "City", field: "address.city" },
        {
        headerName: "Address",
        valueGetter: ({ data }) =>
            `${data.address.street1} ${data.address.city}, ${data.address.state} ${data.address.zip}`
        }
    ];

    const defaultColDef = {
        resizable: true,
        sortable: true,
        filter: true

    };

    
    

    const [rowData , setRowData] = useState([]);

    useState(
        () => {
            setRowData(data.customers)
        }
        , []
    )
    return (
        <div className='ag-theme-balham' style={{height:'800px' , width:'1200px'}}>
            <AgGridReact 
                defaultColDef={defaultColDef}
                columnDefs={columnDefs} 
                rowData={rowData}>
            </AgGridReact>    

        </div>



    )

}

export default ValueGetter ;
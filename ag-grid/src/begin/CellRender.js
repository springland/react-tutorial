import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import 'ag-grid-community/styles/ag-theme-balham.css'; // Optional theme CSS



/*
* use valueGet and CellRender
*/
const CellRender = () => {


    const data = require('../data/data.json');

    const customers =   [
            {
                "id": 1,
                "name": "Kovacek Inc",
                "catchPhrase": "Reduced full-range artificial intelligence",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/madcampos/128.jpg",
                "address": {
                    "street1": "Haley Dale",
                    "city": "South Johnathan",
                    "state": "Michigan",
                    "zip": "05285"
                }
            },
            {
                "id": 2,
                "name": "Stracke Group",
                "catchPhrase": "Down-sized 4th generation website",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/blakehawksworth/128.jpg",
                "address": {
                    "street1": "Hauck Motorway",
                    "city": "North Lionelchester",
                    "state": "New Hampshire",
                    "zip": "91224-2586"
                }
            },
            {
                "id": 3,
                "name": "Parker and Sons",
                "catchPhrase": "Cloned client-server projection",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/borantula/128.jpg",
                "address": {
                    "street1": "Cydney Knolls",
                    "city": "Archibaldville",
                    "state": "California",
                    "zip": "31726-6151"
                }
            },
            {
                "id": 4,
                "name": "Howe and Sons",
                "catchPhrase": "Pre-emptive encompassing core",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kazaky999/128.jpg",
                "address": {
                    "street1": "Kunze Keys",
                    "city": "Lake Lilliana",
                    "state": "Arkansas",
                    "zip": "52104"
                }
            },
            {
                "id": 5,
                "name": "Conn, Herman and Raynor",
                "catchPhrase": "Multi-tiered multi-tasking local area network",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mcflydesign/128.jpg",
                "address": {
                    "street1": "Sipes Plaza",
                    "city": "Aurelioland",
                    "state": "Kentucky",
                    "zip": "35672-0818"
                }
            }
        ]
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

                columnDefs={columnDefs} 
                rowData={rowData}>
            </AgGridReact>    

        </div>



    )

}

export default CellRender ;
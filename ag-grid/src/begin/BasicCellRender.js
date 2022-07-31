
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import 'ag-grid-community/styles/ag-theme-balham.css'; // Optional theme CSS

import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
const BasicCellRender = () => {

    const customers = [
 
                {
                "id": 1,
                "name": "Kovacek Inc",
                "catchPhrase": "Reduced full-range artificial intelligence",
                "avatar": "../images/image1.png",
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
                "avatar": "../images/image1.png",
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
                "avatar": "../images/image1.png",
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
                "avatar": "../images/image1.png",
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
                "avatar": "../images/image1.png",
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
                headerName: "Avatar",
                field: "avatar",
                width: 100,
                cellRenderer: ({ value }) => {
                
                    console.log(value);
                    return (<img style={{height: '14px' , width: '14px'}} src={require('../images/image1.png')}/>);
                }
        }
    ];

    const defaultColDef = {
        resizable: true,
        sortable: true,
        filter: true

    };

    
    


    return (
        <div className='ag-theme-balham' style={{height:'800px' , width:'1200px'}}>
            <AgGridReact 
                defaultColDef={defaultColDef}
                columnDefs={columnDefs} 
                rowData={customers}>
            </AgGridReact>    
            <img src={image1}/>
        </div>



    )


}

export default BasicCellRender ;
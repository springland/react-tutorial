

import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import 'ag-grid-community/styles/ag-theme-balham.css'; // Optional theme CSS

const SimpleGrid = () => {

    const [columnDefs , setColumnDefs] = useState(
        [
            {headerName: 'Make' , field:'make' , sortable:true , filter:true , checkboxSelection: true},

            {headerName: 'Model' , field:'model' , sortable:true , filter:true},
            {headername : 'Price' , field:'price' , sortable:true , filter:true}
        ]    
    )

    const [rowData , setRowData] = useState(
        [
            {  make: "Toyota", model: "Celica", price: 35000    }, 
            {  make: "Ford", model: "Mondeo", price: 32000      }, 
            {  make: "Porsche", model: "Boxter", price: 72000   },
            {  make: "Toyota", model: "Celica", price: 35000    }, 
            {  make: "Ford", model: "Mondeo", price: 32000      }, 
            {  make: "Porsche", model: "Boxter", price: 72000   }

        ]
    )

    const [gridApi , setGridApi] = useState() ;

    const [columnApi , setColumnApi] = useState();

    const [modelVisible , setModelVisible] = useState(true);

    const onButtonClick = (e) =>{
        const selectedNodes = gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data)
        console.log('selected Data' , selectedData);

    }

    const onToggleModelClick = (e) =>{
        columnApi.setColumnVisible('model', !modelVisible);
        setModelVisible(!modelVisible);
    }

    const onGridReady=(params) =>{
        setGridApi(params.api);
        setColumnApi(params.columnApi);

    }
    /*
    useEffect( () => {
        fetch('https://api.myjson.com/bins/15psn9').
        then( response => response.json())
        .then( rowdata => {
            console.log('rowdata' , rowdata)
            setRowData(rowdata);
            }
        )     
    } , [])
    */
    return (
        <div className='ag-theme-balham' style={{height:'500px' , width:'600px'}}>
            <button type='button' onClick={onButtonClick}>Select Rows</button>
            <button type='button' onClick={onToggleModelClick}>toggleModel</button>
            <AgGridReact 
                onGridReady={onGridReady}
                rowSelection='multiple'
                columnDefs={columnDefs} 
                rowData={rowData}>
            </AgGridReact>    
        </div>
        
    )

}

export default SimpleGrid ;

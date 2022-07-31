
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import 'ag-grid-community/styles/ag-theme-balham.css'; // Optional theme CSS

const InfiniteRows = () =>{

        const  columnDefs= [
                {
                headerName: "ID",
                width: 50,
                valueGetter: "node.id",
                cellRenderer: "loadingRenderer"
                },
                {
                headerName: "Athlete",
                field: "athlete",
                width: 150
                },
                {
                headerName: "Age",
                field: "age",
                width: 90
                },
                {
                headerName: "Country",
                field: "country",
                width: 120
                },
                {
                headerName: "Year",
                field: "year",
                width: 90
                },
                {
                headerName: "Date",
                field: "date",
                width: 110
                },
                {
                headerName: "Sport",
                field: "sport",
                width: 110
                },
                {
                headerName: "Gold",
                field: "gold",
                width: 100
                },
                {
                headerName: "Silver",
                field: "silver",
                width: 100
                },
                {
                headerName: "Bronze",
                field: "bronze",
                width: 100
                },
                {
                headerName: "Total",
                field: "total",
                width: 100
                }
      ] ;
      const defaultColDef= { resizable: true };

      const [rowData , setRowData] = useState([]);

      const [ gridApi , setGridApi] = useState();
      const updateData = (data , gridApi) => {
            const dataSource = {
                rowCount: null,
                getRows: function(params) {
                setTimeout(function() {
                    let rowsThisPage = data.slice(params.startRow, params.endRow);
                    let lastRow = -1;
                    if (data.length <= params.endRow) {
                        lastRow = data.length;
                    }
                    params.successCallback(rowsThisPage, lastRow);
                }, 500);
                }
            };
            gridApi.setDatasource(dataSource);
      };    
      
    
     const onGridReady = (params) => {
            fetch(
            "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json"
            )
            .then(res => res.json())
            .then(data => {

                updateData(data , params.api);           
            });
      };

    return (

      <div style={{ width: "100%", height: "100%" }}>
        <div
          id="myGrid"
          style={{
            height: "500px",
            width: "1000px"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
                    onGridReady={onGridReady}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                 //   components={this.state.components}
                    rowSelection={'multiple'}
                    rowDeselection={true}
                    rowBuffer={0}
                    rowModelType={'infinite'}
                    paginationPageSize={100}
                    cacheOverflowSize={2}
                    maxConcurrentDatasourceRequests={1}
                    infiniteInitialRowCount={100}
                    maxBlocksInCache={10}
          />
        </div>
      </div>
    );


}

export default InfiniteRows ;

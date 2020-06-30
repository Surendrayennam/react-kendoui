import React from 'react';
import { sampleProducts } from '../mock/SampleProducts';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

const Table = (props) => {
    return (
        <div className="container-fluid">
            <div className='row my-4'>
                <div className='col-12 col-lg-12'>
                    <Grid
                        data={process(sampleProducts, {skip: 0, take: 10 })}
                        pageable>
                        <Column field="ProductID" title="Id" width="50px" editable={false} />
                        <Column field="ProductName" title="Product Name" width="250px"/>
                        <Column field="UnitsInStock" title="Units" width="150px" editor="numeric" />
                        <Column field="Discontinued" title="Discontinued" editor="boolean" />
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Table;
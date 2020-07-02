import React, {useState} from 'react';
import { sampleProducts } from '../mock/SampleProducts';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

const sort = {field: 'ProductID', dir: 'asc'};

const Table = (props) => {
   // const [sort, setSort] = useState({field: 'ProductID', dir: 'asc'});
    const [skip, setSkip] = useState(0);
    const [take, setTake] = useState(10);
   
    const pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
        const { page } = event;
        const { skip, take } = page;
        setSkip(skip);
        setTake(take);
    }

    return (
        <div className="container-fluid">
            <div className='row my-4'>
                <div className='col-12 col-lg-12'>
                    <Grid
                        data={process(props.data, {skip: 0, take: 10 })}
                        sortable
                        skip={skip}
                        take={take}
                        pageable={true}
                       // sort={sort}
                        onPageChange={pageChange}
                        pageable>
                       <Column field="ProductName" title="NAME" width="250px" />
                        <Column field="FirstOrderedOn" title="DATE" width="100px"  />
                        <Column field="CallReason" title="CALL REASON" width="150px" />
                        <Column field="Purpose" title="PURPOSE" />
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Table;
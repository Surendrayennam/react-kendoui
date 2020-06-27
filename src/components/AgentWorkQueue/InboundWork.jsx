import React, { useState } from 'react';
import { sampleProducts } from '../../common/sample-products';
import { MyCommandCell } from './myCommandCell.jsx';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

const InbounWork = (props) => {
    const editField = "inEdit";
    const [data, setData] = useState(sampleProducts);
    const [dataState, setDataState ] = useState({skip: 0, take: 10 })

    const generateId = data => data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

    const removeItem = (data, item) => {
        let index = data.findIndex(p => p === item || item.ProductID && p.ProductID === item.ProductID);
        if (index >= 0) {
            data.splice(index, 1);
        }
    }


    const enterEdit = (dataItem) => {
        setData(data.map(item =>
            item.ProductID === dataItem.ProductID ?
                { ...item, inEdit: true } : item
        ));
    }

    const remove = (dataItem) => {

        const newData = [...data];
        removeItem(newData, dataItem);
        removeItem(sampleProducts, dataItem);
        setData([...newData]);
    }

    const add = (dataItem) => {
        dataItem.inEdit = undefined;
        dataItem.ProductID = generateId(sampleProducts);

        sampleProducts.unshift(dataItem);
        setData([...data])
    }

    const discard = (dataItem) => {
        const newData = [data];
        removeItem(newData, dataItem);

        setData(newData);
    }

    const update = (dataItem) => {
        const newData = [...data]
        const updatedItem = { ...dataItem, inEdit: undefined };

        updateItem(newData, updatedItem);
        updateItem(sampleProducts, updatedItem);

        setData(newData);
    }

    const cancel = (dataItem) => {
        const originalItem = sampleProducts.find(p => p.ProductID === dataItem.ProductID);
        const newData = data.map(item => item.ProductID === originalItem.ProductID ? originalItem : item);

        setData(newData);
    }

    const updateItem = (data, item) => {
        let index = data.findIndex(p => p === item || (item.ProductID && p.ProductID === item.ProductID));
        if (index >= 0) {
            data[index] = { ...item };
        }
    }

    const itemChange = (event) => {
        const newData = data.map(item =>
            item.ProductID === event.dataItem.ProductID ?
                { ...item, [event.field]: event.value } : item
        );
        setData(newData);
    }

    const addNew = () => {
        const newDataItem = { inEdit: true, Discontinued: false };
        setData([newDataItem, ...data]);
    }

    const cancelCurrentChanges = () => {
        setData([...sampleProducts]);
    }
    let CommandCell = MyCommandCell({
        edit: enterEdit,
        remove: remove,

        add: add,
        discard: discard,

        update: update,
        cancel: cancel,

        editField: editField
    });
    const hasEditedItem = data.some(p => p.inEdit);
    return (
        <div className="container-fluid">
            <div className='row my-4'>
                <div className='col-12 col-lg-12'>
                    <Grid
                        data={process(data, dataState)}
                        pageable // uncomment to enable paging
                        // sortable // uncomment to enable sorting
                        // filterable // uncomment to enable filtering
                        // onDataStateChange={(e) => setDataState(e.data)} // uncomment to enable data operations
                        // {...dataState} // uncomment to enable data operations
                    >
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

export default InbounWork;
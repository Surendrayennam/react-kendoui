import React from 'react';
import { Card, CardBody } from '@progress/kendo-react-layout';
import Table from '../../components/Table';

const InBound = (props) => {
    const { data } = props;
    return (
        <Card>
            <CardBody>
            <div className="row my-2 justify-content-center font-weight-bold">
                    Work In Progress
                </div>
                <Table data={data}/>
            </CardBody>
        </Card>
    )
}

export default InBound;
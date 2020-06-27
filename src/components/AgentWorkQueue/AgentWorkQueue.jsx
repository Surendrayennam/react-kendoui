import React from 'react';
import PatientManualSearch from './PatientManualSearch';
import InboundWork from './InboundWork';
import { Card, CardBody } from '@progress/kendo-react-layout';

const AgentWorkQueue = (props) => {
    return (
        <div className="container-fluid">
            <div className='row my-4'>
                <div className="col-6">
                    <Card>
                        <CardBody>
                            <div className="row my-2 justify-content-center font-weight-bold">
                              Inbound Work
                            </div>
                           <InboundWork />
                        </CardBody>
                    </Card>
                </div>
                <div className="col-6">
                     <Card>
                        <CardBody>
                        <div className="row my-2 justify-content-center font-weight-bold">
                              Work In Progress
                            </div>
                           <InboundWork />
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className='row my-4'>
                <div className="col-6 offset-3">
                    <PatientManualSearch />
                </div>
            </div>
        </div>
    )
}

export default AgentWorkQueue;
import React from 'react';
//import PatientManualSearch from './PatientManualSearch';
import InBound from './InBound';
import WIPComponent from './WorkInProgress';
import { sampleProducts } from '../../mock/SampleProducts';

/*
<div className='row my-4'>
                <div className="col-6 offset-3">
                    <PatientManualSearch />
                </div>
</div>
*/

const AgentWorkQueue = (props) => {
    return (
        <div className="container-fluid">
            <div className='row my-4'>
                <div className="col-6">
                    <InBound data={sampleProducts}/>
                </div>
                <div className="col-6">
                     <WIPComponent data={sampleProducts} />
                </div>
            </div>     
        </div>
    )
}

export default AgentWorkQueue;
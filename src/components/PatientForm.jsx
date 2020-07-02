import React, { useState } from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Form, Field } from '@progress/kendo-react-form';
import FormContainer from './FormContainer';
import { useHistory } from 'react-router-dom';
import { DropDownList } from '@progress/kendo-react-dropdowns';


const PatientManualSearch = (props) => {
    const history = useHistory();
    const [searchType, setSearchType] = useState('Patient');

    const addNewPatient = (event) => {
        history.push("/patient-info");
    }
    const initialForm = {
        patientId: '',
        patientLastName: '',
        dateOfBirth: new Date(),
        patientPhoneNumber: '',
    };

    const searchTypes = ['Patient', 'HCP'];

    const searchTypesControls = {
        Patient: {
            Lookup: 'Patient ID Lookup',
            LastName: 'Patient Last Name',
            DOB: 'DOB',
            PhNo: 'Patient Ph No',
            buttonText: 'Patient Search'
        },
        HCP: {
            Lookup: 'HCP Lookup',
            LastName: 'HCP Last Name',
            DOB: 'DOB',
            PhNo: 'HCP Ph No',
            buttonText: 'Agent Search'
        }
    }
    const [searchTypesControl, setSearchTypesControl] = useState(searchTypesControls.Patient);
    const handleSubmit = () => {
    }

    const onSearchChange = (event) => {
        setSearchType(event.target.value);
        setSearchTypesControl(searchTypesControls[event.target.value]);
    }

    return (
        <FormContainer>
            <Form
                initialValues={initialForm}
                onSubmit={handleSubmit}
                render={(formRenderProps) => (
                    <form onSubmit={formRenderProps.onSubmit} className={'k-form pl-3 pr-3 py-3'}>
                        <div className="row mt-3">
                            <div className="col-md-10 offset-md-1 ">
                                <div className="row">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <h3>Manual Search (Patient) </h3>
                                    </div>
                                    <div className="col-md-6 justify-self-start">
                                        <DropDownList data={searchTypes} onChange={onSearchChange} defaultValue="Patient" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 align-self-center" style={{ marginTop: "-0.9rem" }}>
                                        <Field name={'patientId'} component={Input} label={searchTypesControl.Lookup} />
                                    </div>
                                    <div className="col-md-1 align-self-center p-0">
                                        <h3>OR</h3>
                                        </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Field name={'patientLastName'} component={Input} label={searchTypesControl.LastName} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5" style={{ marginTop: "1.2rem" }}>
                                                <Field name={'dateOfBirth'} component={DatePicker} label={searchTypesControl.DOB} />
                                            </div>
                                            <div className="col-md-7">
                                                <Field name={'patientPhoneNumber'} component={Input} label={searchTypesControl.PhNo} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row offset-md-4 p-3">
                                    <button type="submit" look="outline" className="k-button mr-5" >{searchTypesControl.buttonText}</button> &nbsp;
                                    <button type="button" className="k-button blue " onClick={addNewPatient} >Add New Patient</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )} />
        </FormContainer>
    )
}

export default PatientManualSearch;
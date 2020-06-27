import React from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Form, Field } from '@progress/kendo-react-form';
import FormContainer from '../FormContainer';
import { useHistory } from 'react-router-dom';
import { DropDownList } from '@progress/kendo-react-dropdowns';


const PatientManualSearch = (props) => {
    const history = useHistory();
    const addNewPatient = (event) => {
        history.push("/patient-info");
    }
    const initialForm = {
        patientId: '',
        patientLastName: '',
        dateOfBirth: new Date(),
        patientPhoneNumber: '',
    };

    const searchType = ['Patient', 'HCP'];

    const handleSubmit = () => {
    }

    return (
                <FormContainer>
                    <Form
                        initialValues={initialForm}
                        onSubmit={handleSubmit}
                        render={(formRenderProps) => (
                            <form onSubmit={formRenderProps.onSubmit} className={'k-form pl-3 pr-3 pt-1'}>
                                    <div className="row">
                                    <div className="col-md-6 d-flex justify-content-center">
                                       <h3>Manual Search (Patient) </h3>
                                    </div>
                                    <div className="col-md-6 justify-self-center">
                                       <DropDownList data={searchType} defaultValue="Patient" />
                                    </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 align-self-center" style={{ marginTop: "-0.9rem" }}>
                                          <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                        </div>
                                        <div className="col-md-1 align-self-center p-0">
                                            OR
                                        </div>
                                        <div className="col-md-8 ">
                                            <div className="row">
                                               <div className="col-md-8">
                                                  <Field name={'patientLastName'} component={Input} label={'Patient Last Name'} />
                                               </div>
                                            </div>
                                            <div className="row">
                                               <div className="col-md-5" style={{ marginTop: "1.2rem" }}>
                                               <Field name={'dateOfBirth'} component={DatePicker} label={'DOB'} />
                                               </div>
                                               <div className="col-md-7">
                                                  <Field name={'patientPhoneNumber'} component={Input} label={'Patient Ph No'} />
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                

                                <div className="text-right p-3">
                                    <button type="submit" look="outline" className="k-button" >Patient Search</button> &nbsp;
                                    <button type="button" className="k-button blue" onClick={addNewPatient} >Add New Patient</button>
                                </div>
                            </form>
                        )} />
                </FormContainer>
    )
}

export default PatientManualSearch;
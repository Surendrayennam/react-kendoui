import React, { useState } from 'react';
import { Input, RadioGroup, Checkbox } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Form, Field } from '@progress/kendo-react-form';
import FormContainer from './FormContainer';

import {
    TabStrip, TabStripTab, PanelBar, PanelBarItem, PanelBarUtils, Menu,
    MenuItem, MenuItemModel, MenuItemLink, MenuItemArrow, Splitter, Drawer,
    DrawerNavigation, DrawerContent, Card, CardHeader, CardTitle, CardBody, CardActions,
    CardImage, Avatar
} from '@progress/kendo-react-layout'


const PatientInfo = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const gender = [
        { label: 'male', value: 'male', className: 'patient-radio blue' },
        { label: 'female', value: 'female', className: 'patient-radio blue' },
        { label: 'other', value: 'other', className: 'patient-radio blue' }
    ];
    const communication = [
        { label: 'phone', value: 'phone', className: 'patient-radio blue' },
        { label: 'email', value: 'email', className: 'patient-radio blue' },
        { label: 'mail', value: 'mail', className: 'patient-radio blue' }
    ];
    const timeToContact = [
        { label: 'Morning', value: 'morning', className: 'patient-radio blue' },
        { label: 'Afternoon', value: 'afternoon', className: 'patient-radio blue' },
        { label: 'Evening', value: 'evening', className: 'patient-radio blue' }
    ];
    const bestContacts = [
        { label: 'patient', value: 'patient', className: 'patient-radio blue' },
        { label: 'caregiveer', value: 'caregiveer', className: 'patient-radio blue' },
    ];
    const initialForm = {
        patientFirstName: '',
        patientMI: '',
        dateOfBirth: new Date(),
        patientPhoneNumber: '',
    };
    const handleSelect = (e) => {
        setSelectedTab(e.selected);
    }

    return (
        <div className="container-fluid">
            <TabStrip selected={selectedTab} onSelect={handleSelect}>
                <TabStripTab title="Patient Profile">
                    <div className="row">
                        <div className="col">
                            <PanelBar>
                                <PanelBarItem expanded={true} title={'Patient Information'} >
                                    <Form
                                        render={(formRenderProps) => (
                                            <form onSubmit={formRenderProps.onSubmit} className={'k-form pl-3 pr-3 pt-1'}>
                                                <div className="row">
                                                    <div className="col-md-6 col-xs-12">
                                                        <div className="row">
                                                            <div className="col-md-12 pt-2">
                                                                Patient Info
                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-5">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                            <div className="col-md-2 p-0">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                            <div className="col-md-5">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                            <div className="col-md-2" style={{ marginTop: "1.2rem" }}>
                                                                Gender :  
                                                            </div>
                                                            <div className="col-md-7" style={{ marginTop: "1.2rem" }}>
                                                                <RadioGroup data={gender} layout="horizontal" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                            <div className="col-md-4 p-0">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-5 pr-0">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                            <div className="col-md-7">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-5" style={{ marginTop: "1.2rem" }}>
                                                                Communnication Preference :  
                                                            </div>
                                                            <div className="col-md-7" style={{ marginTop: "1.2rem" }}>
                                                                <RadioGroup data={communication} layout="horizontal" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-5" style={{ marginTop: "1.2rem" }}>
                                                                Best Time to Contact :  
                                                            </div>
                                                            <div className="col-md-7" style={{ marginTop: "1.2rem" }}>
                                                                <RadioGroup data={timeToContact} layout="horizontal" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12" style={{ marginTop: "1.2rem" }}>
                                                               <Checkbox label={'Ok to Leave Detail Message'}/> 
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* right side form */}
                                                    <div className="col-md-6 col-xs-12">
                                                        <div className="row">
                                                            <div className="col-md-12 pt-2">
                                                                Care Giver Info
                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-5">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                            <div className="col-md-7">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-5">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                            <div className="col-md-5">
                                                                <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3" style={{ marginTop: "1.2rem" }}>
                                                                Best Contact 
                                                            </div>
                                                            <div className="col-md-9" style={{ marginTop: "1.2rem" }}>
                                                                <RadioGroup data={bestContacts} layout="horizontal" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-7" style={{ marginTop: "1.2rem" }}>
                                                               <Field name={'patientId'} component={Input} label={'Patient ID Lookup'} />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-7 offset-5" style={{ marginTop: "1.2rem" }}>
                                                            <div className="card">
                        <div className="card-block" style={{height: '100px'}}>
                            Insurance Card
                        </div>
                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row p-3">
                                                    <div className="col-12">
                                                      <button type="submit" className="k-button">Update</button>
                                                    </div>
                                                </div>
                                            </form>
                                        )} />
                                </PanelBarItem>
                            </PanelBar>
                        </div>
                    </div>
                </TabStripTab>
                <TabStripTab title="HCP Profile">
                    <div>
                        <p>
                            The City of New York, often called New York City or simply New York, is the most populous city in the United States. With an estimated 2015 population of 8,550,405 distributed over a land area of just 305 square miles (790 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, one of the most populous urban agglomerations in the world.
                  </p>
                        <p>
                            A global power city, New York City exerts a significant impact upon commerce, finance, media, art, fashion, research, technology, education, and entertainment, its fast pace defining the term New York minute. Home to the headquarters of the United Nations, New York is an important center for international diplomacy and has been described as the cultural and financial capital of the world.
                  </p>
                    </div>
                </TabStripTab>
                <TabStripTab title="Referral">
                    <div>
                        <p>
                            Tallinn is the capital and largest city of Estonia. It is situated on the northern coast of the country, on the shore of the Gulf of Finland, 80 km (50 mi) south of Helsinki, east of Stockholm and west of Saint Petersburg. From the 13th century until 1918 (and briefly during the Nazi occupation of Estonia from 1941 to 1944), the city was known as Reval. Tallinn occupies an area of 159.2 km2 (61.5 sq mi) and has a population of 443,894. Approximately 32% of Estonia's total population lives in Tallinn.
                  </p>
                        <p>
                            Tallinn was founded in 1248, but the earliest human settlements are over 5,000 years old, making it one of the oldest capital cities of Northern Europe. Due to its strategic location, the city became a major trade hub, especially from the 14th to the 16th century, when it grew in importance as part of the Hanseatic League.
                  </p>
                    </div>
                </TabStripTab>
                <TabStripTab title="Benefits Investigation">
                    <div>
                        <p>
                            Tallinn is the capital and largest city of Estonia. It is situated on the northern coast of the country, on the shore of the Gulf of Finland, 80 km (50 mi) south of Helsinki, east of Stockholm and west of Saint Petersburg. From the 13th century until 1918 (and briefly during the Nazi occupation of Estonia from 1941 to 1944), the city was known as Reval. Tallinn occupies an area of 159.2 km2 (61.5 sq mi) and has a population of 443,894. Approximately 32% of Estonia's total population lives in Tallinn.
                  </p>
                        <p>
                            Tallinn was founded in 1248, but the earliest human settlements are over 5,000 years old, making it one of the oldest capital cities of Northern Europe. Due to its strategic location, the city became a major trade hub, especially from the 14th to the 16th century, when it grew in importance as part of the Hanseatic League.
                  </p>
                    </div>
                </TabStripTab>
                <TabStripTab title="Prior Authorization">
                    <div>
                        <p>
                            Tallinn is the capital and largest city of Estonia. It is situated on the northern coast of the country, on the shore of the Gulf of Finland, 80 km (50 mi) south of Helsinki, east of Stockholm and west of Saint Petersburg. From the 13th century until 1918 (and briefly during the Nazi occupation of Estonia from 1941 to 1944), the city was known as Reval. Tallinn occupies an area of 159.2 km2 (61.5 sq mi) and has a population of 443,894. Approximately 32% of Estonia's total population lives in Tallinn.
                  </p>
                        <p>
                            Tallinn was founded in 1248, but the earliest human settlements are over 5,000 years old, making it one of the oldest capital cities of Northern Europe. Due to its strategic location, the city became a major trade hub, especially from the 14th to the 16th century, when it grew in importance as part of the Hanseatic League.
                  </p>
                    </div>
                </TabStripTab>
                <TabStripTab title="PAP">
                    <div>
                        <p>
                            Tallinn is the capital and largest city of Estonia. It is situated on the northern coast of the country, on the shore of the Gulf of Finland, 80 km (50 mi) south of Helsinki, east of Stockholm and west of Saint Petersburg. From the 13th century until 1918 (and briefly during the Nazi occupation of Estonia from 1941 to 1944), the city was known as Reval. Tallinn occupies an area of 159.2 km2 (61.5 sq mi) and has a population of 443,894. Approximately 32% of Estonia's total population lives in Tallinn.
                  </p>
                        <p>
                            Tallinn was founded in 1248, but the earliest human settlements are over 5,000 years old, making it one of the oldest capital cities of Northern Europe. Due to its strategic location, the city became a major trade hub, especially from the 14th to the 16th century, when it grew in importance as part of the Hanseatic League.
                  </p>
                    </div>
                </TabStripTab>
                <TabStripTab title="Payer">
                    <div>
                        <p>
                            Tallinn is the capital and largest city of Estonia. It is situated on the northern coast of the country, on the shore of the Gulf of Finland, 80 km (50 mi) south of Helsinki, east of Stockholm and west of Saint Petersburg. From the 13th century until 1918 (and briefly during the Nazi occupation of Estonia from 1941 to 1944), the city was known as Reval. Tallinn occupies an area of 159.2 km2 (61.5 sq mi) and has a population of 443,894. Approximately 32% of Estonia's total population lives in Tallinn.
                  </p>
                        <p>
                            Tallinn was founded in 1248, but the earliest human settlements are over 5,000 years old, making it one of the oldest capital cities of Northern Europe. Due to its strategic location, the city became a major trade hub, especially from the 14th to the 16th century, when it grew in importance as part of the Hanseatic League.
                  </p>
                    </div>
                </TabStripTab>
                <TabStripTab title="Administration">
                    <div>
                        <p>
                            Tallinn is the capital and largest city of Estonia. It is situated on the northern coast of the country, on the shore of the Gulf of Finland, 80 km (50 mi) south of Helsinki, east of Stockholm and west of Saint Petersburg. From the 13th century until 1918 (and briefly during the Nazi occupation of Estonia from 1941 to 1944), the city was known as Reval. Tallinn occupies an area of 159.2 km2 (61.5 sq mi) and has a population of 443,894. Approximately 32% of Estonia's total population lives in Tallinn.
                  </p>
                        <p>
                            Tallinn was founded in 1248, but the earliest human settlements are over 5,000 years old, making it one of the oldest capital cities of Northern Europe. Due to its strategic location, the city became a major trade hub, especially from the 14th to the 16th century, when it grew in importance as part of the Hanseatic League.
                  </p>
                    </div>
                </TabStripTab>
            </TabStrip>
        </div>
    )
}

export default PatientInfo;
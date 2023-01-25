import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const MentalHealthTest = () => {
    const listInformations = [
        {
            id: 1,
            test_name: "Depression Test",
            body: "The Depression Test is for individuals who are feeling overwhelming sadness. The test is available both in English and Bengali.",
            link : "https://hipaa.jotform.com/213553697851466",
            linkBody : "Take the Test (click here)",
        },
        {
            id: 2,
            test_name: "Anxiety Test",
            body: "Comming Soon...",
        },
        {
            id: 3,
            test_name: "PTSD Test",
            body: "Comming Soon...",
        },
        {
            id: 4,
            test_name: "Stress Test",
            body: "Are you feeling stressed lately? Take this free online test to see how your stress level is.",
            link: "https://hipaa.jotform.com/221372568905461",
            linkBody: "Take the Test (click here)",
        },
        {
            id: 5,
            test_name: "Addiction Test",
            body: "Comming Soon...",
        },
        {
            id: 6,
            test_name: "Youth Mental Health Test",
            body: "Comming Soon...",
        },
        {
            id: 7,
            test_name: "Depression, Anxiety and Stress Test (with e-report)",
            body: "Depression Anxiety Stress Scale is a self report instrument designed to measure three related negative emotional states: depression, anxiety and tension/stress. The test is available in both English and Bengali. You can also get the report immediately after the test, if you want.",
            link: "https://hipaa.jotform.com/213571628158460",
            linkBody : "Take the Test (click here)",
        },
        {
            id: 8,
            test_name: "Parent Test - Your Child's Mental Health",
            body: "Comming Soon...",
        },
        {
            id: 9,
            test_name: "Eating Disorder Test",
            body: "Comming Soon...",
        },
        {
            id: 10,
            test_name: "Bipolar Test",
            body: "The Bipolar Test is for people experiencing mood swings - unusual or extreme shifts in mood and energy.",
            link : "https://hipaa.jotform.com/213633574546460",
            linkBody : "Take the Test (click here)",
        },
        {
            id: 11,
            test_name: "Psychosis Test",
            body: "Comming Soon...",
        },
    ]

    const [open, setOpen] = useState();

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const listOfTest = []

    listInformations.forEach(info => {
        listOfTest.push(
            <div className='rounded-lg my-5'>
                <Fragment>
                    <Accordion className = 'rounded-b-lg rounded-t-lg overflow-hidden ' open={open === info.id}>
                            <AccordionHeader className='text-semibold h-16 text-lg text-left px-4 bg-white text-slate-500 hover:bg-lime-300' onClick={() => handleOpen(info.id)}>
                               {info.test_name}
                            </AccordionHeader>
                        <div className='text-left'>
                            <AccordionBody className = 'font-semibold h-auto bg-white text-md'>
                                <p className='mb-3 mx-5 text-slate-600'>{info.body}</p>
                                <a href={info.link} className='text-lime-600 pb-2 mx-5 text-md'> {info.linkBody} </a>
                            </AccordionBody>
                        </div>
                    </Accordion>
                </Fragment>
            </div>
        )
    });
    return (
        <div>
            <Navbar />
            <div>
                <div className="bg-slate-100">
                    <div className="lg:mb-20 lg:mx-32 py-10">
                        <h1 className="lg:text-[3rem] text-lg font-sans">Take a Mental Health Test</h1>
                    </div>
                </div>
                <div className="bg-slate-100">
                    <div className="lg:mx-20">
                        <div className="mx-10 grid lg:grid-cols-3 gap-5">
                            <div>
                                {listOfTest.slice(0,4)}
                            </div>
                            <div>
                                {listOfTest.slice(4,8)}
                            </div>
                            <div>
                                {listOfTest.slice(8,12)}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="my-20 italic lg:mx-32 p-5 bg-slate-100">
                        <h1 className="lg:text-lg font-serif">Please note: Online screening tools are not diagnostic instruments. You are encouraged to share your results with a physician or mental healthcare provider. LifeSpring disclaims any liability, loss, or risk incurred as a consequence, directly or indirectly, from the use and application of these screens.</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default MentalHealthTest
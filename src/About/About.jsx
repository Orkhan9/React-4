import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import CustomizedTimeline from "./CustomizedTimeline";
import PaginationButtons from "../Hok/Layout/PaginationButtons";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <InfoIcon/>
            <CustomizedTimeline/>
            <PaginationButtons/>
        </div>
    );
};

export default About;
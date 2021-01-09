import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import StyledTreeItem from "./StyledTreeItem";
import Media from "./Media";
import PaginationButtons from "../Hok/Layout/PaginationButtons";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <HomeIcon/>
            <StyledTreeItem/>
            <Media/>
            <PaginationButtons/>
        </div>
    );
};

export default Home;
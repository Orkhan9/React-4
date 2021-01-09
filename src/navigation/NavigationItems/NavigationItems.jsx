import React, {useLayoutEffect} from 'react';
import Aux from "../../Hok/Auxilary/auxiliary"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems = () => (
    <Aux>
        <ul>
            <NavigationItem link="/" exact>
                home
            </NavigationItem>
            <NavigationItem link="/about" exact>
                about
            </NavigationItem>

            <NavigationItem link="/about/1" >
                /aboutDetails
            </NavigationItem>
        </ul>
    </Aux>
)

export default navigationItems;
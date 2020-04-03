
import { useState } from "react";

import useInterval from "../hooks/useInterval";

interface SwitcherProps
{  
    children: React.ReactElement[],
    frequency: number
}

const Switcher: React.FunctionComponent<SwitcherProps> = ({ children, frequency }) =>
{
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextIndex = () => setCurrentIndex(index => ++index % children.length);

    useInterval(nextIndex, frequency);    

    return children.length > 0
         ? children[currentIndex]
         : null;
};

export default Switcher;
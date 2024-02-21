import {useContext} from 'react'
import DataContext from './context/DataContext';
import Accordion from './Accordion.js'

const Main = () => {

    const {accordion} = useContext(DataContext);
    const {setAccordion} = useContext(DataContext);
    const {isMultiSelect} = useContext(DataContext);
    const {setIsMultiSelect} = useContext(DataContext);

    const handleClick = () => {

        setIsMultiSelect(!isMultiSelect);

        if (isMultiSelect){
            const updatedAccordion = accordion.map((ele) => ({...ele, isVisible: false}));
            setAccordion(updatedAccordion);
        }
    }
    
    return (

        <main className='main'>

            <button 
                className='main__btn'
                onClick={handleClick}
            >
                {isMultiSelect ? <>Disable</> : <>Enable</>} multi-select

            </button>

            <Accordion accordion={accordion}></Accordion>
            
        </main>

    )

}

export default Main

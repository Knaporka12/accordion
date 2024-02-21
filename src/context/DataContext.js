import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const ContextProvider = ({children}) => {

    const [accordion, setAccordion] = useState([
        {
            id: 0,
            isVisible: false,
            header: 'What is an accordion?',
            content: 'Accordion in the context of websites is an interactive element that allows the user to collapse and expand sections of content to save space on the page. Typically, it is a list of section headings or titles that can be clicked to expand or collapse related content.'
        },
        {
            id: 1,
            isVisible: false,
            header: 'What is an accordion?',
            content: 'Accordion in the context of websites is an interactive element that allows the user to collapse and expand sections of content to save space on the page. Typically, it is a list of section headings or titles that can be clicked to expand or collapse related content.'
        },
        {
            id: 2,
            isVisible: false,
            header: 'What is an accordion?',
            content: 'Accordion in the context of websites is an interactive element that allows the user to collapse and expand sections of content to save space on the page. Typically, it is a list of section headings or titles that can be clicked to expand or collapse related content.'
        },
        {
            id: 3,
            isVisible: false,
            header: 'What is an accordion?',
            content: 'Accordion in the context of websites is an interactive element that allows the user to collapse and expand sections of content to save space on the page. Typically, it is a list of section headings or titles that can be clicked to expand or collapse related content.'
        },
    ]);

    const [isMultiSelect, setIsMultiSelect] = useState(false);

    const handleExpand = (eleId, isVisible) => {

        let updatedAccordion = [];
        let updatedEle = {};
        
        if (isVisible){

            updatedEle = {...accordion[eleId], isVisible: false};
            updatedAccordion = accordion.map((ele) => ele.id === eleId ? updatedEle : ele)
            
        } else {

            updatedEle = {...accordion[eleId], isVisible: true};

            isMultiSelect 
             ?  updatedAccordion = accordion.map((ele) => ele.id === eleId ? updatedEle : ele)
             :  updatedAccordion = accordion.map((ele) => ele.id === eleId ? updatedEle : {...ele, isVisible: false});
            
        }

        setAccordion(updatedAccordion);

    }

    return (

        <DataContext.Provider value = {{
            accordion,
            setAccordion,
            handleExpand,
            isMultiSelect,
            setIsMultiSelect
        }}>
            {children} 
        </DataContext.Provider>
    )

};

export default DataContext;
import AccordionEle from './AccordionEle';

const Accordion = ({accordion}) => {

    return (

    <section className='main__section'>

        {accordion.map((ele) => {
            return (
                <AccordionEle
                    key={ele.id} 
                    ele={ele}
                ></AccordionEle>
            )
        })}

    </section>

    )
}

export default Accordion

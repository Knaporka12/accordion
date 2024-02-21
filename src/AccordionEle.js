import {useContext} from 'react'
import DataContext from './context/DataContext';

const AccordionEle = ({ele}) => {

    const {handleExpand} = useContext(DataContext);

    return (

    <article className='main__article'>

        <div className='main__container--article-header'>

            <h3 className="main__h3">{ele.header}</h3>

            <button 
                className='main__btn--show-more'
                onClick={() => {handleExpand(ele.id, ele.isVisible)}}
            ></button>

        </div>

        {ele.isVisible && <p className='main__p'>{ele.content}</p>}
        

    </article>

    )

}

export default AccordionEle

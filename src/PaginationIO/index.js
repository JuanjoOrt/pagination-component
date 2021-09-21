import './Pagination.css';

const Pagination = ({...props}) => (props.pageMax > 7) ? <PaginationMoreThanSeven {...props}/> : <PaginationLessThanSeven {...props}/>
export default Pagination;



const PaginationLessThanSeven = ({pageMin = 1, pageMax, page, onClick}) => {
    const isTheActualPageTheMin = page === pageMin;
    const isTheActualPageTheMax = page === pageMax;

    const renderPages = () => {
        const boxes = []
        for (let i = pageMin; i <= pageMax; i++) {
            boxes.push(<span className={`${page === i ? 'cajita-actual' : 'cajita'}`} onClick={() => onClick(i)} >{i}</span>)
         }
         return boxes
    }

    return <div className='pagination-component'>
            {!isTheActualPageTheMin && <span className='cajita-xtrem' onClick={() => onClick(page - 1)}>{'< ANTERIOR'}</span>}
            {renderPages()}
            {!isTheActualPageTheMax && <span className='cajita-xtrem' onClick={() => onClick(page + 1)}>{'SIGUIENTE >'}</span>}
    </div>
}



const PaginationMoreThanSeven = ({pageMin = 1, pageMax, page, onClick}) => {
    const isTheActualPageTheMin = page === pageMin;
    const isTheActualPageTheMax = page === pageMax;
    const isTheActualPageAlmostMin = (page >= pageMin + 1 && page <= pageMin + 3);
    const isTheActualPageAlmostMax = (page <= pageMax - 1 && page >= pageMax - 3);
    const middlePage = !isTheActualPageTheMin && !isTheActualPageTheMax && !isTheActualPageAlmostMin && !isTheActualPageAlmostMax


    
    return <div className='pagination-component'>
        {!isTheActualPageTheMin && <span className='cajita-xtrem' onClick={() => onClick(page - 1)}>{'< ANTERIOR'}</span>}
        {isTheActualPageTheMin && <>
                <span className='cajita-actual'>{page}</span>
                <span className='cajita' onClick={() => onClick(page + 1)}>{page + 1}</span>
                <span className='cajita' onClick={() => onClick(page + 2)}>{page + 2}</span>
                <span className='cajita' onClick={() => onClick(page + 3)}>{page + 3}</span>
                <span className='cajita' onClick={() => onClick(page + 4)}>{page + 4}</span>
                <span className='cajita-ellipsis'>...</span>
                <span className='cajita' onClick={() => onClick(pageMax)}>{pageMax}</span>
            </>
        }

        {isTheActualPageAlmostMin && <>
                <span className='cajita' onClick={() => onClick(pageMin)} >{pageMin}</span>
                <span className={`${page === pageMin + 1 ? 'cajita-actual' : 'cajita'}`} onClick={() => onClick(pageMin + 1)} >{pageMin + 1}</span>
                <span className={`${page === pageMin + 2 ? 'cajita-actual' : 'cajita'}`} onClick={() => onClick(pageMin + 2)} >{pageMin + 2}</span>
                <span className={`${page === pageMin + 3 ? 'cajita-actual' : 'cajita'}`} onClick={() => onClick(pageMin + 3)} >{pageMin + 3}</span>
                <span className={`${page === pageMin + 4 ? 'cajita-actual' : 'cajita'}`} onClick={() => onClick(pageMin + 4)} >{pageMin + 4}</span>
                <span className='cajita-ellipsis'>...</span>
                <span className='cajita' onClick={() => onClick(pageMax)}>{pageMax}</span>
                </>
        }

        {middlePage 
            &&  <>
                <span className='cajita' onClick={() => onClick(pageMin)}>{pageMin}</span>
                <span className='cajita-ellipsis'>...</span> 
                <span className='cajita' onClick={() => onClick(page - 1)}>{page - 1}</span>
                <span className='cajita-actual'>{page}</span>
                <span className='cajita' onClick={() => onClick(page + 1)}>{page + 1}</span>
                <span className='cajita-ellipsis'>...</span>
                <span className='cajita' onClick={() => onClick(pageMax)}>{pageMax}</span>
            </>
        }
    
        {isTheActualPageAlmostMax && <>
                <span className='cajita' onClick={() => onClick(pageMin)} >{pageMin}</span>
                <span className='cajita-ellipsis'>...</span>
                <span className={`${page === pageMax - 4 ? 'cajita-actual' : 'cajita'}`} onClick={() => onClick(pageMax - 4)} >{pageMax - 4}</span>
                <span className={`${page === pageMax - 3 ? 'cajita-actual' : 'cajita'}`} onClick={() => onClick(pageMax - 3)} >{pageMax - 3}</span>
                <span className={`${page === pageMax - 2 ? 'cajita-actual' : 'cajita'}`} onClick={() => onClick(pageMax - 2)} >{pageMax - 2}</span>
                <span className={`${page === pageMax - 1 ? 'cajita-actual' : 'cajita'}`} onClick={() => onClick(pageMax - 1)} >{pageMax - 1}</span>
                <span className='cajita' onClick={() => onClick(pageMax)}>{pageMax}</span>
                </>
        }

        {isTheActualPageTheMax && <>
                <span className='cajita' onClick={() => onClick(pageMin)} >{pageMin}</span>
                <span className='cajita-ellipsis'>...</span>
                <span className='cajita' onClick={() => onClick(page - 4)}>{page - 4}</span>
                <span className='cajita' onClick={() => onClick(page - 3)}>{page - 3}</span>
                <span className='cajita' onClick={() => onClick(page - 2)}>{page - 2}</span>
                <span className='cajita' onClick={() => onClick(page - 1)}>{page - 1}</span>                
                <span className='cajita-actual'>{page}</span>
            </>
        }
        {!isTheActualPageTheMax && <span className='cajita-xtrem' onClick={() => onClick(page + 1)}>{'SIGUIENTE >'}</span>}
        
        
    </div>
}
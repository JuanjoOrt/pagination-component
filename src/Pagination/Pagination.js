import './Pagination.css';

export default function Pagination({pageMin, pageMax, page, onClick}){
    const isTheActualPageTheMin = page === pageMin;
    const isTheActualPageTheMax = page === pageMax;
    const isTheActualPageAlmostMin = page === pageMin + 1;
    const isTheActualPageAlmostMax = page === pageMax - 1;
    const middlePage = !isTheActualPageTheMin && !isTheActualPageTheMax && !isTheActualPageAlmostMin && !isTheActualPageAlmostMax


    
    return <div className='pagination-component'>
        <span className='cajita' onClick={() => onClick(pageMin)}>{'<<'}</span>
        {isTheActualPageTheMin && <>
                <span className='cajita-clear' />
                <span className='cajita-clear' />
                <span className='cajita-actual'>{page}</span>
                <span className='cajita' onClick={() => onClick(page + 1)}>{page + 1}</span>
                <span className='cajita' onClick={() => onClick(page + 2)}>{page + 2}</span>
            </>
        }

        {isTheActualPageAlmostMin && <>
                <span className='cajita-clear' />
                <span className='cajita' onClick={() => onClick(page - 1)} >{page - 1}</span>
                <span className='cajita-actual'>{page}</span>
                <span className='cajita' onClick={() => onClick(page + 1)} >{page + 1}</span>
                <span className='cajita' onClick={() => onClick(page + 2)} >{page + 2}</span>
                </>
        }

        {middlePage 
            &&  <>
                <span className='cajita' onClick={() => onClick(page - 2)}>{page - 2}</span>
                <span className='cajita' onClick={() => onClick(page - 1)}>{page - 1}</span>
                <span className='cajita-actual'>{page}</span>
                <span className='cajita' onClick={() => onClick(page + 1)}>{page + 1}</span>
                <span className='cajita' onClick={() => onClick(page + 2)}>{page + 2}</span>
            </>
        }
        
        {isTheActualPageAlmostMax && <>
                <span className='cajita' onClick={() => onClick(page - 2)} >{page - 2}</span>
                <span className='cajita' onClick={() => onClick(page - 1)} >{page - 1}</span>
                <span className='cajita-actual'>{page}</span>
                <span className='cajita' onClick={() => onClick(page + 1)}>{page + 1}</span>
                <span className='cajita-clear' />
                </>
        }

        {isTheActualPageTheMax && <>
                <span className='cajita' onClick={() => onClick(page - 2)}>{page - 2}</span>
                <span className='cajita' onClick={() => onClick(page - 1)}>{page - 1}</span>
                <span className='cajita-actual'>{page}</span>
                <span className='cajita-clear' />
                <span className='cajita-clear' />
            </>
        }

        <span className='cajita' onClick={() => onClick(pageMax)}>{'>>'}</span>
        
    </div>
}
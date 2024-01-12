import { LoadMoreProps } from '@/types'
import React from 'react'

function LoadMore({ setGameCount }: LoadMoreProps) {

    return (
        <div className="more-btn-wrap">
            <button className="ui-button button-normal show-more" onClick={() => setGameCount((prevCount) => prevCount + 20)}>
                <div className="button-inner">
                    Load More
                </div>
            </button>
        </div>
    )
}

export default LoadMore
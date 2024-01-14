import { TabProps } from '@/types'
import React from 'react'

function Tab({ order, desc, children, onClick, tabIndex }: TabProps) {
    return (
        <section className="step-box" onClick={() => onClick(order)}>
            {
                order == 1 ? '  ' :
                    <div className="step-arrow-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="38" viewBox="0 0 10 38" fill={order == tabIndex ? 'var(--lw941e)' : 'var(--1epl7ys)'}>
                            <path d="M10 0H0L10 37.5V0Z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="38" viewBox="0 0 10 38" fill={order == tabIndex ? 'var(--lw941e)' : 'var(--1epl7ys)'}>
                            <path d="M10 38H0L10 0.5V38Z"></path>
                        </svg>
                    </div>
            }
            {order == 1 ? <div className="step-icon-box step1-icon-box flex-center" style={{ backgroundColor: order == tabIndex ? 'var(--lw941e)' : 'var(--1epl7ys)' }}>
                {children}
            </div> : <div className="step-icon-box flex-center" style={{ backgroundColor: order == tabIndex ? 'var(--lw941e)' : 'var(--1epl7ys)' }}>
                {children}
            </div>}
            <div className="step-desc-box" style={{ backgroundColor: order == tabIndex ? 'var(--lw941e)' : 'var(--1epl7ys)' }}>
                <h2 className="step-num">Step {order}</h2>
                <h3 className="step-desc">{desc}</h3>
            </div>
            {order == 4 ? '' : <div className="step-arrow-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="38" viewBox="0 0 10 38" fill={order == tabIndex ? 'var(--lw941e)' : 'var(--1epl7ys)'}>
                    <path d="M0 37.5H10L0 0V37.5Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="38" viewBox="0 0 10 38" fill={order == tabIndex ? 'var(--lw941e)' : 'var(--1epl7ys)'}>
                    <path d="M0 0.5H10L0 38V0.5Z"></path>
                </svg>
            </div>}
        </section>
    )
}

export default Tab
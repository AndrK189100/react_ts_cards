import { Children } from 'react'
import './card.css'
export default function Card({title, text, children}:{title: string, text: string, children: React.ReactNode}): React.ReactNode {

    return(
        <>
        <div className="card">
            {children}
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <div className='card-text'>{text}</div>
                <a href='#' className='btn btn-primary'>Go Somewhere</a>
            </div>

        </div>
        </>
    )
}
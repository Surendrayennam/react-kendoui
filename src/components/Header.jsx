import React from 'react'
import MenuNavContainer from './MenuNavContainer.jsx'

export const Header = (props) => {
    return (
        <div className='container-fluid p-0'>
            <div className="d-flex border-bottom px-4 py-2 app-header">
                <div className="d-flex">
                    <div className='project-name d-flex'>
                        <span className="mx-0 my-auto logo">
                            {props.projectName}
                        </span>
                    </div>
                </div>
                <div className='d-flex ml-auto nav'>
                    <MenuNavContainer />
                </div>
            </div>
        </div>
    )
}
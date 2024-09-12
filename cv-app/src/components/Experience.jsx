import React from 'react'
import Input from './Input'
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'

const Experience = () => {
    return (
        <>
            <div className="input">
                <Input label="Company Name" type="text"></Input>
                <Input label="Position" type="text"></Input>
                <Input label="Start Date" type="date"></Input>
                <Input label="End Date" type="date"></Input>
                <Input label="Description" type="text"></Input>
            </div>
            <div className="button-row">
                <AddButton />
                <DeleteButton />
            </div>
        </>
    )
}

export default Experience
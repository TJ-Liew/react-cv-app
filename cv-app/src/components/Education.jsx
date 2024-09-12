import React from 'react'
import Input from './Input'
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'

const Education = () => {
    return (
        <>
            <div className="input">
                <Input label="Institute Name" type="text"></Input>
                <Input label="Degree" type="text"></Input>
                <Input label="Start Date" type="date"></Input>
                <Input label="End Date" type="date"></Input>
            </div>
            <div className="button-row">
                <AddButton />
                <DeleteButton />
            </div>
        </>
    )
}

export default Education
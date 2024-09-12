import React from 'react'
import Input from './Input'
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'

const Personal = () => {
    return (
        <>
            <div className="input">
                <Input label="Name" type="text"></Input>
                <Input label="Email" type="email"></Input>
                <Input label="Phone Number" type="tel"></Input>
                <Input label="Summary" type="text"></Input>
            </div>
            <div className="button-row">
                <AddButton/>
                <DeleteButton/>
            </div>
        </>
    )
}

export default Personal
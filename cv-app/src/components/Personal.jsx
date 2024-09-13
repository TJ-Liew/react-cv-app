import React from 'react'
import Input from './Input'
import TextArea from './TextArea'

const Personal = ({state, setState}) => {
    return (
        <>
            <div className="input">
                <Input label="Name" type="text" index={0} state={state} setState={setState} property="name"></Input>
                <Input label="Email" type="email" index={0} state={state} setState={setState} property="email"></Input>
                <Input label="Phone Number" type="tel" index={0} state={state} setState={setState} property="phoneNumber"></Input>
                <TextArea label="Summary" type="text" index={0} state={state} setState={setState} property="summary"></TextArea>
            </div>
        </>
    )
}

export default Personal
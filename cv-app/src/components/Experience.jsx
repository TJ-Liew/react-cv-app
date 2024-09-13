import React from 'react'
import Input from './Input'
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'

const Experience = ({ state, setState }) => {

    function addExperience() {
        const newState = [...state];
        newState.push({
            companyName: '',
            position: '',
            startDate: '',
            endDate: '',
            description: '',
        });
        setState(newState);
    }

    return (
        <>
            {state.map((experience, index) => {
                return (
                    <div className="input">
                        <Input label="Company Name" type="text" property="companyName" state={state} setState={setState} index={index}></Input>
                        <Input label="Position" type="text" property="position" state={state} setState={setState} index={index}></Input>
                        <Input label="Start Date" type="date" property="startDate" state={state} setState={setState} index={index}></Input>
                        <Input label="End Date" type="date" property="endDate" state={state} setState={setState} index={index}></Input>
                        <Input label="Description" type="text" property="description" state={state} setState={setState} index={index}></Input>
                        <div className="separator"></div>
                        <DeleteButton index={index} state={state} setState={setState}/>
                    </div>
                )
            })}
            <div className="button-row">
                <AddButton handleClick={addExperience} />
            </div>
        </>
    )
}

export default Experience
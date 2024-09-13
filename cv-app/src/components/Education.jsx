import React from 'react'
import Input from './Input'
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'

const Education = ({ state, setState }) => {

    //add blank item for editing
    function addEducation() {
        const newState = [...state];
        newState.push({
            instituteName: '',
            degree: '',
            startDate: '',
            endDate: '',
        });
        setState(newState);
    }


    return (
        //map inputs and delete button for each item in the education array
        <>
            {state.map((education, index) => {
                return (
                    <div className="input">
                        <Input label="Institute Name" type="text" property="instituteName" index={index} state={state} setState={setState}></Input>
                        <Input label="Degree" type="text" property="degree" index={index} state={state} setState={setState}></Input>
                        <Input label="Start Date" type="date" property="startDate" index={index} state={state} setState={setState}></Input>
                        <Input label="End Date" type="date" property="endDate" index={index} state={state} setState={setState}></Input>
                        <DeleteButton index={index} state={state} setState={setState}/>
                        <div className="separator"></div>
                    </div>
                )

            })}
            <div className="button-row">
                <AddButton handleClick={addEducation} />
            </div>

        </>
    )
}

export default Education
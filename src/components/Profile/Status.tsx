import React, {useEffect, useState} from 'react'


type PropsType = {
    status: string
    updateStatus: ((status: string) => void)
}

export const Status: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const onActivateEditMode = () => {
        setEditMode(true)
    }

    const onDeActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }


    return (

             <div>

                    {
                        !editMode &&
                        <div>
                            <span onDoubleClick={onActivateEditMode}>{status ? status : 'Enter status'}</span>
                        </div>
                    }
                    {
                        editMode &&
                        <div>
                            <input onChange={onChangeStatus} value={status} autoFocus={true}
                                   onBlur={onDeActivateEditMode}/>
                        </div>
                    }

                </div>



    )
}




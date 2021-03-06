import {useState} from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className='add-form'>
           <div className='form-control'>
               <label>Task</label>
               <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
           </div> 
           <div className='form-control form-control-check'>
               <label>Day & Time</label>
               <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
           </div> 
           <div className='form-control'>
               <label>Set Reminder</label>
               <input type='checkbox' value={reminder} onChange={(e) => setReminder(currentTarget.checked)}></input>
           </div> 

           <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask

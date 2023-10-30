import React, { useEffect, useState } from 'react'
import { days, hours , monthNames} from '../Utils/date';
import DaysComponent from './SubComponents/DaysComponent';
import { AllModalComponents } from './SubComponents/AllModalComponents';
export const CalendarContainer = ({value, setValue}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false); 
  const [showEditModal, setShowEditModal] = useState(false)
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [selectContainer, setSelectContainer] = useState("");
  const [alltaskContainer, setAlltaskContainer] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  useEffect(() => {
    if (value) {
      const selectedDate = new Date(value);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);

      if (selectedDate < startDate || selectedDate > endDate) {
        setStartDate(new Date(value));
      }
    }
  }, [value]);

  const dates = Array.from({length: 7}, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  const containerHandler = (e)=>{
    setShowModal(true)
    console.log(e.target.id)
    setSelectContainer(e.target.id)
  }

  const saveahandler = () =>{
    if(title){
      const filterContainer = alltaskContainer.filter((container)=>{
        return container.selectContainerName === selectContainer
      })
      if(filterContainer.length){
        console.log('I am running')
        filterContainer[0].task.push({
          id:  Math.floor(10000+Math.random()*10000),
          title,
          description
        })
      let updateFilter = alltaskContainer.filter((container)=>{
        return container.selectContainerName != selectContainer
      })
        updateFilter.push(filterContainer[0])
        setAlltaskContainer(updateFilter)
        setTitle("")
        setDescription("")
      }else{
        setAlltaskContainer((perv)=>{
          return[...perv,  {
            selectContainerName: selectContainer,
            task:[
              {
                id: Math.floor(10000+Math.random()*10000),
                title,
                description
              }
            ]
          }]
        })
        setTitle("")
        setDescription("")
      }
    }
    setShowModal(false)
  }



  const editModalController =(title, description) =>{
    setTitle(title)
    setDescription(description)
    setShowEditModal(true);
  }

  const editSaveHandler = ()=>{
    const filterContainer = alltaskContainer.filter((container)=>{return container.selectContainerName == selectContainer})
    if(filterContainer.length){
    const filterTask = filterContainer[0].task.filter((data)=>{return data.id != currentTask})
    filterTask.push({
      id: currentTask,
      title,
      description
    })
    filterContainer[0].task = filterTask
    let updateFilter = alltaskContainer.filter((container)=>{
      return container.selectContainerName != selectContainer
    })
    updateFilter.push(filterContainer[0])
    setAlltaskContainer(updateFilter)
    setShowEditModal(false)
  }
  }
  return (
    <div className='col-span-8 row-span-5 grid grid-cols-8 grid-rows-25 border border-gray-300 overflow-y-scroll' style={{ gridTemplateColumns: '45px repeat(7, 1fr)' }}>
      <div className='col-span-1'></div>
      <DaysComponent dates={dates} startDate={startDate} days={days} monthNames={monthNames} />
      {hours.map((hour, index) => (
        <React.Fragment key={index}>
          <div className='border border-gray-300 h-[180px]'>
            {hour}
          </div>
          {dates.map((date, index) => (
            <div 
              key={index} 
              id={`${date.getDate()}_${monthNames[date.getMonth()]}_${hour}`}
              onClick={containerHandler}
              className='border border-gray-300 h-[180px] p-1'
            >
                {
                alltaskContainer.find(container => container.selectContainerName === `${date.getDate()}_${monthNames[date.getMonth()]}_${hour}`)?.task.map((task, index) => { 
                  return <div id={task.id} key={task.id} className='mt-1 w-full rounded-lg bg-[#1a73e8] text-white cursor-pointer p-2' onClick={(e)=>{     
                    e.stopPropagation();
                    setCurrentTask(task.id)
                    setSelectContainer(`${date.getDate()}_${monthNames[date.getMonth()]}_${hour}`);
                    editModalController(task.title ,task.description)}}>
                     {task.title} {task.description}
                  </div>
                })
                }

            </div>
          ))}
        </React.Fragment>
      ))}
              <AllModalComponents title={title} setTitle={setTitle} description={description} setDescription={setDescription} saveahandler={saveahandler} showEditModal={showEditModal} setShowEditModal={setShowEditModal} setShowModal={setShowModal} showModal={showModal} editSaveHandler={editSaveHandler} />
    </div>
  )
}

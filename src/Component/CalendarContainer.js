import React, { useEffect, useState } from 'react'
import { days, hours , monthNames} from '../Utils/date';
import DaysComponent from './SubComponents/DaysComponent';
import { AllModalComponents } from './SubComponents/AllModalComponents';
import { Draggable,Droppable, DragDropContext } from "react-beautiful-dnd";

export const CalendarContainer = ({value, setValue, setShowModal, showModal,currentSlected}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [showEditModal, setShowEditModal] = useState(false);
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [selectContainer, setSelectContainer] = useState(currentSlected);
  const [alltaskContainer, setAlltaskContainer] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  useEffect(() => {
    // console.log(localStorage.getItem('alltaskContainer'))
    if(localStorage.getItem('alltaskContainer')){
      setAlltaskContainer(JSON.parse(localStorage.getItem('alltaskContainer')))
    }
  }, [])

  useEffect(() => {
    // Get the element you want to scroll to
    const element = document.getElementById(selectContainer);
  
    // Check if the element exists
    if (element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectContainer]);

  useEffect(() => {
    if (value) {
      const selectedDate = new Date(value);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);

      if (selectedDate < startDate || selectedDate > endDate) {
        setStartDate(new Date(value));
      }
    }
  }, [value, startDate]);




  useEffect(() => {
    if(alltaskContainer){
    localStorage.setItem('alltaskContainer', JSON.stringify(alltaskContainer))
    }
  }, [alltaskContainer])

  const dates = Array.from({length: 7}, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  const containerHandler = (e)=>{
    setShowModal(true)
    // console.log(e.target.id)
    setSelectContainer(e.target.id)
  }

  const saveahandler = () =>{
    if(title){
      const filterContainer = alltaskContainer.filter((container)=>{
        return container.selectContainerName === selectContainer
      })
      if(filterContainer.length){
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
    if(title){
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
      setTitle("")
      setDescription("")
    }

  }
  }


  const deleteHandler = (id) => {
    const updatedContainers = alltaskContainer.map((container) => {
      if (container.selectContainerName === selectContainer) {
        return {
          ...container,
          task: container.task.filter((task) => task.id !== currentTask),
        };
      } else {
        return container;
      }
    });
    setTitle('');
    setDescription('');
    setShowEditModal(false) 
    setAlltaskContainer(updatedContainers);
  };
  


  const dragEndHandler = (e) => {
    if(e){
      const sourceIdContainer = e.source.droppableId;       //"30_Oct_1AM"
      const destinationIdContainer = e.destination.droppableId; //"31_Oct_1AM"
      const draggableId = e.draggableId;          // 12232
  
      // If source and destination are same
      if (sourceIdContainer === destinationIdContainer) return;
  
      // Find source and destination containers
      const sourceContainer = alltaskContainer.find(container => container.selectContainerName === sourceIdContainer);
      const destinationContainer = alltaskContainer.find(container => container.selectContainerName === destinationIdContainer);
  
      // Find task in source container
      const taskIndex = sourceContainer.task.findIndex(task => task.id === draggableId);
      const [task] = sourceContainer.task.splice(taskIndex, 1);
  
      // Add task to destination container
      if (destinationContainer) {
        destinationContainer.task.push(task);
      } else {
        alltaskContainer.push({
          selectContainerName: destinationIdContainer,
          task: [task]
        });
      }
  
      // Update state
      setAlltaskContainer([...alltaskContainer]);
    }
  }


  return (
    <div className='col-span-8 row-span-5 grid grid-cols-8 grid-rows-25 overflow-y-scroll' style={{ gridTemplateColumns: '45px repeat(7, 1fr)' }}>
    <DragDropContext onDragEnd={dragEndHandler}>
      <div className='col-span-1'></div>
      <DaysComponent dates={dates} startDate={startDate} days={days} monthNames={monthNames} />

      {hours.map((hour, index) => (
        <React.Fragment key={index}>
          <div className='border-t border-r border-[#dadce0] h-[100px]'>
            <span className='text-[#70757a]'>{hour}</span>
          </div>
          {dates.map((date, index) =>{
            return (<Droppable droppableId={`${date.getDate()}_${monthNames[date.getMonth()]}_${hour}`}>
            {(provided, snapshot) => (
              <div 

              key={index} 
              id={`${date.getDate()}_${monthNames[date.getMonth()]}_${hour}`}
              onClick={containerHandler}
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`border-2 ${selectContainer==`${date.getDate()}_${monthNames[date.getMonth()]}_${hour}`? 'border-violet-500':'border-[#dadce0]'} h-[100px] p-1`}
            >
                {
                alltaskContainer.find(container => container.selectContainerName === `${date.getDate()}_${monthNames[date.getMonth()]}_${hour}`)?.task.map((task, index) => { 
                  return (
                  <Draggable draggableId={`${task.id}`} index={index}>    
                  {(provided, snapshot) => (             
                  <div id={task.id} key={task.id} className='mt-1 w-full rounded-lg bg-[#1a73e8] text-white cursor-pointer p-2' 
                  onClick={(e)=>{     
                    e.stopPropagation();
                    setCurrentTask(task.id)
                    setSelectContainer(`${date.getDate()}_${monthNames[date.getMonth()]}_${hour}`);
                    editModalController(task.title ,task.description)}}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >
                    {task.title.length > 15 ? task.title.slice(0, 13) + '...' : task.title}
{/* =                     {task.title} */}
                     {provided.placeholder}

                  </div>
                  )}
                  </Draggable>)
                })
                }
                {provided.placeholder}
            </div>
            )}
            </Droppable>

          )})}
      
        </React.Fragment>
      ))}
      
              <AllModalComponents deleteHandler={deleteHandler} title={title} setTitle={setTitle} description={description} setDescription={setDescription} saveahandler={saveahandler} showEditModal={showEditModal} setShowEditModal={setShowEditModal} setShowModal={setShowModal} showModal={showModal} editSaveHandler={editSaveHandler} />
              </DragDropContext>
    </div>
  )
}

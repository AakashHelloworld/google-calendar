import React from 'react'
import {Input} from "../../Form/Input"
import { Button } from '../../Form/Button';
import Modal from '../../Form/Modal';
import { RxCross2 } from "react-icons/rx";
import { MdModeEditOutline,MdDelete } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";


export const AllModalComponents = ({showModal, title, setTitle, description, setDescription, saveahandler, showEditModal, setShowEditModal, setShowModal, editSaveHandler,deleteHandler}) => {
  const [editTrue, setEditTrue] = React.useState(false);

  return (
    <>
              {showModal && (
            <Modal>
                <div className={'flex justify-end bg-[#f1f3f4] p-2'}>
                <RxCross2 className={ 'cursor-pointer font-bold text-xl text-black'} onClick={() => {
                setTitle('');
                setDescription('');
                setShowModal(false)}} />

                </div>
              <div className='pl-12 pr-4 flex flex-col' style={{touchAction: 'auto'}}>
              <Input className={'border-b-2	border-blue-600 outline-none mb-2'} value={title} placeholder={'Title'} type={'text'} changeHandler={(e) => setTitle(e.target.value)}/>
              <textarea className={' resize-none mt-2 w-72 p-2 outline-none h-24 bg-[#f1f3f4]	'} value={description} placeholder={'Description'} type={'text'}
                onChange={(e) => {
                  setDescription(e.target.value)}}/>

              <div className='mt-6 flex justify-end'>
              <Button className={'bg-blue-600 mt-2 text-white'} clickHandler={saveahandler}>Save</Button>
              </div>
              </div>
            </Modal>
      )}
      {
       ( showEditModal ) && (
          <Modal>
          <div className={'flex justify-end bg-[#f1f3f4] p-2 gap-x-2'}>

                <AiOutlineDelete style={{color: '#5f6368'}} className={ 'cursor-pointer font-bold text-xl '} onClick={deleteHandler} />
                <MdModeEditOutline style={{color: '#5f6368'}} onClick={() => setEditTrue(!editTrue)} className={ 'cursor-pointer font-bold text-xl '} />
                <RxCross2 style={{color: '#5f6368'}} className={'cursor-pointer font-bold text-xl'} onClick={() => {
              setTitle('');
              setDescription('');
              setShowEditModal(false)}} />
                </div>
                <div style={{ touchAction: 'auto' }} className='pl-12 pr-4 flex flex-col'>
                {
                  editTrue? (
                    <>
                    <Input className={'border-b-2	border-blue-600 outline-none mb-2'} value={title} placeholder={'Title'} type={'text'} changeHandler={(e) => setTitle(e.target.value)}/>
                    <textarea className={' resize-none mt-2 w-72 p-2 outline-none h-24 bg-[#f1f3f4]	'} value={description} placeholder={'Description'} type={'text'}
                    onChange={(e) => {
                    setDescription(e.target.value)}}/>
                </>
                  ): (
                    <>
                    <p className='mb-2 w-72 p-2'><span className='font-semibold	'>Title:</span> {title}</p>
                    <p className='mb-2 w-72 p-2'><span className='font-semibold'>Description:</span> {description}</p>
                    </>
                  )
                }
            <div className='mt-6 flex justify-end'>
            <Button className={'bg-blue-600 mt-2 text-white'} clickHandler={editSaveHandler}>Save</Button>
            </div>
            </div>
          
          </Modal>
        )
      }
    </>
  )
}

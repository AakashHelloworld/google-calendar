import React from 'react'
import {Input} from "../../Form/Input"
import { Button } from '../../Form/Button';
import Modal from '../../Form/Modal';
export const AllModalComponents = ({showModal, title, setTitle, description, setDescription, saveahandler, showEditModal, setShowEditModal, setShowModal, editSaveHandler,deleteHandler}) => {
  return (
    <>
              {showModal && (
            <Modal>
              <Input value={title} placeholder={'Title'} type={'text'} changeHandler={(e) => setTitle(e.target.value)}/>
              <Input value={description} placeholder={'Description'} type={'text'}
                changeHandler={(e) => {
                  setDescription(e.target.value)}}/>
              <div className='mt-6 flex gap-x-4'>
              <Button className={'bg-blue-600 mt-2 text-white'} clickHandler={saveahandler}>Save</Button>
              <Button className={'bg-blue-600 mt-2 text-white'} clickHandler={() => {
                setTitle('');
                setDescription('');
                setShowModal(false)}}>Cancel</Button>
              </div>
            </Modal>
      )}
      {
       ( showEditModal ) && (
          <Modal>

            <Input value={title} placeholder={'Title'} type={'text'} changeHandler={(e) => setTitle(e.target.value)}/>
            <Input value={description} placeholder={'Description'} type={'text'}
              changeHandler={(e) => {
                setDescription(e.target.value)}}/>
            <div className='mt-6 flex gap-x-4'>
            <Button className={'bg-blue-600 mt-2 text-white'} clickHandler={editSaveHandler}>Save</Button>
            <Button className={'bg-blue-600 mt-2 text-white'} clickHandler={() => {
              setTitle('');
              setDescription('');
              setShowEditModal(false)}}>Cancel</Button>
              <Button className={'bg-blue-600 mt-2 text-white'} clickHandler={deleteHandler}>Delete</Button>
            </div>
          
          </Modal>
        )
      }
    </>
  )
}

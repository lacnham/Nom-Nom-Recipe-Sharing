import { useState } from 'react'
import styles from '../../styles/UserProfile/UpdateForm.module.css'
import axios from 'axios'

export const UpdateForm = props => {
  // const [name, setName] = useState(props.collectionData.name)
  // const [note, setNote] = useState(props.collectionData.note)
  const [name, setName] = useState(props.collection.name)
  const [note, setNote] = useState(props.collection.note)
  // const [image, setImage] = useState('')
  const [message, setMessage] = useState('')

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangeNote = e => {
    setNote(e.target.value)
  }

  let config = {
    method: 'PUT',
    url: `http://localhost:3000/collection/${props.collection.collection_id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.accesstoken
    },
    data: {
      name: name,
      note: note
    }
  }

  const refreshPage = () => {
    window.location.reload(false)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.request(config)
      setMessage(res.data.message)
      refreshPage()
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseButton = () => {
    console.log(typeof props.setUpdateForm)
    props.setUpdateForm(<div></div>)
    props.setCurrentStyle('none')
    // alert('clicked')
  }

  return (
    <form className={`${styles.updateForm} ${styles.flexColumn}`}>
      <div
        type="button"
        className={`${styles.closeButton}`}
        onClick={handleCloseButton}
      >
        X
      </div>
      <div className={styles.formTitle}>Update collection</div>

      <div className={`${styles.updateImage}`}></div>
      <div className={`${styles.updateName} ${styles.flexRow}`}>
        <label className={`${styles.label}`}>Name</label>
        <input
          className={styles.inputField}
          type="text"
          id="name"
          name="name"
          value={name}
          // placeholder={name}
          onChange={handleChangeName}
        />
      </div>
      <div className={`${styles.updateNote} ${styles.flexColumn}}`}>
        <label className={`${styles.noteLabel}`}>Note</label>
        <textarea
          // rows={3}
          id="note"
          name="note"
          value={note}
          onChange={handleChangeNote}
          // rows="5"
        ></textarea>
      </div>
      {/* <div className={`${styles.submitButton}`}> */}
      <button
        className={`${styles.submitButton}`}
        type="submit"
        onClick={handleSubmit}
      >
        Update
      </button>
      {/* </div> */}
    </form>
  )
}

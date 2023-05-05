import { useState } from 'react'
import styles from '../../styles/UserProfile/UpdateForm.module.css'
import axios from 'axios'

export const UpdateForm = props => {
  // const [name, setName] = useState(props.collectionData.name)
  // const [note, setNote] = useState(props.collectionData.note)
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')

  // let config = {
  //   method: 'post',
  //   url: `http://localhost:3000/collection/${props.collectionData.id}/update`,
  //   header: {
  //     Authorization: localStorage.accesstoken
  //   },
  //   data: {
  //     name: name,
  //     note: note
  //   }
  // }

  // const handleSubmit = async () => {
  //   try {
  //     const res = await axios.request(config)
  //     setMessage(res.data.msg)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangeNote = e => {
    setNote(e.target.value)
  }

  console.log(name + ' ' + note)

  return (
    <form className={`${styles.updateForm} ${styles.flexColumn}`}>
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
        // onClick={handleSubmit}
      >
        Update
      </button>
      {/* </div> */}
    </form>
  )
}

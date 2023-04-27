import React, { useState } from 'react'
import styles from '../styles/PublishRecipe.module.css'
import Header from '../components/Header'
import { useEffect } from 'react'

const PublishRecipe = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [origin, setOrigin] = useState('')
  const [duration, setDuration] = useState('')
  const [servings, setServings] = useState('')
  const [ingredients, setIngredients] = useState([{ name: '', custom: false }])

  useEffect(() => {
    console.log(image)
  })

  const handleIngredientChange = (igd, event) => {
    const newIngredients = [...ingredients]
    if (event.target.name === 'name') {
      newIngredients[igd].name = event.target.value
    } else if (event.target.name === 'custom') {
      newIngredients[igd].custom = event.target.checked
      newIngredients[igd].name = ''
    }
    setIngredients(newIngredients)
  }

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', custom: false }])
  }

  const handleRemoveIngredient = igd => {
    const newIngredients = [...ingredients]
    newIngredients.splice(igd, 1)
    setIngredients(newIngredients)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    // TODO add header and change page size
    <div>
      <Header></Header>
      <div className={styles.container}>
        <form className={styles.publish} onSubmit={handleSubmit}>
          <div className={styles.formControl}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.formControl}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              Image:
              {image ? (
                <>
                  <span>{image.name}</span>
                </>
              ) : (
                <span>Upload your image</span>
              )}
              <input
                style={{ display: 'none' }}
                type="file"
                onChange={e => {
                  setImage(e.target.files[0])
                  console.log(e.target.files[0].name)
                }}
              />
              <div style={{ marginLeft: 'auto' }}>
                <i className="fa-solid fa-image"></i>
              </div>
            </label>
          </div>
          {image ? (
            <div>
              <img
                
                src={URL.createObjectURL(image)}
              />
            </div>
          ) : null}

          <div className={styles.formControl}>
            <label>
              Description:
              <br />
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.formControl}>
            <label>
              Origin:
              <input
                type="text"
                value={origin}
                onChange={e => setOrigin(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.oneline}>
            <div className={styles.formControl}>
              <label>
                Duration:
                <input
                  type="text"
                  value={duration}
                  onChange={e => setDuration(e.target.value)}
                />
              </label>
            </div>
            <div className={styles.formControl2}>
              <label>
                Servings:
                <input
                  type="text"
                  value={servings}
                  onChange={e => setServings(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className={styles.formControl}>
            <label>
              Ingredients:
              <ul>
                {ingredients.map((ingredient, igd) => (
                  <div key={igd}>
                    <datalist id="igdList">
                      <option value="Salt" />
                      <option value="Sugar" />
                      <option value="Meat" />
                    </datalist>
                    <div className={styles.inputIgd}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter ingredients"
                        list="igdList"
                        autoComplete="off"
                      />
                      <i
                        className={`${
                          styles.delete
                        } ${'fa-solid fa-delete-left'}`}
                        onClick={() => handleRemoveIngredient(igd)}
                      ></i>
                    </div>
                  </div>
                ))}
              </ul>
              <div
                className={styles.addIgd}
                type="button"
                onClick={handleAddIngredient}
              >
                <i className="fa-solid fa-circle-plus"></i>
                <span> Add More Ingredients </span>
              </div>
            </label>
          </div>
          <div className={styles.btnWrap}>
            <button className={styles.submitBtn} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PublishRecipe

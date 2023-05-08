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
  const [unit, setUnit] = useState('')

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

  const handleUnit = event => {
    setUnit(event.target.value)
  }

  let config = {
    method: 'post',
    url: 'http://localhost:3000/recipe',
    headers: {
      Authorization: localStorage.accessToken
    },
    data: {
      name: name,
      servingSize: servings,
      duration: duration,
      imageLink: image,
      description: description
    }
  }

  const handleCreateRecipe = async () => {
    // console.log('Access token ' + localStorage.accesstoken)
    try {
      const res = await axios.request(config)
    } catch (error) {
      console.log(error)
    }

    // console.log('Collection id ' + props.collection.collection_id)
    // console.log('Recipe id ' + props.recipe.recipe_id)
    // handleBlur()
    // if (isSuccess) {
    //   console.log(message)
    // }

    // console.log('Collection id' + props.collection.collection_id)
    // console.log(props.recipe.recipe_id)
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleCreateRecipe()
  }

  return (
    // TODO add header and change page size
    <div>
      <Header></Header>
      <div className={styles.container}>
        <form className={styles.publish} onSubmit={handleSubmit}>
          <div className={`${styles.formControl} ${styles.boxShadowPurple} `}>
            <div className={`${styles.inputFieldContainer} ${styles.flexRow}`}>
              <label className={`${styles.fieldLabel}`}>Name</label>
              <input
                type="text"
                value={name}
                className={`${styles.inputField}`}
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>

          <div className={`${styles.formControl} ${styles.boxShadowPurple} `}>
            <div className={`${styles.inputFieldContainer} ${styles.flexRow}`}>
              <label className={`${styles.fieldLabel}`}>Image</label>
              {image ? (
                <>
                  <span>{image.name}</span>
                </>
              ) : (
                <span>Upload your image</span>
              )}
              <input
                style={{ visibility: 'hidden' }}
                className={`${styles.inputField}`}
                type="file"
                onChange={e => {
                  setImage(e.target.files[0])
                  console.log(e.target.files[0].name)
                }}
              />
              <div style={{ marginLeft: 'auto' }}>
                <i className="fa-solid fa-image"></i>
              </div>
            </div>
          </div>
          {image ? (
            <div>
              <img src={URL.createObjectURL(image)} />
            </div>
          ) : null}

          <div className={`${styles.formControl} ${styles.boxShadowPurple} `}>
            <div className={styles.title}>Description</div>
            <textarea
              className={`${styles.textArea}`}
              value={description}
              rows={12}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className={styles.oneline}>
            <div className={`${styles.formControl} ${styles.boxShadowPurple} `}>
              <div
                className={`${styles.inputFieldContainer} ${styles.flexRow}`}
              >
                {/* <label className={`${styles.fieldLabel}`}>Origin</label> */}
                <input
                  className={`${styles.inputField}`}
                  type="text"
                  value={origin}
                  placeholder="Origins"
                  onChange={e => setOrigin(e.target.value)}
                />
              </div>
            </div>
            <div className={`${styles.formControl} ${styles.boxShadowPurple} `}>
              <div
                className={`${styles.inputFieldContainer} ${styles.flexRow}`}
              >
                {/* <label className={`${styles.fieldLabel}`}>Duration</label> */}
                <input
                  className={`${styles.inputField}`}
                  type="text"
                  value={duration}
                  placeholder="Duration"
                  onChange={e => setDuration(e.target.value)}
                />
              </div>
            </div>
            <div className={`${styles.formControl} ${styles.boxShadowPurple} `}>
              <div
                className={`${styles.inputFieldContainer} ${styles.flexRow}`}
              >
                {/* <label className={`${styles.fieldLabel}`}>Servings</label> */}
                <input
                  className={`${styles.inputField}`}
                  type="text"
                  value={servings}
                  placeholder="Servings"
                  onChange={e => setServings(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.formControl}>
            <div className={styles.title}>Ingredients:</div>
            <ul className={`${styles.addIngredientContainer}`}>
              {ingredients.map((ingredient, igd) => (
                <div key={igd}>
                  <datalist id="igdList">
                    <option value="Salt" />
                    <option value="Sugar" />
                    <option value="Meat" />
                  </datalist>
                  <div
                    className={`${styles.ingredientInputContainer} ${styles.flexRow} ${styles.inputFieldContainer}`}
                  >
                    <input
                      type="text"
                      className={`${styles.inputField}`}
                      name="name"
                      placeholder="Enter ingredients"
                      list="igdList"
                      autoComplete="off"
                      // style={{ borderRight:  2px solid #ff8600 }}
                    />

                    <input
                      type="text"
                      className={`${styles.inputField}`}
                      name="quantity"
                      placeholder="Quantity"
                      // autoComplete='on'
                    />
                    <select
                      value={unit}
                      onChange={handleUnit}
                      className={`${styles.inputField}`}
                    >
                      <option value="one">one</option>
                      <option value="two">two</option>
                      <option value="three">three</option>
                    </select>
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

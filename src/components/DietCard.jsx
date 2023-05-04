import styles from '../styles/DietCard.module.css'
import React from 'react'

class DietCardContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isChecked: this.props.data.includes(this.props.title) }
    this.handleChange = this.handleChange.bind(this)
    this.handleDivClick = this.handleDivClick.bind(this)
  }

  handleDivClick() {
    this.setState({ isChecked: !this.state.isChecked })
  }

  handleChange(event) {
    this.setState({ isChecked: event.target.checked })
  }

  render() {
    const checkedValue = this.state.isChecked ? 'checked' : ''
    return (
      <div
        id={checkedValue}
        className={`${styles.dietCardContent} ${
          this.state.isChecked ? styles.active : ''
        }`}
        onClick={this.handleDivClick}
      >
        <div className={styles.dietCardTitle}>
          {/* <div>
            {this.props.data.map(value => (
              <p key={value}>{value}</p>
            ))}
          </div> */}
          <p>{this.props.title}</p>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.isChecked}
          />
          {this.state.isChecked ? (
            <i className="fa-regular fa-circle-check"></i>
          ) : (
            <i className="fa-regular fa-circle"></i>
          )}
          <span className="checkbox__icon"></span>
        </div>
        <p className={styles.LocationLabel}>{this.props.location}</p>
      </div>
    )
  }
}

export default class DietCard extends React.Component {
  render() {
    return (
      <div
        className={`${styles.dietCard} ${
          this.props.active ? styles.active : ''
        }`}
      >
        <DietCardContent
          title={this.props.title}
          location={this.props.location}
          description={this.props.description}
          category={this.props.category}
          data={this.props.data}
        />
      </div>
    )
  }
}

DietCard.defaultProps = {
  title: 'Long term',
  category: ['Plans'],
  location: 'Create a vision. To get started, imagine your life.',
  description: '',
  active: false
}

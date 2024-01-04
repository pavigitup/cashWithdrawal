import './index.css'

const DenominationItem = props => {
  const {denominationsLists, decreaseBtn} = props
  const {id, value} = denominationsLists

  const decreaseCase = () => {
    decreaseBtn(value)
  }

  return (
    <li className="btn-item">
      <button type="button" onClick={decreaseCase} key={id}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

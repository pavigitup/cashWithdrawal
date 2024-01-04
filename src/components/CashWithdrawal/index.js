import DenominationItem from '../DenominationItem/index'
import './index.css'

const CashWithdrawal = props => {
  const {count, denominationsList, decreaseBtn} = props

  return (
    <div className="cash-con">
      <div className="head-con">
        <div className="icon">P</div>
        <div>
          <h1 className="heading-name">Sarah Williams</h1>
        </div>
      </div>
      <div className="balance-view">
        <div className="balance-para">
          <p>Your Balance</p>
        </div>
        <div className="balance-count">
          <p className="balance-head">{count}</p>
          <p className="balance-para-1">In Rupees</p>
        </div>
      </div>
      <div className="balance-con">
        <p className="balance-head">Withdraw</p>
        <p className="balance-para">CHOOSE SUM (IN RUPEES)</p>
      </div>
      <ul className="btn-con">
        {denominationsList.map(eachValue => (
          <DenominationItem
            denominationsLists={eachValue}
            decreaseBtn={decreaseBtn}
            key={eachValue.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default CashWithdrawal

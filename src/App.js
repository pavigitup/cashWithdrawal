import {Component} from 'react'
import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const initialDenominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class App extends Component {
  state = {count: 2000, denominationsList: initialDenominationsList}

  decreaseBtn = value => {
    this.setState(prevState => ({count: Math.max(prevState.count - value, 0)}))
  }

  render() {
    const {count, denominationsList} = this.state

    return (
      <body>
        <CashWithdrawal
          count={count}
          denominationsList={denominationsList}
          decreaseBtn={this.decreaseBtn}
        />
      </body>
    )
  }
}

export default App

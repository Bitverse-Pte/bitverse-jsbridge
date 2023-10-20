import { useState } from 'react'
import { Card, Collapse } from 'antd-mobile'

import './App.css'
import GetUserInfo from './components/GetUserInfo'
import NavigateTo from './components/NavigateTo'
import ShowSharePanel from './components/ShowSharePanel'
import Request from './components/Request'
import GetSelectedWalletInfo from './components/GetSelectWalletInfo'

const my_json_object = { a: 1, b: 2, c: { d: 1 } }

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Collapse defaultActiveKey={['10']}>
        <Collapse.Panel key='10' title='getSelectedWalletInfo'>
          <GetSelectedWalletInfo />
        </Collapse.Panel>
        <Collapse.Panel key='1' title='getUserInfo'>
          <GetUserInfo />
        </Collapse.Panel>
        <Collapse.Panel key='2' title='navigateTo'>
          <NavigateTo />
        </Collapse.Panel>
        <Collapse.Panel key='3' title='share'>
          <ShowSharePanel />
        </Collapse.Panel>
        <Collapse.Panel key='4' title='request'>
          <Request />
        </Collapse.Panel>
        {/* <Collapse.Panel key="5" title="openWebview">
          <OpenWebview />
        </Collapse.Panel> */}
      </Collapse>
    </div>
  )
}

export default App

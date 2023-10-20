import { FC, useState } from 'react'
import { Card, Button } from 'antd-mobile'
import ReactJson from 'react-json-view'

import { getSelectedWalletInfo } from '@bitverse/jsbridge'

interface GetSelectedWalletInfoProps {}

const GetSelectedWalletInfo: FC<GetSelectedWalletInfoProps> = () => {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState<any>({})
  const handleClick = async () => {
    try {
      setLoading(true)
      const info = await getSelectedWalletInfo()
      setUserInfo(info)
    } catch (error) {
      console.log(`GetSelectedWalletInfo:error:${error}`)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Card>
      <Button
        color='primary'
        fill='solid'
        onClick={handleClick}
        loading={loading}>
        获取用户信息
      </Button>
      <div style={{ paddingTop: 24 }}>
        <ReactJson src={userInfo} />
      </div>
    </Card>
  )
}

export default GetSelectedWalletInfo

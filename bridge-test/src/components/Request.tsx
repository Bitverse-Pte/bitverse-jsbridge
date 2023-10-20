import { FC, useState } from 'react'
import { Card, Button, Input, Toast, Form, TextArea } from 'antd-mobile'
import ReactJson from 'react-json-view'

import { request, RequestParams } from '@bitverse/jsbridge'

interface RequestProps {}

const Request: FC<RequestProps> = () => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  const [userInfo, setUserInfo] = useState<any>({})
  const onFinish = async (values: any) => {
    console.log(values)

    try {
      setLoading(true)
      // const req:RequestParams = {
      //   url: 'https://yapi-by.go.akamai-access.com/mock/1659/v1/chains',
      //   method: 'post',
      //   body:values
      // }
      const info = await request(values)
      setUserInfo(info)
    } catch (error) {
      console.log(`Request:error:${error}`)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Card>
      <div>
        <Form
          layout='horizontal'
          onFinish={onFinish}
          footer={
            <Button
              block
              type='submit'
              color='primary'
              size='large'
              loading={loading}>
              提交
            </Button>
          }>
          <Form.Item
            name='url'
            label='url'
            rules={[{ required: true, message: 'url不能为空' }]}
            style={{
              border: '1px solid #1677ff',
              marginBottom: 12,
              marginTop: 12,
            }}>
            <Input onChange={console.log} placeholder='请输入url' />
          </Form.Item>
          <Form.Item
            name='method'
            label='method'
            rules={[{ required: true, message: 'method不能为空' }]}
            style={{ border: '1px solid #1677ff', marginBottom: 12 }}>
            <Input onChange={console.log} placeholder='请输入method' />
          </Form.Item>
          <Form.Item
            name='headers'
            label='headers'
            rules={[{ required: false, message: '地址不能为空' }]}
            style={{ border: '1px solid #1677ff', marginBottom: 12 }}>
            <TextArea onChange={console.log} placeholder='请输入一个JSON' />
          </Form.Item>
          <Form.Item
            name='body'
            label='body'
            rules={[{ required: false, message: '地址不能为空' }]}
            style={{ border: '1px solid #1677ff', marginBottom: 12 }}>
            <TextArea onChange={console.log} placeholder='请输入一个JSON' />
          </Form.Item>
          <Form.Item
            name='timeout'
            label='timeout'
            rules={[{ required: false, message: 'method不能为空' }]}
            style={{ border: '1px solid #1677ff', marginBottom: 12 }}>
            <Input onChange={console.log} placeholder='请输入timeout' />
          </Form.Item>
          <Form.Item
            name='contentType'
            label='contentType'
            rules={[{ required: false, message: 'method不能为空' }]}
            style={{ border: '1px solid #1677ff', marginBottom: 12 }}>
            <Input onChange={console.log} placeholder='请输入contentType' />
          </Form.Item>

          <Form.Item
            name='responseType'
            label='responseType'
            rules={[{ required: false, message: 'method不能为空' }]}
            style={{ border: '1px solid #1677ff', marginBottom: 12 }}>
            <Input onChange={console.log} placeholder='请输入responseType' />
          </Form.Item>
        </Form>
      </div>

      <div style={{ paddingTop: 24 }}>
        <ReactJson src={userInfo} />
      </div>
    </Card>
  )
}

export default Request

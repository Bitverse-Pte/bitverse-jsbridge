import { FC, useState } from 'react';
import { Card, Button ,Form,Input,Toast,TextArea} from 'antd-mobile';
import ReactJson from 'react-json-view';

import { NavigateParams, navigateTo, } from '@bitverse/jsbridge';

interface NavigateToProps {}

const NavigateTo: FC<NavigateToProps> = () => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  const [userInfo, setUserInfo] = useState<any>({});

  const onFinish = async (values:any) => {
    try {
      setLoading(true)
      const req:NavigateParams = values
      const info = await navigateTo(req);
      setUserInfo(info)
    } catch (error) {
      console.log(`Request:error:${error}`);
    } finally {
      setLoading(false)
    }
  };

  return (
    <Card>

       <Form
          layout='horizontal'
          onFinish={onFinish}

        footer={
          <Button block type='submit' color='primary' size='large' loading={ loading}>
            提交
          </Button>
        }
      >
        <Form.Item
            name='name'
            label='name'
            rules={[{ required: true, message: 'name不能为空' }]}
            style={{border:'1px solid #1677ff',marginBottom:12,marginTop:12}}
        >
          <Input onChange={console.log} placeholder='请输入name' />
        </Form.Item>
        <Form.Item
          name='extra'
          label='extra'
            rules={[{ required: false, message: '地址不能为空' }]}
            style={{border:'1px solid #1677ff'}}
        >
          <TextArea onChange={console.log} placeholder='请输入一个JSON' />
        </Form.Item>
        <Form.Item
            name='redirectUrl'
            label='redirectUrl'
            rules={[{ required: false, message: 'name不能为空' }]}
            style={{border:'1px solid #1677ff',marginBottom:12,marginTop:12}}
        >
          <Input onChange={console.log} placeholder='请输入redirectUrl' />
        </Form.Item>



      </Form>

      {/* <div style={{ paddingTop: 24 }}>
        <ReactJson src={userInfo} />
      </div> */}
    </Card>
  );
};

export default NavigateTo;

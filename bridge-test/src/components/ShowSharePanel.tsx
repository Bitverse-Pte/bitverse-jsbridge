import { FC, useState } from 'react';
import { Card, Button ,Input,Toast,Form, TextArea, Radio, Space} from 'antd-mobile';
import ReactJson from 'react-json-view';


import { showSharePanel } from '@bitverse/jsbridge';

interface ShowSharePanelProps {}

const ShowSharePanel: FC<ShowSharePanelProps> = () => {
  const [loading,setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState<any>({});
  const onFinish = async (values: any) => {
    try {
      setLoading(true)
      console.log('values',values);

      const info = await showSharePanel(values);
      setUserInfo({[info]:info})
    } catch (error) {
      console.log(`ShowSharePanel:error:${error}`);
    } finally {
      setLoading(false)
    }
  };
  return (
    <Card>

       <div>
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
          name='type'
          label='type'
            rules={[{ required: true, message: 'type不能为空' }]}
            style={{border:'1px solid #1677ff',marginBottom:12,marginTop:12}}
        >
            <Radio.Group >
              <Space direction='vertical'>
                <Radio value='url'>url</Radio>
                <Radio value='text'>text</Radio>
              </Space>
           </Radio.Group>
        </Form.Item>

        <Form.Item
          name='payload'
          label='payload'
            rules={[{ required: false, message: 'payload不能为空' }]}
            style={{border:'1px solid #1677ff',marginBottom:12,}}
        >
          <TextArea onChange={console.log} placeholder='请输入一个payload' />
        </Form.Item>


      </Form>
      </div>

      <div style={{ paddingTop: 24 }}>
        <ReactJson src={userInfo} />
      </div>

    </Card>
  );
};

export default ShowSharePanel;

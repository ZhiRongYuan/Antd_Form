/*
 * Author: yuanzhirong
 * Date: 2021-06-04 12:53:06
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-08-04 15:26:43
 * Description:
 */
import React from 'react';
import Form from './components/MyNewForm/index'

const MyFormFieldPage = () => {
    const [form] = Form.useForm()

    const onFinish = val => {
        console.log("success", val);
    };


    const onFinishFailed = val => {
        console.log("error", val);
    };

    return (
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Field name="name" rules={[{ required: true, message: "请输入" }]}>
                <input />
            </Form.Field>
            <button type="submit">Submit</button>
        </Form>
    )
}
export default MyFormFieldPage;
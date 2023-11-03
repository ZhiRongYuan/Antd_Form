/*
 * Author: yuanzhirong
 * Date: 2021-06-04 10:29:40
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-04 12:51:11
 * Description:
 */
import React from 'react';
import Form from './components/MyForm'

class MyFormPage extends React.Component {
    componentDidMount() {
        const { setFieldsValue } = this.props.form;
        setFieldsValue({ name: 'test' })
    }
    submit = () => {
        const { getFieldValue, getFieldsValue } = this.props.form;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        console.log("submit", getFieldsValue(), getFieldValue("password"));
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return <Form>
            {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(<input />)}
            {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please input your age!' }],
            })(<input />)}
            <button onClick={this.submit}>提交</button>
        </Form>
    }
};

export default Form.Create()(MyFormPage);
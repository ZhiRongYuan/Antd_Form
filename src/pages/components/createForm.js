/*
 * Author: yuanzhirong
 * Date: 2021-06-04 12:19:25
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-04 14:28:51
 * Description:
 */
import React from 'react';

const CreateForm = () => (Comp) => {
    return class CreateForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

            }
            this.fields = {};
        }

        getFieldDecorator = (field, options) => FieldComp => {
            this.fields[field] = options;
            return React.cloneElement(FieldComp, {
                value: this.state[field] || '',
                onChange: (e) => {
                    this.setState({
                        [field]: e.target.value
                    })
                }
            });
        }

        getFieldsValue = () => {
            return this.state;
        }

        getFieldValue = (field) => {
            return this.state[field];
        }

        setFieldsValue = ({ newState }) => {
            this.setState(newState)
        }


        validateFields = (callback) => {
            const errors = []
            for (let name in this.fields) {
                if (!this.state[name]) {
                    errors.push({
                        name,
                        error: this.fields[name].rules[0].message
                    })
                }
            }
            if (errors.length) {
                callback(errors, this.state)
            } else {
                callback(null, this.state)
            }
            console.log(errors)
        }

        getFunc = () => {
            return {
                getFieldDecorator: this.getFieldDecorator,
                getFieldsValue: this.getFieldsValue,
                getFieldValue: this.getFieldValue,
                setFieldsValue: this.setFieldsValue,
                validateFields: this.validateFields
            }
        }

        render() {
            return <Comp form={this.getFunc()} />
        }
    }
}

export default CreateForm
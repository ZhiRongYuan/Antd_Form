/*
 * Author: yuanzhirong
 * Date: 2021-06-04 12:54:49
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-04 13:35:24
 * Description:
 */
import React from 'react'

class FormStore {
    constructor() {
        this.formValue = {};
        this.fields = [];
        this.callbacks = {};
    }

    registerField = fieldObj => {
        this.fields.push(fieldObj);
        return () => {
            this.fields = this.fields.filter(item => item !== fieldObj);
            delete this.formValue[fieldObj.props.name];
        };
    };

    setCallback = callback => {
        this.callbacks = {
            ...this.callbacks,
            ...callback
        };
    };


    getFieldValue = name => {
        return this.formValue[name];
    };


    setFieldsValue = newFormValue => {
        this.store = {
            ...this.formValue,
            ...newFormValue
        };

        this.fields.forEach(field => {
            const { name } = field.props;
            Object.keys(newFormValue).forEach(key => {
                if (name === key) {
                    field.onStoreChange();
                }
            });
        });
    };


    validate = () => {
        let err = [];
        this.fields.forEach(field => {
            const { name, rules } = field.props;
            let value = this.getFieldValue(name);
            console.log(value)

            let rule = rules && rules[0];
            console.log(rule)
            if (rule && rule.required && (value === undefined || value === "")) {
                err.push({
                    [name]: rule.message,
                    value
                });
            }
        });
        return err;
    };

    submit = () => {
        let err = this.validate();
        const { onFinish, onFinishFailed } = this.callbacks;
        if (err.length === 0) {
            onFinish(this.store);
        } else if (err.length > 0) {
            onFinishFailed(err);
        }
    };
    getForm = () => {
        return {
            submit: this.submit,
            getFieldValue: this.getFieldValue,
            setFieldsValue: this.setFieldsValue,
            registerField: this.registerField,
            setCallback: this.setCallback
        };
    };
}

export default function useForm() {
    const formRef = React.useRef();
    if (!formRef.current) {
        const formStore = new FormStore();
        formRef.current = formStore.getForm();
    }

    return [formRef.current];
}
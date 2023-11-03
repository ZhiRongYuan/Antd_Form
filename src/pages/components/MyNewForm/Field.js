/*
 * Author: yuanzhirong
 * Date: 2021-06-04 12:54:43
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-04 13:24:23
 * Description:
 */
import React, { Component, cloneElement } from "react";
import FieldContext from "./FieldContext";

export default class Field extends Component {
    static contextType = FieldContext;
    componentDidMount() {
        const { registerField } = this.context;
        registerField(this)
    }

    onStoreChange = () => {
        this.forceUpdate();
    };


    render() {
        const { getFieldValue, setFieldsValue } = this.context;
        const { children, name } = this.props;
        const returnChildNode = React.cloneElement(children, {
            value: getFieldValue(name),
            onChange: event => {
                setFieldsValue({ [name]: event.target.value });
            }
        });
        return returnChildNode;
    }
}

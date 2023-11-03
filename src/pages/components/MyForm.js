/*
 * Author: yuanzhirong
 * Date: 2021-06-04 12:22:49
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-04 12:27:09
 * Description:
 */
import React from 'react';
import createForm from './createForm';
class MyForm extends React.Component {
    static Create = createForm;
    render() {
        return this.props.children
    }
}

export default MyForm;
/*
 * Author: yuanzhirong
 * Date: 2021-06-04 14:15:43
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-04 14:19:03
 * Description:
 */
import React from 'react';
import CreateForm from './CreateForm.js';

class CasicForm extends React.Component {
    static Create = CreateForm;
    render() {
        const { children } = this.props;
        <div>
            {children}
        </div>
    }
}

export default CasicForm;
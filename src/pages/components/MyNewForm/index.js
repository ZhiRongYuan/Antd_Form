/*
 * Author: yuanzhirong
 * Date: 2021-06-04 12:54:19
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-04 13:28:21
 * Description:
 */
import React from 'react';
import Field from './Field';
import FieldContext from './FieldContext';
import myUseForm from './useForm';

class MyNewForm extends React.Component {
    static Field = Field;
    static useForm = myUseForm;
    componentDidMount() {
        const { form, onFinish, onFinishFailed } = this.props;
        form.setCallback({
            onFinish,
            onFinishFailed
        });
    }
    render() {
        const { form } = this.props;
        return <form
            onSubmit={event => {
                event.preventDefault();
                console.log(111)
                form.submit();
            }}>
            <FieldContext.Provider value={form}>{this.props.children}</FieldContext.Provider>
        </form>
    }
}

export default MyNewForm;
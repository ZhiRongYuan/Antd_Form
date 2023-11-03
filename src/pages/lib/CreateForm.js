/*
 * Author: yuanzhirong
 * Date: 2021-06-04 14:17:53
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-04 14:22:23
 * Description:
 */
import React from 'react';

const CreateForm = () => (Cmp) => {
    return class extends React.Component {
        render() {
            return <Cmp />
        }
    }
}

export default CreateForm;
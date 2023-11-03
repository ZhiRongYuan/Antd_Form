/*
 * Author: yuanzhirong
 * Date: 2021-06-03 17:13:49
 * LastEditors: yuanzhirong
 * LastEditTime: 2021-06-03 17:52:30
 * Description: 
 */
import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
      {props.children}
    </div>
  );
}

export default BasicLayout;

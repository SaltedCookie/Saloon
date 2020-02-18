import React from 'react';
import styles from './winterDiscounts.module.scss';
import { Link } from 'react-router-dom';

const tableData = [{
    name: 'Маникюр',
    price: '700',
  }, {
    name: 'Укладка',
    price: '800',
  }, {
    name: 'Стрижка',
    price: '2500',
  }, {
    name: 'Окрашивание',
    price: '3000',
  }, {
    name: 'Коррекция бровей',
    price: '500',
}];

export const WinterDiscount = () => (
  <div className={styles.container} id='sales'>
    <div className={styles.discounts}>

      <div className={styles.winterSalesContainer}>
        <p className={styles.winterSales}>&#8212;</p>
        <p className={styles.winterSales}>Зимние скидки</p>
      </div>

      <table>
        <tbody>
          {
            tableData.map((item, index) => {
              const { price, name } = item;
              return (
                <tr key={index}>
                  <td className={styles.offers}>{name}</td>
                  <td className={styles.price}>{price}</td>
                </tr>
              );
            })
          }
        <tr>
          <Link to='/online-registration/nails'>
            <td className={styles.registration}>Записаться></td>
          </Link>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
);

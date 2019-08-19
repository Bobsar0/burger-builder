import React from 'react';
import styles from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type) {
        case ('bread-bottom'):
            ingredient = <div className={styles.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = 
            <div className={styles.BreadTop}>
                <div className={styles.Seeds1}></div>
                <div className={styles.Seeds2}></div>
            </div>
            break;
        case ('meat'):
            ingredient = <div className={styles.Meat}></div>;
            break;
        case ('Bacon'):
            ingredient = <div className={styles.Bacon}></div>;
            break;
        case ('Salad'):
            ingredient = <div className={styles.Salad}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={styles.Cheese}></div>;
            break;
        default:
            ingredient = null
    }
}

export default burgerIngredient
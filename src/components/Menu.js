import React,{useState} from 'react';
import Pizza from './Pizza';
import {Link} from "react-router-dom";



const Menu = ({addPreoder}) => {
    const [menu, setMenu] = useState('Van Menu');
    const menusObj = {
        'Van Menu': [
            {
                name:'Margherita (v)',
                price:'7',
                ingredients:'Mozzarella, fior de latte, fresh basil'
            },
            {
                name:'Pepperoni',
                price:'8',
                ingredients:'Italian sliced pepperoni'
            },
            {
                name:'Ham and Mushroom',
                price:'8',
                ingredients:'Wiltshire ham, portobello mushrooms'
            },
            {
                name:'Vegetarian (v)',
                price:'8',
                ingredients:'Red onion, baby spinach, mushrooms, baby plum tomatoes & parmesan'
            },
            {
                name:'Ham and Mushroom',
                price:'8',
                ingredients:'Wiltshire ham, portobello mushrooms'
            },
            {
                name:'Duck',
                price:'9',
                ingredients:'Confit duck, garlic oil, hoisin, spring onions, chillies & cucumber'
            },
            {
                name:'Vegan (vg)',
                price:'9',
                ingredients:'Vegan cheese, spinach, red onion, sunblush tomatoes, portobello mushrooms & kalamata olives'
            },
            {
                name:'Garlic Flat Bread',
                price:'5',
                ingredients:'Garlic, rosemary & oregano'
            },
            {
                name:'Honey & Seeded Flat Bread',
                price:'6',
                ingredients:'Garlic, poppy & sesame seeds with a Honey Drizzle'
            },
            {
                name:'Dips',
                price:'1',
                ingredients:'Aioli, spicy aioli, pesto aioli'
            },
            {
                name:'Extras',
                price:'1',
                ingredients:'Olives, pineapple, chillies, rocket'
            },
            {
                name:'Glazed & Seeded',
                price:'1',
                ingredients:'Honey glazed crust with poppy & sesame seeds'
            },
            {
                name:'Gourmet Brownies',
                price:'3',
                ingredients:'2 for £5 (contains nuts)'
            }
        ],
        'Pop-up Pizzeria': [
            {
                name:'Nduja',
                price:'9',
                ingredients:'Spiced Italian sausage, shropshire blue & spinach'
            },
            {
                name:'Buffalo (v)',
                price:'9',
                ingredients:'Yellow sun-blush tomatoes, green pesto, buffalo mozzarella, parmesan & cracked black pepper'
            }
        ]
    }
    return (
        <div className='menu'>
            <div className='menuType'>
                {
                    Object.keys(menusObj).map(item=>
                        <div 
                            className={menu===item ? 'selected': ''}
                            onClick={()=>setMenu(item)}
                        >
                            {item}
                        </div>
                    )
                }
            </div>
            
            <div className='menuSeperator'>
                <div className='menuImgCont'>
                    <img src='http://thedoughshack.co.uk/wp-content/uploads/pizza-closeup-2.jpg' alt='zoomed in shot of pizza' id='menuImg'></img>
                </div>
                <div className='menuItems'>
                    <h2>{menu}</h2>
                    {
                        menusObj[menu].map(pizza=>
                            <Pizza
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                addPreoder={()=>addPreoder(pizza)}
                            />
                        )
                    }
                    <button className='btn'><Link to='/order'>View order</Link></button>
                </div> 
            </div> 
                
        </div>

    );
};

export default Menu;
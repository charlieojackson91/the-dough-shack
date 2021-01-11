// module imports
import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Vans from './components/Vans';
import Pizzeria from './components/Pizzeria';
import Content from './components/Content';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Preoder from './components/Preoder';
import Sale from './components/Sale';
import Game from './components/Game';

// import * as firebase from 'firebase/app';
// import 'firebase/database';


// firebase credentials
// const firebaseConfig = {
//   apiKey: "AIzaSyChT9s-FLAzIJMM20c-VWEBbVM3V_D0-vk",
//   authDomain: "the-dough-shack.firebaseapp.com",
//   databaseURL: "https://the-dough-shack.firebaseio.com",
//   projectId: "the-dough-shack",
//   storageBucket: "the-dough-shack.appspot.com",
//   messagingSenderId: "902018859305",
//   appId: "1:902018859305:web:3d1e07922ff203d8ffb738"
// };

// firebase.initializeApp(firebaseConfig);

// application
function App() {
  
  // set preorders to empty array and working vans
  const [preoders, setPreoders]  = useState([]);
  const vansShift = [
    {vanID:1, vanLocation:'Thames Ditton', hours:'4-9'},
    {vanID:2, vanLocation:'Long Ditton', hours:'4-9'},
    {vanID:3, vanLocation:'East Molesey', hours:'4:30-9'},
    {vanID:4, vanLocation:'Cobham', hours:'5-9'}
  ];

  // useEffect(() => {
  //   firebase.database().ref('preorders/').once('value')
  //     .then(data => data.val())
  //     .then(res => setPreoders(Object.values(res)))
  // }, [])

  // update preorders with existing orders plus new order
  const addPreoder = (preorder) => {
    // firebase.database().ref('preorders/').push().set(preorder)
    setPreoders([...preoders, preorder]);
  } 

  // count down timer
  const [countDown, setCountDown] = useState([])
  const [interv,setInterv] = useState(null)


    useEffect(() => {
      const orderTime = new Date();
      orderTime.setHours(17);
      orderTime.setMinutes(0);
      orderTime.setMinutes(0);
      orderTime.setSeconds(0);
      orderTime.setMilliseconds(0);
      let distance = orderTime - new Date().getTime()
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountDown({hours, minutes, seconds})
      let timer = setInterval(() => {
        setInterv(Symbol())
      }, 1000)
      return ()=>{
        clearInterval(timer)
      }
    }, [interv])

    
  
  return (
    <div>
      <Router>
        <Header preoders={preoders}/>
        
        {/* --------------------------------------------- HOMEPAGE --------------------------------------------------------------------- */}
        <Switch>
          <Route path='/' exact>
            <Banner 
              img='http://thedoughshack.co.uk/wp-content/uploads/2018/10/20180311-THE_DOUGH_SHACK_001.jpg'
              alt='pizza at dinner table'
              text="We're The Dough Shack - Traditional wood fired piza from our vans and pop-up pizzeria."
              timer={countDown}
            />
            <div className='van-pizzeria-divide'>
              <Vans/>
              <Pizzeria/>
            </div>
            <Banner 
              img='http://thedoughshack.co.uk/wp-content/uploads/2017/05/Aaron-and-oven-resized.jpg'
              alt='stocking the pizza oven fire'
              logo={false}
            />
          </Route>



          {/* ---------------------------------------------- PIZZA MENU ------------------------------------------------------------------ */}
          <Route path='/pizza'>
            <Banner 
              img='http://thedoughshack.co.uk/wp-content/uploads/2017/05/Pizza-header-resized.jpg'
              alt='close up of nduja pizza'
              // timer={countDown}
            />
            <Content
            title='Pizzas'
            text='The menu takes influence both from old age recipes and millennial eating habits. London can now enjoy pizza made in the finest traditions with added quirks for a new era of taste buds.

            The base ingredients come directly from Italy and the fresh veg, meat and cheese are sourced from local butchers and farmer’s markets.
            
            The secret’s in the dough; you won’t want to throw away the crusts. This is where carnivores and veggies unite in the name of decent pizza.'
            
            vans={vansShift}/>
            
            <Menu addPreoder={addPreoder}/>
            
          </Route>


          {/* ---------------------------------------------- ABOUT US --------------------------------------------------------------------- */}
          <Route path='/about-us'>
            <Banner 
              img='http://thedoughshack.co.uk/wp-content/uploads/2016/06/About-header-resized.jpg'
              alt='the dough shack logo'
              // timer={countDown}
            />
            <Content
            title='About Us'
            text='The Dough Shack journey began in the kitchens of pizza houses around southwest London and Brighton where Aaron would use his spare time to fuse together signature ingredients with alternative toppings.

            Conor’s business nous and reluctance to sit behind a desk took himself and Aaron out of the kitchen and around the world in order to sample the delights that pizza has to offer.
            
            After returning home, with a suitcase full of inspiration and ideas, the duo set about building their vision. Just a few months later, the iconic Dough Shack van was ready to go, converted into a state-of-the-art pizza kitchen.'/>
            <img src='http://thedoughshack.co.uk/wp-content/uploads/person-x2-e1469139976179.jpg' id='aboutUsImg' alt='the dough shack owners - Conor and Aaron'></img>
            <Gallery/>
          </Route>


          {/* ----------------------------------------------- PRE ORDER -------------------------------------------------------------------- */}
          <Route path='/order'>
            <Banner 
              img='http://thedoughshack.co.uk/wp-content/uploads/2016/06/About-header-resized.jpg'
              alt='the dough shack logo'
              // timer={countDown}
            />
            <Content
              title='View your orders'
              text="Pre order a pizza before 5pm, schedule when you want to collect it and we'll have it ready! No more calling and waiting in the queue!"
            />
            <Preoder data={preoders}/>
          </Route>
        

        {/* ----------------------------------------------- SALE CONFIRMATION --------------------------------------------------------------------  */}

        <Route path='/confirmation'>
            <Banner 
              img='http://thedoughshack.co.uk/wp-content/uploads/2016/06/About-header-resized.jpg'
              alt='the dough shack logo'
              // timer={countDown}
            />
            <Sale data={preoders}/>
            <Game/>
          </Route>
        
        </Switch>
      </Router>
      <Footer/>
    </div>
    );
}

export default App;

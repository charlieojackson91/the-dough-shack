import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

let token = 'YOUR_TOKEN'
let orderNumber = new Date();


let dataBaseOrders={
	'15:00': 3,
	'14:10': 5
}


const Preoder = ({data})=>{
	const [list,setList] = useState({})
	const [total,setTotal] = useState(0)
	const [timeSlots,setTimeSlots] = useState([])

	useEffect(()=>{
		setList(
			data.reduce((obj,pizza)=>{
				if(!(pizza.name in obj)){
					obj[pizza.name]={
						amount: 0,
						subtotal: 0
					}
				}
				obj[pizza.name].amount+=1
				obj[pizza.name].subtotal+= +pizza.price
				return obj
			},{})
		);
		setTotal(
			data.reduce((sum,pizza)=>sum+= +pizza.price,0)
		);
	},[data]);

	useEffect(()=>{
		let now = new Date()

		let slots = []
		for(let i=12; i<20; i++){
			if(i<now.getHours()){
				slots.push({
					time:`${i}:00`,
					disabled: true
				})
			}else{
				for(let j=0; j<60; j+=5){
					slots.push({
						time:`${i}:${j<10?'0'+j:j}`,
						disabled: i<now.getHours()?true: (j<now.getMinutes()+20 && i<=now.getHours())?true:false
					})
				}
			}

		}
		setTimeSlots(slots)
		console.log(now.getHours(),now.getMinutes())
	},[])

	function setAmount(key,direction){
		let newList = {...list}
		let price = newList[key].subtotal/newList[key].amount
		if(direction==='+'){
			newList[key].amount += 1
		}else if(direction==='-'){
			newList[key].amount -= 1
		}
		if(newList[key].amount === 0){
			delete newList[key]
		}else{
			newList[key].subtotal = price * newList[key].amount
		}
		
		setList(newList)
		setTotal(
			Object.values(newList).reduce((sum,pizza)=>sum+= +pizza.subtotal,0)
		)
	}

	const makePayment = totalPrice=>{
		fetch('https://api.sandbox.paypal.com/v1/payments/payment',{
			method: 'POST',
			headers: {
				'Content-Type': "application/json",
				Authorization: token
			},
			body: JSON.stringify({
				"intent": "sale",
				"payer": {
					"payment_method": "paypal"
				},
				"transactions": [{
				    "amount": {
				      "total": total,
				      "currency": "GBP"
				    },
				    "description": "Your pizza order",
				    "custom": "???????????????????",
				    "invoice_number": orderNumber,
				    "payment_options": {
				      "allowed_payment_method": "INSTANT_FUNDING_SOURCE"//maybe some extended list
				    },
				    "soft_descriptor": "???????????????",
				    "item_list": {
				      "items": data
				    }
				}],
				"note_to_payer": "We will notify your 1 hour before we start cook your pizza.",
				"redirect_urls": {
					"return_url": "https://YOUR_DOMAIN/successfull_payment",
					"cancel_url": "https://YOUR_DOMAIN/unsuccessfull_payment"
				}
			})
		})
		.then(res=>res.json())
		.then(paymentResult=>{
			if(paymentResult.result === 'succsesfull'){
				//store preoder in database
				//preview succesfull payment screen
			}else{
				alert('your payment is not succsefull try one more time')
			}
		})
	}
	return(
		data.length
		?
			<div>
				<div className='orderList'>
					<table className='orderTable' >
						<tr>
							<th>Pizza</th>
							<th>Amount</th>
							<th>Cost £</th>
							<th>Amend order</th>
						</tr>
						{
							Object.keys(list).map(pizza=>
								<tr>
									<td>{pizza}</td>
									<td class='right'>{list[pizza].amount}</td>
									<td class='right'>{list[pizza].subtotal}</td>
									<td class='center'>
										<button onClick={()=>setAmount(pizza,'+')}>+</button>
										{' '}/{' '}
										<button onClick={()=>setAmount(pizza,'-')}>-</button>
									</td>
								</tr>
							)
						}
						<tr>
							<td colSpan={3} class='right' id='sumOrder'>{total}</td>
						</tr>
					</table>
					<form className='orderForm'>
						<fieldset>
							<legend> Choose pickup time and van</legend>
							<input type='date' placeholder='choose date' />
							<select>
								<option value=''>choose your time</option>
								{
									timeSlots.map(time=>
										<option 
											value={time.time} 
											disabled={
												dataBaseOrders[time.time] 
												|| 
												time.disabled
											}
										>
											{time.time}
										</option>
									)
								}
							</select>
							<select>
								<option value=''>choose your van</option>
								{
									['Thames Ditton', 'Long Ditton', 'East Molesey'].map(location =>
										<option value={location}>{location}</option>
									)
								}
							</select>
						</fieldset>
						<Link to='./confirmation'><button className='btn'>Confirm and pay for preoder</button></Link>
						{/* <button onClick={()=>makePayment(total)} className='btn'>Confirm and pay for preoder</button> */}
					</form>
				</div>
			</div>
		:
			<div className='orderList'>
				You don't have any pre orders yet - please choose from <a href='./pizza'>our menu</a>
			</div>
	)
}

export default Preoder
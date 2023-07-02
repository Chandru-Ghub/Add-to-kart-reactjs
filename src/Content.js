import React from 'react';
import {useState} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
const Content = () => {
  let hide = {backgroundColor:'black'}
  let show = {display:'block'}
  const [card,setCard] = useState(
    [
        {id:1,
         cover:'https://m.media-amazon.com/images/I/41Xe96WtZoL._SX300_SY300_QL70_FMwebp_.jpg',
         title:'OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)',
         price:'₹19,999',
         mrp :' ',
         available: true,
         sold:true
        },
        {id:2,
         cover:'https://m.media-amazon.com/images/I/71Gaulzw05L._SX569_.jpg',
         title:'Redmi Note 12 5G Frosted Green 4GB RAM 128GB ROM  color:baby blue extra battery life 6000mAh ',
         price:'₹16,999',
         available: true,
         mrp:' M.R.P.: ₹19,999',
         sold:'avail'
        },
        {id:3,
         cover:'https://m.media-amazon.com/images/I/41hsEMLKl9L._SX300_SY300_QL70_FMwebp_.jpg',
         title:'Samsung Galaxy M14 5G (Smoky Teal, 4GB, 128GB Storage)',
         price:'₹13,990 ',
         available: true,
         mrp:'M.R.P.: ₹17,999',
         sold:false
        },
        {id:4,
         cover:'https://m.media-amazon.com/images/I/41YiWiIVh-L._AC_SR320,320_.jpg',
         title:'Motorola Tab (11inch, 4GB, 64GB, WiFi+LTE Calling, compact &light weight  )',
         price:' ₹19,999 ',
         available: true,
         mrp:'M.R.P.: ₹35,000',
         sold:true
        },
        {id:5,
         cover:'https://m.media-amazon.com/images/I/41iuyFaLWAS._AC_SR320,320_.jpg',
         title:'Lenovo M10 Fhd Plus 2Nd Gen 10.3 Inches (4Gb, 128 Gb, Wi-Fi + Lte, Volte Calling)',
         price:'₹15,749',
         mrp :'₹30,000',
         available: true,
         sold:true
        },
        {id:6,
         cover:'https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg',
         title:'OnePlus 11 5G (Eternal Green, 8GB RAM, 128GB Storage)',
         price:'₹19,999',
         mrp :' M.R.P.: ₹39,000',
         available: true,
         sold:false,
        },
        {id:7,
         cover:'https://m.media-amazon.com/images/I/61zWFqX+krL._SY355_.jpg',
         title:'Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones ',
         price:' ₹56,999',
         mrp :' ',
         available: true,
         sold:'avail'
        
        },
        {id:8,
         cover:'https://m.media-amazon.com/images/I/31fDykUpm6L._SX300_SY300_QL70_FMwebp_.jpg',
         title:'pTron Newly Launched Zenbuds Pro1 Max ANC Earbuds(long last battery upto 36hrs)',
         price:'₹1,799',
         mrp :' M.R.P.: ₹5,499',
         available: true,
         sold:'avail'
        },
    ]
    
)
let [count,setCount] = useState(0)
function addCart(id,avail){
    let add = card.map((a)=>(
        a.id==id? {...a,available:!a.available}:a
        
    ))
    
    setCard(add)
  avail?setCount(count+1):setCount(count-1)
}
  
  return (
    <main className='main'>
        <div className='container'>
          <div className='title'>
              <div className='logo'>
                  <h2> Shopping <span className='kart'>Kart 🛒</span> </h2>
              </div>
                    <ul className='nav'>
                        <li className='menu'>Home</li>
                        <li className='menu'>About</li>
                        <li className='menu'>Shop</li>
                    </ul>
                <div className='cbt'>
                    <button className='cart'><AiOutlineShoppingCart/> Cart {count}</button>
                </div>
                   
          </div>
        <div className="product">
           
            <input type="text" title='Search option not available Now'  placeholder='Type here to search'/>
            <button className='src'>
            <span class="material-symbols-outlined">
search
</span>
              </button>
        </div>

        

        <ul>
            {card.map((a)=>
                (
                <div className='productCard' key={a.id}>
                  <p className={a.sold==true?'few':a.sold==false?'sold':'new'}>{a.sold==true?'Few Only':a.sold==false?'Out Of Stock':a.sold=='avail'?'New Arrivals':null}</p>
                <img className='pimage' src={a.cover} alt="img" />
                <h3 className='productname'>{a.title}</h3>
                <p className='price'>{a.price}</p>
                <p className='mrp'>{a.mrp==' '?'Currenty no offer':a.mrp}</p>
                <button  className={a.available?'btn':'ctn'}  onClick={()=>addCart(a.id,a.available)}>{a.available?'Add to cart':'Remove from cart'}</button>         
                </div>
                )
            )}
        </ul>
        <div className='bg'>
                    <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/01/Top-phones-in-Feb.png" alt=" add" />
        </div>
        <p className='premium'>
          Prime Membership 
        </p>
        <ul>
            {card.map((a)=>
                (
                <div className='productCard' key={a.id}>
                <img className='pimage' src={a.cover} alt="img" />
                <h3 className='productname'>{a.title}</h3>
                <p className='price'>{a.price}</p>
                <p className='mrp'>{a.mrp==' '?'Currenty no offer':a.mrp}</p>
                <button  className={a.available?'btn':'ctn'}  onClick={()=>addCart(a.id,a.available)}>{a.available?'Add to cart':'Remove from cart'}</button>         
                </div>
                )
            )}
        </ul>
        </div>
    </main>
  )
}

export default Content
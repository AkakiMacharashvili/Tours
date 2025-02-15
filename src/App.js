import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import ReadMoreReact from 'read-more-react';

const place1 = {"id":"rec6d6T3q5EBIdCfD","name":"Best of Paris in 7 Days Tour","info":"Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!","image":"https://images2.imgbox.com/d6/91/DLtwCiTn_o.jpg","price":"1,995"}
const place2 = {"id":"recIwxrvU9HfJR3B4","name":"Best of Ireland in 14 Days Tour","info":"Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!","image":"https://images2.imgbox.com/e5/62/SR8sJgyg_o.jpeg","price":"3,895"}
const place3 = {"id":"recJLWcHScdUtI3ny","name":"Best of Salzburg & Vienna in 8 Days Tour","info":"Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!","image":"https://images2.imgbox.com/a2/b3/5H5WRLw7_o.jpeg","price":"2,695"};
const place4 = {"id":"recK2AOoVhIHPLUwn","name":"Best of Rome in 7 Days Tour","info":"Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!","image":"https://images2.imgbox.com/67/2f/Sk5x6VxF_o.jpeg","price":"2,095"};
const place5 = {"id":"receAEzz86KzW2gvH","name":"Best of Poland in 10 Days Tour","info":"Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!","image":"https://images2.imgbox.com/ff/f5/vFKUUGBY_o.jpeg","price":"2,595"};


function App() {


  const deletion = (tour) => {
	setData((t) => {
		return t.filter((item) => item !== tour);
	})
  }


const Helper = ( {place} ) => {
	return(
		<div className='place' style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                          
                                        flexDirection: 'column',
					
		}}>
		
		<div>
		<img style={{height: 200, width: 400, backgroundColor: 'white'}} src={place.image} alt={place.name} />
		</div>

		<div>
		<div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", width:400, background: 'white', position: 'relative', bottom: 5}}>
			<h1 style={{fontSize: 15, backgroundColor: 'white'}}>{place.name}</h1>
			<h1 style={{fontSize: 15, backgroundColor: 'white', color: 'blue'}}>{place.price}$</h1>
		</div>

		<div style={{display: 'flex', flexDirection: 'row', width:400, background: 'white', position: 'relative', bottom: 5}}>
			<ReadMoreReact text={place.info}
			min={150}
			ideal={150}
			max={150}
			readMoreText="read more"/>
		</div>
		</div>

		<div style={{position: 'relative', bottom: 5}}>
			<h1 style={{height:25, width:400, backgroundColor:'white', position: 'relative', bottom: 21}}> </h1>
			<button onClick={() => {
				deletion(place)
			}}  style={{backgroundColor:'white', position:'relative', bottom: 65, borderColor: 'red'}}>Not Interested</button>
		</div>
		<div>
		
		</div>

		
		</div>
	)
}


function load(props) {
	console.log('Loading...');
}

const [data, setData] = useState([]);

const [loading, setLoading] = useState(false);

const fetchData = async () => {
	setLoading(true);
	try {
		const response = await fetch("https://course-api.com/react-tours-project");
		const dat = await response.json();
		setData(dat);
	}catch (error){
		console.log('Error', error);
	}finally{
		setLoading(false);
	}
}

useEffect(() => {
	fetchData()
}, [])

  return (
	
    <div className="App" style={{width: 500}}>
 	{!loading ? (<div>
		{ data?.length > 0 
			? (
			<div className='container'>
				<div>
					<h1>Tours</h1>
				</div>
				
				{
					

					data.map((plc) => (		
						((<Helper place={plc} key={plc}/>) !== null) ? (<Helper place={plc}/>) :  load()
					)) 

				}
			</div>
			) :(	
				<div>
					<h1>No Tours Left</h1>
					<button onClick={() => {
						setData([...data, place1, place2, place3, place4, place5]);
						
					}} style={{backgroundColor: 'lightblue', color: 'white', width: 100, height: 50, borderRadius: 5}}>Refresh</button>
				</div>
			)
			
		}
		</div>):(
			'Loading...'
		)
	}
      
    </div>
  );
}

export default App;
//---------------------golobal variables--------------------//
var power1value='';
var power2value='';
var power3value='';
var power4value='';
//---------------------golobal variables--------------------//

//---------------------finding section----------------------//
const container =document.querySelector(".container");
const form = document.querySelector('form');
const clrbox1 = form.querySelector(".test-display1");
const clrbox2 = form.querySelector(".test-display2");
const clrbox3 = form.querySelector(".test-display3");
const clrbox4 = form.querySelector(".test-display4");
const result = document.querySelector(".mid");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
//---------------------finding section----------------------//

//---------------------selection section--------------------//
s1.addEventListener("change",(event)=>{
	var val = event.target.value;
	var add = event.target.className;
	if(val=="gold"){
		clrbox1.style.backgroundColor="#ffa000";
	}else if(val=="orange"){
		clrbox1.style.backgroundColor="#ff6b00";
	}else{
		clrbox1.style.backgroundColor=val;
	}
	fnc(val,add);
});
s2.addEventListener("change",(event)=>{
	var val = event.target.value;
	var add = event.target.className;
	if(val=="orange"){
		clrbox2.style.backgroundColor="#ff6b00";
	}else{
		clrbox2.style.backgroundColor=val;
	}
	fnc(val,add);
});
s3.addEventListener("change",(event)=>{
	var val = event.target.value;
	var add = event.target.className;
	if(val=="orange"){
		clrbox3.style.backgroundColor="#ff6b00";
	}else{
		clrbox3.style.backgroundColor=val;
	}
	fnc(val,add);
})
s4.addEventListener("change",(event)=>{
	var val = event.target.value;
	var add = event.target.className;
	if(val=="gold"){
		clrbox4.style.backgroundColor="#ffa000";
	}else if(val=="orange"){
		clrbox4.style.backgroundColor="#ff6b00";
	}else{
		clrbox4.style.backgroundColor=val;
	}
	fnc(val,add);
})
//----------------------selection section-------------------//

// ----------------------function section--------------------//
const fnc = (x,y)=>{
	form.addEventListener("submit",(event)=>{
		event.preventDefault();
		if(y=="s1"){
			const POWER1color = x;
			if(x=="black"){
				 power1value = 0;
			}else if(x=="brown"){
				 power1value = 1;
			}else if(x=="red"){
				 power1value = 2;
			}else if(x=="orange"){
				 power1value = 3;
			}else if(x=="yellow"){
				 power1value = 4;
			}else if(x=="green"){
				 power1value = 5;
			}else if(x=="blue"){
				 power1value = 6;
			}else if(x=="violet"){
				 power1value = 7;
			}else if(x=="gray"){
				 power1value = 8;
			}else if(x=="white"){
				 power1value = 9;
			}
		}
		else if(y=="s2"){
			const POWER2color = x;
			if(x=="black"){
				 power2value = 0;
			}else if(x=="brown"){
				 power2value = 1;
			}else if(x=="red"){
				 power2value = 2;
			}else if(x=="orange"){
				 power2value = 3;
			}else if(x=="yellow"){
				 power2value = 4;
			}else if(x=="green"){
				 power2value = 5;
			}else if(x=="blue"){
				 power2value = 6;
			}else if(x=="violet"){
				 power2value = 7;
			}else if(x=="gray"){
				 power2value = 8;
			}else if(x=="white"){
				 power2value = 9;
			}
		}
		else if(y=="s3"){
			const POWER3color = x;
			if(x=="black"){
				 power3value = 0;
			}else if(x=="brown"){
				 power3value = 1;
			}else if(x=="red"){
				 power3value = 2;
			}else if(x=="orange"){
				 power3value = 3;
			}else if(x=="yellow"){
				 power3value = 4;
			}else if(x=="green"){
				 power3value = 5;
			}else if(x=="blue"){
				 power3value = 6;
			}else if(x=="violet"){
				 power3value = 7;
			}else if(x=="gray"){
				 power3value = 8;
			}else if(x=="white"){
				 power3value = 9;
			}
		}
		else if(y=="s4"){
			const POWER4color = x;
			if(x=="gold"){
				 power4value = 5;
			}else if(x=="silver"){
				 power4value = 10;
			}else if(x=="white"){
				 power4value = 20;
			}
		}
		calculation(power1value,power2value,power3value,power4value);
	})
}
// ------------------------function section-----------------------//

// ----------------------calculation section----------------------//
const calculation =(val1,val2,power,tol)=>{
	let r = `${val1}${val2}`;
	let p = 10**power;
	let u = Number(r)*p;
	let per = (u*tol)/100;
	let top = (u+per)/1000;
	let down = (u-per)/1000;
	result.innerHTML=`${top} K.ohm ~ ${down} K.ohm`;
}
// ----------------------calculation section----------------------//






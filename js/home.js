// const panels = document.querySelectorAll('.panel');

// panels.forEach((panel) => {
// 	panel.addEventListener('mouseenter', () => {
// 		removeActiveClasses();
// 		panel.classList.add('active');
// 	});
// });

// function removeActiveClasses() {
// 	panels.forEach(panel => {
// 		panel.classList.remove('active');
// 	});
// };

const panels = [
	{
		url: '../ressources/images/clubhouse.jpg',
		title: 'Le Club'
	},
	{
		url: '../ressources/images/group-picture.jpg',
		title: 'Les Actus'
	},
	{
		url: '../ressources/images/gymnase.jpg',
		title: 'Les équipes'
	},
	{
		url: '../ressources/images/brief.jpg',
		title: 'La NF1'
	},
	{
		url: '../ressources/images/cocktail.jpg',
		title: 'Nos Partenaires'
	},
	{
		url: '../ressources/logo/logo-vert.jpg',
		title: 'Évènements: Les 50 ans'
	}, 
	{
		url: '../ressources/images/shop.png',
		title: 'La Boutique'
	},
	{
		url: '../ressources/images/contact.jpg',
		title: 'Contacts'
	}
],
n = panels.length,
current = n-1,
closedHeight = Math.floor(window.innerHeight/10);
let bg = document.getElementById('bg');
let fg = document.getElementById('fg');

panels.forEach((panel) => {
	panel = 0; panel < n; panel++

	let bgImg = document.createElement('div');
  	bg.appendChild(bgImg);

	gsap.set(bgImg, {
		attr:{
			id:'bgImg'+ panel,
			class:'bgImg'
		},
		width:'100%',
		height:'100%',
		backgroundImage:'url('+ panels[panel].url +')',
		backgroundSize:'cover',
		backgroundPosition:'center'
	});

	let b = document.createElement('div');
  	fg.appendChild(b);

	gsap.fromTo(b, {
		attr:{id:'b'+ panel, class:'box'},
		innerHTML:'<h3>'+(panels[panel].title)+'</h3>',
		width:'100%',
		height:'100%',
		borderBottom:(panel>0)?'solid 1px #eee':'',
		backgroundColor:'rgba(250,250,250,0)',
		bottom:panel*closedHeight,
		transformOrigin:'100% 100%',
		x:'100%'
	  	},
		{
			duration:panel*0.15,
			x:0,
			ease:'expo.inOut'
	  	}
	);

	b.onmouseenter = b.onclick = (e)=>{    
		if (Number(e.currentTarget.id.substr(1))==current) return;
		 
		let staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)));
		current = Number(e.currentTarget.id.substr(1));
		gsap.to('.box', {
		  duration:0.5,
		  ease:'elastic.out(0.3)',
		  left:(panel)=>(panel<=current)? panel*closedHeight: window.innerHeight-((n-panel)*closedHeight),
		  x:0,
		  stagger: staggerOrder? 0.05:-0.05
		})
		
		bg.appendChild( document.getElementById('bgImg'+current) )
		gsap.fromTo('#bgImg'+current, {opacity:0}, {opacity:1, duration:0.3, ease:'power1.inOut'})
		gsap.fromTo('#bgImg'+current, {scale:1.05, rotation:0.05}, {scale:1, rotation:0, duration:1.5, ease:'sine'}) 
	}
})
	
	
window.onresize = (e) => {
	closedHeight = Math.floor(window.innerHeight/10);
	gsap.set('.box', { x:0, left:(i)=> (i<=current)? i*closedHeight: window.innerHeight-((n-i)*closedHeight) })
}

document.querySelector('#fg').onclick = (e)=>{
	window.open(panels[current], '_self') // be sure to try this outside of codepen's iframe
}

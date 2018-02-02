import { spaceing } from './base.css.js'


export const button = {
  
  margin: spaceing.s0, 
  transition: 'color 0.3s',
  timingFunc: 'cubic-bezier(0.2, 1, 0.3, 1)',
  
  sharedPseudo: {
    content: '""',
    position: 'absolute', 
    borderRadius: '48px',
    'z-index': '-1'
    },
  
  before: {
  	'top': '-4px',
	  bottom: '-4px',
	  left: '-4px',
	  right: '-4px',
	  opacity: '0.2',
	  transform: 'scale3d(0.7, 1, 1)',
	  transition: 'transform 0.3s, opacity 0.3s',
	  'transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)'
  },
  
  after: {
  	'top': 0,
	  left: 0,
	  width: '100%',
	  height: '100%',
	  transform: 'scale3d(1.1, 1, 1)',
	  transition: 'transform 0.3s, background-color 0.3s',
	  'transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)'
  },
   
  

} //button end


/*
 *
 * Original Code from:
 *
 */

/*

 // Nuka /
.button--nuka {
	margin: 1em 2em;
	-webkit-transition: color 0.3s;
	transition: color 0.3s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--nuka.button--inverted {
	color: #37474f;
}
.button--nuka::before,
.button--nuka::after {
	content: '';
	position: absolute;
	border-radius: inherit;
	background: #7986cb;
	z-index: -1;
}
.button--nuka::before {
	top: -4px;
	bottom: -4px;
	left: -4px;
	right: -4px;
	opacity: 0.2;
	-webkit-transform: scale3d(0.7, 1, 1);
	transform: scale3d(0.7, 1, 1);
	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
	transition: transform 0.3s, opacity 0.3s;
}
.button--nuka::after {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	-webkit-transform: scale3d(1.1, 1, 1);
	transform: scale3d(1.1, 1, 1);
	-webkit-transition: -webkit-transform 0.3s, background-color 0.3s;
	transition: transform 0.3s, background-color 0.3s;
}
.button--nuka::before,
.button--nuka::after {
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--nuka.button--inverted::before,
.button--nuka.button--inverted::after {
	background: #fff;
}
.button--nuka:hover {
	color: #fff;
}
.button--nuka:hover::before {
	opacity: 1;
}
.button--nuka:hover::after {
	background-color: #37474f;
}
.button--nuka.button--inverted:hover::after {
	background-color: #7986cb;
}
.button--nuka:hover::after,
.button--nuka:hover::before {
	-webkit-transform: scale3d(1, 1, 1);
	transform: scale3d(1, 1, 1);
} 

*/

jwplayer("container").setup({

		    controls: true,
		    displaytitle: true,
		    fullscreen: "false",
		    primary: 'html5',
		    stretching: "exactfit",
		    autostart: false,

		    skin: {
		    	name: 'Netflix',
		    },

		    //sharing: {
		    	//sites: ["reddit","facebook","twitter"]
		    //},
		     
		    captions: {
		        color: '#FFF',
		         fontSize: 14,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },

		  playlist: [
			// https://dl6.debrid.link/dl/e2r99f7606c9ca75986fe10574477c1347e314b899a2/La.Mujer.Rey.2022.1080p-dual-lat.mp4
       {        
		    title: "Spencer",
		    description: "La fortuna favorece a los audaces.",
		    image: "https://cdn.vietsubtv.org/images/film/truyen-ky-ly-tieu-long-5726.jpg",
		    sources: [{
				// Google Chrome
				// https://dl.dropboxusercontent.com/s/llup8uc3k6du8nt/Creed%20II%20%282018%29%20HD%20720p%20Latino.mkv?dl=0
				// https://onedrive.live.com/download?cid=DE273C0A10CE737B&resid=DE273C0A10CE737B%21113&authkey=ABb-WjMIa9wk6P
		    file: "https://pixeldrain.com/api/file/rxvomvuE",
		      label: 'Defecto',
		      'type': 'mp4',
		      primary: 'html5',

		    }
		], 
		    captions: [{
		      file: "https://dl.dropboxusercontent.com/s/i9zz4fhyi6hj047/Uncharted-ES.srt?dl=0",
		      label: 'Español',
		      kind: "captions",
		      "default": true,
		    },{ 
		      file: "https://dl.dropboxusercontent.com/s/kfoxkcsp0cx2rss/Uncharted-EN.srt?dl=0",
		         label: 'Ingles',
		         kind: "captions",
		         }
		    ],
		  }//end of movies
      ]
		});
jwplayer("container").setCaptions({
  "back": true,
  "backgroundOpacity": "32",
  "edgeStyle": "dropshadow",
  "fontSize": 14,
  "fontOpacity": 100,
  "fontScale": 0.05,
  "windowOpacity": 0,
  "color": "#ffff00"
});

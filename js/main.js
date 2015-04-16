//Creamos un objeto que nos servira para darle todos los valores

Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

//Vamos a crear las colecciones con backbone
Sfotipy.Songs = Backbone.Collection.extend({
	model: Sfotipy.songs
});

Sfotipy.SongView = Backbone.View.extend({
	//Para los eventos debemos de crear un objeto
	events: {
		//'EVENTO SELECTOR': 'FUNCTION'
		'click .action.icon-add': 'add'
	},
	tagName: "li",
	className: "item border-bottom",

	templete: Handlebars.compile($("#song-templete").html()),
	//Con este metodo se ejecuta cuando ejecutamos una instancia
	initialize: function(){
		//El this al final es para decirle al render cual es el que vamos a usar y para que no de error
		this.listenTo(this.model, "change", this.render, this);
	},

	//Agregamos la funcion que se ejecutara
	render: function(){
		//var song = this.model;
		//var name = song.get('name');
		//var author = song.get('author');
		var html = this.templete(this.model.toJSON());
		//Con esto podemos agregar contido a nuestro html
		this.$el.html(html);
	},
	add: function(e){
		alert(this.model.get("name"));
	}
});

//Rutas

Sfotipy.Router = Backbone.Router.extend({
	routes:{
		"": "index",
		"album/:name": "album",
		"profile/:username": "profile"
	},

	index: function(){
		console.log("Estoy en el index");
	},

	album: function(name){
		console.log("Album " + name);
	},

	profile: function(username){
		console.log("Username " + username);
	}
});

//Con el app le decimos que manejara las rutas.
Sfotipy.app = new Sfotipy.Router();
//Este es para poder hacer que el enrutador comience a ejecutarse.
Backbone.history.start();

window.Sfotipy = Sfotipy;
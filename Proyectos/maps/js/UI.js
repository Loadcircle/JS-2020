class UI {
    constructor() {

         // Iniciar el mapa
         this.api = new Api();
         this.mapa = this.inicializarMapa();
         //crear los markers
         this.markers = new L.LayerGroup();
         this.mostrarEstablecimientos();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos=>{
                const resultados = datos.results;
                this.mostrarPines(resultados);
            })
    }

    mostrarPines(datos){
        //Limpiar markers
        this.markers.clearLayers();

        datos.forEach(e=>{
            const {latitude, longitude, calle, regular, premium} = e;
            

            const PopUp = L.popup()
                .setContent(`
                    <p>Calle: ${calle}</p>
                    <p>Regular: ${regular}</p>
                    <p>Premium ${premium}</p>
                `)


            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(PopUp);

            this.markers.addLayer(marker);
        });

        this.markers.addTo(this.mapa)
    }

    obtenerSugerencias(key){

        this.api.obtenerDatos()
            .then(datos=>{
                const resultados = datos.results;
                this.filtrarSugerencias(resultados, key)
            })
    }

    filtrarSugerencias(resultado, busqueda){

        const filtro = resultado.filter(filtro => {
            
            return filtro.calle.indexOf(busqueda) !== -1                 
           
        });

        this.mostrarPines(filtro);

    }
}
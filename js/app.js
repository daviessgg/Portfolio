//doc --> apunta al Inicio del documento HTML (html)
var doc = $(document);
// ready --- cuando se ha cargado el html completo
//- recursos del head:
doc.ready(iniciar);

function iniciar() {
    console.log('Hola mundo ...');
    var xproductos = $("header nav a#productos");
    var xcomunidad = $("header nav a#comunidad");
    var xsoporte = $("header nav a#soporte");
    var xhome = $("header figure#home");
    var xportatiles = $("header nav a#portatiles")
    var xplacas = $("header nav a#placas")
    var xgraficas = $("header nav a#graficas")
    xproductos.click(cargarproductos);
    xcomunidad.click(cargarcomunidad);
    xsoporte.click(cargarsoporte);
    xhome.click(cargarhome)
    cargarhome()
    xportatiles.click(cargarportatiles)
    xplacas.click(cargarplacas)
    xgraficas.click(cargargraficas)
}

function cargarhome(){
    console.log('clickeado home..');
//cargar el fichero /html/home.html en la <main>
    $("main").load("html/home.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='../css/home.css'>");

}


function cargarproductos(){
    console.log('clickeado productos...');
//cargar el fichero /html/productos.html en la <main>
    $("main").load("html/productos.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='../css/productos.css'>");

}

function cargarcomunidad(){
    console.log('clickeado comunidad..');
//cargar el fichero /html/comunidad.html en la <main>
    $("main").load("html/comunidad.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='../css/comunidad.css'>");

}

  function cargarsoporte(){
    console.log('clickeado soporte...');
//cargar el fichero /html/soporte.html en la <main>
    $("main").load("html/soporte.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='../css/soporte.css'>");
  }

  function cargarportatiles(){
    console.log('clickeado portatiles..');
//cargar el fichero /html/portatiles.html en la <main>
    $("main").load("html/portatiles.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='../css/portatiles.css'>");

}

function cargarplacas(){
    console.log('clickeado placas..');
//cargar el fichero /html/placas.html en la <main>
    $("main").load("html/placas.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='../css/placas.css'>");

}

function cargargraficas(){
    console.log('clickeado graficas..');
//cargar el fichero /html/graficas.html en la <main>
    $("main").load("html/graficas.html");
    $("head").children().last().remove();
    $("head").append ("<link rel='stylesheet' href='../css/graficas.css'>");

}

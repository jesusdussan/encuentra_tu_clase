//------------ CONSTANTES VARIABLES -----------------



//FORMULARIO DE REGISTRO DE PROFESORES
const fomularioRegistroProfesores = document.querySelector('#formulario-registro');
const nombreRegistro = document.querySelector('#nombre-apellido');
const codigoRegistro = document.querySelector('#codigo-universidad-registro');

// objeto de prueba para el ingreso a la plataforma de los profesores
const registros = {
    codigoUniversidad: '1234',
}

let obtenerRegistro = {
    nombreRegistroObj : nombreRegistro ,
    codigoRegistroObj : codigoRegistro
    
};

eventos();
function eventos() {
    fomularioRegistroProfesores.addEventListener('submit', (e) => {
    const {codigoUniversidad} = registros ; 
    const {nombreRegistroObj, codigoRegistroObj} = obtenerRegistro ;
        console.log(codigoRegistroObj.value, nombreRegistroObj.value);
        e.preventDefault();
        if (codigoRegistroObj.value === codigoUniversidad ) {
            console.log('si si es igual ');
            window.location = "./views/plataforma_profesores.ejs";
        } else {
            console.log('codigo incorrecto, intenta nuevamente');
            fomularioRegistroProfesores.reset();
        }
        
    })
}



// usar json
app.use(express.json());

app.use(express.urlencoded({extended:false}));
//ruta inicial 




// ruta de el formulario de registro
app.post("/validar", function(req, res) {
    const datosRegistro = req.body;

    let nombreProfesor = datosRegistro.nombre;
    let gmailProfesor = datosRegistro.gmail;
    let codigoUniversidadProfesor= datosRegistro.codigoUniversidad;
    let password = datosRegistro.password;
    let verificacionPassword= datosRegistro.passwordVerificada;

    let buscarl = "SELECT * FROM registro_profesores WHERE gmail = '"+gmailProfesor+"'";

    conexion.query(buscarl, function(error, row) {
        if (error) {
            throw error
        } else {
            if (row.length > 0 ) {
                console.log("no puedes registrarte, este usuario ya existe en nuestra base de datos");
            } else {
                
                        let registrar = "INSERT INTO registro_profesores (id_profesor, nombre_completo_profesor, gmail, codigo_universidad, password) VALUES ('', '"+nombreProfesor+"', '"+gmailProfesor+"','"+codigoUniversidadProfesor+"','"+verificacionPassword+"')";

                        conexion.query(registrar, function(error) {
                            if (error) {
                                throw error
                            } else {
                                console.log('datos almacenados correctamente');
                                
                                
                            }
                        })
//COMIENZA EL CALBACK HELL :,(((((((((((())))))))))))
            }
        }
    })


});

// :::::: MIDDLEWARE ::::::::::::::::::::::::::::::::::::::::::::::::::::



//configurar el puerto usado para el servidor local :::::::::::::::::::::


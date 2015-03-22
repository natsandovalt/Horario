  var Materia = [
    {
    nomMateria: "Programación Orientada Objetos",
    horaInicio: "09:00",
    horaFin:"10:30",
    diasClase: [
    false,
    true,
    false,
    false,
    true
    ],
    nombreProfesor: "Luis Humberto González",
    claveMateria: "TC2016.3",
    salon: "A3303",
    letra: 'A',
    claseCompartida: false
  },
  {
    nomMateria: "Organización Computacional",
    horaFin: "10:30",
    horaFin: "12:00",
    diasClase: [
    false,
    true,
    false,
    false,
    true
    ],
    nombreProfesor: "Mario Isidro de la Fuente",
    claveMateria: "TC1016.3",
    salon: "A3101",
    letra: 'B',
    claseCompartida: false
  },
  {
    nomMateria: "Fundamentos de Diseño Interactivo",
    horaInicio: "15:00",
    horaFin: "16:30",
    diasClase: [
    false,
    true,
    false,
    false,
    true
    ],
    nombreProfesor: "Cleopatra Garza",
    claveMateria: "TC1015.1",
    salon: "CI220B",
    letra: 'C',
    claseCompartida: false
  },
  {
    nomMateria: "Administración e innovación en modelos de negocio",
    horaInicio: "09:00",
    horaFin: "10:30",
    diasClase: [
    true,
    false,
    false,
    true,
    false
    ],
    nombreProfesor: "Miguel Angel Flores",
    claveMateria: "AD1005.3",
    salon: "A6404",
    letra: 'D',
    claseCompartida: false
  },
  {
    nomMateria: "Matemáticas II",
    horaInicio: "10:30",
    horaFin: "12:00",
    diasClase: [
    true,
    false,
    false,
    true,
    false
    ],
    nombreProfesor: "Juan Antonio Alanís",
    claveMateria: "MA1017.3",
    salon: "A4307",
    letra: 'E',
    claseCompartida: false
  },
  {
    nomMateria: "Matemáticas II",
    horaInicio: "12:00",
    horaFin: "13:30",
    diasClase: [
    true,
    false,
    false,
    true,
    false
    ],
    nombreProfesor: "María Dhlema Rendón",
    claveMateria: "MA1017.28",
    salon: "A7403",
    letra: 'F',
    claseCompartida: false
  },
  {
    nomMateria: "Matemáticas I",
    horaInicio: "12:00",
    horaFin: "13:30",
    diasClase: [
    true,
    false,
    false,
    true,
    false
    ],
    nombreProfesor: "Francisco Morales",
    claveMateria: "Ma1015.29",
    salon: "A7205",
    letra: 'G',
    claseCompartida: false
  },
  {
    nomMateria: "Análisis y expresión verbal",
    horaInicio: "15:00",
    horaFin: "16:30",
    diasClase: [
    true,
    false,
    true,
    true,
    false
    ],
    nombreProfesor: "Mirthala García",
    claveMateria: "H1040.18",
    salon: "A1416",
    letra: 'H',
    claseCompartida: false
  },
  {
    nomMateria: "Cambio climático y uso de energía",
    horaInicio: "15:00",
    horaFin: "16:30",
    diasClase: [
    false,
    true,
    false,
    false,
    true
    ],
    nombreProfesor: "Ana Yael Vanoye",
    claveMateria: "DS1005.15",
    salon: "A4420",
    letra: 'I',
    claseCompartida: false
  },
  {
    nomMateria: "Física I",
    horaInicio: "13:30",
    horaFin: "15:00",
    diasClase: [
    true,
    false,
    false,
    true,
    false
    ],
    nombreProfesor: "Oscar Arturo Garza",
    claveMateria: "F1002.12",
    salon: "CI406",
    letra: 'J',
    claseCompartida: false
  },
  {
    nomMateria: "Alemán básico II",
    horaInicio: "13:30",
    horaFin: "15:00",
    diasClase: [
    true,
    false,
    true,
    true,
    false
    ],
    nombreProfesor: "Petra Kosíkova",
    claveMateria: "HI95021.1",
    salon: "A4207",
    letra: 'K',
    claseCompartida: false
  },
  {
    nomMateria: "Matemáticas Discretas",
    horaInicio: "15:00",
    horaFin: "16:30",
    diasClase: [
    true,
    false,
    false,
    true,
    false
    ],
    nombreProfesor: "Ramón Felipe Brena",
    claveMateria:"TC1003.5",
    salon: "A3302",
    letra: 'L',
    claseCompartida: false
  },
  {
    nomMateria: "Fundamentos de Programación",
    horaInicio: "10:30",
    horaFin: "12:00",
    diasClase: [
    false,
    true,
    false,
    false,
    true
    ],
    nombreProfesor: "Javier Alberto Giese",
    claveMateria: "TC1014.10",
    salon: "CDES115",
    letra: 'M',
    claseCompartida: false
  },
  {
    nomMateria: "Introducción a la ingeniería en tecnologías computacionales",
    horaInicio: "13:30",
    horaFin: "15:00",
    diasClase: [
    false,
    true,
    false,
    false,
    true
    ],
    nombreProfesor: "Elda Quiroga",
    claveMateria: "TC1022.2",
    salon: "A6206",
    letra: 'N',
    claseCompartida: false
  }
  ];



  //Decode html contents from the email body 
  var decodeHtml = function(html){
    //Make an array with all subjects + extra stuff in the html code
    var splitter = "<td colspan=3D\"10\"><b><code>";
    var splitted = html.split(splitter);
    var subjects = new Array();
    var temp;
    for (var i = 1; i < splitted.length; i++) {
      temp = splitted[i].split(" ", 1);
      subjects.push(temp[0]);
    };
    console.log(html);
    console.log(subjects);
    console.log(generateString(subjects));
  };



  function callDecode(){
    //For debugging purposes
    decodeHtml("<td colspan=3D\"10\"><b><code>MA1017.3 hola probando askjdfkjafnjl asdjhfkahsdfkj <td colspan=3D\"10\"><b><code>TC1022.2 esta es otra prueba");
  }



  var subjectLetter = function(subject){
    //Does not return anything in case of not finding the subject
    for (var act = 0; act < Materia.length; act++) {
      if(Materia[act].claveMateria == subject){
        return Materia[act].letra;
      }
    };
  };


  //Generate user string from decoded html string
  var generateString = function(subjects){
    var userString = "";
    for (var i = 0; i < subjects.length; i++) {
      userString += subjectLetter(subjects[i]);
    };
    return userString;
  };
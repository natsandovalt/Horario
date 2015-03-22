if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
var horario1;
var horario2;
var horasLibre;
function inicializa ()
{
  horario1 = [];
  horario2 = [];
  horasLibre = [];
  for (var i = 0; i < 28; i++)
  {
    horario1 [i] = new Array (28);
    horario2 [i] = new Array (28);
    horasLibre [i] = new Array (28);
    for (var j = 0; j < 5; j++)
     {
        horario1 [i][j] = 0;
        horario2 [i][j] = 0;
        horasLibre [i][j] = 1;
     }
  }
}


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
  nomMateria: a<"Administración e innovación en modelos de negocio",
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
  nomMateria: "Almán básico II",
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

var findPosition = function(letter)
{
  for (var i = 0; i < Materia.length; i++)
  {
    if (letter == Materia[i].letra)
      return i;
    else
      return -1;
  }
};

function compare (code1, code2)
{
  for (var i = 0; i < code1.length; i++)
  {
    for (var j = 0; j < code2.length; j++)
    {
      if (code1[i] == code2[j])
      {
        for (var k = 0; k < Materia.length; k++)
        {
          if (code1[i] == Materia[k].letra)
          {
            Materia[i].claseCompartida = true;
          }
        }
      }
    }
  }
}

function buildSchedule1 (day, code1)
{
  for (var i =0; i < code1.length; i++)
  {
    for (var j = 0; j < Materia.length; j++)
    {
      if (code1[i] == Materia[j].letter)
      {
        if (Materia[j].diasClase[day])
        {
          var hInicial = Materia[j].horaInicio.substring(0, 2)*60 + Materia[j].horaInicio.substring(3,5);
          var hFinal = Materia[j].horaFin.substring(0,2)*60 + Materia[j].horaFin.substring(3,5);
          var diferencia = hFinal - hInicial;
          switch(Materia[j].horaInicio)
          {
            case "07:30":
              var clasInicia = 0;
              break;
            case "9:00":
              var clasInicia = 3;
              break;
            case "10:30":
              var clasInicia = 6;
              break;
            case "12:00":
              var clasInicia = 9;
              break;
            case "13:30":
              var clasInicia = 12;
              break;
            case "15:00":
              var clasInicia = 15;
              break;
            case "16:30":
              var clasInicia = 18;
              break;
            case "18:00":
              var clasInicia = 21;
              break;
            case "19:30":
              var clasInicia = 24;
              break; 
          }
          while (diferencia > 0)
          {
              horario1 [clasInicia] [day] = 1;
              diferencia -= 30;
              clasInicia += 1;
          }
        }
      }
    }
  }
}

function buildSchedule2 (day, code2)
{
  for (var i =0; i < code2.length; i++)
  {
    for (var j = 0; j < Materia.length; j++)
    {
      if (code2[i] == Materia[j].letter)
      {
        if (Materia[j].diasClase[day])
        {
          var hInicial = Materia[j].horaInicio.substring(0, 2)*60 + Materia[j].horaInicio.substring(3,5);
          var hFinal = Materia[j].horaFin.substring(0,2)*60 + Materia[j].horaFin.substring(3,5);
          var diferencia = hFinal - hInicial;
          switch(Materia[j].horaInicio)
          {
            case "07:30":
              var clasInicia = 0;
              break;
            case "9:00":
              var clasInicia = 3;
              break;
            case "10:30":
              var clasInicia = 6;
              break;
            case "12:00":
              var clasInicia = 9;
              break;
            case "13:30":
              var clasInicia = 12;
              break;
            case "15:00":
              var clasInicia = 15;
              break;
            case "16:30":
              var clasInicia = 18;
              break;
            case "18:00":
              var clasInicia = 21;
              break;
            case "19:30":
              var clasInicia = 24;
              break; 
          }
          while (diferencia > 0)
          {
              horario2 [clasInicia] [day] = 1;
              diferencia -= 30;
              clasInicia += 1;
          }
        }
      }
    }
  }
}

function compareFreeHours ()
{
  for (var i = 0; i < 28; i++)
  {
    for (var j = 0; j < 5; j++)
    {
      if (horario1 [i][j] == 0 && horario2 [i][j] == 0)
        horasLibre [i] [j] = 0;
    }
  }
}

function prueba ()
{
var horario1 = [];
var horario2 = [];
var horasLibre = [];
for (var i = 0; i < 28; i++)
{
  horario1 [i] = [];
  horario2 [i] = [];
  horasLibre [i] = [];
  for (var j = 0; j < 5; j++)
   {
    horario1 [i][j] = 0;
    horario2 [i][j] = 0;
    horasLibre [i][j] = 1;
   }
}
  for (var i = 0; i < 28; i++)
  {
    for (var j = 0; j <5; j++)
    {
      console.log (horario1 [i] [j]);
    }
  }
}
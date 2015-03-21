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
  letra: 'A'
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
  letra: 'B'
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
  letra 'C'
},
{
  nomMateria :"Administración e innovación en modelos de negocio",
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
  letra: 'D'
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
  letra: 'E'
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
  letra: 'F'
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
  letra: 'G'
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
  letra: 'H'
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
  letra: 'I'
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
  letra: 'J'
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
  letra: 'K'
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
  letra: 'L'
},
{
  nomMateria: "Fundamentos de Programación",
  horaInicio: "10:30",
  horaFin: "12:00",
  diasClase [
  false,
  true,
  false,
  false,
  true
  ],
  nombreProfesor: "Javier Alberto Giese",
  claveMateria: "TC1014.10",
  salon: "CDES115",
  letra: 'M'
},
{
  nomMateria: "Introducción a la ingeniería en tecnologías computacionales",
  horaInicio: "13:30",
  horaFin: "15:00",
  diasClase [
  false,
  true,
  false,
  false,
  true
  ],
  nombreProfesor: "Elda Quiroga",
  claveMateria: "TC1022.2",
  salon: "A6206",
  letra: 'N'
}
];

var findPosition = function (letter)
{
  for (var i = 0; i < Materia.length; i++)
  {
    if (letter == Materia[i].letra)
      return i;
    else
      return -1;
  }
};
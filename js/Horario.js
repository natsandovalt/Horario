var horario1;
var horario2;
var horasLibre;


function inicializa (){
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
  horaInicio: "10:30",
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


var findPosition = function(letra)
{
  for (var i = 0; i < Materia.length; i++)
  {
    if (letra == Materia[i].letra)
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
            Materia[k].claseCompartida = true;
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
      if (code1[i] == Materia[j].letra)
      {
        if (Materia[j].diasClase[day])
        {
          var hInicial = parseInt(Materia[j].horaInicio.substring(0, 2)) * 60 + parseInt(Materia[j].horaInicio.substring(3,5));
          var hFinal = parseInt(Materia[j].horaFin.substring(0,2)) *60 + parseInt(Materia[j].horaFin.substring(3,5));
          var diferencia = hFinal - hInicial;
          switch(Materia[j].horaInicio)
          {
            case "07:30":
              var clasInicia = 0;
              break;
            case "09:00":
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
          console.log(Materia[j].horaInicio);
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
      if (code2[i] == Materia[j].letra)
      {
        if (Materia[j].diasClase[day])
        {
          var hInicial = parseInt(Materia[j].horaInicio.substring(0, 2))*60 + parseInt(Materia[j].horaInicio.substring(3,5));
          var hFinal = parseInt(Materia[j].horaFin.substring(0,2))*60 + parseInt(Materia[j].horaFin.substring(3,5));
          var diferencia = hFinal - hInicial;
          switch(Materia[j].horaInicio)
          {
            case "07:30":
              var clasInicia = 0;
              break;
            case "09:00":
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
    };
  };
}

var form = document.forms.seleccionarO;


function fillTable(){
  inicializa ();
  //Determine if we are to fill a single o 2 schedules
  if(document.getElementById("inputText2").style.display == "block"){
    //Van a ser 2
    var inputText1 = document.getElementById("inputText1").value;
    var inputText2 = document.getElementById("inputText2").value;
    document.getElementById("resultados2").style.display = "block";
    document.getElementById("opciones").style.display = "none";
    console.log(inputText1);
    console.log(inputText2);
    compare(inputText1, inputText2);
    for (var i = 0; i < 4; i++) {
      buildSchedule1 (i, inputText1);
      buildSchedule2 (i, inputText2);
    };

    for (var i = 0; i < Materia.length; i++) {
      console.log (Materia[i].claseCompartida);
      if( Materia[i].claseCompartida){
        //Comparten esa clase
        
        document.getElementById("TextoMat").innerHTML += "• " + Materia[i].nomMateria + " a las ";
        document.getElementById("TextoMat").innerHTML += "<span style=\"color: #388E3C\">" + Materia[i].horaInicio + "</span>" +"<br>";
      }
    };

    console.log(horario1);
  }
  else{
    var inputText1 = document.getElementById("inputText1").value;
    document.getElementById("resultados").style.display = "block";
    document.getElementById("opciones").style.display = "none";
    console.log(inputText1);
    for (var i = 0; i < 4; i++) {
      buildSchedule1 (i, inputText1);
    };
    console.log(horario1);
    for (var i = 0; i < inputText1.length; i++) {
      nombresMaterias1(inputText1[i]);    
    };
    
  }
}

function botonMas(){
  console.log(Materia[0].nomMateria);
  if( document.getElementById("signoMas").innerHTML == "+"){
    document.getElementById("inputText2").style.display = "block";
    document.getElementById("inputText1").placeholder = "Código del 1º horario";
    document.getElementById("signoMas").innerHTML = "-";
  }
  else{
    document.getElementById("inputText2").style.display = "none";
    document.getElementById("inputText1").placeholder = "Código de tu horario";
    document.getElementById("signoMas").innerHTML = "+";
  }
}




function nombresMaterias1 (codigo1)
{
  for (var i = 0; i < codigo1.length; i++)
  {
    switch(codigo1[i])
    {
      case 'A':
        var inicia = 3;
        var duracion = 90;
        while (duracion > 0)
        {
          //Martes
          var iD = "I" + inicia;
          console.log(iD);

          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 1+1 || j==4+1)){
                  col.style.background = "#64B5F6";
                  col.style.color = "white";
                  col.innerHTML = Materia[0].nomMateria;
  
                }
              }  
          }

          //document.getElementById(iD).style.background = "blue";
          horario1[inicia][1] = Materia[0].nomMateria;
          horario1[inicia][4] = Materia[0].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'B':
        var inicia = 6;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][1] = Materia[1].nomMateria;
          horario1[inicia][4] = Materia[1].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 1+1 || j==4+1)){
                  col.style.background = "#5C6BC0";
                  col.style.color = "white";
                  col.innerHTML = Materia[1].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'C':
        var inicia = 15;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][1] = Materia[2].nomMateria;
          horario1[inicia][4] = Materia[2].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 1+1 || j==4+1)){
                  col.style.background = "#4DD0E1";
                  col.style.color = "white";
                  col.innerHTML = Materia[2].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'D':
        var inicia = 3;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][0] = Materia[3].nomMateria;
          horario1[inicia][3] = Materia[3].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 0+1 || j==3+1)){
                  col.style.background = "#4DB6AC";
                  col.style.color = "white";
                  col.innerHTML = Materia[3].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'E':
        var inicia = 6;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][0] = Materia[4].nomMateria;
          horario1[inicia][3] = Materia[4].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 0+1 || j==3+1)){
                  col.style.background = "#66BB6A";
                  col.style.color = "white";
                  col.innerHTML = Materia[4].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'F':
        var inicia = 9;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][0] = Materia[5].nomMateria;
          horario1[inicia][3] = Materia[5].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 0+1 || j==3+1)){
                  col.style.background = "#FFB74D";
                  col.style.color = "white";
                  col.innerHTML = Materia[5].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'G':
        var inicia = 9;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][0] = Materia[6].nomMateria;
          horario1[inicia][3] = Materia[6].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 0+1 || j==3+1)){
                  col.style.background = "#FF8A65";
                  col.style.color = "white";
                  col.innerHTML = Materia[6].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'H':
        var inicia = 15;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][0] = Materia[7].nomMateria;
          horario1[inicia][2] = Materia[7].nomMateria;
          horario1[inicia][3] = Materia[7].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 0+1 || j==2+1 || j==3+1)){
                  col.style.background = "#A1887F";
                  col.style.color = "white";
                  col.innerHTML = Materia[7].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'I':
        var inicia = 15;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][1] = Materia[8].nomMateria;
          horario1[inicia][4] = Materia[8].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 1+1 || j==4+1)){
                  col.style.background = "#78909C";
                  col.style.color = "white";
                  col.innerHTML = Materia[8].nomMateria;
                }
              }  
          }

          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'J':
        var inicia = 12;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][0] = Materia[9].nomMateria;
          horario1[inicia][3] = Materia[9].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 0+1 || j==3+1)){
                  col.style.background = "#E57373";
                  col.style.color = "white";
                  col.innerHTML = Materia[9].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'K':
        var inicia = 12;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][0] = Materia[10].nomMateria;
          horario1[inicia][2] = Materia[10].nomMateria;
          horario1[inicia][3] = Materia[10].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 0+1 || j==2+1 || j==3+1)){
                  col.style.background = "#BA68C8";
                  col.style.color = "white";
                  col.innerHTML = Materia[10].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'L':
        var inicia = 15;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][0] = Materia[11].nomMateria;
          horario1[inicia][3] = Materia[11].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && (j == 0+1 || j==3+1)){
                  col.style.background = "#FF9800";
                  col.style.color = "white";
                  col.innerHTML = Materia[11].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'M':
        var inicia = 6;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][1] = Materia[12].nomMateria;
          horario1[inicia][4] = Materia[12].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && ( j==1+1 || j==4+1)){
                  col.style.background = "#69F0AE";
                  col.style.color = "white";

                  col.innerHTML = Materia[12].nomMateria;
                }
              }  
          }
        break;
      case 'N':
        var inicia = 12;
        var duracion = 90;
        while (duracion > 0)
        {
          horario1[inicia][1] = Materia[13].nomMateria;
          horario1[inicia][4] = Materia[13].nomMateria;
          var table = document.getElementById("modal-table");
          for (var i = 0, row; row = table.rows[i]; i++) {
             //iterate through rows
             //rows would be accessed using the "row" variable assigned in the for loop
             for (var j = 0, col; col = row.cells[j]; j++) {
               //iterate through columns
               //columns would be accessed using the "col" variable assigned in the for loop
                //console.log(row.cells);
                console.log(col);
                if(i == inicia+1 && ( j==1+1 || j==4+1)){
                  col.style.background = "#F44336";
                  col.style.color = "white";
                  col.innerHTML = Materia[13].nomMateria;
                }
              }  
          }
          inicia += 1;
          duracion -= 30;
        }
        break;
    }
  }
}

function nombresMaterias2 (codigo2)
{
  for (var i = 0; i < codigo2.length; i++)
  {
    switch(codigo2[i])
    {
      case 'A':
        var inicia = 3;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][1] = Materia[0].nomMateria;
          horario2[inicia][4] = Materia[0].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'B':
        var inicia = 6;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][1] = Materia[1].nomMateria;
          horario2[inicia][4] = Materia[1].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'C':
        var inicia = 15;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][1] = Materia[2].nomMateria;
          horario2[inicia][4] = Materia[2].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'D':
        var inicia = 3;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][0] = Materia[3].nomMateria;
          horario2[inicia][3] = Materia[3].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'E':
        var inicia = 6;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][0] = Materia[4].nomMateria;
          horario2[inicia][3] = Materia[4].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'F':
        var inicia = 9;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][0] = Materia[5].nomMateria;
          horario2[inicia][3] = Materia[5].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'G':
        var inicia = 9;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][0] = Materia[6].nomMateria;
          horario2[inicia][3] = Materia[6].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'H':
        var inicia = 15;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][0] = Materia[7].nomMateria;
          horario2[inicia][2] = Materia[7].nomMateria;
          horario2[inicia][3] = Materia[7].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'I':
        var inicia = 15;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][1] = Materia[8].nomMateria;
          horario2[inicia][4] = Materia[8].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'J':
        var inicia = 12;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][0] = Materia[9].nomMateria;
          horario2[inicia][3] = Materia[9].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'K':
        var inicia = 12;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][0] = Materia[10].nomMateria;
          horario2[inicia][2] = Materia[10].nomMateria;
          horario2[inicia][3] = Materia[10].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'L':
        var inicia = 15;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][0] = Materia[11].nomMateria;
          horario2[inicia][3] = Materia[11].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'M':
        var inicia = 6;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][1] = Materia[12].nomMateria;
          horario2[inicia][4] = Materia[12].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
      case 'N':
        var inicia = 12;
        var duracion = 90;
        while (duracion > 0)
        {
          horario2[inicia][1] = Materia[13].nomMateria;
          horario2[inicia][4] = Materia[13].nomMateria;
          inicia += 1;
          duracion -= 30;
        }
        break;
    }
  }
}


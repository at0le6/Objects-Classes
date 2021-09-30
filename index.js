/*
​
                            Objetos Literales
​
-----------------------------------------------------------------------
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
-----------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
  de bienvenida. La salida debe ser algo como:
  "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
-----------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
  pingüino llamada puedeVolar y asignalo a falso.
  Nota: No modifiques el código original donde definiste a tu pingüino
-----------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------
4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
  consola: "kaww kaww!!"
  Nota: Sí, así suenan los pingüinos
  Nota de la Nota: No modifiques el código previo. Hazlo en una
  nueva línea de código.
-----------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------
5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
  consola el mismo mensaje que escribimos para la bienvenida.
  Esta vez, emplea la palabra reservada "this" para resolverlo.
-----------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------
6.- Sin modificar el código previo, cambia el nombre del pingüino a 
  "Señor Pingu" y llama al método "saludar" para verificar que 
  se ha aplicado el cambio correctamente.
-----------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------
7.- Escribe otro método llamado 'volar'. Con este método imprime en 
  consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
  en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
  "No puedo volar :("
-----------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------
8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
  llamar el método 'volar' para verificar que el cambio se efectuó
  correctamente.
-----------------------------------------------------------------------
*/
/*
-------------------------------------------------------------
9.- Crea un objeto que contenga información de una receta 
  para preparar Mole. Debe contener las propiedades de
  título (string), porciones (numero) e ingredientes (un
  arreglo de strings). Muestra la información de la receta
  para que luzca así:
  
  Mole
  Porciones: 2
  Ingredientes:
  canela
  comino
  cocoa
-------------------------------------------------------------
*/
/*
-------------------------------------------------------------
10.- Crea un arreglo de objetos, donde cada objeto describa 
  un libro y tenga las propiedades para titulo(string),
  autor(string) y leido(booleano para indicar si se ha 
  leido o no). Itera sobre el arreglo de libros, y por 
  cada libro imprime el titulo y autor, junto con su 
  status de lectura (si ya ha sido leído, o no).
-------------------------------------------------------------
*/
/*
​
                          Objetos
​
-----------------------------------------------------------------------
11.- Haz una clase llamada Persona que siga las siguientes condiciones:
 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
 calcularIMC()
 esMayorDeEdad()
 El constructor pide nombre, edad,sexo,peso y altura
 Generar el RFC a partir de el nombre, edad y sexo
-----------------------------------------------------------------------
*/
/*
-----------------------------------------------------------------------
12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
 -Titular y cantidad
 -ingresar(cantidad)
 -retirar(cantidad)
 Hacer las validaciones previas
 Como regla de negocio no debe de tener más de $900 y menos de $10
-----------------------------------------------------------------------
*/
//ejercios OBJ literales
//1.-
console.log("------------------1-------------------");
const myPenguin=
{
  character:'Evil emperor penguin',
  origin:'Evil emperor penguin',
  author:'Laura Ellen Anderson',
  notes:'	Children s book series about an evil emperor penguin and his sidekicks.'
};
//2
console.log("------------------2-------------------");
console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}`);
//3
console.log("---------------------3-------------------");
myPenguin.puedeVolar=()=>false;
console.log(myPenguin.puedeVolar());
//4
console.log("------------------4-------------------");
myPenguin.graznar=()=>{
  console.log("kaww kaww!!");
};
myPenguin.graznar();
//5
console.log("---------------------5-------------------");
myPenguin.saludar=()=>
{
  this.character="Señor Pingu";
  console.log(`Hola un pingüino y mi nombre es ${this.character}`);
}
myPenguin.saludar();
//6
console.log("-------------------6-------------------");
myPenguin.character='Señor Pingu';
console.log(myPenguin.character);
//7
console.log("--------------7-------------------");
myPenguin.volar=(puede)=>{
  let respuesta='';
  puede?respuesta='¡Puedo volar!':respuesta="No puedo volar :(";
  console.log(respuesta);
}
myPenguin.volar(myPenguin.puedeVolar());
//8
console.log("--------------8-------------------");
myPenguin.puedeVolar=()=>true;
myPenguin.volar(myPenguin.puedeVolar());
//9
const molesito=
{
  titulo:'Molesito',
  porciones: 2,
  ingredientes:['canela','comino','cocoa']
};
console.log("----------9-------------------");
molesito.muestra=function(){
  console.log(this.titulo);
  console.log(`Porciones ${this.porciones}`);
  console.log(`Ingredientes:`);
  this.ingredientes.forEach(i=>console.log(i));
};
molesito.muestra();
//10
console.log("---------10-------------------");
const Libros=[{titulo:'El libro de las ilusiones',author:'Paul Auster.',leido:false}
,{titulo:'1984',author:'George Orwell.',leido:true}
,{titulo:'El Lobo Estepario',author:'Herman Hesse.',leido:true}];
Libros.forEach((i)=>{
  console.log(`${i.titulo} de ${i.author} Leido:${i.leido}`);
});
//11
console.log("-----------------11-------------------");
class Persona
{
  constructor(nombre='',APM='',APP='', edad=Number, sexo='h', peso=Number,altura=Number,fecha=new Date())
  {
    this.nombre=nombre;
    this.APM=APM;
    this.APP=APP;
    this.edad=edad;
    this.sexo=sexo;
    this.peso=peso;
    this.altura=altura;
    this.fecha=fecha
  }
  calcularIMC()
  {
    return this.peso/(this.altura*this.altura);
  }
  esMayorDeEdad()
  {
    let r;
    this.edad>=18?r=true:r=false;
    return r;
  }
  rcf()
  {
    let app1=this.uper(this.APM);
    let app2=this.uper(this.APP);
    let año=this.fecha.getUTCFullYear().toString().slice(-2);
    let mes=this.numberCombersor(this.fecha.getUTCMonth()+1);
    let day=this.numberCombersor(this.fecha.getUTCDate());
    let concat=app1+app2+año+mes+day;
    return concat;
  }
  uper(x='')
  {
    let a=x.toUpperCase(),b;
    b=a.slice(0,2);
    return b;
  }
  numberCombersor(x)
  {
    return ("0" + x).slice(-2);
  }
}
const Gama=new Persona('Gama','Gonzalez','Gamaliel',20,'H',60,1.70,new Date('2001-6-3'));
console.log(Gama.calcularIMC());
console.log(Gama.esMayorDeEdad());
console.log(Gama.rcf()); 
//12
console.log("-----------12-------------------");
class cuentas
{
  constructor(nombre,cantidad)
  {
    this.nombre=nombre;
    this.cantidad=cantidad;
  }
  ingresar(x=0)
  {
    if(x==900)
    {
      return this.nombre+' alcanzo el saldo maximo alcanzado';
    }
    else if((x+this.cantidad)>900)
    {
      let plus;
      console.log(this.nombre+` el saldo que desea ingresar sobrepasa el maximo \n
      se le agregara el monto de 900 y se le dara cambio`);
      plus=(x+this.cantidad)-900;
      this.cantidad=900;
      return 'De cambio se le daran $'+plus;
    }
    else
    {
      this.cantidad+=x;
      return 'Su saldo se actualizo a '+this.cantidad;
    }
  }
  retirar(x=0)
  {
      if(x==10)
      {
        return this.nombre +' no se puede retirar mas'
      }
      else
      {
        let lesuma;
        this.cantidad-=x;
        this.cantidad<10?lesuma=true:lesuma=false;
        if(lesuma)
        {
          let cambio=10-this.cantidad;
          this.cantidad+=cambio;
          return this.nombre+' su cuenta no puede tener menos de 10 pesos le dara cambio de '+cambio+ ' su saldo es de '+this.cantidad;
        }
        else
        {
          return this.nombre+ ' su saldo se actualizo a '+this.cantidad;
        }
      }
  }
}
const Angel=new cuentas('Angel',200);
console.log(Angel.ingresar(600));
console.log(Angel.retirar(795));

class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}
class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  atack(target) {
    if (target instanceof Unit) {
      target.res = target.res-this.power;
      console.log(`La carta ${this.name} esta atacando a la carta ${target.name}`);
    } 
    else {
      throw new Error("Target must be a unit!");
    }
  }
}
const ninja1 = new Unit("NinjaRojo", 3, 3, 4);
const ninja2 = new Unit("ninjaNegro", 4, 5, 4);

ninja1.atack(ninja2);





 class Efects extends Card {
   constructor(name, cost,texto,stat, magnitud) {
    super(name, cost);
    this.texto=texto;
    this.stat = stat;
    this.magnitud = magnitud;
   }
   magia(target) {
    if (target instanceof Unit) {
      if (this.stat === "Resiliencia"){
        target.res = target.res + this.magnitud;
      }
      if (this.stat==="poder"){
        target.power = target.power + this.magnitud;
      }
      
      console.log(`Nombre:${this.name} Costo: ${this.cost} Texto: ${this.texto} Stat: ${this.stat} Maginitud: ${this.magnitud}`)
    } 
    else {
      throw new Error("Target must be a unit!");
    }
  }
}

  


 

 const efecto1 = new Efects ("Algoritmo Dificil",2,"aumentar la resistencia del objetivo en 3","Resiliencia",+3)
 const efect2 = new Efects ("Rechazo de promesa no manejado",1,"reducir la resistencia del objetivo en 2","Resiliencia",-2)
 const efecto3 = new Efects ("Programacio en Pareja",3,"aumentar el poder del objetivo en 2","poder",+2)
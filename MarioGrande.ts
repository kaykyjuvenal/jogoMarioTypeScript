import { IMarioState } from "./Mario"

export class MarioGrande implements IMarioState{
    pegarFlor(): IMarioState {
      console.log("Mario solta fogo!")
      return new MarioFogo()
    }
    pegarPena(): IMarioState {
      console.log("Mario agora tem uma capa!")
      return new MarioCapa()
    }
    levarDano(): IMarioState {
      console.log("Mario ficou pequeno!")
      return new MarioPequeno()
    }
    pegarCogumelo(): IMarioState {
      console.log("Mario ganhou 1000 pontos ou cresceu!")
      return this
    }
  }
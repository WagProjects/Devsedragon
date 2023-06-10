import { Personagem } from "../modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "../modules/mago.js"
import { Arqueiro } from "../modules/arqueiro.js"
import { ArqueiroMago } from "../modules/arqueiro-mago.js"

const magoAntonio = new Mago('Antonio', 10, 'Gelo', 8, 15)
const magaJulia = new Mago("Julia", 8, 'Fogo', 9, 20)
const arqueiroCascao = new Arqueiro("Cascão", 18, 20)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'Ar', 4, 8)


const personagens = [magoAntonio, magaJulia, arqueiroCascao, arqueiroMagoChico]

new PersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroCascao, magoAntonio))
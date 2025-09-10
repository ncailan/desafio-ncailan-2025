class AbrigoAnimais {

  animaisDados = {
  "Rex": { tipo: "cão", brinquedos: ["RATO", "BOLA"] },
  "Mimi": { tipo: "gato", brinquedos: ["BOLA", "LASER"] },
  "Fofo": { tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
  "Zero": { tipo: "gato", brinquedos: ["RATO", "BOLA"] },
  "Bola": { tipo: "cão", brinquedos: ["CAIXA", "NOVELO"] },
  "Bebe": { tipo: "cão", brinquedos: ["LASER", "RATO", "BOLA"] },
  "Loco": { tipo: "jabuti", brinquedos: ["SKATE", "RATO"] }
};

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    const resultados = [];
    const adocoesPorPessoa = {"pessoa 1" : 0, "pessoa 2": 0};

    for (const animalNome of animaisParaAvaliar){
      if (!this.animaisDados[animalNome]){
        return {lista: null, erro: "Animal inválido"}
      }
    }

  return { lista: resultados.sort(), erro: null }; 


  }
}

export { AbrigoAnimais as AbrigoAnimais };
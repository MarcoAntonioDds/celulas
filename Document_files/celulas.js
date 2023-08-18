function validarResposta(opcoes, resposta) {
  return opcoes.includes(resposta);
}

function avaliarCandidato() {
  const celulas = ["Mitocondria", "Reticulo endoplasmatico rugoso", "Reticulo endoplasmatico liso", "Aparelho de golgi", "Lisossomos", "Peroxissomo", "Vacuolo", "Ribossomo", "Centriolo", "Membrana plasmatica", "Citoplasma", "Nucleo"];

  const celula = window.prompt(`Digite qual parte você quer saber sobre as organelas: (${celulas.join(", ")})`);
  if (!validarResposta(celulas, celula)) {
    window.alert("Opção inválida. Por favor, tente novamente.");
    return;
  }
  if (celula === "Mitocondria" ) {
    alert("São organelas compostas por membrana dupla, sendo uma externa e uma interna que apresenta muitas dobras, as chamadas cristas mitocondriais. As mitocôndrias são organelas especiais, com capacidade de se reproduzir, uma vez que contem moléculas de DNA circular, tal como as bactérias. Sua função é realizar a respiração celular, que produz a maior parte da energia utilizada nas funções vitais. A primeira etapa acontece no citosol da célula e as duas últimas nas suas membranas internas.");
  } else if (celula === "Reticulo endoplasmatico rugoso" ) {
    alert("São organelas com membranas dobradas, similares a sacos achatados. São dois os retículos, o retículo endoplasmático rugoso e o liso. No retículo endoplasmático rugoso existem ribossomos anexados à membrana, conferindo aspecto granuloso / rugoso. Além disso sua membrana é contínua com a membrana externa do núcleo, o facilita a comunicação entre eles. A função principal do retículo endoplasmático rugoso (RER) é realizar a síntese e ativação das proteínas,além de transportar para outras partes da célula.");
  } else if (celula === "Reticulo endoplasmatico liso" ) {
    alert("São organelas com membranas dobradas, similares a sacos achatados. São dois os retículos, o retículo endoplasmático rugoso e o liso. O retículo endoplasmático liso (REL) não tem ribossomos associados e por isso tem aparência lisa, é responsável pela produção de lipídios.");
  } else if (celula === "Aparelho de golgi") {
    alert("Também chamado complexo de Golgi ou ainda complexo golgiense, é composto de discos achatados empilhados, formando bolsas membranosas. Suas funções são modificar, armazenar e exportar proteínas sintetizadas no RER. Algumas dessas proteínas são glicosiladas, ou seja, sofrem reação de adição de um açúcar no RE e no golgi o processo é completado. Além disso, o aparelho de Golgi produz vesículas que brotam e se soltam originando os lisossomos primários. No momento em que esses lisossomos primários se fundem aos endossomas formam vacúolos digestórios ou lisossomos secundários.");
  } else if (celula === "Lisossomos" ) {
    alert("Os lisossomos são envolvidos apenas pela bicamada lipídica e no seu interior há enzimas digestivas. Sua função é digerir moléculas orgânicas como lipídios, carboidratos, proteínas e ácidos nucleicos (DNA e RNA). No interior dos lisossomos existem enzimas digestivas. As enzimas favorecem a aceleração da quebra de moléculas, transformando-as em pequenos porções, o que conhecemos como digestão. O interior dos lisossomos é ácido, pois é esse, o ambiente perfeito para ação dessas enzimas digestivas. As moléculas a serem digeridas são englobadas por endocitose e entram na célula envolvidas em vesículas formadas a partir da membrana chamados endossomas. Depois fundem-se com os lisossomos primários e são quebradas, originando partes menores, como os ácidos graxos. Essas moléculas pequenas saem do lisossomo e são aproveitadas no citosol da célula.");
  } else if (celula === "Peroxissomo" ) {
    alert("Os peroxissomos são pequenas organelas membranosas, que contêm no seu interior enzimas oxidases, e estão presentes em células animais e vegetais. A principal função é oxidar os ácidos graxos para a síntese de colesterol e também para serem usados como matéria-prima na respiração celular. Encontram-se, majoritariamente, nas células dos rins e do fígado. Lá, neutralizam os efeitos tóxicos de substâncias consumidas como, por exemplo, o álcool. Além disso, participam da produção de sais biliares. Nas reações de oxidação é produzido o peróxido de hidrogênio e por isso o nome da organela");
  } else if (celula === "Vacuolo") {
    alert("Os vacúolos são envolvidos por membrana e preenchidos com fluido diferente do citoplasma. São comuns em células animais e vegetais, contudo são maiores e mais volumosos nas células vegetais. Sua função é armazenar água e nutrientes, além de regular mecanismos de pressão osmótica. O controle de entrada e saída de água (osmose) nos tecidos vegetais regula a rigidez das estruturas. Isso permite que, algumas plantas, como, por exemplo, as herbáceas, fiquem eretas. Outros organismos também possuem vacúolos, como as bactérias. Nelas, os vacúolos auxiliam na ingestão, digestão e eliminação de substâncias.");
  } else if (celula === "Ribossomo" ) {
    alert("Os ribossomos são organelas celulares não membranosas presentes nas células procarióticas e eucarióticas. Eles atuam principalmente na regeneração celular e controle metabólico. Essas estruturas assemelham-se a um grânulo, por apresentarem forma arredondada. São responsáveis por sintetizar proteínas nas células. A reunião dos aminoácidos para formar as proteínas ocorre pela formação de ligações peptídicas.");
  } else if (celula === "Centriolo") {
    alert("Os centríolos são organelas com estrutura cilíndrica encontradas nas células eucarióticas. Eles participam da divisão celular pela capacidade de duplicação quando ocorre a mitose e meiose, migrando para os polos da célula após a duplicação. Essas organelas não membranosas também participam da formação dos cílios e flagelos.");
  } else if (celula === "Membrana plasmatica" ) {
    alert("As organelas são envolvidas por uma membrana semelhante à membrana plasmática da célula. Conhecida por membrana interna ela ajuda criar um ambiente particular para cada organela. Tanto a membrana externa quanto as internas são compostas por glicolipídios fosfolipídios e colesterol. Porém, a quantidade de colesterol nas internas é menor. O colesterol está associado à fluidez e estabilidade da célula, por esse motivo está mais presente na membrana externa. As membranas internas também possuem permeabilidade seletiva, ou seja, controla a entrada e saída de substâncias de seu interior. Esse processo pode acontecer por intermédio de proteínas ou direto pela membrana (endocitose e exocitose). As membranas internas promovem a individualização das organelas. Dessa forma, o ambiente interno das organelas fica separado do ambiente interno da célula. É por esse motivo que não acontecem reações químicas cruzadas entre enzimas.");
  } else if (celula === "Citoplasma") {
    alert("Ele é responsável por armazenar substâncias químicas fundamentais para a manutenção da vida. O citoplasma também possui a função de sustentação esquelética celular através de uma estrutura constituída por microfilamentos e tubos proteicos chamada de citoesqueleto.");
  } else if (celula === "Nucleo" ) {
    alert("Sua função principal é garantir a produção adequada de ribossomos, organelas relacionadas com a síntese de proteínas para a célula. Além das estruturas descritas, o núcleo é formado pelo nucleoplasma, também chamado de cariolinfa, que é uma solução aquosa onde estão imersos os nucléolos e a cromatina.");
  }

}

avaliarCandidato();

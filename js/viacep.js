'use strict';

                //retorna uma promessa
export const pesquisarCep = async (cepPesquisa) => {

    const url = `https://viacep.com.br/ws/${cepPesquisa}/json/`;

    // await é o que aguarda a promessa,ele aguarda pq nem toda promessa é comprida.
    const response = await fetch(url);

    //transforma o response em json
    const data = await response.json();

    //return data;
    //console.log('resposta do servidor:' , data);
    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.localidade,
        estado: data.uf
    }
};
//pesquisarCep('06602190')
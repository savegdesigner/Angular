import * as rs from 'readline-sync';

function runExe10(){

    let palavra: string

    do{
        palavra = rs.question(`Digite uma palavra que contem F ou que comece com P: `);
        palavra = palavra.toLowerCase();
    } while (palavra.indexOf('f') == -1 && palavra.indexOf('p') != 0);

}

export default runExe10
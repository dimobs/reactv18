function substitute(input) {
    let K = Number(input[0]); //(["6","7","5","6"]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);
 
    let combination = 0;
    let isFInished = 6;
 
    for (let i = K; i <= 8; i++){
        for (let j = 9; j >= L; j--){
            for (let k = M; k <= 8; k++){
                for(let l = 9; l >= N; l--){
                    if (i % 2 === 0 &&
                        j % 2 === 1 && 
                        k % 2 === 0 && 
                        l % 2 === 1 && `${i}${j}` !== `${k}${l}`) {  
                        console.log(`${i}${j} - ${k}${l}`);
                        combination++;
                        if (combination === 6) {
                            isFInished = true;
                            break;
                        }
                        } else if (i % 2 === 0 &&
                                j % 2 === 1 && 
                                k % 2 === 0 && 
                                l % 2 === 1 && `${i}${j}` === `${k}${l}`) {
                                console.log(`Cannot change the same player.`);
                    }
                }
            } 
        }
        if (isFInished) {
            break;
        }   
    } 
}
 
substitute(103);
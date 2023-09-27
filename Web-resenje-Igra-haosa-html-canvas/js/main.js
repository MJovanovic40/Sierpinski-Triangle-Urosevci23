var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var numberOfIterations = 120000; //Broj iteracija iscrtavanja. Veci broj iteracija znaci preciznija slika
var dotSize = [1, 1];
var sleeping = false;

const sleep = ms => new Promise(r => setTimeout(r, ms)); // Pomocna funkcija za animaciju


/*
 * Glavna funkcija za crtanje Sjerpinskog trougla
 */
async function sijerpinskiTrougao(iterations)
{
    var teme1 = [0, 860];
    var teme2 = [1000, 860];
    var teme3 = [500, 0];

    ctx.fillRect(...teme1, ...dotSize);
    ctx.fillRect(...teme2, ...dotSize);
    ctx.fillRect(...teme3, ...dotSize);

    var x1 = (teme1[0] + teme2[0])/2;
    var y1 = (teme1[1] + teme2[1])/2;
    var x2 = (teme2[0] + teme3[0])/2;
    var y2 = (teme2[1] + teme3[1])/2;
    var x3 = (teme3[0] + teme1[0])/2;
    var y3 = (teme3[1] + teme1[1])/2;

    var sredTacka1 = [x1, y1];
    var sredTacka2 = [x2, y2];
    var sredTacka3 = [x3, y3];

    var randomNum = Math.floor(Math.random() * 3);

    var novaTacka, trenutnoTeme;
    switch(randomNum)
    {
        case 0:
            ctx.fillRect(...sredTacka1, ...dotSize);
            novaTacka = sredTacka1;
            trenutnoTeme = teme3;
            break;
        case 1:
            ctx.fillRect(...sredTacka2, ...dotSize);
            novaTacka = sredTacka2;
            trenutnoTeme = teme1;
            break;
        case 2:
            ctx.fillRect(...sredTacka3, ...dotSize);
            novaTacka = sredTacka3;
            trenutnoTeme = teme2;
            break;
    }


    for(var i = 0; i<iterations; i++)
    {
        var sredinaX = (novaTacka[0] + trenutnoTeme[0])/2;
        var sredinaY = (novaTacka[1] + trenutnoTeme[1])/2;
        var sredina = [sredinaX, sredinaY];
        ctx.fillRect(...sredina, ...dotSize);
        novaTacka = sredina;

        randomNum = Math.floor(Math.random() * 3);
        switch(randomNum)
        {
            case 0:
                trenutnoTeme = teme3;
                break;
            case 1:
                trenutnoTeme = teme1;
                break;
            case 2:
                trenutnoTeme = teme2;
                break;
        }
        if(i%10 == 0 && !sleeping) {
            await sleep(1);
        }
        
    }

    ctx.stroke();
}

sijerpinskiTrougao(numberOfIterations);



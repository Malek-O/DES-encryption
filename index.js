const hex2bin = (data) => data.split('').map(i =>
    parseInt(i, 16).toString(2).padStart(4, '0')).join('');
console.log(parseInt("0", 16).toString(2));
const plaintext = "0123456789ABCDEF"

const IP_TABLE =
    ["58", "50", "42", "34", "26", "18", "10", "2",
        "60", "52", "44", "36", "28", "20", "12", "4",
        "62", "54", "46", "38", "30", "22", "14", "6",
        "64", "56", "48", "40", "32", "24", "16", "8",
        "57", "49", "41", "33", "25", "17", "9", "1",
        "59", "51", "43", "35", "27", "19", "11", "3",
        "61", "53", "45", "37", "29", "21", "13", "5",
        "63", "55", "47", "39", "31", "23", "15", "7"
    ];
const binPT = hex2bin(plaintext)
/* function dividPlaintextIntoHalves(binaryPT, position) {
    const firstPart = binaryPT.substring(0, position);
    const secondPart = binaryPT.substring(position);
    return [firstPart, secondPart];
} */
function InitialPermuation(IP_TABLE, binPT) {
    let Perumatedtext = "";
    IP_TABLE.forEach(element => {
        Perumatedtext += binPT.charAt(element - 1)
    });
    console.log(Perumatedtext);
}

//InitialPermuation(IP_TABLE,binPT)
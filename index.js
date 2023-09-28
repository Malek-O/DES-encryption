const { Keys } = require('./key');

const keys = Keys("133457799BBCDFF1")

const hex2bin = (data) => data.split('').map(i =>
    parseInt(i, 16).toString(2).padStart(4, '0')).join('');

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

const EXPANSION_TABLE = [
    '32', '1', '2', '3', '4', '5',
    '4', '5', '6', '7', '8', '9',
    '8', '9', '10', '11', '12', '13',
    '12', '13', '14', '15', '16', '17',
    '16', '17', '18', '19', '20', '21',
    '20', '21', '22', '23', '24', '25',
    '24', '25', '26', '27', '28', '29',
    '28', '29', '30', '31', '32', '1'
];


function dividPlaintextIntoHalves(binaryPT, position) {
    const firstPart = binaryPT.substring(0, position);
    const secondPart = binaryPT.substring(position);
    return { LHS: firstPart, RHS: secondPart };
}

function InitialPermuation(binPT) {
    let Perumatedtext = "";
    IP_TABLE.forEach(element => {
        Perumatedtext += binPT.charAt(element - 1)
    });
    return Perumatedtext;
}

function expansion(binPT) {
    let Perumatedtext = "";
    EXPANSION_TABLE.forEach(element => {
        Perumatedtext += binPT.charAt(element - 1)
    });
    return Perumatedtext;
}

function xor(bin1, bin2) {
    let finalresult = "";
    for (let i = 0; i < bin1.length; i++) {
        const bit1 = parseInt(bin1.charAt(i))
        const bit2 = parseInt(bin2.charAt(i))
        const xored = bit1 ^ bit2;
        finalresult += xored
    }
    return finalresult.toString()
}

const plaintext = "0123456789ABCDEF"

const binPT = hex2bin(plaintext)

const PT_IP = InitialPermuation(binPT)

const dividedPT = dividPlaintextIntoHalves(PT_IP, 32)


let expandedRHS = expansion(dividedPT.RHS)
const xoredValueWithKey = xor(expandedRHS, keys[0].key)


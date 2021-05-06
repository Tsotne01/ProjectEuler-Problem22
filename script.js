let fetchNames = async () => {
    let names = await fetch('p022_names.txt');
    let result = await names.text();
    return result;
}

fetchNames().then(data => {

    let sortedNames = data.replace(/\"/g, "").split(',').sort();
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let nameWorth = [];

    for (let i = 0; i < sortedNames.length; i++){
        let currentName = sortedNames[i];
        let sum = 0;
        for (let j = 0; j < currentName.length; j++){
            sum += (alphabet.indexOf(currentName[j]) + 1) * (i + 1);
        }
        nameWorth.push(sum);
    }

    console.log(nameWorth.reduce((a, b) => a + b));
})
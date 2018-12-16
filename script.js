function calc() {

        let bill = Number(document.getElementById('bill').value);
        let tip = Number(document.getElementById('tip').value);
        let people = Number(document.getElementById('people').value);

        let totalBill = bill + (bill * tip);

        let tipPerPerson = (bill * tip) / people;
        let totalPerPerson = totalBill / people;

        document.getElementById("totalBill").innerHTML= "$"+Number(totalBill).toFixed(2);
        document.getElementById("tipPerPerson").innerHTML= "$"+Number(tipPerPerson).toFixed(2);
        document.getElementById("totalPerPerson").innerHTML= "$"+Number(totalPerPerson).toFixed(2);
    }
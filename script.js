function calc() {
        // var bill = Number(document.getElementById('bill').value);
        // var tip = bill * .25;
        // var total_bill = bill + tip;

        // document.getElementById("tipDisplay").innerHTML= "$"+Number(tip).toFixed(2);
        // document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);

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
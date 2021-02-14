const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
    // console.log("tumi guta mar cho keno?")
    const loginArea = document.getElementById('container');
    loginArea.style.display = "none";
    // taransection area/..........
    const transection = document.getElementById('transection');
    transection.style.display = "block";
})

// deposit area...........
const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click', function () {
    const deposit = document.getElementById('dipositFild').value;
    const depositNumber = parseFloat(deposit)

    const depositAmount = document.getElementById("depositAmount").innerText
    const depositAmountNumber = parseFloat(depositAmount)
    const totlaAmount = depositAmountNumber + depositNumber;
    document.getElementById('depositAmount').innerText = totlaAmount
    document.getElementById('dipositFild').value = "";

    // add total balance ..........
    const addBalance = document.getElementById('totalBalance').innerText;
    const addBalanceNumber = parseFloat(addBalance);
    const totalBalance = addBalanceNumber + depositNumber;
    console.log(totalBalance)
    document.getElementById('totalBalance').innerText = totalBalance;



})
const witdrowBtn = document.getElementById('witdraw');
witdrowBtn.addEventListener("click", function () {
    // input field.............
    const witdrawAmount = document.getElementById('witdrawField').value;
    const witdrawAmountNumber = parseFloat(witdrawAmount);
    // witdraw amount.....................
    const addwitdraw = document.getElementById('witdrawAmount').innerText;
    const addWitdrawNumber = parseFloat(addwitdraw);
    //  total balance.............
    const totalBalanceAmount = document.getElementById('totalBalance').innerText;
    const ttlBalanceNumber = parseFloat(totalBalanceAmount);

    // add witdraw amount............
    const totalWitdrawAmount = addWitdrawNumber + witdrawAmountNumber;
    //   decrement amount...................
    const totalWitdraw = ttlBalanceNumber - witdrawAmountNumber;

    document.getElementById('totalBalance').innerText = totalWitdraw;
    document.getElementById('witdrawAmount').innerText = totalWitdrawAmount;
    document.getElementById('witdrawField').value = "";
})
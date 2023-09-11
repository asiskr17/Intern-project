document.getElementById("convertBtn").addEventListener("click", function(){
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");

    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = (celsius * 9/5)+ 32;

    fahrenheitInput.value = fahrenheit.toFixed(2);
});
const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetricBMI(parseInt(weightInput.value),parseInt(heightInput.value))
    let message = getBMIclassification(results)
    let displayResultsElement = document.getElementById('results')
    displayResultsElement.innerHTML = `<h2> Your BMI value is: ${results}, which is considered ${message} with this calculation<h2>`
    displayResultsElement.classList.add("notification")


}
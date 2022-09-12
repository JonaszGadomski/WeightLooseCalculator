const rangeInitial = document.getElementById('rangeInitial');
const rangeDesired = document.getElementById('rangeDesired');
const rangeHeight = document.getElementById('rangeHeight');
const measureInitial = document.getElementById('measureInitial');
const measureDesired = document.getElementById('measureDesired');
const measureHeight = document.getElementById('measureHeight');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
var startDate = document.getElementById('startDate').value;
var endDate = document.getElementById('endDate').value;


//Suwaki
measureInitial.innerHTML = rangeInitial.value  + ' kg';
measureDesired.innerHTML = rangeDesired.value  + ' kg';
measureHeight.innerHTML = rangeHeight.value  + ' cm';

rangeInitial.oninput = function() {
    measureInitial.innerHTML=this.value  + ' kg'
}

rangeDesired.oninput = function() {
    measureDesired.innerHTML=this.value  + ' kg'
}

rangeHeight.oninput = function() {
    measureHeight.innerHTML=this.value  + ' cm'
}

btn.addEventListener('click', weightChange)


var wantedChange = "";
var currentBMI = "";
var desiredBMI = "";
var changePerDay = "";

function weightChange() {
    weightCompute();
    currentBmiCompute();
    desiredBmiCompute();
    changePerDayCompute();
    result.innerHTML = wantedChange + currentBMI + desiredBMI + changePerDay;
}

function weightCompute() {
    var weightCompute = rangeInitial.value - rangeDesired.value
    if (weightCompute >= 1) {
        wantedChange = "<div>You want to loose: <strong> "+ weightCompute +"</strong> kg</div>";
    } 
    else if (weightCompute == 0) {
        wantedChange = "<div>You want to loose: <strong>You have right weight for you're expectation.</strong></div>";
    }
    else {
        wantedChange = "<div>You want to gain: <strong> "+ (-weightCompute) +"</strong> kg</div>";
    }
}

function currentBmiCompute() {
    var computedCurrentBMI = (Math.round(rangeInitial.value / Math.pow(rangeHeight.value/100, 2)*10))/10;
    currentBMI = "<div>You're current BMI: <strong> "+ computedCurrentBMI +"</strong>  </div>";
}

function desiredBmiCompute() {
    var computedDesiredBMI = (Math.round(rangeDesired.value / Math.pow(rangeHeight.value/100, 2)*10))/10;
    desiredBMI = "<div>You're desired BMI: <strong> "+ computedDesiredBMI +"</strong>  </div>";
}

function changePerDayCompute() {
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    var dayDifference =  (rangeDesired.value - rangeInitial.value) / (Math.abs(date2 - date1) / (10000 * 24 * 360));
    var wynik = (Math.round(dayDifference*100))/100;
    if (rangeDesired.value - rangeInitial.value ==0) {
        changePerDay = "<div>Congratulations!</div>";
    } 
    else {
        if (date1 < date2) {
            
            if (wynik < 0) {
                changePerDay = "<div>You should loose: <strong> "+ (-wynik) +"</strong>  kg per day</div>";
            }
            else if (wynik > 0) {
                changePerDay = "<div>You should gain: <strong> "+ wynik +"</strong>  kg per day</div>";
            } 
            else {
                changePerDay = "<div>Please enter valid dates</div>";
            }
        }
        else {
            changePerDay = "<div>Please enter valid dates</div>";
        }
    }
}


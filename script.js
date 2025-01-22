const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')
    const suggest = document.querySelector('.suggest')

    if(height === '' || height < 0 || isNaN(height))
    {
        result.innerHTML = "Please provide a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        result.innerHTML = "Please provide a valid weight"
    }
    else
    {
        const bmi = (weight/((height*height) /10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}<\span>`

        if(bmi < 18.6)
        {
            suggest.innerHTML = 'You are underweight'
        }
        else if(bmi > 24.9)
        {
            suggest.innerHTML = 'You are overweight'
        }
        else
        {
            suggest.innerHTML = 'You are normal weight'
        }
    }

}
)
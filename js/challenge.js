

document.addEventListener("DOMContentLoaded", (e) => {
    //creating the functionality of the counter
    let counter = 0
    const count = () => {
        counter++
        document.getElementById("counter").textContent = counter
    }
    
    //creating the functionality of the add button
    const adder = () => {
        const addButton = document.getElementById("plus")
        addButton.addEventListener("click", () => {
            counter++
            document.getElementById("counter").textContent = counter
        })
    }

    //creating the functionality of the subtract button
    const subtractor = () => {
        const addButton = document.getElementById("minus")
        addButton.addEventListener("click", () => {
            counter--
            document.getElementById("counter").textContent = counter
        })
    }
    
    //creating the functionality of the heart button
    let previousTime
    const heartButton = () => {
        const heart = document.getElementById("heart")
        heart.addEventListener("click", () => {
            let currentTime = counter
            if (currentTime !== previousTime) {
                let countCounter = 1
                const likeTime = document.createElement("li")
                likeTime.id = "li" + currentTime.toString()
                likeTime.textContent = `${currentTime} has been liked 1 time`
                document.querySelector(".likes").appendChild(likeTime)
                previousTime = currentTime
            }
            else {
                countCounter ++
                document.getElementById("li" + currentTime.toString()).textContent = `${currentTime} has been liked ${countCounter} times`
            }
        })
    }
    
    //Creating the functionality of the pause button
    const pause = () => {
        const pauseButton = document.getElementById("pause")
        pauseButton.addEventListener("click", () => {
            if (breaker) {
                clearInterval(breaker)
                breaker = false
                document.getElementById("plus").disabled = true
                document.getElementById("minus").disabled = true
                document.getElementById("heart").disabled = true
                document.getElementById("submit").disabled = true
                pauseButton.textContent = "return"
            } else {
                pauseButton.textContent = "pause"
                document.getElementById("plus").disabled = false
                document.getElementById("minus").disabled = false
                document.getElementById("heart").disabled = false
                document.getElementById("submit").disabled = false
                breaker = setInterval(count,1000)
            }
        })
    }

    //creating the functionality of the submit button
    const submit = () => {
        const submitButton = document.getElementById("submit")
        submitButton.addEventListener("click", (e) => {
            e.preventDefault()
            const comment = document.getElementById("comment-input").value
            const newComment = document.createElement("p")
            newComment.textContent = comment
            document.getElementById("list").append(newComment)
        })
    }

    //function invocations
    var breaker = setInterval(count,1000)  //breaker placed in global scope!!!
    adder()
    subtractor()
    heartButton()
    pause()
    submit()
    
})
let time = 4000,
    currentImageIndex = 0,
    images = document.getElementsByClassName("bg-intro")
    max = images.length

fotoBG = Array.from(images)


function next() {
    images[currentImageIndex].removeAttribute('id','selected')
    
    

    currentImageIndex ++
    if (currentImageIndex >= max)
        currentImageIndex = 0

    
    images[currentImageIndex].setAttribute('id', 'selected') 
    

}


function start(){
    setInterval(()=> {
        next()
    }, time)
}    


 window.addEventListener("load", start) 

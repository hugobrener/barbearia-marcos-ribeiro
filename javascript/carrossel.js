let time = 4000,
    currentImageIndex = 0,
    images = document.getElementsByClassName("bg-intro")
    imagesProdutos = document.getElementsByClassName("foto-2")
    max = images.length

fotoBG = Array.from(images)
fotoProdutos = Array.from(imagesProdutos)

function next() {
    images[currentImageIndex].removeAttribute('id','selected')
    imagesProdutos[currentImageIndex].removeAttribute('id', 'oculta')
    

    currentImageIndex ++
    if (currentImageIndex >= max)
        currentImageIndex = 0

    
    images[currentImageIndex].setAttribute('id', 'selected') 
    imagesProdutos[currentImageIndex].setAttribute('id', 'oculta')

}


function start(){
    setInterval(()=> {
        next()
    }, time)
}    


 window.addEventListener("load", start) 

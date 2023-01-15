let yeux_ref = document.querySelectorAll(".yeux");
let evenement = ["mousemove", "touchmove"];


const touche = () => {
    try{
        document.createEvent("TouchEvent");
        return true;
    }   catch (e) {
        return false;
    }
}

evenement.forEach((eventType) => {
    document.body.addEventListener(eventType, (event) => {
        yeux_ref.forEach((yeux) => {
            let yeuxX = yeux.getBoundingClientRect().left + yeux.clientWidth / 2;
            let yeuxY = yeux.getBoundingClientRect().top + yeux.clientHeight / 2;

            let x = !touche() ? event.clientX : event.touches[0].clientX;
            let y = !touche() ? event.clientY : event.touches[0].clientY;

            let radian = Math.atan2(x - yeuxX, y - yeuxY);
            let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
            yeux.style.transform = "rotate(" + rotationDegrees + "deg)";



        });
    });
});




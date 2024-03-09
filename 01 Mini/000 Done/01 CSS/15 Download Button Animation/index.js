

let btn = document.querySelector('.btn');

btn.onclick = () => {
    console.log("object")
    btn.classList.add('active');
    setTimeout(() => {
        btn.classList.remove('active');
    }, 5000);
}
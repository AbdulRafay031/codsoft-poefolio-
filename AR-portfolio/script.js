// const circles = document.querySelectorAll('.circle');
// circles.forEach(elem=>{
//     var dots =elem.getAttribute("data-dots");
//     var marked= elem.getAttribute("data-percent");
//     var percent= Math.floor(dots*marked/100);
//     var point = "";
//     var rotate = 360/ dots;


//     for(let i = 0; i < dots ; i++){
//         point += ` <div class="point" style="--i:1"> </div>`

//     }
// })



// let words = document.querySelectorAll(".word");
// words.forEach((word)=>{
//     let letters = word.textContent.split("");
//     word.textContent="";
//     letters.forEach((letter)=>{
//         let span = document.createElement("span");
//         span.textContent = letter;
//         span.className = "letter";
//         word.append(span);

//     });
// });

// let currentWordIndex = 0;
// let massWordIndex = words.length -1;
// words[currentWordIndex].style.opacity = "1";

// let changeText = () =>{
//     let currentWord = words[currentWordIndex];
//     let nextWord = currentWordIndex === massWordIndex ? words[0] : words[currentWordIndex + 1];

//     Array.from(currentWord.children).forEach((letter,i)=>{
//         setTimeout(()=>{
//             letter.className = "letter out";
//         },i * 80);
//     });
//     nextWord.Style.opacity ="1";
//     Array.from(nextWord.children).forEach((letter,i)=>{
//         letter.className="letter behind";
//         setTimeout(()=>{
//             letter.className="letter in";

//         },340 + i * 80);
//     });
//     currentWordIndex = currentWordIndex === massWordIndex ? 0 : currentWordIndex + 1;

// };
// changeText();
// setInterval(changeText,3000);

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-content, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['I AM A FORONTEND DEVELOPER', 'EXPERTISE IN ','NEXTJS | REACTJS | TAILWIND CSS', 'NODEJS | FIREBASE', 'ADVANCED JAVASCRIPT | TYPESCRIPT | GIT' ,'JAVASCRIPT | CSS | HTML', 'C LANGUAGE | OOP IN JAVA | MY SQL'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});

// function sendMsg(e){
//     e.preventDefault();
//     const form = document.querySelector('.contact_form');
//       Name=document.querySelector('.name');
//       email=document.querySelector('.email');
//       number=document.querySelector('.number');
//       subject=document.querySelector('.subject');
//       msg=document.querySelector('.msg');


//       Email.send({
//         SecureToken : "2fdc8098-e545-4dff-b964-81a65a6b7951",
//         To : 'sha0316254@gmail.com',
//         From : 'email.value',
//         Subject : contact_form,
//         Body :'msg.value'
//     }).then(
//       message => alert(message)
//     );
// }


// form.addEventListener('submit',sendMsg);


const greeting=["Good Morning","Good Afternoon","Good Evening"];
let index = currentHour >= 12 && currentHour < 17 ? 1 : currentHour >= 17 ? 2: 0;

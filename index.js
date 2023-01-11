const navLinks = document.querySelector('.nav-links');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu')

navLinks.style.right = '-250px';

menuBtn.onclick = () => {
    if (navLinks.style.right === '-250px') {
        navLinks.style.right = 0;
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
    } else {
        navLinks.style.right = '-250px';
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
    }
}

//scroll links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.onclick = (e) => {
        e.preventDefault()
        
        //scroll to spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        let position = element.offsetTop

        window.scrollTo({
            top: position,
            left: 0,
        })

        navLinks.style.right = '-250px';
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
    }
})

//read more
const aboutDesc = document.querySelectorAll('.about-desc')

aboutDesc.forEach(desc => {
    const readMore = desc.querySelector('.readmore');
    const readLess = desc.querySelector('.readless');
    const aboutInfo = desc.querySelector('.about-info');

    readMore.addEventListener('click', () => {
        aboutDesc.forEach( item => {
            if (item !== desc) {
                aboutInfo.classList.remove('show-info')
            }
        })
        aboutInfo.classList.add('show-info')
        readMore.style.display = 'none'
        readLess.style.display = 'initial'
    })

    readLess.addEventListener('click', () => {
        aboutDesc.forEach( item => {
            if (item !== desc) {
                aboutInfo.classList.add('show-info')
            }
        })
        aboutInfo.classList.remove('show-info')
        readMore.style.display = 'initial'
        readLess.style.display = 'none'
    })
});

//date 
const date = document.querySelector('#date');

date.innerHTML = new Date().getFullYear();

//top link
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})
// document.getElementById('scroll_to_title').onclick(scroll_to_title())
// document.getElementById('scroll_to_timeline').onclick(scroll_to_timeline())

// function scroll_to_title() {
//     document.querySelector('#tribute-info').scrollIntoView({
//         behavior: 'smooth'
//     });
// }

// function scroll_to_timeline() {
//     document.querySelector('#timeline').scrollIntoView({
//         behavior: 'smooth'
//     });
// }
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
})
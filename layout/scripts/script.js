
// pre loader start
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,2500);
}
window.onload = fadeOut;
// pre loader end

$(document).ready(function(){

    // scroll spy
    $('section').each(function(){
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).attr('id');

        if(top>offset && top<offset+height){
            $('.mainav ul li a').removeClass('active');
            $('.mainav').find(`[href="#${id}"]`).addClass('active');
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});
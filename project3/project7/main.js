const shadow_header=() =>{
    const header=document.querySelectorall('shadow_header')
    this.scrollY>=50? header.classList.add('shadow_header')
                       :header.classList.remove('shadow_header')
}
window.addEventListener('scroll',shadow_header)

const sr = ScrollReveal({
    origin: 'top',
    distance:'100px',
    duration: 2500,
    delay: 300,
    reset:true,
})
sr.reveal('.img1')

sr.reveal('.btn',{ delay:400,duration:950,origin:'left',distance:'100px'})
sr.reveal('#para',{ delay:200,duration:950,origin:'top',distance:'100px'})
sr.reveal('.h2',{ delay:300,duration:950,origin:'top',distance:'100px'})
sr.reveal('.h1',{ delay:350,duration:950,origin:'top',distance:'100px'})

sr.reveal('#three3',{ delay:200,duration:950,origin:'right',distance:'100px'})
sr.reveal('#two2',{ delay:270,duration:950,origin:'top',distance:'100px'})
sr.reveal('#one1',{ delay:300,duration:950,origin:'left',distance:'100px'})
sr.reveal('#three',{ delay:200,duration:950,origin:'right',distance:'100px'})
sr.reveal('#two',{ delay:270,duration:950,origin:'top',distance:'100px'})
sr.reveal('#one',{ delay:300,duration:950,origin:'left',distance:'100px'})
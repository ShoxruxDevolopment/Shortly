const elUrlShortnerForm=document.querySelector('.js-url-shortner-form');
const elBlockShortner=document.querySelector('.block-shortener');
const elCopyUrlShortLinkButton=document.querySelector('.js-copy-short-link-button');


if(elUrlShortnerForm){
  elUrlShortnerForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    elBlockShortner.classList.add('block-shortener-open');
  })
}
if(elBlockShortner){
  elBlockShortner.addEventListener('click', function(evt){
    if (evt.target.matches('.js-copy-short-link-button')){
      evt.target.textContent='Copied!';

      evt.target.classList.add('btn-short-copied');

    //  copy link text
      navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

      setTimeout(function(){
        evt.target.textContent='Copy';
        evt.target.classList.remove('btn-short-copied');
      },1000);

    }
  });
}
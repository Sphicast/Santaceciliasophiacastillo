var b=document.getElementById('btn-menu'),n=document.getElementById('menu');
b.addEventListener('click',function(){var o=n.classList.toggle('abierto');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('abierto');b.setAttribute('aria-expanded',false)}});
document.getElementById('form').addEventListener('submit',function(e){
  e.preventDefault();var f=e.target;
  if(!f.checkValidity()){f.reportValidity();return}
  document.getElementById('ok').style.display='block';f.reset();
});

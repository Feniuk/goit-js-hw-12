import{i as f,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const n=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";const d={key:"42155461-8089960cf11668bdd6f72d0b3",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};n.addEventListener("submit",s=>{s.preventDefault(),l.style.display="inline-block",c.innerHTML="";const r=n.elements.search.value.trim();d.q=r,m().then(t=>h(t)).catch(t=>console.log(t)),n.reset()});function m(){const s=new URLSearchParams(d);return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function h(s){if(s.hits.length===0)f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const r=s.hits.map(t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}" >
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      width = "360"
      />
    </a>
    <div class="img-text">
    <div class="img-info">
    <h3>Likes</h3>
    <p> ${t.likes}</p>
    </div>
    <div class="img-info">
    <h3>Views</h3>
    <p> ${t.views}</p>
    </div>
       <div class="img-info">
    <h3>Comments</h3>
    <p> ${t.comments}</p>
    </div>
       <div class="img-info">
    <h3>Downloads</h3>
    <p> ${t.downloads}</p>
    </div>
      </div>
  </li>`).join("");c.insertAdjacentHTML("afterbegin",r),new u(".gallery-link").refresh()}l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map

import{i as c,S as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(s){const r="https://pixabay.com/api/",o=new URLSearchParams({key:"44148466-3c6c137c0d8e86e77772167ae",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${r}?${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m({webformatURL:s,largeImageURL:r,tags:o,likes:i,views:e,comments:t,downloads:n}){return`<li class="cards">
      <a href="${s}">
        <img src="${r}" alt="${o}">
      </a>
      <div>
        <ul class="cards-info">
          <li>
            <p class="cards-info-title">likes:</p>
            <p class="cards-info-count">${i}</p>
          </li>
          <li>
            <p class="cards-info-title">views</p>
            <p class="cards-info-count">${e}</p>
          </li>
          <li>
            <p class="cards-info-title">comments</p>
            <p class="cards-info-count">${t}</p>
          </li>
          <li>
            <p class="cards-info-title">downloads</p>
            <p class="cards-info-count">${n}</p>
          </li>
        </ul>
      </div>

    </li>`}function g(s){return s.map(m).join("")}const u=document.querySelector(".form"),p=document.querySelector(".loader"),l=document.querySelector(".gallery");function a(){p.style.display="none"}function h(){p.style.display="block"}a();u.addEventListener("submit",y);function y(s){s.preventDefault(),h(),l.innerHTML="";const r=s.target.elements.input.value.trim();if(!r){a(),c.error({message:"Please enter Query",position:"topRight"});return}f(r).then(o=>{if(o.hits.length===0){a(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=g(o.hits);l.insertAdjacentHTML("beforeend",i),c.success({message:"Wow, there are many images matching your search query. Keep going!",position:"topRight"}),L.refresh(),a()}).catch(o=>{console.log(o),a(),c.error({message:"Something went wrong. Please try again later!",position:"topRight"})}),u.reset()}const L=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

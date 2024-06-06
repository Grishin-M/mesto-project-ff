(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-14",headers:{authorization:"98ab415b-bf50-4a7c-bb7e-25061b7cc471","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},n=document.querySelector("#card-template").content;function r(e,t,r,o,c){var a=n.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__image"),u=a.querySelector(".card__delete-button"),l=a.querySelector(".card__title"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-counter"),p=e._id;return i.alt=e.name,l.textContent=e.name,i.src=e.link,a.id=p,d.textContent=e.likes.length,e.owner._id!==c?u.style.display="none":u.addEventListener("click",(function(){t(p)})),s.addEventListener("click",(function(){o(s,d,p)})),i.addEventListener("click",r),e.likes.find((function(e){return e._id===c}))&&s.classList.add("card__like-button_is-active"),a}function o(n,r,o){n.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/")+n,{method:"DELETE",headers:e.headers}).then(t)}(o).then((function(e){n.classList.remove("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(e){console.error(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/")+n,{method:"PUT",headers:e.headers}).then(t)}(o).then((function(e){n.classList.add("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(e){console.error(e)}))}function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i),document.addEventListener("mousedown",u)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),document.removeEventListener("mousedown",u)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function u(e){e.target.classList.contains("popup_is-opened")&&a(document.querySelector(".popup_is-opened"))}function l(e){a(e.target.closest(".popup"))}function s(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n)):(t.classList.add(n),t.disabled=!0)}function d(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),o.textContent="",o.classList.remove(r)}function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){d(e,n,t.inputErrorClass,t.errorClass)})),r.classList.add(t.disabledButtonClass)}var f=document.querySelector(".places__list"),m=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup_type_edit"),y=document.forms["edit-profile"],v=y.elements.name,h=y.elements.description,b=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),q=y.querySelector(".popup__button"),C=document.querySelector(".profile__image"),E=document.querySelector(".popup_type_image"),L=document.querySelector(".popup__image"),g=document.querySelector(".popup__caption"),k=document.querySelectorAll(".popup__close"),x=document.querySelector(".popup_type_new-card"),A=document.querySelector(".profile__add-button"),w=document.forms["new-place"],U=w.elements["place-name"],T=w.elements.link,j=w.querySelector(".popup__button"),O=[fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t)],B=document.querySelector(".popup_type_delete-card"),D=document.forms["delete-card"],P=document.querySelector(".popup_type_edit-image"),I=document.querySelector(".profile__image-button"),M=document.forms["edit-image"],N=M.elements.link,J=M.querySelector(".popup__button"),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",disabledButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var z="";function $(e){L.src=e.target.src,L.alt=e.target.alt,g.textContent=e.target.alt,c(E)}function F(e){D.dataset.id=e,c(B)}Promise.all(O).then((function(e){var t,n,c=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],i=c[1];z=i._id,b.textContent=i.name,S.textContent=i.about,C.style.backgroundImage="url('".concat(i.avatar,"')"),a.forEach((function(e){return function(e,t){var n=r(e,F,$,o,z);t.append(n)}(e,f)}))})).catch((function(e){console.error(e)})),m.addEventListener("click",(function(){p(y,H),v.value=b.textContent,h.value=S.textContent,c(_)})),k.forEach((function(e){e.addEventListener("click",l)})),y.addEventListener("submit",(function(n){var r,o;n.preventDefault(),q.textContent="Сохранение...",(r=v.value,o=h.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){b.textContent=v.value,S.textContent=h.value,a(_)})).catch((function(e){console.error(e)})).finally((function(){q.textContent="Сохранить"}))})),A.addEventListener("click",(function(){p(w,H),w.reset(),c(x)})),w.addEventListener("submit",(function(n){!function(n){var c,i;n.preventDefault(),j.textContent="Сохранение...",(c=U.value,i=T.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:c,link:i})}).then(t)).then((function(e){f.prepend(r(e,F,$,o,z)),a(x)})).catch((function(e){console.error(e)})).finally((function(){j.textContent="Сохранить"}))}(n)})),D.addEventListener("submit",(function(n){n.preventDefault();var r=D.dataset.id;(function(n){return fetch("".concat(e.baseUrl,"/cards/")+n,{method:"DELETE",headers:e.headers}).then(t)})(r).then((function(){!function(e){document.querySelector("[id='".concat(e,"']")).remove()}(r),a(B)})).catch((function(e){console.error(e)}))})),I.addEventListener("click",(function(){M.reset(),p(M,H),c(P)})),M.addEventListener("submit",(function(n){var r;n.preventDefault(),J.textContent="Сохранение...",(r=N.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){C.style.backgroundImage="url('".concat(e.avatar,"')"),a(P)})).catch((function(e){console.error(e)})).finally((function(){J.textContent="Сохранить"}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){!function(e,t,n,r,o,c){var a=Array.from(e.querySelectorAll("".concat(t))),i=e.querySelector(n);s(a,i,r),a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n,r){t.validity.patternMismaatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n,r):function(e,t,n,r,o){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n),c.textContent=o,c.classList.add(r)}(e,t,n,r,t.validationMessage)}(e,t,o,c),s(a,i,r)}))}))}(t,e.inputSelector,e.submitButtonSelector,e.disabledButtonClass,e.inputErrorClass,e.errorClass)}))}(H)})();
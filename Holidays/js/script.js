"use strict";function getjson(e){void 0===e&&(e=array_random[randomStroke]),request.open("Get","https://pixabay.com/api/?key=4697858-6e5dfa77924d476695f1b4913&q="+e+"&image_type=photo&per_page=7&lang=en,ru"),request.onreadystatechange=function(){if(200===request.status&&4===request.readyState)for(var e=JSON.parse(request.responseText),t=document.querySelectorAll(".grid-item"),n=document.querySelectorAll(".grid-item > p"),r=0;r<e.hits.length;r++)t[r].style.backgroundImage="url("+e.hits[r].webformatURL+")",n[r].innerHTML=e.hits[r].tags;else 200!==request.status&&setImage.createImg()},request.send()}function setRequest(e){e.preventDefault(),getjson(document.getElementById("get_text").value)}for(var inputBtn=document.getElementById("push_btn"),galleryElems=document.querySelectorAll(".main-carousel"),signupBtn=document.getElementsByClassName("modal-signup")[0],loginBtn=document.getElementsByClassName("modal-login")[0],closeBtn=document.getElementsByClassName("fa-times")[0],modalTab=$(".tabs_link"),array_random=["wolf","nature","cat","dog","man","women","tree","space","evil","smile","cry","love","family","friendship","laugh"],randomStroke=Math.floor(15*Math.random()+1),i=0,len=galleryElems.length;i<len;i++){var elem=galleryElems[i];new Flickity(elem,{setGallerySize:!1,pageDots:!1,imagesLoaded:!0,resize:!1,percentPosition:!1})}var grid=document.querySelector(".grid"),gridSection=new Masonry(grid,{columnWidth:".grid-sizer",gutter:".gutter-sizer",itemSelector:".grid-item"}),setImage={createImg:function(){for(var e=["../public/img/mason/001.jpeg","../public/img/mason/002.jpeg","../public/img/mason/003.jpeg","../public/img/mason/004.jpeg","../public/img/mason/005.jpeg","../public/img/mason/006.jpeg","../public/img/mason/007.jpeg"],t=document.querySelectorAll(".grid-item"),n=0;n<e.length;n++)t[n].style.backgroundImage="url("+e[n]+")"}},request=new XMLHttpRequest;getjson(),inputBtn.onclick=setRequest;var tmpl=_.template(document.getElementById("list-template").innerHTML);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJnZXRqc29uIiwid29yZCIsInVuZGVmaW5lZCIsImFycmF5X3JhbmRvbSIsInJhbmRvbVN0cm9rZSIsInJlcXVlc3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwic3RhdHVzIiwicmVhZHlTdGF0ZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWdUaXRsZSIsImkiLCJoaXRzIiwibGVuZ3RoIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ3ZWJmb3JtYXRVUkwiLCJpbm5lckhUTUwiLCJ0YWdzIiwic2V0SW1hZ2UiLCJjcmVhdGVJbWciLCJzZW5kIiwic2V0UmVxdWVzdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJpbnB1dEJ0biIsImdhbGxlcnlFbGVtcyIsInNpZ251cEJ0biIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsb2dpbkJ0biIsImNsb3NlQnRuIiwibW9kYWxUYWIiLCIkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuIiwiZWxlbSIsIkZsaWNraXR5Iiwic2V0R2FsbGVyeVNpemUiLCJwYWdlRG90cyIsImltYWdlc0xvYWRlZCIsInJlc2l6ZSIsInBlcmNlbnRQb3NpdGlvbiIsImdyaWQiLCJxdWVyeVNlbGVjdG9yIiwiZ3JpZFNlY3Rpb24iLCJNYXNvbnJ5IiwiY29sdW1uV2lkdGgiLCJndXR0ZXIiLCJpdGVtU2VsZWN0b3IiLCJpbWdfc3JjIiwiWE1MSHR0cFJlcXVlc3QiLCJvbmNsaWNrIiwidG1wbCIsIl8iLCJ0ZW1wbGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsYUFrRUEsU0FBU0EsUUFBUUMsUUFFQUMsSUFBVEQsSUFDQUEsRUFBT0UsYUFBYUMsZUFFeEJDLFFBQVFDLEtBQUssTUFBTyxvRUFBc0VMLEVBQU8sMkNBQ2pHSSxRQUFRRSxtQkFBcUIsV0FDekIsR0FBdUIsTUFBbkJGLFFBQVFHLFFBQXlDLElBQXZCSCxRQUFRSSxXQU1sQyxJQUFLLElBTERDLEVBQU9DLEtBQUtDLE1BQU1QLFFBQVFRLGNBRzFCQyxFQUFZQyxTQUFTQyxpQkFBaUIsY0FDdENDLEVBQVdGLFNBQVNDLGlCQUFpQixrQkFDaENFLEVBQUksRUFBR0EsRUFBSVIsRUFBS1MsS0FBS0MsT0FBUUYsSUFDbENKLEVBQVVJLEdBQUdHLE1BQU1DLGdCQUFrQixPQUFTWixFQUFLUyxLQUFLRCxHQUFHSyxhQUFlLElBQzFFTixFQUFTQyxHQUFHTSxVQUFZZCxFQUFLUyxLQUFLRCxHQUFHTyxVQUdmLE1BQW5CcEIsUUFBUUcsUUFDZmtCLFNBQVNDLGFBR2pCdEIsUUFBUXVCLE9BS1osU0FBU0MsV0FBV0MsR0FDaEJBLEVBQUVDLGlCQUVGL0IsUUFEZ0JlLFNBQVNpQixlQUFlLFlBQVlDLE9BakZ4RCxJQUFLLElBVERDLFNBQVduQixTQUFTaUIsZUFBZSxZQUNuQ0csYUFBZXBCLFNBQVNDLGlCQUFpQixrQkFDekNvQixVQUFZckIsU0FBU3NCLHVCQUF1QixnQkFBZ0IsR0FDNURDLFNBQVd2QixTQUFTc0IsdUJBQXVCLGVBQWUsR0FDMURFLFNBQVd4QixTQUFTc0IsdUJBQXVCLFlBQVksR0FDdkRHLFNBQVdDLEVBQUUsY0FDYnRDLGNBQWdCLE9BQVEsU0FBVSxNQUFPLE1BQU8sTUFBTyxRQUFTLE9BQVEsUUFBUyxPQUFRLFFBQVMsTUFBTyxPQUFRLFNBQVUsYUFBYyxTQUN6SUMsYUFBZXNDLEtBQUtDLE1BQXVCLEdBQWhCRCxLQUFLRSxTQUFpQixHQUU1QzFCLEVBQUksRUFBRzJCLElBQU1WLGFBQWFmLE9BQVFGLEVBQUkyQixJQUFLM0IsSUFBSyxDQUNyRCxJQUFJNEIsS0FBT1gsYUFBYWpCLEdBQ3hCLElBQUk2QixTQUFTRCxNQUNURSxnQkFBZ0IsRUFFaEJDLFVBQVUsRUFDVkMsY0FBYyxFQUNkQyxRQUFRLEVBQ1JDLGlCQUFpQixJQWdCekIsSUFBSUMsS0FBT3RDLFNBQVN1QyxjQUFjLFNBRTFCQyxZQUFjLElBQUlDLFFBQVFILE1BRTFCSSxZQUFhLGNBR2JDLE9BQVEsZ0JBQ1JDLGFBQWMsZUFJbEJqQyxVQUNBQyxVQUFXLFdBR1AsSUFBSyxJQUZEaUMsR0FBVywrQkFBZ0MsK0JBQWdDLCtCQUFnQywrQkFBZ0MsK0JBQWdDLCtCQUFnQyxnQ0FDM005QyxFQUFZQyxTQUFTQyxpQkFBaUIsY0FDakNFLEVBQUksRUFBR0EsRUFBSTBDLEVBQVF4QyxPQUFRRixJQUNoQ0osRUFBVUksR0FBR0csTUFBTUMsZ0JBQWtCLE9BQVNzQyxFQUFRMUMsR0FBSyxNQVNuRWIsUUFBVSxJQUFJd0QsZUEwQmxCN0QsVUFTQWtDLFNBQVM0QixRQUFVakMsV0FpRG5CLElBQUlrQyxLQUFPQyxFQUFFQyxTQUFTbEQsU0FBU2lCLGVBQWUsaUJBQWlCUiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbi8vemVwdG8uanMgd2FzIHVzZWQgaW5zdGVhZCBqcXVlcnk7XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG52YXIgaW5wdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVzaF9idG4nKTtcclxudmFyIGdhbGxlcnlFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWNhcm91c2VsJyk7XHJcbnZhciBzaWdudXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1zaWdudXAnKVswXTtcclxudmFyIGxvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwtbG9naW4nKVswXTtcclxudmFyIGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmEtdGltZXMnKVswXTtcclxudmFyIG1vZGFsVGFiID0gJCgnLnRhYnNfbGluaycpO1xyXG52YXIgYXJyYXlfcmFuZG9tID0gWyd3b2xmJywgJ25hdHVyZScsICdjYXQnLCAnZG9nJywgJ21hbicsICd3b21lbicsICd0cmVlJywgJ3NwYWNlJywgJ2V2aWwnLCAnc21pbGUnLCAnY3J5JywgJ2xvdmUnLCAnZmFtaWx5JywgJ2ZyaWVuZHNoaXAnLCAnbGF1Z2gnXTtcclxudmFyIHJhbmRvbVN0cm9rZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxNSkgKyAxKTtcclxuXHJcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBnYWxsZXJ5RWxlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIHZhciBlbGVtID0gZ2FsbGVyeUVsZW1zW2ldO1xyXG4gICAgbmV3IEZsaWNraXR5KGVsZW0sIHtcclxuICAgICAgICBzZXRHYWxsZXJ5U2l6ZTogZmFsc2UsXHJcbiAgICAgICAgLy8gYXV0b1BsYXk6IHRydWUsXHJcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxyXG4gICAgICAgIGltYWdlc0xvYWRlZDogdHJ1ZSxcclxuICAgICAgICByZXNpemU6IGZhbHNlLFxyXG4gICAgICAgIHBlcmNlbnRQb3NpdGlvbjogZmFsc2VcclxuICAgIH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG4gICAgLy8gJCgnLm1haW4tY2Fyb3VzZWwnKS5mbGlja2l0eSh7XHJcbiAgICAvLyAgICAgLy8gc2V0R2FsbGVyeVNpemU6IGZhbHNlLFxyXG4gICAgLy8gICAgIC8vIHBhZ2VEb3RzOiBmYWxzZSxcclxuICAgIC8vICAgICAvLyBpbWFnZXNMb2FkZWQ6IHRydWUsXHJcbiAgICAvLyAgICAgY2VsbEFsaWduOiAnbGVmdCcsXHJcbiAgICAvLyAgICAgLy8gcGVyY2VudFBvc2l0aW9uOiBmYWxzZVxyXG4gICAgLy8gICAgIGNvbnRhaW46IHRydWVcclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbnZhciBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKTtcclxuXHJcbiAgICB2YXIgZ3JpZFNlY3Rpb24gPSBuZXcgTWFzb25yeShncmlkLCB7XHJcbiAgICAgICAgLy8gcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxyXG4gICAgICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxyXG4gICAgICAgIC8vIGNvbHVtbldpZHRoOiAzMDAsXHJcbiAgICAgICAgLy8gZml0V2lkdGg6IHRydWUsXHJcbiAgICAgICAgZ3V0dGVyOiAnLmd1dHRlci1zaXplcicsXHJcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbSdcclxuICAgIH0pO1xyXG5cclxuXHJcbnZhciBzZXRJbWFnZSA9IHtcclxuICAgIGNyZWF0ZUltZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWdfc3JjID0gWycuLi9wdWJsaWMvaW1nL21hc29uLzAwMS5qcGVnJywgJy4uL3B1YmxpYy9pbWcvbWFzb24vMDAyLmpwZWcnLCAnLi4vcHVibGljL2ltZy9tYXNvbi8wMDMuanBlZycsICcuLi9wdWJsaWMvaW1nL21hc29uLzAwNC5qcGVnJywgJy4uL3B1YmxpYy9pbWcvbWFzb24vMDA1LmpwZWcnLCAnLi4vcHVibGljL2ltZy9tYXNvbi8wMDYuanBlZycsICcuLi9wdWJsaWMvaW1nL21hc29uLzAwNy5qcGVnJ107XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWl0ZW0nKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltZ19zcmMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29udGFpbmVyW2ldLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgaW1nX3NyY1tpXSArIFwiKVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuZnVuY3Rpb24gZ2V0anNvbih3b3JkKSB7XHJcblxyXG4gICAgaWYgKHdvcmQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHdvcmQgPSBhcnJheV9yYW5kb21bcmFuZG9tU3Ryb2tlXTtcclxuICAgIH1cclxuICAgIHJlcXVlc3Qub3BlbignR2V0JywgJ2h0dHBzOi8vcGl4YWJheS5jb20vYXBpLz9rZXk9NDY5Nzg1OC02ZTVkZmE3NzkyNGQ0NzY2OTVmMWI0OTEzJnE9JyArIHdvcmQgKyAnJmltYWdlX3R5cGU9cGhvdG8mcGVyX3BhZ2U9NyZsYW5nPWVuLHJ1Jyk7XHJcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCAmJiByZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtaXRlbScpO1xyXG4gICAgICAgICAgICB2YXIgdGFnVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZC1pdGVtID4gcCcpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuaGl0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyW2ldLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgZGF0YS5oaXRzW2ldLndlYmZvcm1hdFVSTCArIFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgdGFnVGl0bGVbaV0uaW5uZXJIVE1MID0gZGF0YS5oaXRzW2ldLnRhZ3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHNldEltYWdlLmNyZWF0ZUltZygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxufTtcclxuZ2V0anNvbigpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldFJlcXVlc3QoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXRfdGV4dCcpLnZhbHVlO1xyXG4gICAgZ2V0anNvbihpbnB1dEFyZWEpO1xyXG59O1xyXG5cclxuaW5wdXRCdG4ub25jbGljayA9IHNldFJlcXVlc3Q7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLSAgICAgICBtb2RhbCBldmVudHM7ICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4vLyB2YXIgbW9kYWxFbGVtZW50ID0ge1xyXG4vLyAgICAgICAgIHNob3dNb2RhbDogZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuLy8gICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLS1hY3RpdmVcIik7XHJcbi8vICAgICB9LFxyXG4vLyAgICAgY2xvc2VNb2RhbDogZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKTtcclxuLy8gICAgICAgICAkKCcubG9naW4tZm9ybScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuLy8gICAgICAgICAkKCcudGFic19saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4vLyAgICAgfSxcclxuLy8gICAgIG1vZGFsSW5pdDogZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgJCgnLmxvZ2luLWZvcm0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbi8vICAgICAgICAgJCgnLnRhYnNfbGluaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuLy8gICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4vLyAgICAgICAgIHZhciB0aGlzSWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4vLyAgICAgICAgICQoJyMnKyB0aGlzSWQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy9cclxuLy9cclxuLy8gY2xvc2VCdG4ub25jbGljayA9IG1vZGFsRWxlbWVudC5jbG9zZU1vZGFsO1xyXG4vL1xyXG4vLyBtb2RhbFRhYlswXS5vbmNsaWNrID0gbW9kYWxFbGVtZW50Lm1vZGFsSW5pdDtcclxuLy8gbW9kYWxUYWJbMV0ub25jbGljayA9IG1vZGFsRWxlbWVudC5tb2RhbEluaXQ7XHJcbi8vXHJcbi8vXHJcbi8vIGxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgbW9kYWxFbGVtZW50LnNob3dNb2RhbCgpO1xyXG4vLyAgICAgdmFyIGdldERhdGEgPSBsb2dpbkJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpO1xyXG4vLyAgICAgbW9kYWxUYWJbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbi8vICAgICAkKCcjJysgZ2V0RGF0YSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4vLyB9KTtcclxuLy9cclxuLy9cclxuLy8gc2lnbnVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgbW9kYWxFbGVtZW50LnNob3dNb2RhbCgpO1xyXG4vLyAgICAgdmFyIGdldERhdGEgPSBzaWdudXBCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKTtcclxuLy8gICAgIG1vZGFsVGFiWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4vLyAgICAgJCgnIycrIGdldERhdGEpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuLy8gfSk7XHJcblxyXG5cclxuLy8vLy8vLy8vL0xPREFTSDtcclxuLy/Qt9Cw0L/QuNGB0LDRgtGMINGB0L7QtNC10YDQttC40LzQvtC1IDxzY3JpcHQ+PC9zY3JpcHQ+INCyINC/0LXRgNC10LzQtdC90L3Rg9GOO1xyXG52YXIgdG1wbCA9IF8udGVtcGxhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdGVtcGxhdGUnKS5pbm5lckhUTUwpO1xyXG5cclxuLy8gdmFyIGh0bWxEYXRhID0ge1xyXG4vLyAgICAgdGl0bGU6ICdob25leScsXHJcbi8vICAgICBjb250ZW50OiAnaG9uZXkgaXMgbXkgZmF2b3JpdGUgYW5kIGRlbGljaW91cyBkZXNlcnQhJyxcclxuLy8gICAgIGl0ZW1zOltcclxuLy8gICAgICAgICAnY2FrZScsXHJcbi8vICAgICAgICAgJ3BlYW51dHMnLFxyXG4vLyAgICAgICAgICdzYWxhZCdcclxuLy8gICAgIF1cclxuLy8gfTtcclxuXHJcbi8vICQoJy5kaXZpZGVyJykuYmVmb3JlKHRtcGwoaHRtbERhdGEpKTtcclxuXHJcblxyXG5cclxuLy8gfSk7Il19

// // let spinnerE1 = document.getElementById('spinner');
// // spinnerE1.classList.add("spinner")
// // document.body.append(spinnerE1)

// let resultsContainer = document.createElement("div");
// resultsContainer.id = "results";
// resultsContainer.classList.add("display-items","one","myImage","myVideo","myNews")
// document.body.append(resultsContainer);

// let imageSectionE2 = document.getElementById('imageSectionE2')


// let apiKey = "58cca065177e920f5ebcddc3061d8586";

// let page = 1;
//     searchVideo( true); 
// let showMore = null

// function loadMore() {
//     page++;
//   searchVideo( false); 
// }

// function searchVideo( isNewSearch = false) {

//   const topics = ["Tollywood","Movies","Indian news","sports",""];
//   const randomTopic = topics[Math.floor(Math.random() * topics.length)];

//   const url = new URL(`https://gnews.io/api/v4/search?q=${encodeURIComponent(randomTopic)}&token=${apiKey}&lang=en&page=${page}`);
// //   if (nextPageToken) url.searchParams.set('pageToken', nextPageToken);

// //   spinnerE1.classList.remove("d-none"); 

//   fetch(url.toString())
//     .then(res => res.json())
//     .then(data => {
//           resultsContainer.classList.add("one");
//           resultsContainer.classList.remove("myImage", "myVideo");
//           resultsContainer.classList.add("myNews");

          

//           // imageSectionE2.style.display = "block";
//           // imageSectionE1.style.display = "none";
//           // imageSection.style.display = "none";
//           // resultsContainer.textContent = "";

//           let focus = document.getElementById('coolAnoop')
//           focus.innerHTML="" // for hiding the button check it once the server came
//           imageSectionE2.innerHTML=""
//       const results = data.articles;
//       console.log(results)
//       nextPageToken = data.nextPageToken || '';

//       if (isNewSearch) {
//         // page = 10;
//         resultsContainer.innerHTML = "";
//         if (showMore) {
//         //   showMore.remove();
//           showMore = null;
//         }
//       }

//       if (results.length>1) {
//         let html = '';
//         results.forEach(article => {
//           const title = article.title;
//           const description = article.description;
//           const urlE1 = article.url;
//           const imageHi = article.image;
          
//           html += `
//             <div class="news-card">
//               <div class="news-frame">
//               <div class = "hidden">
//                 <img src="${imageHi}" class="news-img" alt="No Image"
//                 onerror="this.onerror=null; this.src='image.jpg'; this.classList.add('fallback');"/>
//                 </div>
//                 <a href="${urlE1}" target="_blank" class="news-titleE1">${title}</a>
//               </div>
//               <hr />
//               <p class="news-para11">${description}</p>
//               <div class="buttonE1">
//               <a href="${urlE1}" target="_blank">
//               <button class = "b1">Read more</button>
//               </a>
//               </div>
//             </div>`
//           ;
//         });

//         if (isNewSearch) {
//           resultsContainer.innerHTML = html;
//         } else {
//           resultsContainer.insertAdjacentHTML('beforeend', html);
//         }

//         if (!showMore) {
//         //   spinnerE1.classList.add("d-none"); 

//           let assumeShow = document.createElement('div');
//           assumeShow.classList.add("assume-show");

//           showMore = document.createElement('button');
//           showMore.textContent = "View More";
//           showMore.classList.add("showE11");
//           showMore.style.display = "block";
//           assumeShow.append(showMore);

//           imageSectionE2.append(assumeShow);
//           document.body.appendChild(imageSectionE2);

//           showMore.addEventListener("click", () => {
//             // page++;
//             loadMore();
//           });
//         }
//       } else {
//         showPopup("No Result found on news try to enter again !");
//         resultsContainer.textContent = "";
//         if (showMore) showMore.style.display = 'none';
//       }
//     })
//     .catch(err => {
//       console.error("Error:", err);
//       resultsContainer.innerHTML = "Error fetching news.";
//     })
//     .finally(() => {
//     //   spinnerE1.classList.add("d-none"); 
//     });
// }  
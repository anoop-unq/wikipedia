let coolAnoop= document.getElementById('coolAnoop')
function showPopup(message) {
  let popupE1 = document.createElement('div');
  popupE1.classList.add('popupE1');
  popupE1.id="popup"
  popupE1.style.position = 'absolute';
  popupE1.style.top = '-100px';
  popupE1.style.left = '50%';
  popupE1.style.transform = 'translate(-50%, -50%)';
  popupE1.style.backgroundColor = 'white';
  popupE1.style.padding = '30px';
  popupE1.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
  popupE1.style.transition='top 0.6s ease-in-out'
  popupE1.innerHTML = `<p class = "para">${message}</p>
  <button id = "pop-up-message" onclick="location.reload()">Re-Enter</button>`;
  let imageEl1 = document.createElement('div')
  imageEl1.classList.add("imageE11")

  let imageInsideE1 = document.createElement('img')
  imageInsideE1.classList.add("image-insideE1")
  imageInsideE1.src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"

  let wrongContainerE1 = document.createElement('div')
  wrongContainerE1.classList.add("wrong-containerE1")

  let wrongIconE1 = document.createElement('i')
  wrongIconE1.classList.add("fas","fa-times","iconE1");
  wrongIconE1.style.fontSize = "20px";

  wrongContainerE1.addEventListener("click",function(){
      popupE1.style.display="none"
     
  })
  imageEl1.append(imageInsideE1)
  wrongContainerE1.append(wrongIconE1)
  popupE1.appendChild(imageEl1)
  popupE1.appendChild(wrongContainerE1)
  coolAnoop.appendChild(popupE1);

  setTimeout(() => {
      popupE1.style.top = "50%"
  },100)
}

function showPopupE1(message) {
  let popupE1 = document.createElement('div');
  popupE1.classList.add('popupE1');
  popupE1.style.position = 'absolute';
  popupE1.style.top = '-100px';
  popupE1.style.left = '50%';
  popupE1.style.transform = 'translate(-50%, -50%)';
  popupE1.style.backgroundColor = 'white';
  popupE1.style.padding = '30px';
  popupE1.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
  popupE1.style.transition='top 0.6s ease-in-out'
  popupE1.innerHTML = `<p class = "paraE1">${message}</p>
  <button id = "pop-up-messageE1" onclick="location.reload()">Try Again</button>`;
  let imageEl1 = document.createElement('div')
  imageEl1.classList.add("imageE11")

  let imageInsideE1 = document.createElement('img')
  imageInsideE1.classList.add("image-insideE1")
  imageInsideE1.src="https://tse3.mm.bing.net/th?id=OIP.FWL4G37bV14QxU3Fo2ak2wHaHa&pid=Api&P=0&h=180"

  let wrongContainerE1 = document.createElement('div')
  wrongContainerE1.classList.add("wrong-containerE1")
 
  let wrongIconE1 = document.createElement('i')
  wrongIconE1.classList.add("fas","fa-times","iconE1");
  wrongIconE1.style.fontSize = "20px";

  wrongContainerE1.addEventListener("click",function(){
      popupE1.style.display="none"
      absoluteGuess.textContent="You have finished your attempts please reset"        
  })
  imageEl1.append(imageInsideE1)
  wrongContainerE1.append(wrongIconE1)
  popupE1.appendChild(imageEl1)
  popupE1.appendChild(wrongContainerE1)
  document.body.appendChild(popupE1);

  setTimeout(() => {
      popupE1.style.top = "50%"
  },100)
}

function setActive(button) {
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  console.log("hii")
}

function setActiveE1() {
  const buttons = document.getElementById('oneMan');
  // buttons.classList.remove('active');
  buttons.classList.add('active');
  console.log("hii")
  const btn2 = document.getElementById('twoMan')
  const btn3 = document.getElementById('thirdMan')
  const btn4 = document.getElementById('fourMan')

  btn2.classList.remove('active')
  btn3.classList.remove('active')
  btn4.classList.remove('active')
}
let allMixConatainer = document.createElement('div')
allMixConatainer.classList.add('all-mix')


let mainDiv = document.createElement('div')
mainDiv.classList.add("search-class")

let headings = document.createElement('div')
headings.id="headLegend"

let searchInput = document.createElement('input')
searchInput.id="searchMan"
searchInput.classList.add("search-input-class")
searchInput.type="search"
searchInput.placeholder="Enter to search ?"
mainDiv.append(searchInput)
// document.body.append(mainDiv)


let fragmentsContainer = document.createElement('div')
fragmentsContainer.classList.add("fragments")

let displayIcons = document.createElement('div')
displayIcons.classList.add("display-icon")

let oneDiv = document.createElement('div')
oneDiv.id="oneMan"
oneDiv.classList.add("one-show","tab-button")
oneDiv.addEventListener("click",function() {
  setActive(this)
  
  
})

let iconSymbol = document.createElement('i')
iconSymbol.classList.add("fa-solid","fa-magnifying-glass","sameE1")

let mergeIcon = document.createElement('div')
mergeIcon.classList.add("merged")
mergeIcon.textContent="All"
oneDiv.append(iconSymbol,mergeIcon)

let oneDivE1 = document.createElement('div')
oneDivE1.classList.add("one-show","tab-button")
oneDivE1.id="twoMan"
oneDivE1.addEventListener("click",function() {
setActive(this)
 let ke = document.getElementById('coolAnoop');
 ke.style.display="block"
})
let iconSymbolE1 = document.createElement('i')
iconSymbolE1.classList.add("fa-solid","fa-image","sameE1")

let mergeIconE1 = document.createElement('div')
mergeIconE1.classList.add("merged")
mergeIconE1.textContent="Images"
oneDivE1.append(iconSymbolE1,mergeIconE1)

let oneDivE2 = document.createElement('div')
oneDivE2.classList.add("one-show","tab-button")
oneDivE2.id="thirdMan"
oneDivE2.addEventListener("click",function() {
  setActive(this)
})
let iconSymbolE2 = document.createElement('i')
iconSymbolE2.classList.add("fa-solid","fa-play","sameE1")

let mergeIconE2 = document.createElement('div')
mergeIconE2.classList.add("merged")
mergeIconE2.textContent="Videos"
oneDivE2.append(iconSymbolE2,mergeIconE2)

let oneDivE3 = document.createElement('div')
oneDivE3.classList.add("one-show","tab-button")
oneDivE3.id="fourMan"
oneDivE3.addEventListener("click",function() {
  setActive(this)
});

let iconSymbolE3 = document.createElement('i')
iconSymbolE3.classList.add("fa-brands","fa-neos","sameE1")

let mergeIconE3 = document.createElement('div')
mergeIconE3.classList.add("merged")
mergeIconE3.textContent="News"
oneDivE3.append(iconSymbolE3,mergeIconE3)

displayIcons.append(oneDiv,oneDivE1,oneDivE2,oneDivE3)
fragmentsContainer.append(displayIcons)
allMixConatainer.append(headings,mainDiv,fragmentsContainer)
document.body.append(allMixConatainer)
// document.body.append(fragmentsContainer)

let man = document.getElementById('searchMan')
console.log(man)

let spinnerE1 = document.getElementById('spinner');
spinnerE1.classList.add("spinner")
document.body.append(spinnerE1)

let resultsContainer = document.createElement("div");
resultsContainer.id = "results";
resultsContainer.classList.add("display-items","one","myImage","myVideo","myNews")
document.body.append(resultsContainer);

// const apiKey = "5ed2a146561f4906ed6015debde2260a";
// const apiKey = "58cca065177e920f5ebcddc3061d8586"
const apiKey = "b7716e563019c757f88b83a5efa71c5e"
let showMore = null;
  searchVideo( true); 


function loadMore() {
  searchVideo( false); 
}
// fetching data from different Apis
function searchVideo( isNewSearch = false) {

  const topics = ["Tollywood","Movies","Indian news","sports","cricket","Indian politics","Hindu"];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];

  const url = new URL(`https://gnews.io/api/v4/search?q=${encodeURIComponent(randomTopic)}&token=${apiKey}&lang=en`);

  spinnerE1.classList.remove("d-none"); 

  fetch(url.toString())
    .then(res => res.json())
    .then(data => {
          resultsContainer.classList.add("one");
          resultsContainer.classList.remove("myImage", "myVideo");
          resultsContainer.classList.add("myNews");

          let focus = document.getElementById('coolAnoop')
          focus.innerHTML="" 
          imageSectionE2.innerHTML=""
      const results = data.articles;
      console.log(results)
      window.nextPageToken = data.nextPageToken || '';

      if (isNewSearch) {
        resultsContainer.innerHTML = "";
        if (showMore) {
          showMore.remove();
          showMore = null;
        }
      }

      if (results.length>1) {
        let html = '';
        results.forEach(article => {
          const title = article.title;
          const trimmedTitle = title.split(' ').slice(0,4).join(' ');
          const description = article.description;
          const urlE1 = article.url;
          const imageHi = article.image;
          
          html += `
          <div class = "majorAnvesh">
            <div class="news-card-one">
                <img src="${imageHi}" class="news-img-one" alt="No Image"
                onerror="this.onerror=null; this.src='image.jpg'; this.classList.add('fallback');"/>
              <div class="news-frame-one">
                <a href="${urlE1}" target="_blank" class="news-titleE1 news-para-55">${trimmedTitle}</a>
              <p class="news-para11">${description}</p>
              <div class="buttonE1">
              <a href="${urlE1}" target="_blank">
              <button class = "b1">Read more</button>
              </a>
              </div>
              </div>
              </div>
            </div>`
          ;
        });

        if (isNewSearch) {
          resultsContainer.innerHTML = html;
        } else {
          resultsContainer.insertAdjacentHTML('beforeend', html);
        }

        if (!showMore) {
          spinnerE1.classList.add("d-none"); 

          let assumeShow = document.createElement('div');
          assumeShow.classList.add("assume-show");

          showMore = document.createElement('button');
          showMore.textContent = "View More";
          showMore.classList.add("showE11");
          showMore.style.display = "block";
          assumeShow.append(showMore);

          imageSectionE2.append(assumeShow);
          document.body.appendChild(imageSectionE2);

          showMore.addEventListener("click", () => {
            loadMore();
          });
        }
      } else {
        showPopup("No Result found on news try to enter again !");
        resultsContainer.textContent = "";
        if (showMore) showMore.style.display = 'none';
      }
    })
    .catch(err => {
      console.error("Error:", err);
      resultsContainer.innerHTML = `
      <div class="api-size">
      <div class="api-limit-card">
  <h2>⚠️ API Limit Reached</h2>
  <p>Sorry, only <strong>100 API requests</strong> are allowed per day.</p>
  <p>Please try again after <strong>24 hours</strong>.</p>
</div>
</div>`
    })
    .finally(() => {
      spinnerE1.classList.add("d-none"); 
    });
}  

   

function searv(event){
  console.log(event)
  if(event.key === "Enter"){
    
    setActiveE1()

    let ke = document.getElementById('coolAnoop');
    ke.innerHTML=""
    resultsContainer.classList.add("one")
    resultsContainer.classList.remove("myImage")
    resultsContainer.classList.remove("myVideo")
    resultsContainer.classList.remove("myNews")

    imageSection.style.display="none"
    imageSectionE2.style.display="none"
    most = man.value.trim()
    console.log(most)
    spinnerE1.classList.toggle("d-none")
    resultsContainer.textContent=""
    if(most === "")
    {
      console.log("empty")
      // showPopup()
      showPopup("Start typing and hit Enter to search Wikipedia.")
      spinnerE1.classList.toggle("d-none")
      console.log(showPopup)
      return;
    }

  
    let url = "https://apis.ccbp.in/wiki-search?search=" + most;
    let options = {
      method: "GET"
    }

 

  function displaySearchResults(jsonData) {
    console.log(jsonData);

    let { search_results } = jsonData; 
    console.log(search_results);

    resultsContainer.textContent = "";
    
    if (!search_results || search_results.length === 0) {
        showPopupE1("No results found. Please try a different search term.");
        return;
    }

    search_results.forEach((user) => {
        console.log(user.title);

        let mainOne = document.createElement('div');
        let main = document.createElement('div');
        main.classList.add("color-less");

        let titleE1 = document.createElement('a');
        titleE1.classList.add("title");
        titleE1.href = user.link;
        titleE1.textContent = user.title;
        titleE1.target = "_blank";

        let breakE1 = document.createElement('br');

        let linkE1 = document.createElement('a');
        linkE1.classList.add("link");
        linkE1.href = user.link;
        linkE1.textContent = user.link;
        linkE1.target = "_blank";

        let descriptionE1 = document.createElement('p');
        descriptionE1.classList.add("description");
        descriptionE1.textContent = user.description;

        main.append(titleE1, linkE1, descriptionE1);
        mainOne.append(main);
        
        console.log(user.link);
        console.log(user.description);
        
        resultsContainer.append(mainOne);
    });

    spinnerE1.classList.toggle("d-none");
}


fetch(url, options)
    .then(response => response.json())
    .then(displaySearchResults)
    .catch(error => {
        console.error("Fetch error:", error);
        resultsContainer.textContent = "Failed to fetch results. Please try again later.";
    })
    .finally(() => {
        spinnerE1.classList.add("d-none");  // Hide spinner after request completes (success or error)
    });


    }
  }
    searchInput.addEventListener("keydown",searv)

   
    // function hidePopup() {
    //   const popup = document.getElementById("popup");
    //   console.log("hii")
    //   if (popup) {
    //     popup.style.display = "none";
        
    //   }
    // }

    let imageSection = document.getElementById('imageSection')
    let imageSectionE1 = document.getElementById('imageSectionE1')
    let imageSectionE2 = document.getElementById('imageSectionE2')
   
    const buttons = document.querySelectorAll(".one-show");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const id = button.id;

        if (id === 'oneMan') {
          resultsContainer.classList.add("one")
          resultsContainer.classList.remove("myImage")
          resultsContainer.classList.remove("myVideo")
          resultsContainer.classList.remove("myNews")
          imageSectionE1.style.display="none"
          imageSectionE2.style.display="none"
          imageSection.style.display="none"

          let focus = document.getElementById('coolAnoop')
          focus.innerHTML=""
          // spinnerE1.classList.toggle("d-none")
          spinnerE1.classList.remove("d-none");
            spinnerE1.style.display="block"

  
          console.log("click")
          userValue = searchInput.value;
          if(userValue===""){
            showPopup("Start typing and hit Enter to search Wikipedia.")
            resultsContainer.textContent=""
            spinnerE1.classList.add("d-none");
          }
          else{
            resultsContainer.innerHTML="" 
            imageSection.style.display="none"

            let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput.value;
            let options = {
              method: "GET"
            }
            fetch(url,options)
        
            .then(function(response){
              return response.json()
            })
            .then(function(jsonData){

            console.log(jsonData)
            
            let { search_results } = jsonData; // this is used for
 
              console.log(search_results)
        
              resultsContainer.textContent="";
              if(!search_results || search_results.length ===0) {
                spinnerE1.classList.add("d-none");
                 
                showPopupE1("No results found. Please try a different search term.")
                return;
              }
        
            
        
            search_results.forEach((user) =>{
            console.log(user.title)
        
            let mainOne = document.createElement('div')
        
        
            let main = document.createElement('div')
            main.classList.add("color-less")
        
        
            let titleE1 = document.createElement('a')
            titleE1.classList.add("title")
            titleE1.href=user.link
            titleE1.textContent=user.title;
            titleE1.target="_blank"
        
            let linkE1 = document.createElement('a')
            linkE1.classList.add("link")
            linkE1.href=user.link
            linkE1.textContent=user.link
            linkE1.target="_blank"
        
            let descriptionE1 = document.createElement('p')
            descriptionE1.classList.add("description")
            descriptionE1.textContent=user.description
        
            main.append(titleE1,linkE1,descriptionE1)
            mainOne.append(main)
            console.log(user.link)
        
            console.log(user.description)
            resultsContainer.append(mainOne);

            spinnerE1.classList.add("d-none")
        
             
            })
            .catch(error => {
              console.error("Fetch error:", error);
              resultsContainer.textContent = "Failed to fetch results. Please try again later.";
              spinnerE1.classList.add("d-none");
          })
         
        
          }
      )} 
        }

        else if (id === 'twoMan') {
         
          resultsContainer.classList.remove("one");
          resultsContainer.classList.add("myImage");
          resultsContainer.classList.remove("myVideo", "myNews");
        
          imageSectionE1.style.display = "none";
          imageSectionE2.style.display = "none";
          imageSection.style.display = "block";
        
          let focus = document.getElementById('coolAnoop')
          focus.innerHTML=""
       
            

          const searchInputMan = document.getElementById('searchMan');
          
          async function searchImage(isNewSearch = false) {
            
            const userValue = searchInputMan.value.trim();
            let accessKey = "49671633-184f23eef7e7e0b0d111e40c0";
        
            if (userValue === "") {
              showPopup("Start typing and hit enter to search for images!");
              resultsContainer.textContent = "";
              return;
              
            }
        
            if (isNewSearch) {
              page = 1;
              resultsContainer.innerHTML = "";
              if (showMore) {
                showMore.remove();
                showMore = null;
              }
            }
            
            spinnerE1.classList.remove("d-none");
        
            const url = `https://pixabay.com/api/?page=${page}&key=${accessKey}&q=${encodeURIComponent(userValue)}&image_type=photo&safesearch=true`;
        
            try {
              const response = await fetch(url);
              const data = await response.json();
              const results = data.hits;
        
              if (results.length === 0 && page === 1) {
                showPopup("No images found. Please try a different search item.");
                resultsContainer.textContent = "";
                
                return;
                
              }
        
              results.forEach(result => {
                
                const searchKeyword = result.tags || "India monument";
        
                const twoDivContainer = document.createElement('div');
                twoDivContainer.classList.add("two-container");
        
                const imgBox = document.createElement('div');
                imgBox.classList.add("sectionA");
        
                const img = document.createElement('img');
                img.classList.add("image-photo");
                img.src = result.webformatURL;
        
                img.addEventListener("click", () => {
                  const wikiSearch = encodeURIComponent(searchKeyword);
                  const wikiUrl = `https://en.wikipedia.org/wiki/${wikiSearch}`;
                  window.open(wikiUrl, '_blank');
                });
        
                imgBox.appendChild(img);
                twoDivContainer.append(imgBox);
                resultsContainer.appendChild(twoDivContainer);
              });
        
              if (!showMore) {
                const assumeShow = document.createElement('div');
                assumeShow.classList.add("assume-show");
        
                showMore = document.createElement('button');
                showMore.textContent = "View More";
                showMore.classList.add("showE1");
                showMore.style.display = "block";
        
                assumeShow.append(showMore);
                imageSection.append(assumeShow);
                document.body.appendChild(imageSection);
        
                showMore.addEventListener("click", () => {
                  page++;
                  searchImage(false);
                });
              }
        
            } catch (error) {
              console.error("Error fetching images:", error);
              showPopup("Failed to load images. Try again later.");
            } finally {
              spinnerE1.classList.add("d-none");
            }
          }
        

          searchImage(true);
        

          
        }
        
        else if (id === 'thirdMan') {
          resultsContainer.classList.add("one");
          resultsContainer.classList.remove("myImage", "myNews");
          resultsContainer.classList.add("myVideo");
          imageSectionE1.style.display = "block";
          imageSectionE2.style.display = "none";
          imageSection.style.display = "none";
          imageSectionE1.innerHTML = "";
        
          let focus = document.getElementById('coolAnoop');
          focus.innerHTML = "";
          resultsContainer.textContent = "";
        
          const apiKey = "AIzaSyBGP9U1AyGAXrFtBDSPqJfdAf0h1MgohZ4";
          let nextPageToken = '';
          let currentQuery = '';
          let showMore = null;
        
          function startSearch() {
            const query = searchInput.value.trim();
            if (query === "") {
              showPopup("Start typing and hit Enter to search Wikipedia.");
              resultsContainer.textContent = "";
              spinnerE1.classList.add("d-none");
              return;
            }
        
            currentQuery = query;
            nextPageToken = '';
            searchVideo(query, true);
          }
        
          function loadMore() {
            const spinner = showMore.querySelector('.btn-spinner');
            const text = showMore.querySelector('.btn-text');
        
            text.textContent = "Loading...";
            spinner.classList.remove("d-none");
        
            searchVideo(currentQuery, false).then(() => {
              text.textContent = "View More";
              spinner.classList.add("d-none");
            });
          }
        
          function searchVideo(query, isNewSearch = false) {
            return new Promise((resolve, reject) => {
              const url = new URL('https://www.googleapis.com/youtube/v3/search');
              url.searchParams.set('part', 'snippet');
              url.searchParams.set('type', 'video');
              url.searchParams.set('maxResults', '10');
              url.searchParams.set('q', query);
              url.searchParams.set('key', apiKey);
              if (nextPageToken) url.searchParams.set('pageToken', nextPageToken);
        
              spinnerE1.classList.remove("d-none");
        
              fetch(url.toString())
                .then(res => res.json())
                .then(data => {
                  spinnerE1.classList.add("d-none");
                  const results = data.items;
                  nextPageToken = data.nextPageToken || '';
        
                  if (isNewSearch) {
                    page = 1;
                    resultsContainer.innerHTML = "";
                    if (showMore) {
                      showMore.remove();
                      showMore = null;
                    }
                  }
        
                  if (results.length) {
                    let html = '';
                    results.forEach(video => {
                      const videoId = video.id.videoId;
                      const titleE1 = video.snippet.title.split("#")[0].trim();
                      const date = new Date(video.snippet.publishedAt).toLocaleDateString('en-CA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      });
                      const description = video.snippet.description;
                      const url = `https://www.youtube.com/watch?v=${videoId}`;
        
                      html += `
                        <div class="video-card">
                          <div class="frame11">
                            <iframe src="https://www.youtube.com/embed/${videoId}" width="175px" height="100px" class="more attract"></iframe>
                            <a href="${url}" target="_blank" class="titleE1" id="linkMan">${titleE1}</a>
                          </div>
                          <div class="date">
                            <p class="datePara">Published on ${date}</p>
                          </div>
                          <hr />
                          ${
                            description
                              ? `<p class="para11">${description}</p>`
                              : `<p class="para11" style="text-align: center; font-weight: bold;">Oops Unable to fetch data !</p>`
                          }
                        </div>
                      `;
                    });
        
                    if (isNewSearch) {
                      resultsContainer.innerHTML = html;
                    } else {
                      resultsContainer.insertAdjacentHTML('beforeend', html);
                    }
        
                    if (!showMore) {
                      const assumeShow = document.createElement('div');
                      assumeShow.classList.add("assume-show");
        
                      showMore = document.createElement('button');
                      showMore.classList.add("showE1");
                      showMore.style.display = "block";
                      showMore.innerHTML = `
                        <span class="btn-text">View More</span>
                        <span class="btn-spinner d-none"></span>
                      `;
        
                      assumeShow.append(showMore);
                      imageSectionE1.append(assumeShow);
                      document.body.append(imageSectionE1)
                      showMore.addEventListener("click", loadMore);
                    }
                  } else {
                    resultsContainer.innerHTML = "No results found.";
                    if (showMore) showMore.style.display = 'none';
                  }
        
                  resolve();
                })
                .catch(err => {
                  console.error("Error:", err);
                  resultsContainer.innerHTML = "Error fetching video.";
                  spinnerE1.classList.add("d-none");
                  reject(err);
                });
            });
          }
        
          startSearch();
        }
        
        else if (id === 'fourMan') {
          resultsContainer.classList.add("one");
          resultsContainer.classList.remove("myImage", "myVideo");
          resultsContainer.classList.add("myNews");
        
          imageSectionE2.style.display = "block";
          imageSectionE1.style.display = "none";
          imageSection.style.display = "none";
          resultsContainer.textContent = "";
        
          let focus = document.getElementById('coolAnoop');
          focus.innerHTML = "";
          imageSectionE2.innerHTML = "";
        
          const apiKey = "6cc312c3402b069ac9089bf8b859ad8e";
          let currentQuery = '';
          let page = 1;
          let showMore = null;
        
          function startSearch() {
            const query = searchInput.value.trim();
            if (query === "") {
              showPopup("Start typing and hit enter to search for news!");
              resultsContainer.textContent = "";
              spinnerE1.classList.add("d-none");
              return;
            }
        
            currentQuery = query;
            page = 1;
            searchNews(query, true);
          }
        
        //   function loadMore() {
        //     page++;
        //     searchNews(currentQuery, false);
        //   }
        
          function searchNews(query, isNewSearch = false) {
            // here changed url and set up for the button on the Nes APi as per requirement of view more button
            const url = new URL(`https://gnews.io/api/v4/search`);
            // const url = new URL(`https://newsapi.org/v2/everything?q=${query}&from=2025-03-13&sortBy=publishedAt&apiKey=2af44fa03ff24e23b902485dd7e69aac`)
            url.searchParams.set('q', query);
            url.searchParams.set('token', apiKey);
            url.searchParams.set('lang', 'en');
            // url.searchParams.set('page', page.toString());
        
            spinnerE1.classList.remove("d-none");
        
            fetch(url.toString())
              .then(res => res.json())
              .then(data => {
                const results = data.articles;
                console.log(results);
        
                if (isNewSearch) {
                  resultsContainer.innerHTML = "";
                  if (showMore) {
                    showMore.remove();
                    showMore = null;
                  }
                }
        
                if (results && results.length > 0) {
                  let html = '';
                  results.forEach(article => {
                    const title = article.title;
                    const description = article.description;
                    const urlE1 = article.url;
                    const imageHi = article.image;
                    // const imageHi = article.urlToImage;
                    html += `
                      <div class="news-card">
                        <div class="news-frame">
                          <div class="hidden">
                            <img src="${imageHi}" class="news-img" alt="No Image"
                              onerror="this.onerror=null; this.src='image.jpg'; this.classList.add('fallback');"/>
                          </div>
                          <a href="${urlE1}" target="_blank" class="news-titleE1">${title}</a>
                        </div>
                        <hr />
                        <p class="news-para11">${description}</p>
                        <div class="buttonE1">
                          <a href="${urlE1}" target="_blank">
                            <button class="b1">Read more</button>
                          </a>
                        </div>
                      </div>
                    `;
                  });
        
                  resultsContainer.insertAdjacentHTML('beforeend', html);
        
                //   if (!showMore) {
                //     const assumeShow = document.createElement('div');
                //     assumeShow.classList.add("assume-show");
        
                //     showMore = document.createElement('button');
                //     showMore.textContent = "View More";
                //     showMore.classList.add("showE11");
                //     showMore.style.display = "block";
        
                //     assumeShow.append(showMore);
                //     imageSectionE2.append(assumeShow);
                //     document.body.appendChild(imageSectionE2);
        
                //     showMore.addEventListener("click", loadMore);
                //   }
                // } else {
                //   if (isNewSearch) {
                //     showPopup("No news found. Try another keyword.");
                //     resultsContainer.textContent = "";
                //   }
                  if (showMore) showMore.style.display = 'none';
                }
              })
              .catch(err => {
                console.error("Error:", err);
                resultsContainer.innerHTML = "Error fetching news.";
              })
              .finally(() => {
                spinnerE1.classList.add("d-none");
              });
          }
        
          startSearch();
        }        
    });
  });
  // const headLegend = document.getElementById(headLegend)

window.addEventListener('scroll', function() {
  const allMix = document.querySelector('.all-mix');
  const headLegend = document.getElementById('headLegend')
  const searchClass = document.querySelector('.search-class');
  const stickyTop = allMix.getBoundingClientRect().top;
  const searchinputclass = document.querySelector('.search-input-class') 
  if (stickyTop <= 0) {
     allMix.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    searchClass.style.paddingTop="5px"
    searchinputclass.style.borderRadius="50px"
    searchinputclass.style.border ='1px solid black';
    searchinputclass.style.outline="none"
    headLegend.style.display="block"
    headLegend.innerHTML=`
    <div class ="basic">
    <div class ="n-basic" id="categoryOne">Sports</div>
    <div class ="n-basic" id="categoryTwo">Technology</div>
    <div class ="n-basic" id="categoryThree">Business</div>
    <div class ="n-basic" id="categoryFour">World</div>
    </div>`
    
    
  } else{
    searchClass.style.marginTop = '0px';
    allMix.style.boxShadow = 'none';
    searchinputclass.style.borderRadius="5px"
    searchClass.style.paddingTop="0px"
    headLegend.style.display="none"
  }
})
headLegend.addEventListener("click", function (e) {
  if (e.target && e.target.id === "categoryOne") {
    console.log("Clicked Item 1 via delegation");

    // Reset and style the results container
    resultsContainer.innerHTML = "";
    resultsContainer.classList.add("one", "myNews");
    resultsContainer.classList.remove("myImage", "myVideo");

    // Toggle section visibility
    imageSectionE2.style.display = "block";
    imageSectionE1.style.display = "none";
    imageSection.style.display = "none";

    // Clear other elements
    document.getElementById("coolAnoop").innerHTML = "";
    imageSectionE2.innerHTML = "";

    // API call for sports category
    const apiKey = "6cc312c3402b069ac9089bf8b859ad8e";
    const category = "sports";
    const lang = "en";
    setActiveE1()

    function fetchSportsNews() {
      const url = new URL("https://gnews.io/api/v4/top-headlines");
      url.searchParams.set("token", apiKey);
      url.searchParams.set("lang", lang);
      url.searchParams.set("topic", category);

      spinnerE1.classList.remove("d-none");

      fetch(url.toString())
        .then(res => res.json())
        .then(data => {
          const results = data.articles;
          console.log(results);

          if (results && results.length > 0) {
            let html = '';
            results.forEach(article => {
              const { title, description, url: urlE1, image: imageHi } = article;
              html += `
                <div class="news-card">
                  <div class="news-frame">
                    <div class="hidden">
                      <img src="${imageHi}" class="news-img" alt="No Image"
                        onerror="this.onerror=null; this.src='image.jpg'; this.classList.add('fallback');"/>
                    </div>
                    <a href="${urlE1}" target="_blank" class="news-titleE1">${title}</a>
                  </div>
                  <hr />
                  <p class="news-para11">${description}</p>
                  <div class="buttonE1">
                    <a href="${urlE1}" target="_blank">
                      <button class="b1">Read more</button>
                    </a>
                  </div>
                </div>
              `;
            });

            resultsContainer.insertAdjacentHTML('beforeend', html);
          } else {
            showPopup("No sports news found. Try again later.");
          }
        })
        .catch(err => {
      console.error("Error:", err);
      resultsContainer.innerHTML = `
      <div class="api-size">
      <div class="api-limit-card">
  <h2>⚠️ API Limit Reached Sports</h2>
  <p>Sorry, only <strong>100 API requests</strong> are allowed per day.</p>
  <p>Please try again after <strong>24 hours</strong>.</p>
</div>
</div>`
    })
        .finally(() => {
          spinnerE1.classList.add("d-none");
        });
    }

    fetchSportsNews(); 
  }
});

headLegend.addEventListener("click", function (e) {
  if (e.target && e.target.id === "categoryTwo") {
    console.log("Clicked Item 1 via delegation");

    // Reset and style the results container
    resultsContainer.innerHTML = "";
    resultsContainer.classList.add("one", "myNews");
    resultsContainer.classList.remove("myImage", "myVideo");

    // Toggle section visibility
    imageSectionE2.style.display = "block";
    imageSectionE1.style.display = "none";
    imageSection.style.display = "none";

    // Clear other elements
    document.getElementById("coolAnoop").innerHTML = "";
    imageSectionE2.innerHTML = "";

    // API call for sports category
    const apiKey = "6cc312c3402b069ac9089bf8b859ad8e";
    const category = "technology";
    const lang = "en";
    setActiveE1()

    function fetchSportsNews() {
      const url = new URL("https://gnews.io/api/v4/top-headlines");
      url.searchParams.set("token", apiKey);
      url.searchParams.set("lang", lang);
      url.searchParams.set("topic", category);

      spinnerE1.classList.remove("d-none");

      fetch(url.toString())
        .then(res => res.json())
        .then(data => {
          const results = data.articles;
          console.log(results);

          if (results && results.length > 0) {
            let html = '';
            results.forEach(article => {
              const { title, description, url: urlE1, image: imageHi } = article;
              html += `
                <div class="news-card">
                  <div class="news-frame">
                    <div class="hidden">
                      <img src="${imageHi}" class="news-img" alt="No Image"
                        onerror="this.onerror=null; this.src='image.jpg'; this.classList.add('fallback');"/>
                    </div>
                    <a href="${urlE1}" target="_blank" class="news-titleE1">${title}</a>
                  </div>
                  <hr />
                  <p class="news-para11">${description}</p>
                  <div class="buttonE1">
                    <a href="${urlE1}" target="_blank">
                      <button class="b1">Read more</button>
                    </a>
                  </div>
                </div>
              `;
            });

            resultsContainer.insertAdjacentHTML('beforeend', html);
          } else {
            showPopup("No sports news found. Try again later.");
          }
        })
        .catch(err => {
      console.error("Error:", err);
      resultsContainer.innerHTML = `
      <div class="api-size">
      <div class="api-limit-card">
  <h2>⚠️ API Limit Reached of Technology</h2>
  <p>Sorry, only <strong>100 API requests</strong> are allowed per day.</p>
  <p>Please try again after <strong>24 hours</strong>.</p>
</div>
</div>`
    })
        .finally(() => {
          spinnerE1.classList.add("d-none");
        });
    }

    fetchSportsNews(); 
  }
});

headLegend.addEventListener("click", function (e) {
  if (e.target && e.target.id === "categoryThree") {
    console.log("Clicked Item 1 via delegation");

    // Reset and style the results container
    resultsContainer.innerHTML = "";
    resultsContainer.classList.add("one", "myNews");
    resultsContainer.classList.remove("myImage", "myVideo");

    // Toggle section visibility
    imageSectionE2.style.display = "block";
    imageSectionE1.style.display = "none";
    imageSection.style.display = "none";

    // Clear other elements
    document.getElementById("coolAnoop").innerHTML = "";
    imageSectionE2.innerHTML = "";

    // API call for sports category
    const apiKey = "6cc312c3402b069ac9089bf8b859ad8e";
    const category = "business";
    const lang = "en";
    setActiveE1()

    function fetchSportsNews() {
      const url = new URL("https://gnews.io/api/v4/top-headlines");
      url.searchParams.set("token", apiKey);
      url.searchParams.set("lang", lang);
      url.searchParams.set("topic", category);

      spinnerE1.classList.remove("d-none");

      fetch(url.toString())
        .then(res => res.json())
        .then(data => {
          const results = data.articles;
          console.log(results);

          if (results && results.length > 0) {
            let html = '';
            results.forEach(article => {
              const { title, description, url: urlE1, image: imageHi } = article;
              html += `
                <div class="news-card">
                  <div class="news-frame">
                    <div class="hidden">
                      <img src="${imageHi}" class="news-img" alt="No Image"
                        onerror="this.onerror=null; this.src='image.jpg'; this.classList.add('fallback');"/>
                    </div>
                    <a href="${urlE1}" target="_blank" class="news-titleE1">${title}</a>
                  </div>
                  <hr />
                  <p class="news-para11">${description}</p>
                  <div class="buttonE1">
                    <a href="${urlE1}" target="_blank">
                      <button class="b1">Read more</button>
                    </a>
                  </div>
                </div>
              `;
            });

            resultsContainer.insertAdjacentHTML('beforeend', html);
          } else {
            showPopup("No sports news found. Try again later.");
          }
        })
        .catch(err => {
      console.error("Error:", err);
      resultsContainer.innerHTML = `
      <div class="api-size">
      <div class="api-limit-card">
  <h2>⚠️ API Limit Reached of Business</h2>
  <p>Sorry, only <strong>100 API requests</strong> are allowed per day.</p>
  <p>Please try again after <strong>24 hours</strong>.</p>
</div>
</div>`
    })
        .finally(() => {
          spinnerE1.classList.add("d-none");
        });
    }

    fetchSportsNews(); 
  }
});

headLegend.addEventListener("click", function (e) {
  if (e.target && e.target.id === "categoryFour") {
    console.log("Clicked Item 1 via delegation");

    // Reset and style the results container
    resultsContainer.innerHTML = "";
    resultsContainer.classList.add("one", "myNews");
    resultsContainer.classList.remove("myImage", "myVideo");

    // Toggle section visibility
    imageSectionE2.style.display = "block";
    imageSectionE1.style.display = "none";
    imageSection.style.display = "none";

    // Clear other elements
    document.getElementById("coolAnoop").innerHTML = "";
    imageSectionE2.innerHTML = "";

    // API call for sports category
    const apiKey = "6cc312c3402b069ac9089bf8b859ad8e";
    const category = "world";
    const lang = "en";
    setActiveE1()

    function fetchSportsNews() {
      const url = new URL("https://gnews.io/api/v4/top-headlines");
      url.searchParams.set("token", apiKey);
      url.searchParams.set("lang", lang);
      url.searchParams.set("topic", category);

      spinnerE1.classList.remove("d-none");

      fetch(url.toString())
        .then(res => res.json())
        .then(data => {
          const results = data.articles;
          console.log(results);

          if (results && results.length > 0) {
            let html = '';
            results.forEach(article => {
              const { title, description, url: urlE1, image: imageHi } = article;
              html += `
                <div class="news-card">
                  <div class="news-frame">
                    <div class="hidden">
                      <img src="${imageHi}" class="news-img" alt="No Image"
                        onerror="this.onerror=null; this.src='image.jpg'; this.classList.add('fallback');"/>
                    </div>
                    <a href="${urlE1}" target="_blank" class="news-titleE1">${title}</a>
                  </div>
                  <hr />
                  <p class="news-para11">${description}</p>
                  <div class="buttonE1">
                    <a href="${urlE1}" target="_blank">
                      <button class="b1">Read more</button>
                    </a>
                  </div>
                </div>
              `;
            });

            resultsContainer.insertAdjacentHTML('beforeend', html);
          } else {
            showPopup("No sports news found. Try again later.");
          }
        })
       .catch(err => {
      console.error("Error:", err);
      resultsContainer.innerHTML = `
      <div class="api-size">
      <div class="api-limit-card">
  <h2>⚠️ API Limit Reached of World </h2>
  <p>Sorry, only <strong>100 API requests</strong> are allowed per day.</p>
  <p>Please try again after <strong>24 hours</strong>.</p>
</div>
</div>`
    })
        .finally(() => {
          spinnerE1.classList.add("d-none");
        });
    }

    fetchSportsNews(); 
  }
});


const buttonE5 = headLegend.querySelectorAll(".n-basic");

    // Add click event listeners
    buttonE5.forEach(btn => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttonE5
        buttonE5.forEach(b => b.classList.remove("active"));
        // Add active class to the clicked button
        btn.classList.add("active");
      });
    });
let coolAnoop= document.getElementById('coolAnoop') // Inner element to clear the pop ups !
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

// for separate buttons fucntionallity setActive()

function setActive(button) {
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}
// for only one [single] All button fucntionallity setActiveE1()

function setActiveE1() {
  const buttons = document.getElementById('oneMan');
  buttons.classList.add('active');
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
// this id is for top 4 API

let searchInput = document.createElement('input')
searchInput.id="searchMan"
searchInput.classList.add("search-input-class")
searchInput.type="search"
searchInput.placeholder="Enter to search ?"
mainDiv.append(searchInput)

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
//  let ke = document.getElementById('coolAnoop');
//  ke.style.display="block"
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

let man = document.getElementById('searchMan')
console.log(man) // access id from serarch input

let spinnerE1 = document.getElementById('spinner');
spinnerE1.classList.add("spinner")
document.body.append(spinnerE1)

let resultsContainer = document.createElement("div");
resultsContainer.id = "results";
resultsContainer.classList.add("display-items","one","myImage","myVideo","myNews")
document.body.append(resultsContainer);


    let imageSection = document.getElementById('imageSection')
    let imageSectionE1 = document.getElementById('imageSectionE1')
    let imageSectionE2 = document.getElementById('imageSectionE2')

// const apiKey = "5ed2a146561f4906ed6015debde2260a";

const apiKey = "58cca065177e920f5ebcddc3061d8586"
// const apiKey = "b7716e563019c757f88b83a5efa71c5e"
let showMore = null;
  searchVideo( true); 

function loadMore() {
  searchVideo( false); 
}

function searchVideo( isNewSearch = false) {

  const topics = ["Tollywood","Movies","Indian news","sports","cricket","Indian politics","Hindu","World","Business","Science","Health","Entertainment","Technology"];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  //  Why use encodeURIComponent()?
// Because if the topic contains characters like:
// spaces &, ?, =, /, etc. they could break the URL or confuse it.
  const url = new URL(`https://gnews.io/api/v4/search?q=${encodeURIComponent(randomTopic)}&token=${apiKey}&lang=en`);
  // new URL its an Js constructor creates object it
  // easily handle modift, or fetch data from URL's
  spinnerE1.classList.remove("d-none"); 
  setActiveE1()
  // if you check type of URL its an object
  fetch(url.toString())
    .then(res => res.json())
    .then(data => {
          resultsContainer.classList.add("one");
          resultsContainer.classList.remove("myImage", "myVideo");
          resultsContainer.classList.add("myNews");
          let focus = document.getElementById('coolAnoop')
          focus.innerHTML="" 
          // imageSectionE2.innerHTML=""
          // you can stop up to 10 pages
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
          const description = article.description.split(' ').slice(0,25).join(' ');
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
          // html template
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

let showButton = null;
// this for the All button setup !
function searchVideoE1( isNewSearch = false) {
 
  const topics = ["Tollywood","Movies","Indian news","sports","cricket","Indian politics","Hindu","World","Business","Science","Health","Entertainment","Technology"];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  //  Why use encodeURIComponent()?
// Because if the topic contains characters like:
// spaces &, ?, =, /, etc. they could break the URL or confuse it.
  const url = new URL(`https://gnews.io/api/v4/search?q=${encodeURIComponent(randomTopic)}&token=${apiKey}&lang=en`);
  // new URL its an Js constructor creates object it
  // easily handle modift, or fetch data from URL's
  resultsContainer.innerHTML=""
  spinnerE1.classList.remove("d-none"); 
  setActiveE1()
  fetch(url.toString())
    .then(res => res.json())
    .then(data => {
      resultsContainer.innerHTML=""
          resultsContainer.classList.add("one");
          resultsContainer.classList.remove("myImage", "myVideo");
          resultsContainer.classList.add("myNews");
          let focus = document.getElementById('coolAnoop')
          focus.innerHTML="" 
          // you can stop up to 10 pages
          const results = data.articles;
          console.log(results)
          window.nextPageToken = data.nextPageToken || '';

      if (isNewSearch) {
        // resultsContainer.innerHTML = "";
        if (showButton) {
          // showButton.remove();
          // showButton = null;
          imageSectionE2.style.display="block"
          console.log(imageSectionE2,"JIiki")
          console.log("Hiii mama")
          console.log(showButton,"Button !")
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

        if (!showButton) {
          console.log("Hii")
          spinnerE1.classList.add("d-none"); 

          let assumeShow = document.createElement('div');
          assumeShow.classList.add("assume-show");

          showButton = document.createElement('button');
          showButton.textContent = "View More";
          showButton.classList.add("showE11");
          showButton.style.display = "block";
          assumeShow.append(showButton);
          imageSectionE2.style.display="block"
          console.log(imageSectionE2,"ANoop")
          imageSectionE2.append(assumeShow);

          document.body.appendChild(imageSectionE2);

          showButton.addEventListener("click", () => {
            loadMore();
          });
        }
      } else {
        showPopup("No Result found on news try to enter again !");
        // resultsContainer.textContent = "";
        if (showButton) showButton.style.display = 'block';
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

 fetch(url, options)
    .then(response => response.json())
    .then(displaySearchResults)
    // passes the data to funtion
    .catch(error => {
        console.error("Fetch error:", error);
        resultsContainer.textContent = "Failed to fetch results. Please try again later.";
    })
    .finally(() => {
        spinnerE1.classList.add("d-none");  // Hide spinner after request completes (success or error)
    });

  function displaySearchResults(jsonData) {
    // console.log(jsonData);

    let { search_results } = jsonData; 
    // console.log(search_results);

    resultsContainer.textContent = "";
    
    if (!search_results || search_results.length === 0) {
        showPopupE1("No results found. Please try a different search term.");
        return;
    }

    search_results.forEach((user) => {
        // console.log(user.title);
        const {title,link,description} = user
        let mainOne = document.createElement('div');
        let main = document.createElement('div');
        main.classList.add("color-less");

        let titleE1 = document.createElement('a');
        titleE1.classList.add("title");
        titleE1.href =link;
        titleE1.textContent = title;
        titleE1.target = "_blank";

        let breakE1 = document.createElement('br');

        let linkE1 = document.createElement('a');
        linkE1.classList.add("link");
        linkE1.href = link;
        linkE1.textContent = link;
        linkE1.target = "_blank";

        let descriptionE1 = document.createElement('p');
        descriptionE1.classList.add("description");
        descriptionE1.textContent = description;

        main.append(titleE1, linkE1, descriptionE1);
        mainOne.append(main);
        
        // console.log(user.link);
        // console.log(user.description);
        
        resultsContainer.append(mainOne);
    });

    spinnerE1.classList.toggle("d-none");
}





    }
  }
    searchInput.addEventListener("keydown",searv)


    // let imageSection = document.getElementById('imageSection')
    // let imageSectionE1 = document.getElementById('imageSectionE1')
    // let imageSectionE2 = document.getElementById('imageSectionE2')
    let allManCount = 0;
    let clickCount = 0;
    let videoCount = 0;
    let newsCount = 0;
    const buttons = document.querySelectorAll(".one-show");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const id = button.id;
        
        
        if (id === 'oneMan') {
          console.log("mama")
          allManCount++;
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
          if(!userValue){
            searchVideoE1(true)
            console.log("55")
          }
          else{
          if(userValue===""){
            showPopup("Start typing and hit Enter to search Wikipedia.")
            resultsContainer.textContent=""
            spinnerE1.classList.add("d-none");
          }
          else{
            resultsContainer.innerHTML="" 
            imageSection.style.display="none"
            // for button ViewMore
            console.log(imageSection,"One 1")
            let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput.value;
            let options = {
              method: "GET"
            }
            fetch(url,options)
        
            .then(function(response){
              return response.json()
            })
            .then(function(jsonData){

            // console.log(jsonData)
            
            let { search_results } = jsonData; // this is used for
 
              // console.log(search_results)
        
              resultsContainer.textContent="";
              if(!search_results || search_results.length ===0) {
                spinnerE1.classList.add("d-none");
                 
                showPopupE1("No results found. Please try a different search term.")
                return;
              }
        
            
        
            search_results.forEach((user) =>{
            // console.log(user.title)
              const {title,description,link} = user
            let mainOne = document.createElement('div')
        
        
            let main = document.createElement('div')
            main.classList.add("color-less")
        
        
            let titleE1 = document.createElement('a')
            titleE1.classList.add("title")
            titleE1.href=link
            titleE1.textContent=title;
            titleE1.target="_blank"
        
            let linkE1 = document.createElement('a')
            linkE1.classList.add("link")
            linkE1.href=link
            linkE1.textContent=link
            linkE1.target="_blank"
        
            let descriptionE1 = document.createElement('p')
            descriptionE1.classList.add("description")
            descriptionE1.textContent=description
        
            main.append(titleE1,linkE1,descriptionE1)
            mainOne.append(main)
            console.log(link)
        
            // console.log(description)
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
      }
        else if (id === 'twoMan') {
          clickCount++;
          resultsContainer.classList.remove("one");
          resultsContainer.classList.add("myImage");
          resultsContainer.classList.remove("myVideo", "myNews");
        
          imageSectionE1.style.display = "none";
          imageSectionE2.style.display = "none";
          imageSection.style.display = "block";
          
          let focus = document.getElementById('coolAnoop')
          focus.innerHTML=""
          resultsContainer.innerHTML="";
          
          // let gallery = document.createElement('div')
          const searchInputMan = document.getElementById('searchMan');
          
          async function searchImage(isNewSearch = false) {
            
            const userValue = searchInputMan.value.trim();
            let accessKey = "49671633-184f23eef7e7e0b0d111e40c0";
            
          if(!userValue){
              console.log("hii",clickCount)
          }
          else{
            if(userValue===""){
             showPopup("Start typing and hit enter to search for images!");
              resultsContainer.innerHTML = "";
              oneTime = true;
              console.log(clickCount,"hi")
              let meAnoop = document.getElementById('meAnoop')
              meAnoop.style.display="none";
              // userd to clear ViewButton
              return; 
            }
          }

     // Initialize values
// let currentPage = 1;
// let viewMoreButton = null; 
// if an error kindly arrange this assigned values after fetchGallery()      // 
          
//             async function fetchGallery(isInitialLoad) {
//               console.log("trigger")
//   const searchTerms = ["architecture", "temples", "space", "wildlife", "sunset"];
//   const keyword = searchTerms[Math.floor(Math.random() * searchTerms.length)];
//   var E1
//   if (isInitialLoad) {
//     E1 = 1;
//     gallery.innerHTML = "";
//     if (viewMoreButton) {
//       console.log("225")
//       viewMoreButton.remove();
//       viewMoreButton = null;
//     }
//   }

//   spinnerE1.classList.remove("d-none");
//   spinnerE1.style.display="block"

//   const apiUrl = `https://pixabay.com/api/?page=${E1}&key=${accessKey}&q=${encodeURIComponent(keyword)}&image_type=photo&safesearch=true`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     const imageList = data.hits;

//     if (imageList.length === 0 && E1 === 1) {
//       showAlert("No images found. Try a different topic.");
//       gallery.textContent = "";
//       return;
//     }

//     imageList.forEach(item => {
//       console.log("Onclick")
//       // const wikiKeyword = item.tags || "architecture";

//       const wrapper = document.createElement('div');
//       wrapper.classList.add("image-wrapper");

//       const imageBox = document.createElement('div');
//       imageBox.classList.add("image-box");

//       const imgElement = document.createElement('img');
//       imgElement.classList.add("gallery-image");
//       imgElement.src = item.webformatURL;

//       imgElement.addEventListener("click", () => {
//         const wikiLink = `https://en.wikipedia.org/wiki/${encodeURIComponent(wikiKeyword)}`;
//         window.open(wikiLink, '_blank');
//       });

//       imageBox.appendChild(imgElement);
//       wrapper.append(imageBox);
//       gallery.appendChild(wrapper);
//     });

//     if (viewMoreButton) {
//       const btnContainer = document.createElement('div');
//       btnContainer.classList.add("btn-wrapper");

//       viewMoreButton = document.createElement('button');
//       viewMoreButton.textContent = "View More";
//       viewMoreButton.classList.add("load-more-btn");

//       btnContainer.append(viewMoreButton);
//       imageSection.append(btnContainer);
//       document.body.appendChild(imageSection);

//       viewMoreButton.addEventListener("click", () => {
//         currentPage++;
//         fetchGallery(false);
//       });
//     }

//   } catch (err) {
//     console.error("Image fetch failed:", err);
//     showAlert("Something went wrong. Please try again.");
//   } finally {
//     spinnerE1.classList.add("d-none");
//   }
// }



// Call once to load on page load
// fetchGallery(true);

        
            if (isNewSearch) {
              console.log("false")
              page = 1;
              resultsContainer.innerHTML = "";
              if (showMore) {
                console.log("hello")
                showMore.remove();
                showMore = null;
              }
            }
            
            spinnerE1.classList.remove("d-none");
            spinnerE1.style.display="block"
            
            const url = `https://pixabay.com/api/?page=${page}&key=${accessKey}&q=${encodeURIComponent(userValue)}&image_type=photo&safesearch=true`;
            console.log(userValue,"mama")
            // Pixabay API treats an empty q (query) as a wildcard search and returns the latest popular or default set of images (usually 20, depending on the per_page parameter).
            // If userValue === "", you still get 20 default images because Pixabay does not block the request—it just returns general images.
            try {
              const response = await fetch(url);
              const data = await response.json();
              const results = data.hits;
              console.log(results)
              if (results.length === 0 && page === 1) {
                showPopup("No images found. Please try a different search item.");
                resultsContainer.textContent = "";
                
                return;
                
              }
        
              results.forEach(result => {
                console.log(result.tags)
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
                console.log("here")
                const assumeShow = document.createElement('div');
                assumeShow.classList.add("assume-show");
        
                showMore = document.createElement('button');
                showMore.textContent = "View More";
                showMore.id="meAnoop"
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
          videoCount++;
          resultsContainer.classList.add("one");
          resultsContainer.classList.remove("myImage", "myNews");
          resultsContainer.classList.add("myVideo");
          imageSectionE1.style.display = "block";
          imageSectionE2.style.display = "none";
          imageSection.style.display = "none";
          imageSectionE1.textContent = "";
        
          let focus = document.getElementById('coolAnoop');
          focus.innerHTML = "";
          resultsContainer.textContent = "";
        
          const apiKey = "AIzaSyBGP9U1AyGAXrFtBDSPqJfdAf0h1MgohZ4";
          let nextPageToken = '';
          let currentQuery = '';
          let showMore = null;
        
          function startSearch() {
            const query = searchInput.value.trim();
            // if (query === "") {
            //   showPopup("Start typing and hit Enter to search Wikipedia.");
            //   resultsContainer.textContent = "";
            //   spinnerE1.classList.add("d-none");
            //   return;
            // }

            if(!query){
              // showVideo()
              console.log("cl")
              console.log(videoCount)
                const topics = ["Movies","Indiannews","sports","Indianpolitics","Hindu","World","Business","Science","Health","Indis","Entertainment","Technology"];
                const randomTopic = topics[Math.floor(Math.random() * topics.length)];
              searchVideo(randomTopic)
            }
            else {
              if(query===""){
                showPopup("Start typing and hit Enter to search Videos.");
              resultsContainer.innerHTML = "";
              spinnerE1.classList.add("d-none");
              return;
              }
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
            console.log(query,"Yt")
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
                        // Canadian English locale (en-CA)
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
                    // resultsContainer.innerHTML = "";
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
          newsCount++;
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
        
          let apiKey = "6cc312c3402b069ac9089bf8b859ad8e";
          // let currentQuery ;
          let page = 1;
          let showMore = null;
        
          function startSearch() {
            let query = searchInput.value.trim();

            if(!query){
              const topics = ["Movies","Hindu","World","Business","Science","Health","Entertainment","Technology","BJP"];
                const randomTopic = topics[Math.floor(Math.random() * topics.length)];
                searchNews(randomTopic,true)
            }
            else{
            if (query === "") {
              showPopup("Start typing and hit enter to search for news!");
              resultsContainer.textContent = "";
              spinnerE1.classList.add("d-none");
              return;
            }
          }
        
            // currentQuery = query;
            page = 1;
            console.log(query,page)
            searchNews( query,true);
          }
          
     
          function searchNews(query, isNewSearch = false) {
            console.log("iii")
           console.log("Query received:", query, "| Type:", typeof query);


            // here changed url and set up for the button on the Nes APi as per requirement of view more button
            // const url = new URL(`https://newsapi.org/v2/everything?q=${query}&from=2025-03-13&sortBy=publishedAt&apiKey=2af44fa03ff24e23b902485dd7e69aac`)
            const url = new URL(`https://gnews.io/api/v4/search`);
            url.searchParams.set('q', query);
            url.searchParams.set('token', apiKey);
            url.searchParams.set('lang', 'en');
            url.searchParams.set('page', page.toString());
            console.log(query)
        
            spinnerE1.classList.remove("d-none");
            console.log(url)
            fetch(url.toString())
              .then(res => res.json())
              .then(data => {
                console.log(data,"High")
                const results = data.articles;
                // console.log(results);
        
                if (isNewSearch) {
                  
                  resultsContainer.innerHTML = "";
                  if (showMore) {
                    showMore.remove();
                    showMore = null;
                  }
                }
        
                if (results && results.length >= 1) {
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
 


window.addEventListener('scroll', function() {
  const allMix = document.querySelector('.all-mix');
  const headLegend = document.getElementById('headLegend')
  const searchClass = document.querySelector('.search-class'); // its for mainDiv elelemt created in top
  const stickyTop = allMix.getBoundingClientRect().top;
  const searchinputclass = document.querySelector('.search-input-class') // class search
  if (stickyTop < 10) {
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
    
    
  } 
  else{
    searchClass.style.marginTop = '0px';
    allMix.style.boxShadow = 'none';
    searchinputclass.style.borderRadius="5px"
    searchClass.style.paddingTop="0px"
  }
})
const categoryMap = {
  categoryOne: "sports",
  categoryTwo: "technology",
  categoryThree: "business",
  categoryFour: "world"
};

headLegend.addEventListener("click", function (e) {
  const clickedId = e.target.id;
  console.log(clickedId)
  // setActive(e.target.id)
  if (categoryMap[clickedId]) {
    // 1. Highlight clicked button and remove highlight from others
    document.querySelectorAll('.n-basic').forEach(btn => {
      btn.classList.remove('active-category');
    });
    e.target.classList.add('active-category');

    resultsContainer.innerHTML = "";
    resultsContainer.classList.add("one", "myNews");
    resultsContainer.classList.remove("myImage", "myVideo");

    imageSectionE2.style.display = "block";
    imageSectionE1.style.display = "none";
    imageSection.style.display = "none";

    document.getElementById("coolAnoop").innerHTML = "";
    imageSectionE2.innerHTML = "";
    // 3. Fetch news for the selected category
    // const apiKey = "6cc312c3402b069ac9089bf8b859ad8e";
    const apiKey = "d890bc5854f42bbb6fdeaf7dfa091e74"; // second Api

    const category = categoryMap[clickedId];
    const lang = "en";
    setActiveE1()
    fetchCategoryNews(apiKey, category, lang);
  }
});

function fetchCategoryNews(apiKey, category, lang) {
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
        resultsContainer.innerHTML=html
        // resultsContainer.insertAdjacentHTML('beforeend', html);
      } else {
        showPopup(`No ${category} news found. Try again later.`);
      }
    })
    .catch(err => {
      console.error("Error:", err);
      resultsContainer.innerHTML = `
      <div class="api-size">
        <div class="api-limit-card">
          <h2>⚠️ API Limit Reached (${category.toUpperCase()})</h2>
          <p>Sorry, only <strong>100 API requests</strong> are allowed per day.</p>
          <p>Please try again after <strong>24 hours</strong>.</p>
        </div>
      </div>`;
    })
    .finally(() => {
      spinnerE1.classList.add("d-none");
    });
}


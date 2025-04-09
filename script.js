// let url = "https://gorest.co.in/public-api/users"
// fetch(url)
// .then(function(r){
//     return r.json()
// })
// .then(function(jsonData){
//     console.log(jsonData.data[0].id)
// })

// let url = "https://gorest.co.in/public-api/users";

// fetch(url)
//   .then((r) => r.json())
//   .then((jsonData) => {
//     let ids = jsonData.data.map(user => user.id)
//         // return user.id;
//     console.log(ids);

//    } );


// let url = "https://gorest.co.in/public-api/users";

// fetch(url)
//   .then(function (r) {
//     return r.json();
//   })
//   .then(function (jsonData) {

//     let ids = [];
//     jsonData.data.map(function (user) {
//     //   return user.id;
//     ids.push(user.id)
//     });
//     console.log(ids);
//   })
//   .catch(function (error) {
//     console.error("Error fetching data:", error);
//   });
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
  // wrongContainer.style.position = "absolute";
  // wrongContainer.style.top = "10px";
  // wrongContainer.style.right = "10px";
  // wrongContainer.style.cursor = "pointer";

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
}

let mainDiv = document.createElement('div')
mainDiv.classList.add("search-class")

let searchInput = document.createElement('input')
searchInput.id="searchMan"
searchInput.classList.add("search-input-class")
searchInput.type="search"
searchInput.placeholder="Enter to search ?"
mainDiv.append(searchInput)
document.body.append(mainDiv)


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
// oneDiv.addEventListener("click",()=>{
//   spinnerE1.classList.toggle("d-none")

  
//   console.log("click")
//   userValue = searchInput.value;
//   if(userValue===""){
//     showPopup("Start typing and hit Enter to search Wikipedia.")
//     resultsContainer.textContent=""
//     spinnerE1.classList.toggle("d-none")
//   }
//   else{
//     resultsContainer.innerHTML="" // for clearing the Api data and showing the spinner AA
//     // displaySearchResults()
//     let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput.value;
//     let options = {
//       method: "GET"
//     }
//     fetch(url,options)

//     .then(function(response){
//       return response.json()
//     })
//     .then(function(jsonData){
      
//     // resultsContainer.innerHTML = "";
//     // console.log(jsonData.search_results[5].title)
//     // let search_results = jsonData;
//     // console.log(search_results)
//     console.log(jsonData)
    
//     let { search_results } = jsonData; // this is used for
//     // Instead of writing
//     //  jsonData.search_results, 
//     // you can directly use search_results.
//     // this is known as object destructing !
//       console.log(search_results)

//       resultsContainer.textContent="";
//       if(!search_results || search_results.length ===0) {
        
//         // resultsContainer.textContent = "No results found. Please try a different search term.";
//         showPopupE1("No results found. Please try a different search term.")
//         return;
//       }

    

//     search_results.forEach((user) =>{
//     console.log(user.title)

//     let mainOne = document.createElement('div')


//     let main = document.createElement('div')
//     main.classList.add("color-less")


//     let titleE1 = document.createElement('a')
//     titleE1.classList.add("title")
//     titleE1.href=user.link
//     titleE1.textContent=user.title;
//     titleE1.target="_blank"
    
//     let breakE1 = document.createElement('br')

//     let linkE1 = document.createElement('a')
//     linkE1.classList.add("link")
//     linkE1.href=user.link
//     linkE1.textContent=user.link
//     linkE1.target="_blank"

//     let descriptionE1 = document.createElement('p')
//     descriptionE1.classList.add("description")
//     descriptionE1.textContent=user.description

//     main.append(titleE1,linkE1,descriptionE1)
//     mainOne.append(main)
//     console.log(user.link)

//     console.log(user.description)
//     resultsContainer.append(mainOne);
//     // return mainOne
//    });

//       // return user.title;
//       // console.log(ids)
//     // resultsContainer.innerHTML = "";
//     spinnerE1.classList.toggle("d-none")

//       // resultsContainer.append(...elements);
//       // spread operator expands an array 
//       // into individual values.
//       // always using three dots for spread operator
//     })
//     .catch(error => {
//       console.error("Fetch error:", error);
//       resultsContainer.textContent = "Failed to fetch results. Please try again later.";
//   })
 

//   }

// })

let iconSymbol = document.createElement('i')
iconSymbol.classList.add("fa-solid","fa-magnifying-glass","sameE1")

let mergeIcon = document.createElement('div')
mergeIcon.classList.add("merged")
mergeIcon.textContent="All"
// iconSymbol.append(mergeIcon)
oneDiv.append(iconSymbol,mergeIcon)

let oneDivE1 = document.createElement('div')
oneDivE1.classList.add("one-show","tab-button")
oneDivE1.id="twoMan"
oneDivE1.addEventListener("click",function() {
setActive(this)
})
let iconSymbolE1 = document.createElement('i')
iconSymbolE1.classList.add("fa-solid","fa-image","sameE1")

let mergeIconE1 = document.createElement('div')
mergeIconE1.classList.add("merged")
mergeIconE1.textContent="Images"
// iconSymbolE1.append(mergeIconE1)
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
// iconSymbolE2.append(mergeIconE2)
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
// iconSymbolE3.append(mergeIconE3)
oneDivE3.append(iconSymbolE3,mergeIconE3)

displayIcons.append(oneDiv,oneDivE1,oneDivE2,oneDivE3)
fragmentsContainer.append(displayIcons)
document.body.append(fragmentsContainer)


let man = document.getElementById('searchMan')

let spinnerE1 = document.getElementById('spinner');
spinnerE1.classList.add("spinner")
document.body.append(spinnerE1)

let resultsContainer = document.createElement("div");
resultsContainer.id = "results";
resultsContainer.classList.add("display-items","one","myImage","myVideo","myNews")
document.body.append(resultsContainer);


function searv(event){
  if(event.key === "Enter"){
    resultsContainer.classList.add("one")
    resultsContainer.classList.remove("myImage")
    resultsContainer.classList.remove("myVideo")
    resultsContainer.classList.remove("myNews")

    imageSection.style.display="none"
    man = searchInput.value.trim()
    spinnerE1.classList.toggle("d-none")
    // console.log(man)
    resultsContainer.textContent=""
    if(man === "")
    {
      // resultsContainer.textContent="Empty"
      showPopup("Start typing and hit Enter to search Wikipedia.")
      spinnerE1.classList.toggle("d-none")
      return;
    }

  //   function showPopup(message) {
  //     let popupE1 = document.createElement('div');
  //     popupE1.classList.add('popupE1');
  //     popupE1.style.position = 'absolute';
  //     popupE1.style.top = '-100px';
  //     popupE1.style.left = '50%';
  //     popupE1.style.transform = 'translate(-50%, -50%)';
  //     popupE1.style.backgroundColor = 'white';
  //     popupE1.style.padding = '30px';
  //     popupE1.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
  //     popupE1.style.transition='top 0.6s ease-in-out'
  //     popupE1.innerHTML = `<p class = "para">${message}</p>
  //     <button id = "pop-up-message" onclick="location.reload()">Re-Enter</button>`;
  //     let imageEl1 = document.createElement('div')
  //     imageEl1.classList.add("imageE11")
  
  //     let imageInsideE1 = document.createElement('img')
  //     imageInsideE1.classList.add("image-insideE1")
  //     imageInsideE1.src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
  
  //     let wrongContainerE1 = document.createElement('div')
  //     wrongContainerE1.classList.add("wrong-containerE1")
  
  //     let wrongIconE1 = document.createElement('i')
  //     wrongIconE1.classList.add("fas","fa-times","iconE1");
  //     wrongIconE1.style.fontSize = "20px";
  
  //     wrongContainerE1.addEventListener("click",function(){
  //         popupE1.style.display="none"
         
  //     })
  //     imageEl1.append(imageInsideE1)
  //     wrongContainerE1.append(wrongIconE1)
  //     popupE1.appendChild(imageEl1)
  //     popupE1.appendChild(wrongContainerE1)
  //     document.body.appendChild(popupE1);
  
  //     setTimeout(() => {
  //         popupE1.style.top = "50%"
  //     },100)
  // }
  
    let url = "https://apis.ccbp.in/wiki-search?search=" + man;
    let options = {
      method: "GET"
    }

  //   fetch(url,options)

  //   .then(function(response){
  //     return response.json()
  //   })
  //   .then(function(jsonData){
  //   // resultsContainer.innerHTML = "";
  //   // console.log(jsonData.search_results[5].title)
  //   // let search_results = jsonData;
  //   // console.log(search_results)
  //   console.log(jsonData)
    
  //   let { search_results } = jsonData; // this is used for
  //   // Instead of writing
  //   //  jsonData.search_results, 
  //   // you can directly use search_results.
  //   // this is known as object destructing !
  //     console.log(search_results)

  //     resultsContainer.textContent="";
  //     if(!search_results || search_results.length ===0) {
        
  //       // resultsContainer.textContent = "No results found. Please try a different search term.";
  //       showPopupE1("No results found. Please try a different search term.")
  //       return;
  //     }

    

  //   search_results.forEach((user) =>{
  //   console.log(user.title)

  //   let mainOne = document.createElement('div')


  //   let main = document.createElement('div')
  //   main.classList.add("color-less")


  //   let titleE1 = document.createElement('a')
  //   titleE1.classList.add("title")
  //   titleE1.href=user.link
  //   titleE1.textContent=user.title;
  //   titleE1.target="_blank"
    
  //   let breakE1 = document.createElement('br')

  //   let linkE1 = document.createElement('a')
  //   linkE1.classList.add("link")
  //   linkE1.href=user.link
  //   linkE1.textContent=user.link
  //   linkE1.target="_blank"

  //   let descriptionE1 = document.createElement('p')
  //   descriptionE1.classList.add("description")
  //   descriptionE1.textContent=user.description

  //   main.append(titleE1,linkE1,descriptionE1)
  //   mainOne.append(main)
  //   console.log(user.link)

  //   console.log(user.description)
  //   resultsContainer.append(mainOne);
  //   // return mainOne
  //  });

  //     // return user.title;
  //     // console.log(ids)
  //   // resultsContainer.innerHTML = "";
  //   spinnerE1.classList.toggle("d-none")

  //     // resultsContainer.append(...elements);
  //     // spread operator expands an array 
  //     // into individual values.
  //     // always using three dots for spread operator
  //   })
  //   .catch(error => {
  //     console.error("Fetch error:", error);
  //     resultsContainer.textContent = "Failed to fetch results. Please try again later.";
  // })
  // .finally(() => {
  //     spinnerE1.classList.add("d-none");  // Hide spinner after request completes (success or error)
  // });

  function displaySearchResults(jsonData) {
    console.log(jsonData);

    let { search_results } = jsonData; // Object destructuring
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

// Fetch call
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

    // async function searchImage() {
    //   let userMan = document.getElementById('searchMan').value;
    //   console.log(userMan)
    //   let url = `https://api.unsplash.com/search/photos?query=${userMan}&client_id=${accessKey}`
    //   console.log(url)

    //   let response = await fetch(url)
    //   let data = await response.json()

    //   let results = data.results

    //   results.map((result)=>{
        
    //     let assam = document.createElement('div')
    //     let mainaaam = document.createElement('img')
    //     mainaaam.src=result.urls.small;
    //     assam.append(mainaaam)
    //     document.body.append(assam)

    //   })
    // }
    function hidePopup() {
      const popup = document.getElementById("popup");
      console.log("hii")
      if (popup) {
        popup.style.display = "none";
        
      }
    }

    let imageSection = document.getElementById('imageSection')
    let imageSectionE1 = document.getElementById('imageSectionE1')
    let imageSectionE2 = document.getElementById('imageSectionE2')
   
    const buttons = document.querySelectorAll(".one-show");
    let page = 1;
    let showMore = null;
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
            // spinnerE1.classList.toggle("d-none")
            spinnerE1.classList.add("d-none");
          }
          else{
            // spinnerE1.style.display="none"
            resultsContainer.innerHTML="" // for clearing the Api data and showing the spinner AA
            // displaySearchResults()
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
              
            // resultsContainer.innerHTML = "";
            // console.log(jsonData.search_results[5].title)
            // let search_results = jsonData;
            // console.log(search_results)
            console.log(jsonData)
            
            let { search_results } = jsonData; // this is used for
            // Instead of writing
            //  jsonData.search_results, 
            // you can directly use search_results.
            // this is known as object destructing !
              console.log(search_results)
        
              resultsContainer.textContent="";
              if(!search_results || search_results.length ===0) {
                spinnerE1.classList.add("d-none");
                // resultsContainer.textContent = "No results found. Please try a different search term.";
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
            
            let breakE1 = document.createElement('br')
        
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
//             let style = document.createElement("style");
// style.textContent = `
//   @media (max-width: 3500px) {
//     #results.one {
//       grid-template-columns: 1fr !important;
//     }
//   }
// `;
// document.head.appendChild(style);

            // return mainOne
           });
        
              // return user.title;
              // console.log(ids)
            // resultsContainer.innerHTML = "";
            spinnerE1.classList.add("d-none")
        
              // resultsContainer.append(...elements);
              // spread operator expands an array 
              // into individual values.
              // always using three dots for spread operator
            })
            .catch(error => {
              console.error("Fetch error:", error);
              resultsContainer.textContent = "Failed to fetch results. Please try again later.";
              spinnerE1.classList.add("d-none");
          })
         
        
          }
        } 
        
        // else if (id === 'twoMan') {
        //   resultsContainer.classList.remove("one")
        //   resultsContainer.classList.add("myImage")
        //   resultsContainer.classList.remove("myVideo")
        //   resultsContainer.classList.remove("myNews")
        //   imageSectionE1.style.display="none"
        //   imageSectionE2.style.display="none"
        //   spinnerE1.style.display = "none";
        //   imageSection.style.display="block"
        //   // let page = 1;
        //   // let showMore = null;
        
        //   async function searchImage(isNewSearch = false) {
        //     userValue = searchInput.value;
        //     if (userValue === "") {
        //       showPopup("Start typing and hit enter to search for images !");
        //       resultsContainer.textContent = "";
        //       spinnerE1.style.display = "none";
        //       return;
        //     }
        
        //     if (isNewSearch) {
        //       page = 1; // Reset page on new search
        //       resultsContainer.innerHTML = ""; // Clear only on new search
        //       if (showMore) {
        //         showMore.remove();
        //         showMore = null;
        //       }
        //     }
        
        //     spinnerE1.style.display = "block";
        
        //     let userManE1 = document.getElementById('searchMan');
        //     let userMan = userManE1.value
        //     let url = `https://api.unsplash.com/search/photos?page=${page}&query=${userMan}&client_id=${accessKey}`;
        
        //     try {
        //       let response = await fetch(url);
        //       let data = await response.json();
        //       let results = data.results;
        //       console.log(results)
        //       if (results.length === 0 && page === 1) {
        //         // resultsContainer.innerHTML = "<p>No images found.</p>";
        //         showPopup("No images found please try a different search item.");
        //         resultsContainer.textContent = "";
        //         spinnerE1.style.display = "none";
        //         userManE1.value=""
        //         return;
        //       }
        
        //       results.forEach(result => {
        //         const searchKeyword = result.alt_description || "India monument";
                
        //         // if (!result.urls || !result.urls.small || !result.urls.regular) {
        //         //   console.warn("Skipping result with missing URLs", result);
        //         //   return;
        //         // }
        //         let twoDivContainer = document.createElement('div')
        //         twoDivContainer.classList.add("two-container")

        //         let imgBox = document.createElement('div');
        //         imgBox.classList.add("sectionA")
        //         let img = document.createElement('img');
        //         img.classList.add("image-photo")
        //         img.src = result.urls.small;
        //         // img.href="links.self"
        //         img.addEventListener("click", () => {
        //           const wikiSearch = encodeURIComponent(searchKeyword);
        //           const wikiUrl = `https://en.wikipedia.org/wiki/${wikiSearch}`;
        //           window.open(wikiUrl, '_blank'); // open in new tab
        //         });
        //         imgBox.appendChild(img);
        //         twoDivContainer.append(imgBox)
        //         resultsContainer.appendChild(twoDivContainer);
        //       });
        
        //       // Show "Show More" button only once
        //       if (!showMore) {
        //         let assumeShow = document.createElement('div')
        //         assumeShow.classList.add("assume-show")
                
        //         showMore = document.createElement('button');
        //         showMore.textContent = "View More";
        //         showMore.classList.add("showE1");
        //         showMore.style.display = "block";
        //         assumeShow.append(showMore)
        //         imageSection.append(assumeShow)
        //         console.log(imageSection)
        //         document.body.appendChild(imageSection);
        
        //           showMore.addEventListener("click", () => {
        //           page++;
        //           searchImage(false); // Load next page
        //         });
        //       }
        
        //     } catch (error) {
        //       console.error("Error fetching images:", error);
        //       showPopup("Failed to load images. Try again later.");
        //     } 
        //     finally {
        //       spinnerE1.style.display = "none";
        //     }
        //   }
        
        //   // Start first search
        //   searchImage(true);
        // }
        // else if (id === 'twoMan') {
        //   resultsContainer.classList.remove("one");
        //   resultsContainer.classList.add("myImage");
        //   resultsContainer.classList.remove("myVideo", "myNews");
        
        //   imageSectionE1.style.display = "none";
        //   imageSectionE2.style.display = "none";
        //   imageSection.style.display = "block";
        
        //   async function searchImage(isNewSearch = false) {
        //     userValue = searchInput.value;
        
        //     if (userValue === "") {
        //       showPopup("Start typing and hit enter to search for images!");
        //       resultsContainer.textContent = "";
        //       return;
        //     }
        
        //     if (isNewSearch) {
        //       page = 1;
        //       resultsContainer.innerHTML = "";
        //       if (showMore) {
        //         showMore.remove();
        //         showMore = null;
        //       }
        //     }
        
        //     spinnerE1.classList.remove("d-none");
        //     // accessKey = ""
        //     const userMan = document.getElementById('searchMan').value;
        //     const url = `https://pixabay.com/api/?page=${page}&key=${accessKey}&q=${encodeURIComponent(userMan)}&image_type=photo&pretty=true`;
            
        //     // https://api.unsplash.com/search/photos?page=${page}&query=${userMan}&client_id=${accessKey}
        //     try {
        //       const response = await fetch(url);
        //       const data = await response.json();
        //       const results = data.hits;
        //       console.log(results);
        
        //       if (results.length === 0 && page === 1) {
        //         showPopup("No images found. Please try a different search item.");
        //         resultsContainer.textContent = "";
        //         document.getElementById('searchMan').value = "";
        //         return;
        //       }
        
        //       results.forEach(result => {
        //         const searchKeyword = result.tags || "India monument";
        
        //         const twoDivContainer = document.createElement('div');
        //         twoDivContainer.classList.add("two-container");
        
        //         const imgBox = document.createElement('div');
        //         imgBox.classList.add("sectionA");
        
        //         const img = document.createElement('img');
        //         img.classList.add("image-photo");
        //         img.src = result.webformatURL;
        
        //         img.addEventListener("click", () => {
        //           const wikiSearch = encodeURIComponent(searchKeyword);
        //           const wikiUrl = `https://en.wikipedia.org/wiki/${wikiSearch}`;
        //           window.open(wikiUrl, '_blank');
        //         });
        
        //         imgBox.appendChild(img);
        //         twoDivContainer.append(imgBox);
        //         resultsContainer.appendChild(twoDivContainer);
        //       });
        
        //       if (!showMore) {
        //         const assumeShow = document.createElement('div');
        //         assumeShow.classList.add("assume-show");
        
        //         showMore = document.createElement('button');
        //         showMore.textContent = "View More";
        //         showMore.classList.add("showE1");
        //         showMore.style.display = "block";
        
        //         assumeShow.append(showMore);
        //         imageSection.append(assumeShow);
        //         document.body.appendChild(imageSection);
        
        //         showMore.addEventListener("click", () => {
        //           page++;
        //           searchImage(false);
        //         });
        //       }
        
        //     } catch (error) {
        //       console.error("Error fetching images:", error);
        //       showPopup("Failed to load images. Try again later.");
        //     } finally {
        //       spinnerE1.classList.add("d-none");
        //     }
        //   }
        
        //   searchImage(true);
        // }
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
        
          // 🔁 Call initially
          searchImage(true);
        
          // ⌨️ Trigger search when Enter is pressed
          searchInputMan.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
              e.preventDefault();
              searchImage(true);
            }
          });
        }
        
        
        else if(id === 'thirdMan') {
          
          resultsContainer.classList.add("one")
          resultsContainer.classList.remove("myImage")
          resultsContainer.classList.add("myVideo")
          resultsContainer.classList.remove("myNews")
          imageSectionE1.style.display="block"
          imageSectionE2.style.display="none"
          imageSection.style.display="none"
          imageSectionE1.innerHTML=""
        
          let focus = document.getElementById('coolAnoop')
          focus.innerHTML=""
          resultsContainer.textContent = "";
          
          const apiKey = "AIzaSyBGP9U1AyGAXrFtBDSPqJfdAf0h1MgohZ4";
          let nextPageToken = '';
          let currentQuery = '';
      
          function startSearch() {
            // const query = document.getElementById("searchInput").value.trim();
            userValue = searchInput.value;
            const query = userValue;

            // if (!query) return alert("Please enter a search term");
            if(userValue===""){
              showPopup("Start typing and hit Enter to search Wikipedia.")
              resultsContainer.textContent=""
              // spinnerE1.classList.toggle("d-none")
              spinnerE1.classList.add("d-none");
            }
            else{
            currentQuery = query;
            nextPageToken = ''; // reset token
            // document.getElementById("result").innerHTML = "Loading...";
            searchVideo(query, true);
            // if (isNewSearch) {
            //   page = 1; // Reset page on new search
            //   resultsContainer.innerHTML = ""; // Clear only on new search
            //   if (showMore) {
            //     showMore.remove();
            //     showMore = null;
            //   }
            // }
          }
      
          function loadMore() {
            searchVideo(currentQuery, false);
          }
      
          function searchVideo(query, isNewSearch = false) {
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
                spinnerE1.classList.add("d-none")
                const results = data.items;
                nextPageToken = data.nextPageToken || '';
                // const showMoreBtn = document.getElementById("showMoreBtn");
                if (isNewSearch) {
                  page = 1; // Reset page on new search
                  resultsContainer.innerHTML = ""; // Clear only on new search
                  if (showMore) {
                    showMore.remove();
                    showMore = null;
                  }
                }
                if (results.length) {
                  let html = '';
                  results.forEach(video => {
                    const videoId = video.id.videoId;
                    const title = video.snippet.title;
                    const description = video.snippet.description;
                    const url = `https://www.youtube.com/watch?v=${videoId}`;
      
                    html += `
                      <div class="video-card">
                      
                        <div class ="frame11">
                        <iframe src="https://www.youtube.com/embed/${videoId}" width="175px" height ="100px" class = "more"></iframe>
                       
                        <a href="${url}" target="_blank" class="titleE1" id="linkMan">${title}</a>
                        </div>
                       <hr />
                        <p class = "para11">${description}</p>
                      </div>
                    `;
                //     let twoDivContainer = document.createElement('div')
                // twoDivContainer.classList.add("two-container")

                // let imgBox = document.createElement('div');
                // imgBox.classList.add("sectionA")
                // let img = document.createElement('img');
                // img.classList.add("image-photo")
                // img.src = result.urls.small;
                // // img.href="links.self"
                // img.addEventListener("click", () => {
                //   const wikiSearch = encodeURIComponent(searchKeyword);
                //   const wikiUrl = `https://en.wikipedia.org/wiki/${wikiSearch}`;
                //   window.open(wikiUrl, '_blank'); // open in new tab
                // });
                // imgBox.appendChild(img);
                // twoDivContainer.append(imgBox)
                // resultsContainer.appendChild(twoDivContainer);
                  });
      
                  if (isNewSearch) {
                    resultsContainer.innerHTML = html;
                  } else {
                   resultsContainer.insertAdjacentHTML('beforeend', html);
                  }
                  if (!showMore) {
                    let assumeShow = document.createElement('div')
                    assumeShow.classList.add("assume-show")
                    
                    showMore = document.createElement('button');
                    showMore.textContent = "View More";
                    showMore.classList.add("showE1");
                    showMore.style.display = "block";
                    assumeShow.append(showMore)
                    imageSectionE1.append(assumeShow)
                    // console.log(imageSection)
                    document.body.appendChild(imageSectionE1);
            
                      showMore.addEventListener("click", () => {
                      page++;
                      loadMore() // Load next page
                    });
                  }
      
                  // showMoreBtn.style.display = nextPageToken ? 'inline-block' : 'none';
                } else {
                  resultsContainer.innerHTML = "No results found.";
                  showMore.style.display = 'none';
                }
              })
              .catch(err => {
                console.error("Error:", err);
                resultsContainer.innerHTML = "Error fetching video.";
                spinnerE1.classList.add("d-none");
              });
          }
        }
        startSearch()

        }
 
        else if (id === 'fourMan') {
          resultsContainer.classList.add("one");
          resultsContainer.classList.remove("myImage", "myVideo");
          resultsContainer.classList.add("myNews");
        
          imageSectionE2.style.display = "block";
          imageSectionE1.style.display = "none";
          imageSection.style.display = "none";
          resultsContainer.textContent = "";

          let focus = document.getElementById('coolAnoop')
          focus.innerHTML=""
          imageSectionE2.innerHTML=""
          
          const apiKey = "6cc312c3402b069ac9089bf8b859ad8e";
          let nextPageToken = '';
          let currentQuery = '';
        
          function startSearch() {
            userValue = searchInput.value;
            const query = userValue;
        
            if (userValue === "") {
              showPopup("Start typing and hit enter to search for news!");
              resultsContainer.textContent = "";
              spinnerE1.classList.add("d-none"); 
              return;
            }
        
            currentQuery = query;
            nextPageToken = '';
            searchVideo(query, true); 
          }
        
          function loadMore() {
            searchVideo(currentQuery, false); 
          }
        
          function searchVideo(query, isNewSearch = false) {
            const url = new URL(`https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&token=${apiKey}&lang=en`);
            if (nextPageToken) url.searchParams.set('pageToken', nextPageToken);
        
            spinnerE1.classList.remove("d-none"); 
        
            fetch(url.toString())
              .then(res => res.json())
              .then(data => {
                const results = data.articles;
                console.log(results)
                nextPageToken = data.nextPageToken || '';
        
                if (isNewSearch) {
                  page = 1;
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
                    const description = article.description;
                    const urlE1 = article.url;
                    const imageHi = article.image;
                    
                    html += `
                      <div class="news-card">
                        <div class="news-frame">
                        <div class = "hidden">
                          <img src="${imageHi}" class="news-img" alt="No Image"
                          onerror="this.onerror=null; this.src='image.jpg'; this.classList.add('fallback');"/>
                          </div>
                          <a href="${urlE1}" target="_blank" class="news-titleE1">${title}</a>
                        </div>
                        <hr />
                        <p class="news-para11">${description}</p>
                        <div class="buttonE1">
                        <a href="${urlE1}" target="_blank">
                        <button class = "b1">Read more</button>
                        </a>
                        </div>
                      </div>
                    `;
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
                      // page++;
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
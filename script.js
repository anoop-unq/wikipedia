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

let mainDiv = document.createElement('div')
mainDiv.classList.add("search-class")

let searchInput = document.createElement('input')
searchInput.id="searchMan"
searchInput.classList.add("search-input-class")
searchInput.type="search"
searchInput.placeholder="Enter to search ?"
mainDiv.append(searchInput)
document.body.append(mainDiv)

let man = document.getElementById('searchMan')

let spinnerE1 = document.getElementById('spinner');
spinnerE1.classList.add("spinner")
document.body.append(spinnerE1)

let resultsContainer = document.createElement("div");
resultsContainer.id = "results";
resultsContainer.classList.add("display-items")
document.body.append(resultsContainer);


function searv(event){
  if(event.key === "Enter"){
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

    function showPopup(message) {
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
      popupE1.innerHTML = `<p class = "para">${message}</p>
      <button id = "pop-up-message" onclick="location.reload()">Re-Enter</button>`;
      let imageEl1 = document.createElement('div')
      imageEl1.classList.add("imageE11")
  
      let imageInsideE1 = document.createElement('img')
      imageInsideE1.classList.add("image-insideE1")
      imageInsideE1.src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
  
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

    let url = "https://apis.ccbp.in/wiki-search?search=" + man;
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
        
        // resultsContainer.textContent = "No results found. Please try a different search term.";
        showPopupE1("No results found. Please try a different search term.")
        return;
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
    // return mainOne
   });
      // return user.title;
      // console.log(ids)
    // resultsContainer.innerHTML = "";
    spinnerE1.classList.toggle("d-none")

      // resultsContainer.append(...elements);
      // spread operator expands an array 
      // into individual values.
      // always using three dots for spread operator
    })
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
window.onload = function() {
  loadStartEvents();

  function loadStartEvents() {
    const howItWorksBtn = document.querySelector("#how-it-works-btn");
    const deleteAllBtn = document.querySelector("#deleteAll");
    const createFirstSticky = document.querySelector("#createStickyBtn"); //for first empty existing sticky only

    document.onmouseup = hideDropMenu; //hides color menus when clicked anywhere in the page
    howItWorksBtn.onclick = toggleHowItWorks; //toggles how it works menu
    deleteAllBtn.onclick = deleteAllStickies; //deletes all stickies from dom and storage
    createFirstSticky.onclick = createId; //creates the first sticky, and hides the initial add button

    let isStorageEmpty = getStoredStickies(createFirstSticky); //retrieves data from local storage, and recreates stored stikies
  }

  function hideDropMenu(e) {
    //hides color menus when clicked anywhere in the page
    let stickies = Array.from(document.querySelectorAll(".sticky"));
    let stickiesIdArray = stickies.map(el => el.id).filter(el => el); //get array of all sticky ids, if they exist

    for (let i = 0; i < stickiesIdArray.length; i++) {
      let dropContent = document.querySelector(
        `#${stickiesIdArray[i]} .dropdown-content-hide`
      );
      let dropButton = document.querySelector(
        `#${stickiesIdArray[i]} .drop-button`
      );
      if (dropContent != e.target.parentNode && dropButton != e.target) {
        dropContent.style.display = "none";
      }
    }
  }

  function toggleHowItWorks() {
    //toggles how it works menu
    let howItWorksDiv = document.querySelector("#how-it-works");
    howItWorksDiv.style.display != "block"
      ? (howItWorksDiv.style.display = "block")
      : (howItWorksDiv.style.display = "none");
  }

  function deleteAllStickies() {
    //deletes all stickies from dom and storage
    localStorage.clear(); //clear all from storage
    let parent = document.querySelector("#main");
    while (parent.children.length > 2) {
      //while parent still has 2 children(sticky template+initial create button)
      parent.removeChild(parent.lastChild); //remove all children from the end
    }
    document.querySelector("#createStickyBtn").style.display = "block"; //and show initial create button
  }

  function getStoredStickies(createFirstSticky) {
    //retrieves data from local storage, and recreates stored stikies
    let stickiesArray = getStickiesArray(); //get the stickiesArray from storage, which contains all the keys used by the program

    if (stickiesArray.length > 0) {
      //if there were items in storage, hide the inital create button
      createFirstSticky.style.display = "none";
    } else {
      createFirstSticky.style.display = "block";
    }

    for (let i = 0; i < stickiesArray.length; i++) {
      //using the keys stored in the array, get all the stored sticky objects
      let key = stickiesArray[i];
      let stickyObject = JSON.parse(localStorage[key]);
      addStoredStickiesToDom(stickyObject, key); //call func that handles the creation of elements for the stored objects
    }
  }

  function getStickiesArray() {
    "use strict";
    let stickiesArray = localStorage.getItem("stickiesArray");

    if (!stickiesArray) {
      //if no item in storage yet, returns null
      stickiesArray = []; //so i create an new empty array
      localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray)); //and I store a new key stickiesArray that has as value a JSON string array copy of stickiesArray
    } else {
      stickiesArray = JSON.parse(stickiesArray); //else we found an array of keys, and we parse it to get an actual array
    }
    return stickiesArray; //which we return to the calling stack
  }

  function addStoredStickiesToDom(stickyObject, key) {
    // handles the creation of elements for the stored objects
    let stickyClone = setIdToStoredObjects(key); //asks for dom sticky to be created and sets their key as id
    Array.from(stickyClone.children).filter(
      el => el.className == "sticky-content"
    )[0].value =
      stickyObject.value; //adds stored value to new element
    stickyClone.style.backgroundImage = stickyObject.color; //adds stored color to new element
  }

  function setIdToStoredObjects(key) {
    //asks for dom sticky to be created and sets their key as id
    let stickyClone = createSticky(); //create actual dom sticky
    if (key) {
      stickyClone.setAttribute("id", key); //for all the already stored items, set ID=stored key. else no id new sticky is created
    }
    return stickyClone; //returns created element to calling stack
  }

  function createSticky() {
    let parent = document.querySelector("#main");
    let sticky = document.querySelector(".sticky");
    let stickyClone = sticky.cloneNode(true); //creates a clone from sticky div template
    parent.appendChild(stickyClone);
    stickyClone.style.display = "block";

    let newAddBtn = Array.from(
      Array.from(stickyClone.children).filter(
        el => el.className == "sticky-header"
      )[0].children
    ).filter(el => el.classList.contains("add-button"))[0];
    newAddBtn.onclick = createId; //adds createID handler to new dom sticky

    let removeBtn = Array.from(
      Array.from(stickyClone.children).filter(
        el => el.className == "sticky-header"
      )[0].children
    ).filter(el => el.classList.contains("remove-button"))[0];
    removeBtn.onclick = deleteSticky; //adds delete sticky handler to new dom sticky

    let dropBtn = Array.from(
      Array.from(stickyClone.children).filter(
        el => el.className == "sticky-header"
      )[0].children
    ).filter(el => el.classList.contains("drop-button"))[0];
    dropBtn.onclick = toggleDropMenuClick; //adds color dropdown toggle handler to new dom sticky

    let dropMenus = Array.from(
      document.querySelectorAll(".dropdown-content-hide")
    );
    for (let dropMenu of dropMenus) {
      dropMenu.onclick = changeColor; //adds changeColor handler to color dropdown menu
    }

    let stickyCloneContent = Array.from(stickyClone.children).filter(
      el => el.className == "sticky-content"
    )[0];
    stickyCloneContent.value = ""; //new clone has no text on creation

    stickyCloneContent.onchange = storeSticky; //when sticky text is changed, save content to storage
    stickyCloneContent.oninput = notSavedNotification; //when new text is being writtern, show not saved notification

    return stickyClone;
  }

  function createId(e) {
    //creates unique IDs for dom sticky
    if (e.target.id == "createStickyBtn") {
      //if triggered by first button, then hide that button
      e.target.style.display = "none";
    }

    let currentDate = new Date();
    let key = "sticky_" + currentDate.getTime();

    let stickyClone = createSticky();
    stickyClone.setAttribute("id", key);
  }

  function deleteSticky(e) {
    const createFirstSticky = document.querySelector("#createStickyBtn");
    const main = document.querySelector("#main");
    let key = e.target.parentNode.parentNode.id; //using sticky id as key for storage removal

    localStorage.removeItem(key); //remove key from storage

    let stickiesArray = getStickiesArray(); //remove key from stikie array
    if (stickiesArray) {
      for (let i = 0; i < stickiesArray.length; i++) {
        if (key == stickiesArray[i]) {
          stickiesArray.splice(i, 1);
        }
      }
      localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
    }

    removeStickyFromDOM(key); //remove sticky from dom

    if (stickiesArray.length > 0 || main.children.length > 2) {
      //show createFirst button
      createFirstSticky.style.display = "none";
    } else {
      createFirstSticky.style.display = "block";
    }
  }

  function removeStickyFromDOM(key) {
    var sticky = document.getElementById(key);
    sticky.parentNode.removeChild(sticky);
  }

  function toggleDropMenuClick(e) {
    //toggle color menu on click
    let parentId = e.target.parentNode.parentNode.id;
    let stickyContent = document.querySelector(`#${parentId} .sticky-content`);
    let dropMenu = document.querySelector(
      `#${parentId} .dropdown-content-hide`
    );
    dropMenu.style.display != "flex"
      ? (dropMenu.style.display = "flex")
      : (dropMenu.style.display = "none");
  }

  function changeColor(e) {
    let colorBtn = e.target;
    let sticky = e.target.parentNode.parentNode.parentNode;
    let key = sticky.id;
    let newColor = getComputedStyle(colorBtn).backgroundImage;
    let stickyObject = JSON.parse(localStorage.getItem(key));

    sticky.style.backgroundImage = newColor;
    if (stickyObject) {
      stickyObject.color = newColor;
      localStorage.setItem(key, JSON.stringify(stickyObject));
    }
  }

  function storeSticky(e) {
    let stickiesArray = getStickiesArray(); //get array of keys from storage, and add new keys to it
    let sticky = e.target.parentNode;

    let key = sticky.id; //for all items, set as key their ID
    let stickyContent = e.target.value;

    let oldColor = getComputedStyle(sticky).backgroundImage;
    let stickyObject = {
      value: stickyContent,
      color: oldColor
    };

    localStorage.setItem(key, JSON.stringify(stickyObject)); //store textarea value+color in localstorage

    if (!stickiesArray.includes(key)) {
      stickiesArray.push(key); //and save this key/id to the stickie array, if it doesn't already exist
      localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray)); //store the new array key items int he stickiesarray
    }

    let notSaved = document.querySelector(`#${key} .notSaved`);
    notSaved.style.display = "inline-block";
    notSaved.style.color = "black";
    notSaved.title = "saved";
  }

  function notSavedNotification(e) {
    let stickyId = e.target.parentNode.id;
    let notSaved = document.querySelector(`#${stickyId} .notSaved`);
    notSaved.style.display = "inline-block";
    notSaved.style.color = "red";
    notSaved.title = "not saved";
  }
};
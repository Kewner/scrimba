const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');
const ulEl = document.getElementById('ul-el');
let myLeads = JSON.parse(localStorage.getItem('myLeads'));
myLeads ? render(myLeads) : myLeads = [];

// [{url: "https://www.linkedin.com/in/per-harald-borgen/"}]

tabBtn.addEventListener('click', function() {
  // chrome object, tabs key with obj value, which has a query method
  // - arg1: an object that describes which of the tabs we want
  // - arg2: function to be called when chrome has found the tab we've told
  //         it to look for, which it stored in the tabs variable

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log(tabs);

    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);    
  });
});

function render(leads) {
  let listItems = '';

  for (let i = 0; i < leads.length; i++) {
    listItems += 
      `<li>
        <a href="${leads[i]}" target="_blank">${leads[i]}</a>
      </li>`;
  }

  ulEl.innerHTML = listItems;  
}

inputBtn.addEventListener('click', function() {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  // save stringified myLeads array to localStorage, with key 'myLeads'
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  render(myLeads);
});

deleteBtn.addEventListener('dblclick', function() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
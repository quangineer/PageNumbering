// var totalContacts = document.getElementById('totalContacts');
// totalContacts.innerHTML = users.length;

total = document.getElementById('totalContacts');
total.textContent += users.length;
const contactList = document.getElementsByClassName("contact-list")[0];

// console.log(contactList);

//create function to call every 10 names
function callEveryTen(pageIndex) {
  contactList.innerHTML = "";
  maxUserIndex=Math.min(users.length,(pageIndex + 1) * 10)
  minUserIndex=pageIndex * 10; 
  for (i = minUserIndex; i < maxUserIndex; i++) {
    // console.log(users[i]);
    contactList.innerHTML +=
      `       
    <li class="contact-item cf">
        <div class="contact-details">
            <img class="avatar" src="` +
      users[i].image +
      `">
            <h3>` +
      users[i].name +
      `</h3>
            <span class="email">iboya.vat@example.com</span>
        </div>
        <div class="joined-details">
           <span class="date">Joined ` +
      users[i].joined +
      `</span>
        </div>
    </li> `;
  }
}

//pageIndex = 0
callEveryTen(0);


const pagination = document.getElementsByClassName("pagination")[0];

pagination.onclick = function (event) {
  var target = event.target; //call a
  // console.log(event.target.parentElement);

  var lis = pagination.getElementsByTagName("li"); //call all li(s)
  console.log(lis);

  for (i = 0; i < lis.length; i++) 
    {
    console.log(lis[i]); 
    lis[i].children[0].classList.remove("active");  //remove all active+nonactive li(s)
    }

  target.classList.add("active"); //add the only li active(clicked)
  console.log(target.innerHTML); // lấy số thứ tự ra vì event.target là 1 object
  callEveryTen(target.innerHTML-1);
};

var pageNumber = Math.ceil(users.length / 10);
// console.log(pageNumber);

//create number of <li>

for (i = 1; i < pageNumber + 1; i++) {
  if (i == 1) {
    pagination.innerHTML += `<li><a class="active">` + i + `</a></li>`;
  } else {
    pagination.innerHTML += `<li><a>` + i + `</a></li>`;
  }
}

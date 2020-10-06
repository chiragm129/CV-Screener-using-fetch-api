console.log("this is project 5");

// data ia an Array of Object which contain info about the candidate 

const data = [
    {
        name: "Rohan Das",
        age: 18,
        city: "Mumbai",
        langugae: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/77.jpg"
    },

    {
        name: "Shubham Sharma",
        age: 28,
        city: "Banglore",
        langugae: "JavaScript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
        name: "Ashwarya",
        age: 25,
        city: "Pune",
        langugae: "Dart",
        framework: "Flutter",
        image: "https://randomuser.me/api/portraits/women/77.jpg"
    },
    {
        name: "Shruti",
        age: 22,
        city: "Indore",
        langugae: "Java",
        framework: "Spring",
        image: "https://randomuser.me/api/portraits/women/76.jpg"
    },

    {
        name: "Shubham",
        age: 29,
        city: "Mumbai",
        langugae: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/men/78.jpg"
    },
]

// CV iterators 
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?  // ? means like if  (:meams verna)
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}
const candidates = cvIterator(data);

nextCV();

// button listner for next button 
const next = document.getElementById("next");
next.addEventListener("click", nextCV);



function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.langugae}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}




// meas window reload ho jayegi aur fr start proile se start hogi
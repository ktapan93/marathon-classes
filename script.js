const citiesByState = {
  "Andhra Pradesh": ["Anantapur", "Nellore", "Kadapa", "Vijayawada", "Visakhapatnam", "Tirupati", "Guntur", "GVMC", "Rajahmundry", "Kurnool"],
  "Assam": ["Dibrugarh"],
  "Bihar": ["Patna", "Muzaffarpur", "Purnia", "Bhagalpur", "Gaya", "Darbhanga"],
  "Chhattisgarh": ["Raipur", "Bilaspur", "Durg"],
  "Delhi": ["New Delhi"],
  "Gujarat": ["Ahmedabad", "Surat", "Rajkot", "Vapi", "Vadodara"],
  "Haryana": ["Karnal", "Ambala", "Gurgaon", "Faridabad", "Sonipat", "Hisar", "Jagadhiri", "Sirsa", "Chandigarh", "Panchkula"],
  "Himachal Pradesh": ["Shimla"],
  "Jharkhand": ["Jamshedpur", "Dhanbad", "Bokaro Steel City", "Ranchi"],
  "Karnataka": ["Bengaluru", "Gulbarga", "Hassan", "Belagavi", "Hubli-Dharwad", "Mangalore", "Davanagere", "Bijapur", "Mysore", "Shivamogga"],
  "Kerala": ["Kochi", "Kozhikode", "Palakkad", "Kollam", "Kottayam", "Thrissur", "Thiruvananthapuram", "Kannur", "Malappuram"],
  "Madhya Pradesh": ["Jabalpur", "Indore", "Bhopal", "Ujjain", "Gwalior", "Rewa", "Sagar"],
  "Maharashtra": ["Mumbai", "Solapur", "Nanded", "Pune", "Thane", "Nashik", "Mumbai Suburban", "Dhule", "Amravati", "Navi Mumbai", "Nagpur", "Aurangabad", "Latur", "Akola", "Ahmednagar"],
  "Odisha": ["Bhubaneswar", "Cuttack"],
  "Punjab": ["Ludhiana", "Kharar", "Jalandhar", "Bathinda", "Sahibzada Ajit Singh Nagar, Mohali", "Sahibzada Ajit Singh Nagar", "Amritsar"],
  "Rajasthan": ["Jodhpur", "Bikaner", "Jaipur", "Bhilwara", "Ganganagar", "Ajmer", "Udaipur", "Bharatpur", "Sikar"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Tiruchirappalli", "Salem", "Krishnagiri", "Vellore", "Erode"],
  "Telangana": ["Karimnagar", "Hyderabad", "Khammam"],
  "Uttar Pradesh": ["Ghaziabad", "Lucknow", "Faizabad", "Kanpur", "Jhansi", "Saharanpur", "Gautam Buddha Nagar", "Noida", "Meerut", "Bareilly", "Agra", "Mathura", "Allahabad", "Aligarh"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee"],
  "West Bengal": ["Siliguri", "Asansol", "Barddhaman", "Kolkata", "Kharagpur"]
};

const centresByCity = {
  "Agra": ["Agra-Sadar Bazar", "Agra-Kargil"],
  "Ahmedabad": ["Ahmedabad-Maninagar", "Ahmedabad-New CG Road", "Ahmedabad-SG Highway", "Ahmedabad-Bopal", "Ahmedabad-Bapu Nagar", "Ahmedabad-Memnagar", "Ahmedabad-Nikol Centre", "Ahmedabad-Paldi"],
  "Ahmednagar": ["Ahmednagar-Burudgaon Road", "Ahmednagar-Pipeline Road"],
  "Ajmer": ["Ajmer-Vaishali Nagar"],
  "Akola": ["Akola-Nehru Park"],
  "Aligarh": ["Aligarh-Ramghat Road"],
  "Allahabad": ["Allahabad-Civil Lines"],
  "Ambala": ["Ambala-Sadar Bazaar"],
  "Amravati": ["Amravati-Rukmini Nagar"],
  "Amritsar": ["Amritsar-Ranjit Avenue"],
  "Anantapur": ["Anantapur-Sangameswara Circle"],
  "Asansol": ["Asansol- Murgasol"],
  "Aurangabad": ["Aurangabad-CIDCO Colony"],
  "Barddhaman": ["Bardhaman-Birhata"],
  "Bareilly": ["Bareilly-Prem Nagar"],
  "Bathinda": ["Bathinda-Civil Lines"],
  "Belagavi": ["Belagavi-Nehru Nagar"],
  "Bengaluru": ["Bengaluru-Yelahanka", "Bengaluru-Mission Road", "Bengaluru-JP Nagar", "Bengaluru-Kalyan Nagar", "Bengaluru-Sadashiva Nagar", "Bengaluru-KR Puram", "Bengaluru-Electronic City", "Bengaluru-Nagavara", "Bengaluru-Vijaya Nagar", "Bengaluru-HSR", "Bengaluru-White Field", "Bengaluru-KSIT Junction", "Bengaluru-Mahalakshmi Layout", "Bengaluru-Rajarajeshwari nagar"],
  "Bhagalpur": ["Bhagalpur-Bhikhanpur"],
  "Bharatpur": ["Bharatpur-Krishna Nagar"],
  "Bhilwara": ["Bhilwara-Gandhi Nagar"],
  "Bhopal": ["Bhopal-Arera Colony", "Bhopal-Lal Ghati", "Bhopal-Jahangirabad"],
  "Bhubaneswar": ["Bhubaneswar-Saheed Nagar", "Bhubaneswar-Patrapada", "Bhubaneswar-Chandrashekharpur"],
  "Bijapur": ["Vijayapura-SS Front Road"],
  "Bikaner": ["Bikaner-Khaturia Colony"],
  "Bilaspur": ["Bilaspur-Link Road"],
  "Bokaro Steel City": ["Bokaro-Sector 4"],
  "Chandigarh": ["Chandigarh-Sector 34A"],
  "Chennai": ["Chennai-Egmore", "Chennai-Selaiyur", "Chennai-Adyar", "Chennai- Purasawalkam", "Chennai-Vadapalani", "Chennai- Alwarpet", "Chennai-Porur", "Chennai-Sholinganallur", "Chennai-Velachery", "Chennai-Avadi", "Chennai-Anna Nagar", "Chennai Ambattur"],
  "Coimbatore": ["Coimbator-Avinashi Road", "Coimbatore - RS Puram", "Coimbatore-Kuniamuthur"],
  "Cuttack": ["Cuttack-Mission Road"],
  "Darbhanga": ["Darbhanga-Mirzapur Chowk"],
  "Davanagere": ["Davanagere-Ram & CO Circle"],
  "Dehradun": ["Dehradun-Clock Tower", "Dehradun-Majra"],
  "Dhanbad": ["Dhanbad - Steel Gate", "Dhanbad-Bank More"],
  "Dhule": ["Dhule-Mundada Market"],
  "Dibrugarh": ["Dibrugarh-Khalihamari"],
  "Durg": ["Bhilai-Risali"],
  "Erode": ["Erode-Collectorate"],
  "Faizabad": ["Faizabad-Civil Lines"],
  "Faridabad": ["Faridabad-Sector 16", "Faridabad-Railway Road NIT"],
  "GVMC": ["Visakhapatnam-Dwaraka Nagar"],
  "Ganganagar": ["Sri Ganganagar-Sukhadia Circle"],
  "Gautam Buddha Nagar": ["Noida-Sector-136", "Greater Noida-Alpha 1"],
  "Gaya": ["Gaya-AP Colony"],
  "Ghaziabad": ["Ghaziabad-Raj Nagar Extension", "Ghaziabad-Kaushambi", "Ghaziabad-Nehru nagar"],
  "Gulbarga": ["Gulbarga-Timmapuri Circle"],
  "Guntur": ["Guntur-Arundelpet"],
  "Gurgaon": ["Gurgaon-South City 2", "Gurgaon-Sector 66", "Gurgaon-Old DLF"],
  "Gwalior": ["Gwalior-City Centre", "Gwalior-Nai Sadak"],
  "Haridwar": ["Haridwar-Ranipur More Centre"],
  "Hassan": ["Hassan-Krishnaraja Pura"],
  "Hisar": ["Hisar-Camp Chowk"],
  "Hubli-Dharwad": ["Hubli-Jayanagar", "Dharwad-Court Circle"],
  "Hyderabad": ["Hyderabad-SF Green Park", "Hyderabad-Sainikpuri", "Hyderabad-Attapur", "Hyderabad-Miyapur", "Hyderabad-Paradise", "Hyderabad-Trimulgherry", "Hyderabad-Lanco Hills", "Hyderabad-Kukatpally", "Hyderabad-Banjara Hills", "Hyderabad-Chandanagar", "Hyderabad-LB Nagar", "Hyderabad-Narayanaguda"],
  "Indore": ["Indore-Tower Square Centre", "Indore-Vijay Nagar", "Indore-Bengali Square", "Indore-Marimata Square", "Indore-Rajendra Nagar", "Indore-Sudama Nagar Centre"],
  "Jabalpur": ["Jabalpur-Gupteshwar", "Jabalpur-Garha Road", "Jabalpur-Ranjhi"],
  "Jagadhiri": ["Yamuna Nagar-Model Town"],
  "Jaipur": ["Jaipur-Raja Park", "Jaipur-Pratap Nagar", "Jaipur-Vaishali Nagar", "Jaipur-Gopalpura Bypass", "Jaipur-Vidhyadhar Nagar"],
  "Jalandhar": ["Jalandhar-Jawahar Nagar"],
  "Jamshedpur": ["Jamshedpur-Mango", "Jamshedpur-Bistupur"],
  "Jhansi": ["Jhansi-Civil Lines"],
  "Jodhpur": ["Jodhpur-Saraswati Nagar", "Jodhpur-5th Avenue PWD Colony"],
  "Kadapa": ["Kadapa-Maruti Nagar"],
  "Kannur": ["Kannur-Thavakkara"],
  "Kanpur": ["Kanpur-Kidwai Nagar", "Kanpur-SwaroopNagar", "Kanpur-Pandu Nagar"],
  "Karimnagar": ["Karimnagar-Mukarampura"],
  "Karnal": ["Karnal-Mall Road"],
  "Khammam": ["Khammam-Bank Colony"],
  "Kharagpur": ["Kharagpur-CT Road"],
  "Kharar": ["Kharar-Sector 125"],
  "Kochi": ["Kochi-Kadavantra", "Kochi-Pathadipalam"],
  "Kolkata": ["Kolkata-Salt Lake", "Kolkata-Park Street", "Barrackpore-Ghoshpara Road", "Kolkata-Dalhousie", "Kolkata-Newtown", "Kolkata-Rabindra Sarobar", "Kolkata-Behala"],
  "Kollam": ["Kollam-Kadapakkada"],
  "Kottayam": ["Kottayam-T B Road"],
  "Kozhikode": ["Kozhikode-Chevayur", "Kozhikode - YMCA"],
  "Krishnagiri": ["Hosur-GH Road"],
  "Kurnool": ["Kurnool-Gandhi Nagar"],
  "Latur": ["Latur-Khardekar Stop"],
  "Lucknow": ["Lucknow-Shushant Golf City", "Lucknow-Aliganj", "Lucknow-Madiyaon", "Lucknow-Hazrat Ganj", "Lucknow-Gomati Nagar", "Lucknow-Ashiyana", "Lucknow-Alambagh"],
  "Ludhiana": ["Ludhiana-Ghumar Mandi", "Ludhiana-Sector 32-A", "Ludhiana-Dugri Phase1", "Ludhiana-Sunder Nagar"],
  "Malappuram": ["Malappuram-Perinthalmanna"],
  "Mangalore": ["Mangaluru-Urwa"],
  "Mathura": ["Mathura-Bhuteshwar Road"],
  "Meerut": ["Meerut-Jagriti Vihar"],
  "Mumbai": ["Mumbai-Andheri West", "Mumbai-Goregaon", "Mumbai-Khar", "Mumbai-Kandivali", "Mumbai-Dahisar East", "Mumbai-Mulund", "Navi Mumbai-Koper Khairane"],
  "Mumbai Suburban": ["Mumbai-Virar"],
  "Muzaffarpur": ["Muzaffarpur-Saraiya Ganj"],
  "Mysore": ["Mysore-Hardinge Circle"],
  "Nagpur": ["Nagpur-Kasturchand Park", "Nagpur-Mhalgi Nagar"],
  "Nanded": ["Nanded-Vazirabad", "Nanded-Shree Nagar"],
  "Nashik": ["Nashik-Indira Nagar", "Nashik-Mogal Arcade", "Nashik-ABB Circle"],
  "Navi Mumbai": ["Navi Mumbai-Panvel", "NaviMumbai-Nerul"],
  "Nellore": ["Nellore-Annamayya"],
  "New Delhi": ["Delhi- Palam-Dabri Road", "Delhi-Dilshad Garden", "New Delhi-Gujrawala Town", "Delhi-Rohini Sector 11", "Delhi-Defence Colony", "Delhi-Najafgarh", "Delhi-Janakpuri", "Delhi- Vasant Kunj", "Delhi-Karol Bagh", "Delhi-Mundka", "Delhi-Preet vihar", "Delhi-Rajouri Garden", "Delhi-Pitampura"],
  "Noida": ["Noida-Sector 18", "Noida-Sector 59"],
  "Palakkad": ["Palakkad - Sultanpet"],
  "Panchkula": ["Panchkula-Sector 11"],
  "Patna": ["Patna-Anishabad", "Patna-Sampatchak", "Patna-RPS More", "Patna-Phulwari Sharif", "Patna-Saristabad", "Patna-Boaring Road"],
  "Pune": ["Pune-Hadapsar", "Pune-Katraj", "Pune-Viman Nagar", "Pune-Kondhwa", "Pune-Charholi Phata Alandi", "Pune-Baner", "Pune-Pimple Saudagar"],
  "Purnia": ["Purnia-Navratan Hatta"],
  "Raipur": ["Raipur-Dangania", "Raipur-Shankar Nagar"],
  "Rajahmundry": ["Rajahmundry-Kotagummam"],
  "Rajkot": ["Jamnagar-Aerodrome road"],
  "Ranchi": ["Ranchi-Harmu Road"],
  "Rewa": ["Rewa-College Square"],
  "Roorkee": ["Roorkee-Civil Lines"],
  "Sagar": ["Sagar-Ashok Vihar"],
  "Saharanpur": ["Saharanpur-ITI"],
  "Sahibzada Ajit Singh Nagar": ["Punjab-Zirakpur"],
  "Sahibzada Ajit Singh Nagar, Mohali": ["Mohali-Phase IX"],
  "Salem": ["Salem-Nethimed", "Salem-Fairlands"],
  "Shimla": ["Shimla-Knollswood"],
  "Shivamogga": ["Shivamoga-Vinoba Nagara"],
  "Sikar": ["Sikar-Piprali Road"],
  "Siliguri": ["Siliguri-Sevoke Road"],
  "Sirsa": ["Sirsa-Ambedkar Chowk"],
  "Solapur": ["Solapur-Dufferin Chowk"],
  "Sonipat": ["Sonipat-Model Town"],
  "Surat": ["Surat-Pal", "Surat-Katargam", "Surat-Varachha"],
  "Thane": ["Thane-Kasarvadavli", "Thane-Naupada"],
  "Thiruvananthapuram": ["Trivandrum-KEK Towers Vazuthacaud"],
  "Thrissur": ["Thrissur-Aswani Junction"],
  "Tiruchirappalli": ["Tiruchirapalli-Thillai Nagar", "Tiruchirapalli-National College"],
  "Tirupati": ["Tirupati-Annarao Circle"],
  "Udaipur": ["Udaipur-Bhopalpura"],
  "Ujjain": ["Ujjain-Tower Square"],
  "Vadodara": ["Vadodara-Fatehganj"],
  "Vapi": ["Vapi-Chala"],
  "Vellore": ["Vellore-CMC"],
  "Vijayawada": ["Vijayawada-Eluru Road", "Vijayawada-Benz Circle"],
  "Visakhapatnam": ["Visakhapatnam-Chinamushidiwada", "Visakhapatnam-Madhurawada"]
};

const timeSlots = {
  "6": "Maths Class (12 - 3 PM)",
  "7": "Science Class (12 - 3 PM)",
  "8": "Maths Class (4 - 7 PM)",
  "9" : "Science Class (4 -  7 PM)"
}

// Function to populate cities based on selected state
function populateCities() {
  const stateSelect = document.getElementById("state");
  const citySelect = document.getElementById("city");
  const selectedState = stateSelect.value;

  // Clear existing options in the city dropdown
  citySelect.innerHTML = "";

  // Create a default option
  const defaultCityOption = document.createElement("option");
  defaultCityOption.text = "Select your city";
  defaultCityOption.disabled = true;
  citySelect.add(defaultCityOption);

  // Populate cities based on the selected state
  if (selectedState && citiesByState[selectedState]) {
    citiesByState[selectedState].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    });
  }
  populateAddresses();
}

// Function to populate centers based on selected city
function populateAddresses() {
  const citySelect = document.getElementById("city");
  const centreSelect = document.getElementById("centre");
  const selectedCity = citySelect.value;

  // Clear existing options in the center dropdown
  centreSelect.innerHTML = "";

  // Create a default option
  const defaultCentreOption = document.createElement("option");
  defaultCentreOption.text = "Select your centre";
  defaultCentreOption.disabled = true;
  centreSelect.add(defaultCentreOption);

  // Populate centers based on the selected city
  if (selectedCity && centresByCity[selectedCity]) {
    centresByCity[selectedCity].forEach(centre => {
      const option = document.createElement("option");
      option.value = centre;
      option.text = centre;
      centreSelect.add(option);
    });
  }
}

// Function to populate states on page load
function populateStates() {
  const stateSelect = document.getElementById("state");
  stateSelect.innerHTML = "";
  // Create a default state option
  const defaultStateOption = document.createElement("option");
  defaultStateOption.value = "";
  defaultStateOption.text= "Select your state";
    defaultStateOption.disabled = true;
  defaultStateOption.selected = true;
  stateSelect.add(defaultStateOption);

  // Populate states based on the data
  Object.keys(citiesByState).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateSelect.add(option);
  });
}

function populateSlots(){
  const selectedGrade = document.getElementById("grade").value;
  const slotHtml = document.getElementById("slot");
  slotHtml.value = timeSlots[selectedGrade];
}

// Attach event listener for form submission
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  submitForm(); // Call the submitForm function
});

// Call populateStates function on page load
window.onload = function () {
  populateStates();
  setupUTMInput();
};


// var source = document.getElementById("source").value;
// formData.append("source", source);



function setupUTMInput(){
  // Get the current URL
const urlParams = new URLSearchParams(window.location.search);

// Get specific UTM parameters
const utmSource = urlParams.get('utm_source');
const utmMedium = urlParams.get('utm_medium');
const utmCampaign = urlParams.get('utm_campaign');

// Construct a string containing the UTM parameters

const utmInput1 = document.createElement("input");
utmInput1.type = "hidden";
utmInput1.name = "utm_source";
utmInput1.value = utmSource;
signupForm.appendChild(utmInput1);

const utmInput2 = document.createElement("input");
utmInput2.type = "hidden";
utmInput2.name = "utm_medium";
utmInput2.value = utmMedium;
signupForm.appendChild(utmInput2);

const utmInput3 = document.createElement("input");
utmInput3.type = "hidden";
utmInput3.name = "utm_campaign";
utmInput3.value = utmCampaign;
signupForm.appendChild(utmInput3);


}


// Function to handle form submission
function submitForm() {
  // Disable the submit button to prevent multiple submissions
  document.getElementById("submit").disabled = true;
  document.getElementById("slot").disabled = false;
  // Display a loading text on the button
  document.getElementById("submit").innerText = "Submitting...";

  // Collect the form data
  var formData = new FormData(document.getElementById("signupForm"));
  var keyValuePairs = [];

  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");
  document.getElementById("slot").disabled = true;

  // Send a POST request to your Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbwN-WJDVcPI1-rmswMr0GG8OXurJbpXQIXthar7K365-trTdO3GY4har-yRnxDZUfuc7Q/exec", {
    redirect: "follow",
    method: "POST",
    body: formDataString,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  })
    .then(function (response) {
      // Check if the request was successful
      if (!response.ok) {
        window.alert("There is some error, please try again after sometime");
        throw new Error("Failed to submit the form.");
      }
      return response.json(); // Assuming your script returns JSON response
    })
    .then(function (data) {
      openPopup();
      document.getElementById("slot").disabled = true;
      document.getElementById("signupForm").reset(); // Reset the form if needed
      document.getElementById("submit").disabled = false;
      document.getElementById("submit").innerText = "Submit";
    })
    .catch(function (error) {
      alert("There is some error in submitting now, please try again after sometime.")
    })
    .finally(function () {
     
    });
}

function openPopup(){
  const popup = document.getElementById("popup");
  popup.classList.remove("hide");
}

function closePopup(){
  const popup = document.getElementById("popup");
  popup.classList.add("hide");
}
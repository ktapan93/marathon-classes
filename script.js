const citiesByState = {
  "Andhra Pradesh": [
    "Anantapur",
    "Nellore",
    "Kadapa",
    "Vijayawada",
    "Visakhapatnam",
    "Tirupati",
    "Guntur",
    "GVMC",
    "Rajahmundry",
    "Kurnool",
  ],
  Assam: ["Dibrugarh"],
  Bihar: ["Patna", "Muzaffarpur", "Purnia", "Bhagalpur", "Gaya", "Darbhanga"],
  Chhattisgarh: ["Raipur", "Bilaspur", "Durg"],
  Delhi: ["New Delhi"],
  Gujarat: ["Ahmedabad", "Surat", "Rajkot", "Vapi", "Vadodara"],
  Haryana: [
    "Karnal",
    "Ambala",
    "Gurgaon",
    "Faridabad",
    "Sonipat",
    "Hisar",
    "Jagadhiri",
    "Sirsa",
    "Chandigarh",
    "Panchkula",
  ],
  "Himachal Pradesh": ["Shimla"],
  Jharkhand: ["Jamshedpur", "Dhanbad", "Bokaro Steel City", "Ranchi"],
  Karnataka: [
    "Bengaluru",
    "Gulbarga",
    "Hassan",
    "Belagavi",
    "Hubli-Dharwad",
    "Mangalore",
    "Davanagere",
    "Bijapur",
    "Mysore",
    "Shivamogga",
  ],
  Kerala: [
    "Kochi",
    "Kozhikode",
    "Palakkad",
    "Kollam",
    "Kottayam",
    "Thrissur",
    "Thiruvananthapuram",
    "Kannur",
    "Malappuram",
  ],
  "Madhya Pradesh": [
    "Jabalpur",
    "Indore",
    "Bhopal",
    "Ujjain",
    "Gwalior",
    "Rewa",
    "Sagar",
  ],
  Maharashtra: [
    "Mumbai",
    "Solapur",
    "Nanded",
    "Pune",
    "Thane",
    "Nashik",
    "Mumbai Suburban",
    "Dhule",
    "Amravati",
    "Navi Mumbai",
    "Nagpur",
    "Aurangabad",
    "Latur",
    "Akola",
    "Ahmednagar",
  ],
  Odisha: ["Bhubaneswar", "Cuttack"],
  Punjab: [
    "Ludhiana",
    "Kharar",
    "Jalandhar",
    "Bathinda",
    "Sahibzada Ajit Singh Nagar, Mohali",
    "Sahibzada Ajit Singh Nagar",
    "Amritsar",
  ],
  Rajasthan: [
    "Jodhpur",
    "Bikaner",
    "Jaipur",
    "Bhilwara",
    "Ganganagar",
    "Ajmer",
    "Udaipur",
    "Bharatpur",
    "Sikar",
  ],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Tiruchirappalli",
    "Salem",
    "Krishnagiri",
    "Vellore",
    "Erode",
  ],
  Telangana: ["Karimnagar", "Hyderabad", "Khammam"],
  "Uttar Pradesh": [
    "Ghaziabad",
    "Lucknow",
    "Faizabad",
    "Kanpur",
    "Jhansi",
    "Saharanpur",
    "Gautam Buddha Nagar",
    "Noida",
    "Meerut",
    "Bareilly",
    "Agra",
    "Mathura",
    "Allahabad",
    "Aligarh",
  ],
  Uttarakhand: ["Dehradun", "Haridwar", "Roorkee"],
  "West Bengal": ["Siliguri", "Asansol", "Barddhaman", "Kolkata", "Kharagpur"],
};

const centresByCity = {
  Ahmedabad: [
    "Ahmedabad-Maninagar",
    "Ahmedabad-New CG Road",
    "Ahmedabad-SG Highway",
    "Ahmedabad-Bapu Nagar",
    "Ahmedabad-Memnagar",
  ],
  Jabalpur: ["Jabalpur-Gupteshwar", "Jabalpur-Garha Road", "Jabalpur-Ranjhi"],
  Indore: [
    "Indore-Tower Square Centre",
    "Indore-Vijay Nagar",
    "Indore-Bengali Square",
    "Indore-Marimata Square",
    "Indore-Rajendra Nagar",
    "Indore-Sudama Nagar Centre",
  ],
  Bengaluru: [
    "Bengaluru-Yelahanka",
    "Bengaluru-Mission Road",
    "Bengaluru-JP Nagar",
    "Bengaluru-Nagasandra",
    "Bengaluru-Kalyan Nagar",
    "Bengaluru-Sadashiva Nagar",
    "Bengaluru-KR Puram",
    "Bengaluru-Electronic City",
    "Bengaluru-Vijaya Nagar",
    "Bengaluru-HSR",
    "Bengaluru-White Field",
    "Bengaluru-KSIT Junction",
    "Bengaluru-Mahalakshmi Layout",
    "Bengaluru-Rajarajeshwari nagar",
  ],
  Siliguri: ["Siliguri-Sevoke Road"],
  Bhubaneswar: [
    "Bhubaneswar-Saheed Nagar",
    "Bhubaneswar-Patrapada",
    "Bhubaneswar-Chandrashekharpur",
  ],
  Patna: [
    "Patna-Anishabad",
    "Patna-Sampatchak",
    "Patna-RPS More",
    "Patna-Phulwari Sharif",
    "Patna-Saristabad",
    "Patna-Boaring Road",
  ],
  Lucknow: [
    "Lucknow-Shushant Golf City",
    "Lucknow-Aliganj",
    "Lucknow-Madiyaon",
    "Lucknow-Hazrat Ganj",
    "Lucknow-Gomati Nagar",
    "Lucknow-Ashiyana",
    "Lucknow-Alambagh",
  ],
  Gulbarga: ["Gulbarga-Timmapuri Circle"],
  Raipur: ["Raipur-Dangania", "Raipur-Shankar Nagar"],
  Chennai: [
    "Chennai-Egmore",
    "Chennai-Selaiyur",
    "Chennai-Vadapalani",
    "Chennai-Porur",
    "Chennai-Sholinganallur",
    "Chennai-Velachery",
    "Chennai-Avadi",
    "Chennai-Anna Nagar",
    "Chennai Ambattur",
    "Chennai-ECR",
  ],
  Surat: ["Surat-Pal", "Surat-Varachha"],
  Coimbatore: ["Coimbator-Avinashi Road", "Coimbatore - RS Puram"],
  Anantapur: ["Anantapur-Sangameswara Circle"],
  Kochi: ["Kochi-Kadavantra"],
  Jamshedpur: ["Jamshedpur-Mango", "Jamshedpur-Bistupur"],
  Karnal: ["Karnal-Mall Road"],
  Asansol: ["Asansol- Murgasol"],
  Solapur: ["Solapur-Dufferin Chowk"],
  Dehradun: ["Dehradun-Clock Tower", "Dehradun-Majra"],
  Rajkot: ["Jamnagar-Aerodrome road"],
  Nellore: ["Nellore-Annamayya"],
  Bhopal: ["Bhopal-Arera Colony", "Bhopal-Lal Ghati", "Bhopal-Jahangirabad"],
  Dhanbad: ["Dhanbad-Bank More"],
  Hassan: ["Hassan-Krishnaraja Pura"],
  Mumbai: [
    "Mumbai-Goregaon",
    "Mumbai-Kandivali",
    "Mumbai-Dahisar East",
    "Mumbai-Mulund",
    "Navi Mumbai-Koper Khairane",
  ],
  Bikaner: ["Bikaner-Khaturia Colony"],
  Ambala: ["Ambala-Sadar Bazaar"],
  Pune: [
    "Pune-Hadapsar",
    "Pune-Katraj",
    "Pune-Viman Nagar",
    "Pune-Kondhwa",
    "Pune-Pimpri",
    "Pune-Charholi Phata Alandi",
    "Pune-Baner",
    "Pune-Pimple Saudagar",
  ],
  Barddhaman: ["Bardhaman-Birhata"],
  Thane: ["Thane-Kasarvadavli"],
  Kadapa: ["Kadapa-Maruti Nagar"],
  "New Delhi": [
    "Delhi- Palam-Dabri Road",
    "Delhi-Dilshad Garden",
    "New Delhi-Gujrawala Town",
    "Delhi-Rohini Sector 11",
    "Delhi-Defence Colony",
    "Delhi-Najafgarh",
    "Delhi-Janakpuri",
    "Delhi- Vasant Kunj",
    "Delhi-Dwarka",
    "Delhi-Mundka",
    "Delhi-Preet vihar",
    "Delhi-Rajouri Garden",
    "Delhi-Pitampura",
  ],
  Nanded: ["Nanded-Shree Nagar"],
  Ghaziabad: ["Ghaziabad-Kaushambi", "Ghaziabad-Nehru nagar"],
  Gurgaon: ["Gurgaon-South City 2", "Gurgaon-Sector 66", "Gurgaon-Old DLF"],
  Ujjain: ["Ujjain-Tower Square"],
  Kolkata: [
    "Kolkata-Salt Lake",
    "Kolkata-Park Street",
    "Barrackpore-Ghoshpara Road",
    "Kolkata-Dalhousie",
    "Kolkata-Ruby",
    "Kolkata-Newtown",
    "Kolkata-Rabindra Sarobar",
    "Kolkata-Behala",
  ],
  "Bokaro Steel City": ["Bokaro-Sector 4"],
  Kharar: ["Kharar-Sector 125"],
  Puducherry: ["Puducherry-Uzhavarkarai"],
  Hyderabad: [
    "Hyderabad-SF Green Park",
    "Hyderabad-Sainikpuri",
    "Hyderabad-Attapur",
    "Hyderabad-Miyapur",
    "Hyderabad-Paradise",
    "Hyderabad-Lanco Hills",
    "Hyderabad-Kukatpally",
    "Hyderabad-Banjara Hills",
    "Hyderabad-Chandanagar",
    "Hyderabad-LB Nagar",
    "Hyderabad-Narayanaguda",
  ],
  Ludhiana: ["Ludhiana-Sector 32-A", "Ludhiana-Dugri Phase1"],
  Khammam: ["Khammam-Bank Colony"],
  Muzaffarpur: ["Muzaffarpur-Saraiya Ganj"],
  Nashik: ["Nashik-Mogal Arcade", "Nashik-ABB Circle"],
  Belagavi: ["Belagavi-Nehru Nagar"],
  Purnia: ["Purnia-Navratan Hatta"],
  Tiruchirappalli: [
    "Tiruchirapalli-Thillai Nagar",
    "Tiruchirapalli-National College",
  ],
  "Mumbai Suburban": ["Mumbai-Virar"],
  Bhagalpur: ["Bhagalpur-Bhikhanpur"],
  Vapi: ["Vapi-Chala"],
  Jaipur: [
    "Jaipur-Raja Park",
    "Jaipur-Pratap Nagar",
    "Jaipur-Vaishali Nagar",
    "Jaipur-Gopalpura Bypass",
    "Jaipur-Vidhyadhar Nagar",
  ],
  "Hubli-Dharwad": ["Hubli-Jayanagar", "Dharwad-Court Circle"],
  Salem: ["Salem-Nethimed", "Salem-Fairlands"],
  Bhilwara: ["Bhilwara-Gandhi Nagar"],
  Gwalior: ["Gwalior-City Centre", "Gwalior-Nai Sadak"],
  Dhule: ["Dhule-Mundada Market"],
  Visakhapatnam: [
    "Visakhapatnam-Chinamushidiwada",
    "Visakhapatnam-Madhurawada",
  ],
  Ganganagar: ["Sri Ganganagar-Sukhadia Circle"],
  Shimla: ["Shimla-Knollswood"],
  Rewa: ["Rewa-College Square"],
  Faizabad: ["Faizabad-Civil Lines"],
  Sagar: ["Sagar-Ashok Vihar"],
  Kharagpur: ["Kharagpur-CT Road"],
  Ajmer: ["Ajmer-Vaishali Nagar"],
  Kollam: ["Kollam-Kadapakkada"],
  Amravati: ["Amravati-Rukmini Nagar"],
  Sonipat: ["Sonipat-Model Town"],
  Hisar: ["Hisar-Camp Chowk"],
  Vijayawada: ["Vijayawada-Benz Circle"],
  Cuttack: ["Cuttack-Mission Road"],
  Jodhpur: ["Jodhpur-5th Avenue PWD Colony"],
  Thrissur: ["Thrissur-Aswani Junction"],
  Kanpur: ["Kanpur-Kidwai Nagar", "Kanpur-Pandu Nagar"],
  Jhansi: ["Jhansi-Civil Lines"],
  Bilaspur: ["Bilaspur-Link Road"],
  Sirsa: ["Sirsa-Ambedkar Chowk"],
  "Navi Mumbai": ["Navi Mumbai-Panvel", "NaviMumbai-Nerul"],
  Nagpur: ["Nagpur-Kasturchand Park", "Nagpur-Mhalgi Nagar"],
  Kozhikode: ["Kozhikode - YMCA"],
  Udaipur: ["Udaipur-Bhopalpura"],
  Sikar: ["Sikar-Piprali Road"],
  Chandigarh: ["Chandigarh-Sector 34A"],
  Ranchi: ["Ranchi-Harmu Road"],
  "Gautam Buddha Nagar": ["Noida-Sector-136", "Greater Noida-Alpha 1"],
  Haridwar: ["Haridwar-Ranipur More Centre"],
  Roorkee: ["Roorkee-Civil Lines"],
  Noida: ["Noida-Sector 18"],
  Tirupati: ["Tirupati-Annarao Circle"],
  Meerut: ["Meerut-Jagriti Vihar"],
  Jalandhar: ["Jalandhar-Jawahar Nagar"],
  Thiruvananthapuram: ["Trivandrum-KEK Towers Vazuthacaud"],
  Aurangabad: ["Aurangabad-CIDCO Colony"],
  Faridabad: ["Faridabad-Railway Road NIT"],
  Bareilly: ["Bareilly-Prem Nagar"],
  Agra: ["Agra-Sadar Bazar", "Agra-Kargil"],
  Panchkula: ["Panchkula-Sector 11"],
  Mathura: ["Mathura-Bhuteshwar Road"],
  Kannur: ["Kannur-Thavakkara"],
  Bathinda: ["Bathinda-Civil Lines"],
  Allahabad: ["Allahabad-Civil Lines"],
  "Sahibzada Ajit Singh Nagar, Mohali": ["Mohali-Phase IX"],
  GVMC: ["Visakhapatnam-Dwaraka Nagar"],
  "Sahibzada Ajit Singh Nagar": ["Punjab-Zirakpur"],
  Aligarh: ["Aligarh-Ramghat Road"],
  Amritsar: ["Amritsar-Ranjit Avenue"],
  Malappuram: ["Malappuram-Perinthalmanna"],
  Durg: ["Bhilai-Risali"],
  Gaya: ["Gaya-AP Colony"],
  Rajahmundry: ["Rajahmundry-Kotagummam"],
  Latur: ["Latur-Khardekar Stop"],
  Dibrugarh: ["Dibrugarh-Khalihamari"],
  Darbhanga: ["Darbhanga-Mirzapur Chowk"],
  Kurnool: ["Kurnool-Gandhi Nagar"],
  Akola: ["Akola-Nehru Park"],
  Krishnagiri: ["Hosur-GH Road"],
  Anand: ["Anand-Vidyanagar"],
  Vadodara: ["Vadodara-Ajwa Road"],
  Vellore: ["Vellore-CMC"],
  Davanagere: ["Davanagere-Ram"],
  Bijapur: ["Vijayapura-SS Front Road"],
  Ahmednagar: ["Ahmednagar-Burudgaon Road", "Ahmednagar-Pipeline Road"],
  Erode: ["Erode-Collectorate"],
  Alwar: ["Alwar-Bhagat Singh Circle"],
  Shivamogga: ["Shivamoga-Vinoba Nagara"],
};

const timeSlots = {
  6: "Science Class (10 AM - 12 PM)",
  7: "Maths Class (10 AM - 12 PM)",
  8: "Science Class (10 AM - 12 PM)",
  9: "Maths Class (10 AM - 12 PM)",
};

const locationMapping = {
  "Ahmedabad-Maninagar": "https://maps.app.goo.gl/FLvUoCUyUCQXgUQG6",
  "Jabalpur-Gupteshwar": "https://maps.app.goo.gl/5Ei3Fzh12yBzxLVG6",
  "Indore-Tower Square Centre": "https://maps.app.goo.gl/JU4F39S671FxaX7L6",
  "Bengaluru-Yelahanka": "https://maps.app.goo.gl/jgUwF5BRgnQBdeWv5",
  "Karimnagar-Mukarampura": "https://maps.app.goo.gl/jknQAebg5eksZVsv6",
  "Siliguri-Sevoke Road": "https://maps.app.goo.gl/CDqqA8kPjEg2ZqD68",
  "Bhubaneswar-Saheed Nagar": "https://maps.app.goo.gl/LTdQbwEAk9RkHWEo8",
  "Ludhiana-Ghumar Mandi": "https://maps.app.goo.gl/xZqCECVidnLCyyJG7",
  "Patna-Anishabad": "https://maps.app.goo.gl/mSqocDg3JXxagff7A",
  "Bengaluru-Mission Road": "https://maps.app.goo.gl/sqgJKmdLbLy6jJWn6",
  "Bengaluru-JP Nagar": "https://maps.app.goo.gl/JCsvoj5JNBgqzKJz7",
  "Ghaziabad-Raj Nagar Extension": "https://maps.app.goo.gl/qRGnKxQbYHKDy17v8",
  "Indore-Vijay Nagar": "https://maps.app.goo.gl/8zAPdBLedqkZfJyx9",
  "Lucknow-Shushant Golf City": "https://maps.app.goo.gl/sUB8ptqhSz1uqUnTA",
  "Gulbarga-Timmapuri Circle": "https://maps.app.goo.gl/wVLe4uzDcvpGTkPK6",
  "Raipur-Dangania": "https://maps.app.goo.gl/7tQJNQaRCYya8HaK9",
  "Chennai-Egmore": "https://maps.app.goo.gl/RYS51V7xajzonvca7",
  "Surat-Pal": "https://maps.app.goo.gl/4zJXZn8ckmfir28c9",
  "Coimbator-Avinashi Road": "https://maps.app.goo.gl/aLd4SjPZyvSvWMPz7",
  "Anantapur-Sangameswara Circle": "https://maps.app.goo.gl/CyWJSmQ643GgT7p26",
  "Kochi-Kadavantra": "https://maps.app.goo.gl/KqmT6Uhb19yReGrc9",
  "Jamshedpur-Mango": "https://maps.app.goo.gl/Ws3mgtr9bXLSbYgP8",
  "Karnal-Mall Road": "https://maps.app.goo.gl/dvq2m55YcKJrDBM4A",
  "Asansol- Murgasol": "https://maps.app.goo.gl/2Yq6Vp2DyJrjfsX99",
  "Mumbai-Andheri West": "https://maps.app.goo.gl/RZDEtaS7U4CmZ6gTA",
  "Solapur-Dufferin Chowk": "https://maps.app.goo.gl/oUeWVUfysxkEnCoL7",
  "Nanded-Vazirabad": "https://maps.app.goo.gl/xoejeUigKU5j7Nzd7",
  "Dehradun-Clock Tower": "https://maps.app.goo.gl/3attfQ2hBtiTdVxA9",
  "Jamnagar-Aerodrome road": "https://maps.app.goo.gl/3FLcKdmaoqg55gAi8",
  "Bengaluru-Kalyan Nagar": "https://maps.app.goo.gl/X17NJvsmjNq4MtS79",
  "Nellore-Annamayya": "https://maps.app.goo.gl/qVFb5aMX4cQzUejL6",
  "Jodhpur-Saraswati Nagar": "https://maps.app.goo.gl/zL61sfzJoYgoVPsJ8",
  "Chennai-Selaiyur": "https://maps.app.goo.gl/H6YwiAwBvQYEoVSk7",
  "Bhopal-Arera Colony": "https://maps.app.goo.gl/449XWfXYugemdiGFA",
  "Dhanbad - Steel Gate": "https://maps.app.goo.gl/w2BGpTppBGk5TEak6",
  "Hassan-Krishnaraja Pura": "https://maps.app.goo.gl/Pssgr2hXV2GAb2WU7",
  "Mumbai-Goregaon": "https://maps.app.goo.gl/oR4xzeFmKyj5BZpZ9",
  "Bikaner-Khaturia Colony": "https://maps.app.goo.gl/7ckNeXeeC4p29Pbr6",
  "Ambala-Sadar Bazaar": "https://maps.app.goo.gl/RAfi6wVfrYZ6p3EP6",
  "Patna-Sampatchak": "https://maps.app.goo.gl/8no1kWiTfDg2hkJ39",
  "Ahmedabad-New CG Road": "https://maps.app.goo.gl/ebr2K7CfWxARdbbW9",
  "Jabalpur-Garha Road": "https://maps.app.goo.gl/rm8U5JWcjCf7YdzP9",
  "Pune-Hadapsar": "https://maps.app.goo.gl/QsLpUEVZHcvcRLod6",
  "Bardhaman-Birhata": "https://maps.app.goo.gl/5KvvzMtCbcQVLwos7",
  "Bengaluru-Sadashiva Nagar": "https://maps.app.goo.gl/Gf9bfpJ9Ke5SKtNE9",
  "Thane-Kasarvadavli": "https://maps.app.goo.gl/GFjEyLwDScH8Kfjw7",
  "Bengaluru-KR Puram": "https://maps.app.goo.gl/eDuWbB9UeD2BinRg9",
  "Bengaluru-Electronic City": "https://maps.app.goo.gl/mspa1kFuNXANfDhz6",
  "Kadapa-Maruti Nagar": "https://maps.app.goo.gl/pV5DbixTqvpmoEPX7",
  "Delhi- Palam-Dabri Road": "https://maps.app.goo.gl/xHnGDVEgcnFuCvME7",
  "Nanded-Shree Nagar": "https://maps.app.goo.gl/46j6hLqv9YazvS6x5",
  "Delhi-Dilshad Garden": "https://maps.app.goo.gl/yQJJAh3cSnXp2GALA",
  "Ghaziabad-Kaushambi": "https://maps.app.goo.gl/qpNYKoAgoupBj2wj9",
  "Gurgaon-South City 2": "https://maps.app.goo.gl/DW4YoaP5MHV1Qkvt8",
  "Ujjain-Tower Square": "https://maps.app.goo.gl/rS4spLNqGcnkaS519",
  "Mumbai-Khar": "https://maps.app.goo.gl/YzY8RSwuhweXcwcG8",
  "Jamshedpur-Bistupur": "https://maps.app.goo.gl/yF4zxtLKJcx76P3r6",
  "Kolkata-Salt Lake": "https://maps.app.goo.gl/TFywKWVcMWb95oUS7",
  "Bokaro-Sector 4": "https://maps.app.goo.gl/516HoetiotRtdLMp8",
  "Kharar-Sector 125": "https://maps.app.goo.gl/4jgxrgHJXGWT5fDp8",
  "Nashik-Indira Nagar": "https://maps.app.goo.gl/5WXR7wuLmREPwYEW8",
  "Chennai-Adyar": "https://maps.app.goo.gl/DfAez2C1ofFungqXA",
  "Pune-Katraj": "https://maps.app.goo.gl/vUNhEHwVDJTkbFkx6",
  "Hyderabad-SF Green Park": "https://maps.app.goo.gl/NtS8EkUTc6Yommc77",
  "New Delhi-Gujrawala Town": "https://maps.app.goo.gl/TbKRdXHTvG2teGwM7",
  "Ludhiana-Sector 32-A": "https://maps.app.goo.gl/d3AywtnLHYtpfYJB9",
  "Ahmedabad-SG Highway": "https://maps.app.goo.gl/YLJnAFHfuwrnAPCk9",
  "Pune-Viman Nagar": "https://maps.app.goo.gl/1TiptYJszxMbSy1o8",
  "Pune-Kondhwa": "https://maps.app.goo.gl/hoZZJZQCtpSCKZCB8",
  "Khammam-Bank Colony": "https://maps.app.goo.gl/4agpHqhr9Hvurp1s5",
  "Delhi-Rohini Sector 11": "https://maps.app.goo.gl/TaDqFYwB6pEsouFu9",
  "Mumbai-Kandivali": "https://maps.app.goo.gl/TGxGAYfC3B2uXkvW7",
  "Muzaffarpur-Saraiya Ganj": "https://maps.app.goo.gl/us5cL7Zu7X7it3ai6",
  "Delhi-Defence Colony": "https://maps.app.goo.gl/sryrXnb39f5jdEwk7",
  "Surat-Katargam": "https://maps.app.goo.gl/DR7RUPDB4V8wHwAU8",
  "Lucknow-Aliganj": "https://maps.app.goo.gl/wDYzk5FUnBEiHLuj7",
  "Nashik-Mogal Arcade": "https://maps.app.goo.gl/rWg14hK1PKyVZXi87",
  "Belagavi-Nehru Nagar": "https://maps.app.goo.gl/DuSZJNQ5ZAp43LV17",
  "Ahmedabad-Bopal": "https://maps.app.goo.gl/Ez8ApK2nr66WGhZz8",
  "Hyderabad-Sainikpuri": "https://maps.app.goo.gl/TsixD1g8C8aTqzBt8",
  "Purnia-Navratan Hatta": "https://maps.app.goo.gl/o7iBvVtDCSQQ1QXg7",
  "Chennai- Purasawalkam": "https://maps.app.goo.gl/r71utGF5X6147fHx6",
  "Ahmedabad-Bapu Nagar": "https://maps.app.goo.gl/eYMoftH7cCWmLkoA7",
  "Tiruchirapalli-Thillai Nagar": "https://maps.app.goo.gl/kMmQohwWS8zaUYA69",
  "Faridabad-Sector 16": "https://maps.app.goo.gl/Y3j7Qjc3Sn79eXx26",
  "Pune-Charholi Phata Alandi": "https://maps.app.goo.gl/ekPLB9MGSq8pjczMA",
  "Vijayawada-Eluru Road": "https://maps.app.goo.gl/ecK5M6maEQKyMhEY8",
  "Mumbai-Virar": "https://maps.app.goo.gl/fHqy1mF1cD8o3vsq6",
  "Bhagalpur-Bhikhanpur": "https://maps.app.goo.gl/n8sm6b859hFHFDaa7",
  "Chennai-Vadapalani": "https://maps.app.goo.gl/LhGaSgoPytqNp5kt7",
  "Vapi-Chala": "https://maps.app.goo.gl/NmtEx6qr3jaG7bqh8",
  "Jaipur-Raja Park": "https://maps.app.goo.gl/kHPTczvgEWxxA7km8",
  "Kozhikode-Chevayur": "https://maps.app.goo.gl/osfFazs3eAdsY2TJ9",
  "Hubli-Jayanagar": "https://maps.app.goo.gl/ievBSsyXavxpzfLD9",
  "Salem-Nethimed": "https://maps.app.goo.gl/RuSmwpvd1vQg1Ws77",
  "Bengaluru-Nagavara": "https://maps.app.goo.gl/8oZ3tc7TerQxTyCP9",
  "Bengaluru-Vijaya Nagar": "https://maps.app.goo.gl/Xf38ZHEr5beyP3ks6",
  "Bhilwara-Gandhi Nagar": "https://maps.app.goo.gl/mDygJtSTov2yKHPEA",
  "Mumbai-Dahisar East": "https://maps.app.goo.gl/5B1s1jMfStbgACq36",
  "Hyderabad-Attapur": "https://maps.app.goo.gl/Xq1xXraZwnYCPsHx7",
  "Gwalior-City Centre": "https://maps.app.goo.gl/tmtAho4aGuMSoSkW7",
  "Dhule-Mundada Market": "https://maps.app.goo.gl/HrS4Gzzodt2tqVoZ9",
  "Hyderabad-Miyapur": "https://maps.app.goo.gl/HsrXRwYqm8pM2vuh6",
  "Visakhapatnam-Chinamushidiwada": "https://maps.app.goo.gl/A6jKpxwEur1UjPMQ6",
  "Sri Ganganagar-Sukhadia Circle": "https://maps.app.goo.gl/jZqgrc5v7NaoLjpQ6",
  "Palakkad - Sultanpet": "https://maps.app.goo.gl/Wp4ft3gAf2MhVb67A",
  "Shimla-Knollswood": "https://maps.app.goo.gl/bSQLTKEC6EdFhahKA",
  "Hyderabad-Paradise": "https://maps.app.goo.gl/zAR8PezvVmEpEJkH8",
  "Rewa-College Square": "https://maps.app.goo.gl/au8HFXsmYzNs6Jds9",
  "Jaipur-Pratap Nagar": "https://maps.app.goo.gl/hF8EsstQ1NTGqjCfA",
  "Faizabad-Civil Lines": "https://maps.app.goo.gl/uTFn29JdnRcKVh8n9",
  "Jaipur-Vaishali Nagar": "https://maps.app.goo.gl/TVAELH7QQ9vtUXVu7",
  "Hyderabad-Trimulgherry": "https://maps.app.goo.gl/jMLzSfYzybyzafJ66",
  "Raipur-Shankar Nagar": "https://maps.app.goo.gl/ordNxihYSTpiuewh7",
  "Hyderabad-Lanco Hills": "https://maps.app.goo.gl/bEvPQ7MgmA3GVk8JA",
  "Sagar-Ashok Vihar": "https://maps.app.goo.gl/W92pjDGmYU3VLr327",
  "Chennai- Alwarpet": "https://maps.app.goo.gl/AMw1b373MvcpbJaV8",
  "Chennai-Porur": "https://maps.app.goo.gl/LSJ1kk79z96eU8do6",
  "Kharagpur-CT Road": "https://maps.app.goo.gl/fJEVyjApkuETa3jb6",
  "Bhopal-Lal Ghati": "https://maps.app.goo.gl/EuRQewNzDH3UzDN26",
  "Ajmer-Vaishali Nagar": "https://maps.app.goo.gl/giWyLaSqUWpPWPqs9",
  "Kollam-Kadapakkada": "https://maps.app.goo.gl/BFzxRWbXiUPxKAt57",
  "Bengaluru-HSR": "https://maps.app.goo.gl/pdmU8rGVyaDqoYjv5",
  "Amravati-Rukmini Nagar": "https://maps.app.goo.gl/QeEFMhz9XkamukJz8",
  "Indore-Bengali Square": "https://maps.app.goo.gl/2o4NhuRT5rRU9fiJ6",
  "Mangaluru-Urwa": "https://maps.app.goo.gl/onahmArTtRVCVckC8",
  "Gwalior-Nai Sadak": "https://maps.app.goo.gl/6kFSeSFLHStB7X8XA",
  "Sonipat-Model Town": "https://maps.app.goo.gl/6xYBdKxDaBLEAbiw5",
  "Chennai-Sholinganallur": "https://maps.app.goo.gl/c1n9T9YCKihU1zVc9",
  "Pune-Baner": "https://maps.app.goo.gl/e9MdtqGKn8BrpQDe9",
  "Hyderabad-Kukatpally": "https://maps.app.goo.gl/5dAN3pYiEERwXBgD6",
  "Lucknow-Madiyaon": "https://maps.app.goo.gl/kR3jatjKiPhvk3bZ7",
  "Gurgaon-Sector 66": "https://maps.app.goo.gl/sd3awU49yaTWpsXm8",
  "Hyderabad-Banjara Hills": "https://maps.app.goo.gl/KjRiUd2HRQdHFZuv6",
  "Ahmedabad-Memnagar": "https://maps.app.goo.gl/UiULk1rhVZuy1Ehq8",
  "Hisar-Camp Chowk": "https://maps.app.goo.gl/nzhagGuhMjRifdev8",
  "Kottayam-T B Road": "https://maps.app.goo.gl/2gLF5RNxwa8bcgYm8",
  "Vijayawada-Benz Circle": "https://maps.app.goo.gl/zfygLNC8ui2wXg3j7",
  "Ahmedabad-Nikol Centre": "https://maps.app.goo.gl/gFALEaugHfMdK5mW9",
  "Hyderabad-Chandanagar": "https://maps.app.goo.gl/C7fEr6sKc4v856fQ7",
  "Bhubaneswar-Patrapada": "https://maps.app.goo.gl/UfazTr1LJpfrLomj7",
  "Cuttack-Mission Road": "https://maps.app.goo.gl/gZ8AKzkWsy3vf2ks7",
  "Bhopal-Jahangirabad": "https://maps.app.goo.gl/uCguFWuGosRghUEs6",
  "Chennai-Velachery": "https://maps.app.goo.gl/PmyfADgCCWCFizhw8",
  "Jodhpur-5th Avenue PWD Colony": "https://maps.app.goo.gl/X5d9PtV9RcG9R4pWA",
  "Ghaziabad-Nehru nagar": "https://maps.app.goo.gl/6vbXtu6QSgSAhcWNA",
  "Thrissur-Aswani Junction": "https://maps.app.goo.gl/xaGfWwCRNJxLDDp37",
  "Patna-RPS More": "https://maps.app.goo.gl/W41jJKAsqDMP5j9f7",
  "Kanpur-Kidwai Nagar": "https://maps.app.goo.gl/HW3jXJHZXvp7dH1j7",
  "Kolkata-Park Street": "https://maps.app.goo.gl/ezBZSEpcYPQUBFTh9",
  "Coimbatore - RS Puram": "https://maps.app.goo.gl/NUwbM8Y9oXqmQ9Dj9",
  "Delhi-Najafgarh": "https://maps.app.goo.gl/VPUSKejyfa663h1P7",
  "Kanpur-SwaroopNagar": "https://maps.app.goo.gl/8Q8Ywewa9vegyEtn8",
  "Jhansi-Civil Lines": "https://maps.app.goo.gl/webRUtvjvk8eMem46",
  "Delhi-Janakpuri": "https://maps.app.goo.gl/VB8c3DSXBEsMRXD5A",
  "Delhi- Vasant Kunj": "https://maps.app.goo.gl/dtcwvKAigp7wLvXS6",
  "Kanpur-Pandu Nagar": "https://maps.app.goo.gl/WvP4RyZxQYtzXzB76",
  "Barrackpore-Ghoshpara Road": "https://maps.app.goo.gl/QksWyfVjbkC58XkPA",
  "Bilaspur-Link Road": "https://maps.app.goo.gl/iKDJH46dPyB2aPph9",
  "Hyderabad-LB Nagar": "https://maps.app.goo.gl/xg2o4P7kkAJD7Xq18",
  "Yamuna Nagar-Model Town": "https://maps.app.goo.gl/pVBksqEarQAywKFF8",
  "Hyderabad-Narayanaguda": "https://maps.app.goo.gl/dswhVE87e94f5W5T9",
  "Thane-Naupada": "https://maps.app.goo.gl/myj9wx6YbLrKDgQS8",
  "Sirsa-Ambedkar Chowk": "https://maps.app.goo.gl/CMyLcuohzwMEwb1C6",
  "Indore-Marimata Square": "https://maps.app.goo.gl/eCouVgbkKJwbEHXo6",
  "Coimbatore-Kuniamuthur": "https://maps.app.goo.gl/7NBuXRniFDeXHgmLA",
  "Kochi-Pathadipalam": "https://maps.app.goo.gl/V4zK9cim4aZH6XGq6",
  "Delhi-Karol Bagh": "https://maps.app.goo.gl/DUR1tojugFXFvbxj7",
  "Lucknow-Hazrat Ganj": "https://maps.app.goo.gl/5xtx1iWZNjQCauN39",
  "Delhi-Mundka": "https://maps.app.goo.gl/ZK6snxSzyyCbh9kB6",
  "Navi Mumbai-Panvel": "https://maps.app.goo.gl/zLDoQRj33rnGWh189",
  "Nagpur-Kasturchand Park": "https://maps.app.goo.gl/aYhoGRuHo4xDre4Z8",
  "Kozhikode - YMCA": "https://maps.app.goo.gl/Mf73uPRdz5yvk3197",
  "Jabalpur-Ranjhi": "https://maps.app.goo.gl/VUmnPKTBseQSHBsC6",
  "Chennai-Avadi": "https://maps.app.goo.gl/RKXxptVN7Ru4CpmJ8",
  "Udaipur-Bhopalpura": "https://maps.app.goo.gl/SwRXUH53L3KwHJad9",
  "Delhi-Preet vihar": "https://maps.app.goo.gl/1wLpWQZEcvma2PaH6",
  "NaviMumbai-Nerul": "https://maps.app.goo.gl/WCF1ExW1hrjKsys97",
  "Bengaluru-White Field": "https://maps.app.goo.gl/5xWMvpTvC41cvf6E9",
  "Jaipur-Gopalpura Bypass": "https://maps.app.goo.gl/yGavPAFWoSqeccjJA",
  "Bharatpur-Krishna Nagar": "https://maps.app.goo.gl/A3jyTEAvDV4QHyxC9",
  "Vadodara-Fatehganj": "https://maps.app.goo.gl/dsy66J2ErBdWPW5t5",
  "Nashik-ABB Circle": "https://maps.app.goo.gl/t8DgMu9up1hZDfV9A",
  "Sikar-Piprali Road": "https://maps.app.goo.gl/KZW7jxyvp1XcdCEXA",
  "Chennai-Anna Nagar": "https://maps.app.goo.gl/miWNnn4Jnpax4eWY6",
  "Delhi-Rajouri Garden": "https://maps.app.goo.gl/5Ag4Zf7pR6zuKLuz8",
  "Bengaluru-KSIT Junction": "https://maps.app.goo.gl/2oxjktF6tibZnxUX8",
  "Nagpur-Mhalgi Nagar": "https://maps.app.goo.gl/bd7fH81traGZjaR38",
  "Saharanpur-ITI": "https://maps.app.goo.gl/1H52xRUrsmrqT6qv5",
  "Chandigarh-Sector 34A": "https://maps.app.goo.gl/a12qgoTxrJCwgkmQ9",
  "Ranchi-Harmu Road": "https://maps.app.goo.gl/kZzZL7EudZf81CcT9",
  "Lucknow-Gomati Nagar": "https://maps.app.goo.gl/1EjPZwzVEDjWJLEC7",
  "Noida-Sector-136": "https://maps.app.goo.gl/ePyG3LDVg2FoFsUq7",
  "Gurgaon-Old DLF": "https://maps.app.goo.gl/1qQD99psXjVhP43s5",
  "Lucknow-Ashiyana": "https://maps.app.goo.gl/d7zjBVpVZ2wWpYiP7",
  "Dehradun-Majra": "https://maps.app.goo.gl/kcNomjwnJEGWRtoJ8",
  "Haridwar-Ranipur More Centre": "https://maps.app.goo.gl/AxQDdp1nrbvGBvCc9",
  "Roorkee-Civil Lines": "https://maps.app.goo.gl/GtBy74qJxTLU1UP6A",
  "Jaipur-Vidhyadhar Nagar": "https://maps.app.goo.gl/Pfn1ToATp4veN6xJ7",
  "Kolkata-Dalhousie": "https://maps.app.goo.gl/kDAbjnanUag92KL28",
  "Indore-Rajendra Nagar": "https://maps.app.goo.gl/UW9k8gHSjHjmbTdf6",
  "Noida-Sector 18": "https://maps.app.goo.gl/qsRPgX2ZAb8PF2kV8",
  "Tirupati-Annarao Circle": "https://maps.app.goo.gl/a8vSTBe3fEXzrE3K9",
  "Meerut-Jagriti Vihar": "https://maps.app.goo.gl/8ozswp2kVswNtdik7",
  "Noida-Sector 59": "https://maps.app.goo.gl/siL8v5iQFQe5bwWEA",
  "Jalandhar-Jawahar Nagar": "https://maps.app.goo.gl/vV1UYMMzqKyzdEiBA",
  "Patna-Phulwari Sharif": "https://maps.app.goo.gl/AP7B2xWd2K75XoXt7",
  "Trivandrum-KEK Towers Vazuthacaud":
    "https://maps.app.goo.gl/8EgqQhArnZ7mSmKa8",
  "Aurangabad-CIDCO Colony": "https://maps.app.goo.gl/ayAb5mDwDin8SCXQ6",
  "Faridabad-Railway Road NIT": "https://maps.app.goo.gl/3kXy8MuFnZWyA8kV8",
  "Bareilly-Prem Nagar": "https://maps.app.goo.gl/ZUANNL2hbPMFQWUy5",
  "Agra-Sadar Bazar": "https://maps.app.goo.gl/tncAQ8rSBeZ9RZLK8",
  "Panchkula-Sector 11": "https://maps.app.goo.gl/3qvaK2DmhhZ8ibAr8",
  "Chennai Ambattur": "https://maps.app.goo.gl/CXjAX6SfAzmN5cd17",
  "Mathura-Bhuteshwar Road": "https://maps.app.goo.gl/aAaQW5E8nGkKMRWR6",
  "Kolkata-Newtown": "https://maps.app.goo.gl/MqsfEMdU3PAdJtta7",
  "Kannur-Thavakkara": "https://maps.app.goo.gl/F3PMF79VbLLGMUFU6",
  "Bathinda-Civil Lines": "https://maps.app.goo.gl/6KkREaqnPGvCrD9b7",
  "Agra-Kargil": "https://maps.app.goo.gl/vVbFQ8SWCgZLjGc96",
  "Indore-Sudama Nagar Centre": "https://maps.app.goo.gl/m1c1BmKjtyGZ9vAS6",
  "Allahabad-Civil Lines": "https://maps.app.goo.gl/DmVoLbT2hga1VXHQ7",
  "Mohali-Phase IX": "https://maps.app.goo.gl/f4QPqwAcioygD2TA9",
  "Guntur-Arundelpet": "https://maps.app.goo.gl/n4hmT7mowHZLwpiC9",
  "Visakhapatnam-Dwaraka Nagar": "https://maps.app.goo.gl/EZhXCwdxbuxtaNRP6",
  "Pune-Pimple Saudagar": "https://maps.app.goo.gl/ks3PfCxe2YjTyN2i9",
  "Delhi-Pitampura": "https://maps.app.goo.gl/DNeBGm3jsYnRfXAX8",
  "Ahmedabad-Paldi": "https://maps.app.goo.gl/M2DD91HZp7Z6gsRJA",
  "Punjab-Zirakpur": "https://maps.app.goo.gl/1hKx95QCFcHdSMq98",
  "Aligarh-Ramghat Road": "https://maps.app.goo.gl/5sXV3LPDKGqgNkBDA",
  "Kolkata-Rabindra Sarobar": "https://maps.app.goo.gl/aTzVqyvVQb9D3K4KA",
  "Patna-Saristabad": "https://maps.app.goo.gl/XsN4mR3pmWnHpp287",
  "Ludhiana-Dugri Phase1": "https://maps.app.goo.gl/1vwvb98eJF4uzv8x9",
  "Amritsar-Ranjit Avenue": "https://maps.app.goo.gl/cjzjJnHgdsTdnSuH6",
  "Tiruchirapalli-National College":
    "https://maps.app.goo.gl/xKBv3AHixASt8gAK8",
  "Dhanbad-Bank More": "https://maps.app.goo.gl/5YX48hysYVhgrsL77",
  "Lucknow-Alambagh": "https://maps.app.goo.gl/o4MRGkfi4E3NTyxK9",
  "Greater Noida-Alpha 1": "https://maps.app.goo.gl/CTF4BWeVNxT9L5Cw7",
  "Mumbai-Mulund": "https://maps.app.goo.gl/F3Hd4zjqbCdvhht88",
  "Malappuram-Perinthalmanna": "https://maps.app.goo.gl/SAThLoPGhTznBqkA9",
  "Bhilai-Risali": "https://maps.app.goo.gl/BUpPmHEyFP5w5Jxt9",
  "Bengaluru-Mahalakshmi Layout": "https://maps.app.goo.gl/8FmryAeCAcAAiWxj9",
  "Dharwad-Court Circle": "https://maps.app.goo.gl/3YdGVR9mRxZvnq848",
  "Gaya-AP Colony": "https://maps.app.goo.gl/qobATbxAiQgQAjkA6",
  "Rajahmundry-Kotagummam": "https://maps.app.goo.gl/RFikD8SxRH9cjzRJ7",
  "Bhubaneswar-Chandrashekharpur": "https://maps.app.goo.gl/Bd25kdJvEMETbCWw5",
  "Latur-Khardekar Stop": "https://maps.app.goo.gl/1R7EwtuFvYqa76EA6",
  "Patna-Boaring Road": "https://maps.app.goo.gl/95TXHfRqsehfmme87",
  "Dibrugarh-Khalihamari": "https://maps.app.goo.gl/8Svejp7ZVNJd3DxT9",
  "Salem-Fairlands": "https://maps.app.goo.gl/D9vneVzuAhPvta7W6",
  "Darbhanga-Mirzapur Chowk": "https://maps.app.goo.gl/jZAdQ3K6LSz34C4L8",
  "Surat-Varachha": "https://maps.app.goo.gl/KriQkxKVFah7DyNo9",
  "Ludhiana-Sunder Nagar": "https://maps.app.goo.gl/FCrYgFffGkg4LngU7",
  "Kurnool-Gandhi Nagar": "https://maps.app.goo.gl/3CMjgDSV8r645AsFA",
  "Akola-Nehru Park": "https://maps.app.goo.gl/SYmDY2xaojp4Qdms5",
  "Hosur-GH Road": "https://maps.app.goo.gl/GxYxBuoZbKJqGeXJ8",
  "Kolkata-Behala": "https://maps.app.goo.gl/q1DLhwbAnAdXcLiw9",
  "Vellore-CMC": "https://maps.app.goo.gl/N1sZH61tffyKWHGp9",
  "Davanagere-Ram & CO Circle": "https://maps.app.goo.gl/vNueKoYSbJwyrV9Y8",
  "Vijayapura-SS Front Road": "https://maps.app.goo.gl/RGjEL7HvjzUZ5iRM9",
  "Ahmednagar-Burudgaon Road": "https://maps.app.goo.gl/QfvKcRtKyUx6ZjA9A",
  "Visakhapatnam-Madhurawada": "https://maps.app.goo.gl/jXNuZXf77pwdWsJb8",
  "Mysore-Hardinge Circle": "https://maps.app.goo.gl/35wUTXthnCjgthYr9",
  "Erode-Collectorate": "https://maps.app.goo.gl/BoQhGFGLomxHFyvAA",
  "Navi Mumbai-Koper Khairane": "https://maps.app.goo.gl/QqVUEQFrBqfwxkT7A",
  "Bengaluru-Rajarajeshwari nagar": "https://maps.app.goo.gl/5eKdkmPU1zWHLAgs5",
  "Shivamoga-Vinoba Nagara": "https://maps.app.goo.gl/Gz6AaAgP6udz17GS6",
  "Ahmednagar-Pipeline Road": "https://maps.app.goo.gl/b9CLieYKBCNiNXJj9",
};

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
    citiesByState[selectedState].forEach((city) => {
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
    centresByCity[selectedCity].forEach((centre) => {
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
  defaultStateOption.text = "Select your state";
  defaultStateOption.disabled = true;
  defaultStateOption.selected = true;
  stateSelect.add(defaultStateOption);

  // Populate states based on the data
  Object.keys(citiesByState).forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateSelect.add(option);
  });
}

function populateSlots() {
  const selectedGrade = document.getElementById("grade").value;
  const slotHtml = document.getElementById("slot");
  slotHtml.value = timeSlots[selectedGrade];
}

// Attach event listener for form submission
document.getElementById("signupForm").addEventListener("submit", submitForm);

// Call populateStates function on page load
window.onload = function () {
  populateStates();
  setupUTMInput();
};

// var source = document.getElementById("source").value;
// formData.append("source", source);

function updateLocation() {
  const center = document.getElementById("centre").value;

  const location = document.createElement("input");
  location.type = "hidden";
  location.name = "center_location";
  location.value = locationMapping[center];
  signupForm.appendChild(location);
}

function setupUTMInput() {
  // Get the current URL
  const urlParams = new URLSearchParams(window.location.search);

  // Get specific UTM parameters
  const utmSource = urlParams.get("utm_source");
  const utmMedium = urlParams.get("utm_medium");
  const utmCampaign = urlParams.get("utm_campaign");

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

/**
 *
 * @param {SubmitEvent} event
 */
function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

  updateLocation();
  // Disable the submit button to prevent multiple submissions
  document.getElementById("submit").disabled = true;
  document.getElementById("slot").disabled = false;
  // Display a loading text on the button
  document.getElementById("submit").innerText = "Submitting...";

  // Collect the form data
  const formData = new FormData(event.currentTarget);
  formData.append("sheet", event.currentTarget.dataset.sheet);
  formData.append("template", event.currentTarget.dataset.template);
  const body = JSON.stringify(Object.fromEntries(formData));
  document.getElementById("slot").disabled = true;

  // Send a POST request to your Google Apps Script
  // fetch("https://script.google.com/macros/s/AKfycbwN-WJDVcPI1-rmswMr0GG8OXurJbpXQIXthar7K365-trTdO3GY4har-yRnxDZUfuc7Q/exec", { // Original
  fetch(
    "https://script.google.com/macros/s/AKfycbzVKGnLy-Z5MNIA-zuxdkf4PNNM5OE7hYsxnptrQj08pzheoNUQb80me8ydQcd8iT4S/exec",
    {
      // @byjus account
      method: "POST",
      body,
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to submit the form." + response.status);
      }
      return response.json(); // Assuming your script returns JSON response
    })
    .then(function (data) {
      if (data.error) {
        throw new Error(data.error);
      }
      openPopup();
      document.getElementById("slot").disabled = true;
      document.getElementById("signupForm").reset(); // Reset the form if needed
      document.getElementById("submit").disabled = false;
      document.getElementById("submit").innerText = "Submit";
    })
    .catch(function (error) {
      alert(
        "There is some error in submitting now, please try again after sometime." +
          `\nERR: ${error}`
      );
      console.error("Error:", JSON.stringify(error, null, 2));
    })
    .finally(function () {});
}

function openPopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("hide");
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("hide");
}

function Cards() {
  this.countries = [
  {country: "Afghanistan" , capital: "Kabul"},
  {country: "Albania", capital: "Tirana"},
  {country: "Andorra", capital: "Andorra la Vella"},
  {country: "Angola", capital: "Luanda"},
  {country: "Antigua and Barbuda", capital: "St Johns"},
  {country: "Argentina", capital: "Buenos Aires"},
  {country: "Armenia", capital: "Yerevan"},
  {country: "Australia", capital: "Canberra"},
  {country: "Austria", capital: "Vienna"},
  {country: "Azerbaijan",capital: "Baku"},
  {country: "Bahamas",capital: "Nassau"},
  {country: "Bahrain", capital: "Manama"},
  {country: "Bangladesh", capital: "Dhaka"},
  {country: "Barbados", capital: "Bridgetown"},
  {country: "Belarus", capital: "Minsk"},
  {country: "Belgium", capital: "Brussels"},
  {country: "Belize", capital: "Belmopan"},
  {country: "Benin", capital: "Porto Novo, Cotonou"},
  {country: "Bhutan", capital: ",Thimphu"},
  {country: "Bolivia", capital: "La Paz and Sucre"},
  {country: "Bosnia and Herzegovina", capital: "Sarajevo"},
  {country: "Botswana", capital: "Gaborone"},
  {country: "Brazil", capital: "Brasília"},
  {country: "Brunei", capital: "Bandar Seri Begawan"},
  {country: "Bulgaria", capital: "Sofia"},
  {country: "Burkina Faso", capital: "Ouagadougou"},
  {country: "Burundi", capital: "Bujumbura"},
  {country: "Cambodia", capital: "Phnom Penh"},
  {country: "Cameroon", capital: "Yaoundé"},
  {country: "Canada", capital: "Ottawa"},
  {country: "Cape Verde", capital: "Praia"},
  {country: "Cayman Islands", capital: "George Town"},
  {country: "Central African Republic", capital: "Bangui"},
  {country: "Chad", capital: "N-Djamena"},
  {country: "Chile", capital: "Santiago"},
  {country: "China", capital: "Beijing"},
  {country: "Colombia", capital: "Bogotá"},
  {country: "Comoros", capital: "Moroni"},
  {country: "Costa Rica", capital: "San José"},
  {country: "Côte d’Ivoire", capital: "Yamoussoukro"},
  {country: "Croatia", capital: "Zagreb"},
  {country: "Cuba", capital: "Havana"},
  {country: "Cyprus", capital: "Nicosia"},
  {country: "Czech Republic", capital: "Prague"},
  {country: "Democratic Republic of the Congo", capital: "Kinshasa"},
  {country: "Denmark", capital: "Copenhagen"},
  {country: "Djibouti", capital: "Djibouti"},
  {country: "Dominica", capital: "Roseau"},
  {country: "Dominican Republic", capital: "Santo Domingo"},
  {country: "East Timor", capital: "Dili"},
  {country: "Ecuador", capital: "Quito"},
  {country: "Egypt", capital: "Cairo"},
  {country: "El Salvador", capital: "San Salvador"},
  {country: "Equatorial Guinea", capital: "Malabo"},
  {country: "Eritrea", capital: "Asmara"},
  {country: "Estonia", capital: "Tallinn"},
  {country: "Ethiopia", capital: "Addis Ababa"},
  {country: "Fiji", capital: "Suva"},
  {country: "Finland", capital: "Helsinki"},
  {country: "France", capital: "Paris"},
  {country: "French Guiana", capital: "Cayenne"},
  {country: "Gabon", capital: "Libreville"},
  {country: "Georgia", capital: "Tbilisi"},
  {country: "Germany", capital: "Berlin"},
  {country: "Ghana", capital: "Accra"},
  {country: "Greece", capital: "Athens"},
  {country: "Grenada", capital: "St George’s"},
  {country: "Guatemala", capital: "Guatemala"},
  {country: "Guyana", capital: "Georgetown"},
  {country: "Haiti", capital: "Port-au-Prince"},
  {country: "Honduras", capital: "Tegucigalpa"},
  {country: "Hungary", capital: "Budapest"},
  {country: "Iceland", capital: "Reykjavik"},
  {country: "India", capital: "New Delhi"},
  {country: "Indonesia", capital: "Jakarta"},
  {country: "Iran", capital: "Tehran"},
  {country: "Iraq", capital: "Baghdad"},
  {country: "Israel", capital: "Jerusalem"},
  {country: "Italy", capital: "Rome"},
  {country: "Jamaica", capital: "Kingston, Jamaica"},
  {country: "Japan", capital: "Tokyo"},
  {country: "Jordan", capital: "Amman"},
  {country: "Kazakhstan", capital: "Astana"},
  {country: "Kenya", capital: "Nairobi"},
  {country: "Kiribati", capital: "South Tarawa"},
  {country: "Kuwait", capital: "Kuwait"},
  {country: "Kyrgyzstan", capital: "Bishkek"},
  {country: "Laos", capital: "Vientiane"},
  {country: "Latvia", capital: "Riga"},
  {country: "Lebanon", capital: "Beirut"},
  {country: "Lesotho", capital: "Maseru"},
  {country: "Liberia", capital: "Monrovia"},
  {country: "Libya", capital: "Tripoli"},
  {country: "Liechtenstein", capital: "Vaduz"},
  {country: "Lithuania", capital: "Vilnius"},
  {country: "Luxembourg", capital: "Luxembourg City"},
  {country: "Madagascar", capital: "Antananarivo"},
  {country: "Malawi", capital: "Lilongwe"},
  {country: "Malaysia", capital: "Kuala Lumpur"},
  {country: "Maldives", capital: "Malé"},
  {country: "Mali", capital: "Bamako"},
  {country: "Marshall Islands", capital: "Majuro"},
  {country: "Mauritania", capital: "Nouakchott"},
  {country: "Mauritius", capital: "Port Louis"},
  {country: "Mexico", capital: "Mexico City"},
  {country: "Micronesia", capital: "Palikir"},
  {country: "Moldova", capital: "Chisinau"},
  {country: "Monaco", capital: "Monaco"},
  {country: "Mongolia", capital: "Ulaanbaatar"},
  {country: "Montenegro", capital: "Podgorica"},
  {country: "Morocco", capital: "Rabat"},
  {country: "Mozambique", capital: "Maputo"},
  {country: "Myanmar", capital: "Naypyidaw"},
  {country: "Namibia", capital: "Windhoek"},
  {country: "Nauru", capital: "Yaren"},
  {country: "Nepal", capital: "Kathmandu"},
  {country: "Netherlands ", capital: "Amsterdam"},
  {country: "New Zealand", capital: "Wellington"},
  {country: "Nicaragua", capital: "Managua"},
  {country: "Niger", capital: "Niamey"},
  {country: "Nigeria", capital: "Abuja"},
  {country: "North Korea", capital: "Pyongyang"},
  {country: "Norway", capital: "Oslo"},
  {country: "Oman", capital: "Muscat"},
  {country: "Pakistan", capital: "Islamabad"},
  {country: "Palau", capital: "Koror"},
  {country: "Palestine", capital: "Jerusalem"},
  {country: "Panama", capital: "Panama City"},
  {country: "Papua New Guinea", capital: "Port Moresby"},
  {country: "Paraguay", capital: "Asuncion"},
  {country: "Peru", capital: "Lima"},
  {country: "Philippines", capital: "Manila"},
  {country: "Poland", capital: "Warsaw"},
  {country: "Portugal", capital: "Lisbon"},
  {country: "Puerto Rico", capital: "San Juan"},
  {country: "Qatar", capital: "Doha"},
  {country: "Republic of Ireland", capital: "Dublin"},
  {country: "Republic of Macedonia", capital: "Skopje"},
  {country: "Republic of the Congo", capital: "Brazzaville"},
  {country: "Romania", capital: "Bucharest"},
  {country: "Russia", capital: "Moscow"},
  {country: "Rwanda", capital: "Kigali"},
  {country: "Saint Kitts and Nevis", capital: "Basseterre"},
  {country: "Saint Lucia", capital: "Castries"},
  {country: "Saint Vincent and the Grenadines", capital: "Kingstown"},
  {country: "Samoa", capital: "Apia"},
  {country: "San Marino", capital: "San Marino"},
  {country: "São Tomé and Príncipe", capital: "São Tomé"},
  {country: "Saudi Arabia", capital: "Riyadh"},
  {country: "Senegal", capital: "Dakar"},
  {country: "Serbia", capital: "Belgrade"},
  {country: "Seychelles", capital: "Victoria, Seychelles"},
  {country: "Sierra Leone", capital: "Freetown"},
  {country: "Singapore", capital: "Singapore"},
  {country: "Slovakia", capital: "Bratislava"},
  {country: "Slovenia", capital: "Ljubljana"},
  {country: "Solomon Islands", capital: "Honiara"},
  {country: "Somalia", capital: "Mogadishu"},
  {country: "South Africa", capital: "Pretoria"},
  {country: "South Korea", capital: "Seoul"},
  {country: "South Sudan", capital: "Juba"},
  {country: "Spain", capital: "Madrid"},
  {country: "Sri Lanka", capital: "Sri Jayawardenapura Kotte"},
  {country: "Sudan", capital: "Khartoum"},
  {country: "Suriname", capital: "Paramaribo"},
  {country: "Swaziland", capital: "Mbabane"},
  {country: "Sweden", capital: "Stockholm"},
  {country: "Switzerland", capital: "Bern"},
  {country: "Syria", capital: "Damascus"},
  {country: "Taiwan", capital: "Taipei"},
  {country: "Taiwan", capital: "Taipei"},
  {country: "Tajikistan", capital: "Dushanbe"},
  {country: "Tanzania", capital: "Dar es Salaam, Dodoma"},
  {country: "Thailand", capital: "Bangkok"},
  {country: "The Gambia", capital: "Banjul"},
  {country: "Togo", capital: "Lome"},
  {country: "Tonga", capital: "Nuku’alofa"},
  {country: "Trinidad and Tobago", capital: "Port of Spain"},
  {country: "Tunisia", capital: "Tunis"},
  {country: "Turkey", capital: "Ankara"},
  {country: "Turkmenistan", capital: "Asgabat"},
  {country: "Turks and Caicos", capital: "Cockburn Town"},
  {country: "Tuvalu", capital: "Funafuti"},
  {country: "Uganda", capital: "Kampala"},
  {country: "Ukraine", capital: "Kyiv"},
  {country: "United Arab Emirates", capital: "Abu Dhabi"},
  {country: "United Kingdom", capital: "London"},
  {country: "United States", capital: "Washington DC"},
  {country: "Uruguay", capital: "Montevideo"},
  {country: "Uzbekistan", capital: "Tashkent"},
  {country: "Vanuatu", capital: "Port Vila"},
  {country: "Vatican City", capital: "Vatican City"},
  {country: "Venezuela", capital: "Caracas"},
  {country: "Vietnam", capital: "Hanoi"},
  {country: "Western Sahara", capital: "La’youn"},
  {country: "Yemen", capital: "Sana’a"},
  {country: "Zambia", capital: "Lusaka"},
  {country: "Zimbabwe", capital: "Harare"}
];
}
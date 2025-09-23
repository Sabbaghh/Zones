const countryCodes = [
  { code: '+93', country: 'AF', flag: '🇦🇫' }, // Afghanistan
  { code: '+355', country: 'AL', flag: '🇦🇱' }, // Albania
  { code: '+213', country: 'DZ', flag: '🇩🇿' }, // Algeria
  { code: '+376', country: 'AD', flag: '🇦🇩' }, // Andorra
  { code: '+244', country: 'AO', flag: '🇦🇴' }, // Angola
  { code: '+1268', country: 'AG', flag: '🇦🇬' }, // Antigua and Barbuda
  { code: '+54', country: 'AR', flag: '🇦🇷' }, // Argentina
  { code: '+374', country: 'AM', flag: '🇦🇲' }, // Armenia
  { code: '+61', country: 'AU', flag: '🇦🇺' }, // Australia
  { code: '+43', country: 'AT', flag: '🇦🇹' }, // Austria
  { code: '+994', country: 'AZ', flag: '🇦🇿' }, // Azerbaijan
  { code: '+1242', country: 'BS', flag: '🇧🇸' }, // Bahamas
  { code: '+973', country: 'BH', flag: '🇧🇭' }, // Bahrain
  { code: '+880', country: 'BD', flag: '🇧🇩' }, // Bangladesh
  { code: '+1246', country: 'BB', flag: '🇧🇧' }, // Barbados
  { code: '+375', country: 'BY', flag: '🇧🇾' }, // Belarus
  { code: '+32', country: 'BE', flag: '🇧🇪' }, // Belgium
  { code: '+501', country: 'BZ', flag: '🇧🇿' }, // Belize
  { code: '+229', country: 'BJ', flag: '🇧🇯' }, // Benin
  { code: '+975', country: 'BT', flag: '🇧🇹' }, // Bhutan
  { code: '+591', country: 'BO', flag: '🇧🇴' }, // Bolivia
  { code: '+387', country: 'BA', flag: '🇧🇦' }, // Bosnia and Herzegovina
  { code: '+267', country: 'BW', flag: '🇧🇼' }, // Botswana
  { code: '+55', country: 'BR', flag: '🇧🇷' }, // Brazil
  { code: '+673', country: 'BN', flag: '🇧🇳' }, // Brunei
  { code: '+359', country: 'BG', flag: '🇧🇬' }, // Bulgaria
  { code: '+226', country: 'BF', flag: '🇧🇫' }, // Burkina Faso
  { code: '+257', country: 'BI', flag: '🇧🇮' }, // Burundi
  { code: '+855', country: 'KH', flag: '🇰🇭' }, // Cambodia
  { code: '+237', country: 'CM', flag: '🇨🇲' }, // Cameroon
  // { code: '+1', country: 'CA', flag: '🇨🇦' }, // Canada
  { code: '+238', country: 'CV', flag: '🇨🇻' }, // Cape Verde
  { code: '+236', country: 'CF', flag: '🇨🇫' }, // Central African Republic
  { code: '+235', country: 'TD', flag: '🇹🇩' }, // Chad
  { code: '+56', country: 'CL', flag: '🇨🇱' }, // Chile
  { code: '+86', country: 'CN', flag: '🇨🇳' }, // China
  { code: '+57', country: 'CO', flag: '🇨🇴' }, // Colombia
  { code: '+269', country: 'KM', flag: '🇰🇲' }, // Comoros
  { code: '+242', country: 'CG', flag: '🇨🇬' }, // Congo (Brazzaville)
  { code: '+243', country: 'CD', flag: '🇨🇩' }, // Congo (Kinshasa)
  { code: '+506', country: 'CR', flag: '🇨🇷' }, // Costa Rica
  { code: '+385', country: 'HR', flag: '🇭🇷' }, // Croatia
  { code: '+53', country: 'CU', flag: '🇨🇺' }, // Cuba
  { code: '+357', country: 'CY', flag: '🇨🇾' }, // Cyprus
  { code: '+420', country: 'CZ', flag: '🇨🇿' }, // Czech Republic
  { code: '+45', country: 'DK', flag: '🇩🇰' }, // Denmark
  { code: '+253', country: 'DJ', flag: '🇩🇯' }, // Djibouti
  { code: '+1767', country: 'DM', flag: '🇩🇲' }, // Dominica
  { code: '+1809', country: 'DO', flag: '🇩🇴' }, // Dominican Republic
  { code: '+593', country: 'EC', flag: '🇪🇨' }, // Ecuador
  { code: '+20', country: 'EG', flag: '🇪🇬' }, // Egypt
  { code: '+503', country: 'SV', flag: '🇸🇻' }, // El Salvador
  { code: '+240', country: 'GQ', flag: '🇬🇶' }, // Equatorial Guinea
  { code: '+291', country: 'ER', flag: '🇪🇷' }, // Eritrea
  { code: '+372', country: 'EE', flag: '🇪🇪' }, // Estonia
  { code: '+268', country: 'SZ', flag: '🇸🇿' }, // Eswatini
  { code: '+251', country: 'ET', flag: '🇪🇹' }, // Ethiopia
  { code: '+679', country: 'FJ', flag: '🇫🇯' }, // Fiji
  { code: '+358', country: 'FI', flag: '🇫🇮' }, // Finland
  { code: '+33', country: 'FR', flag: '🇫🇷' }, // France
  { code: '+241', country: 'GA', flag: '🇬🇦' }, // Gabon
  { code: '+220', country: 'GM', flag: '🇬🇲' }, // Gambia
  { code: '+995', country: 'GE', flag: '🇬🇪' }, // Georgia
  { code: '+49', country: 'DE', flag: '🇩🇪' }, // Germany
  { code: '+233', country: 'GH', flag: '🇬🇭' }, // Ghana
  { code: '+30', country: 'GR', flag: '🇬🇷' }, // Greece
  { code: '+1473', country: 'GD', flag: '🇬🇩' }, // Grenada
  { code: '+502', country: 'GT', flag: '🇬🇹' }, // Guatemala
  { code: '+224', country: 'GN', flag: '🇬🇳' }, // Guinea
  { code: '+245', country: 'GW', flag: '🇬🇼' }, // Guinea-Bissau
  { code: '+592', country: 'GY', flag: '🇬🇾' }, // Guyana
  { code: '+509', country: 'HT', flag: '🇭🇹' }, // Haiti
  { code: '+504', country: 'HN', flag: '🇭🇳' }, // Honduras
  { code: '+852', country: 'HK', flag: '🇭🇰' }, // Hong Kong
  { code: '+36', country: 'HU', flag: '🇭🇺' }, // Hungary
  { code: '+354', country: 'IS', flag: '🇮🇸' }, // Iceland
  { code: '+91', country: 'IN', flag: '🇮🇳' }, // India
  { code: '+62', country: 'ID', flag: '🇮🇩' }, // Indonesia
  { code: '+98', country: 'IR', flag: '🇮🇷' }, // Iran
  { code: '+964', country: 'IQ', flag: '🇮🇶' }, // Iraq
  { code: '+353', country: 'IE', flag: '🇮🇪' }, // Ireland
  // { code: '+972', country: 'IL', flag: '🇮🇱' }, // Israel
  { code: '+39', country: 'IT', flag: '🇮🇹' }, // Italy
  { code: '+1876', country: 'JM', flag: '🇯🇲' }, // Jamaica
  { code: '+81', country: 'JP', flag: '🇯🇵' }, // Japan
  { code: '+962', country: 'JO', flag: '🇯🇴' }, // Jordan
  // { code: '+7', country: 'KZ', flag: '🇰🇿' }, // Kazakhstan
  { code: '+254', country: 'KE', flag: '🇰🇪' }, // Kenya
  { code: '+686', country: 'KI', flag: '🇰🇮' }, // Kiribati
  { code: '+383', country: 'XK', flag: '🇽🇰' }, // Kosovo
  { code: '+965', country: 'KW', flag: '🇰🇼' }, // Kuwait
  { code: '+996', country: 'KG', flag: '🇰🇬' }, // Kyrgyzstan
  { code: '+856', country: 'LA', flag: '🇱🇦' }, // Laos
  { code: '+371', country: 'LV', flag: '🇱🇻' }, // Latvia
  { code: '+961', country: 'LB', flag: '🇱🇧' }, // Lebanon
  { code: '+266', country: 'LS', flag: '🇱🇸' }, // Lesotho
  { code: '+231', country: 'LR', flag: '🇱🇷' }, // Liberia
  { code: '+218', country: 'LY', flag: '🇱🇾' }, // Libya
  { code: '+423', country: 'LI', flag: '🇱🇮' }, // Liechtenstein
  { code: '+370', country: 'LT', flag: '🇱🇹' }, // Lithuania
  { code: '+352', country: 'LU', flag: '🇱🇺' }, // Luxembourg
  { code: '+853', country: 'MO', flag: '🇲🇴' }, // Macau
  { code: '+389', country: 'MK', flag: '🇲🇰' }, // North Macedonia
  { code: '+261', country: 'MG', flag: '🇲🇬' }, // Madagascar
  { code: '+265', country: 'MW', flag: '🇲🇼' }, // Malawi
  { code: '+60', country: 'MY', flag: '🇲🇾' }, // Malaysia
  { code: '+960', country: 'MV', flag: '🇲🇻' }, // Maldives
  { code: '+223', country: 'ML', flag: '🇲🇱' }, // Mali
  { code: '+356', country: 'MT', flag: '🇲🇹' }, // Malta
  { code: '+692', country: 'MH', flag: '🇲🇭' }, // Marshall Islands
  { code: '+222', country: 'MR', flag: '🇲🇷' }, // Mauritania
  { code: '+230', country: 'MU', flag: '🇲🇺' }, // Mauritius
  { code: '+52', country: 'MX', flag: '🇲🇽' }, // Mexico
  { code: '+691', country: 'FM', flag: '🇫🇲' }, // Micronesia
  { code: '+373', country: 'MD', flag: '🇲🇩' }, // Moldova
  { code: '+377', country: 'MC', flag: '🇲🇨' }, // Monaco
  { code: '+976', country: 'MN', flag: '🇲🇳' }, // Mongolia
  { code: '+382', country: 'ME', flag: '🇲🇪' }, // Montenegro
  { code: '+212', country: 'MA', flag: '🇲🇦' }, // Morocco
  { code: '+258', country: 'MZ', flag: '🇲🇿' }, // Mozambique
  { code: '+95', country: 'MM', flag: '🇲🇲' }, // Myanmar
  { code: '+264', country: 'NA', flag: '🇳🇦' }, // Namibia
  { code: '+674', country: 'NR', flag: '🇳🇷' }, // Nauru
  { code: '+977', country: 'NP', flag: '🇳🇵' }, // Nepal
  { code: '+31', country: 'NL', flag: '🇳🇱' }, // Netherlands
  { code: '+64', country: 'NZ', flag: '🇳🇿' }, // New Zealand
  { code: '+505', country: 'NI', flag: '🇳🇮' }, // Nicaragua
  { code: '+227', country: 'NE', flag: '🇳🇪' }, // Niger
  { code: '+234', country: 'NG', flag: '🇳🇬' }, // Nigeria
  { code: '+850', country: 'KP', flag: '🇰🇵' }, // North Korea
  { code: '+47', country: 'NO', flag: '🇳🇴' }, // Norway
  { code: '+968', country: 'OM', flag: '🇴🇲' }, // Oman
  { code: '+92', country: 'PK', flag: '🇵🇰' }, // Pakistan
  { code: '+680', country: 'PW', flag: '🇵🇼' }, // Palau
  { code: '+970', country: 'PS', flag: '🇵🇸' }, // Palestine
  { code: '+507', country: 'PA', flag: '🇵🇦' }, // Panama
  { code: '+675', country: 'PG', flag: '🇵🇬' }, // Papua New Guinea
  { code: '+595', country: 'PY', flag: '🇵🇾' }, // Paraguay
  { code: '+51', country: 'PE', flag: '🇵🇪' }, // Peru
  { code: '+63', country: 'PH', flag: '🇵🇭' }, // Philippines
  { code: '+48', country: 'PL', flag: '🇵🇱' }, // Poland
  { code: '+351', country: 'PT', flag: '🇵🇹' }, // Portugal
  { code: '+974', country: 'QA', flag: '🇶🇦' }, // Qatar
  { code: '+40', country: 'RO', flag: '🇷🇴' }, // Romania
  { code: '+7', country: 'RU', flag: '🇷🇺' }, // Russia
  { code: '+250', country: 'RW', flag: '🇷🇼' }, // Rwanda
  { code: '+1869', country: 'KN', flag: '🇰🇳' }, // Saint Kitts and Nevis
  { code: '+1758', country: 'LC', flag: '🇱🇨' }, // Saint Lucia
  { code: '+1784', country: 'VC', flag: '🇻🇨' }, // Saint Vincent and the Grenadines
  { code: '+685', country: 'WS', flag: '🇼🇸' }, // Samoa
  { code: '+378', country: 'SM', flag: '🇸🇲' }, // San Marino
  { code: '+239', country: 'ST', flag: '🇸🇹' }, // Sao Tome and Principe
  { code: '+966', country: 'SA', flag: '🇸🇦' }, // Saudi Arabia
  { code: '+221', country: 'SN', flag: '🇸🇳' }, // Senegal
  { code: '+381', country: 'RS', flag: '🇷🇸' }, // Serbia
  { code: '+248', country: 'SC', flag: '🇸🇨' }, // Seychelles
  { code: '+232', country: 'SL', flag: '🇸🇱' }, // Sierra Leone
  { code: '+65', country: 'SG', flag: '🇸🇬' }, // Singapore
  { code: '+421', country: 'SK', flag: '🇸🇰' }, // Slovakia
  { code: '+386', country: 'SI', flag: '🇸🇮' }, // Slovenia
  { code: '+677', country: 'SB', flag: '🇸🇧' }, // Solomon Islands
  { code: '+252', country: 'SO', flag: '🇸🇴' }, // Somalia
  { code: '+27', country: 'ZA', flag: '🇿🇦' }, // South Africa
  { code: '+82', country: 'KR', flag: '🇰🇷' }, // South Korea
  { code: '+211', country: 'SS', flag: '🇸🇸' }, // South Sudan
  { code: '+34', country: 'ES', flag: '🇪🇸' }, // Spain
  { code: '+94', country: 'LK', flag: '🇱🇰' }, // Sri Lanka
  { code: '+249', country: 'SD', flag: '🇸🇩' }, // Sudan
  { code: '+597', country: 'SR', flag: '🇸🇷' }, // Suriname
  { code: '+46', country: 'SE', flag: '🇸🇪' }, // Sweden
  { code: '+41', country: 'CH', flag: '🇨🇭' }, // Switzerland
  { code: '+963', country: 'SY', flag: '🇸🇾' }, // Syria
  { code: '+886', country: 'TW', flag: '🇹🇼' }, // Taiwan
  { code: '+992', country: 'TJ', flag: '🇹🇯' }, // Tajikistan
  { code: '+255', country: 'TZ', flag: '🇹🇿' }, // Tanzania
  { code: '+66', country: 'TH', flag: '🇹🇭' }, // Thailand
  { code: '+670', country: 'TL', flag: '🇹🇱' }, // Timor-Leste
  { code: '+228', country: 'TG', flag: '🇹🇬' }, // Togo
  { code: '+676', country: 'TO', flag: '🇹🇴' }, // Tonga
  { code: '+1868', country: 'TT', flag: '🇹🇹' }, // Trinidad and Tobago
  { code: '+216', country: 'TN', flag: '🇹🇳' }, // Tunisia
  { code: '+90', country: 'TR', flag: '🇹🇷' }, // Turkey
  { code: '+993', country: 'TM', flag: '🇹🇲' }, // Turkmenistan
  { code: '+688', country: 'TV', flag: '🇹🇻' }, // Tuvalu
  { code: '+256', country: 'UG', flag: '🇺🇬' }, // Uganda
  { code: '+380', country: 'UA', flag: '🇺🇦' }, // Ukraine
  { code: '+971', country: 'AE', flag: '🇦🇪' }, // United Arab Emirates
  { code: '+44', country: 'GB', flag: '🇬🇧' }, // United Kingdom
  { code: '+1', country: 'US', flag: '🇺🇸' }, // United States
  { code: '+598', country: 'UY', flag: '🇺🇾' }, // Uruguay
  { code: '+998', country: 'UZ', flag: '🇺🇿' }, // Uzbekistan
  { code: '+678', country: 'VU', flag: '🇻🇺' }, // Vanuatu
  { code: '+58', country: 'VE', flag: '🇻🇪' }, // Venezuela
  { code: '+84', country: 'VN', flag: '🇻🇳' }, // Vietnam
  { code: '+967', country: 'YE', flag: '🇾🇪' }, // Yemen
  { code: '+260', country: 'ZM', flag: '🇿🇲' }, // Zambia
  { code: '+263', country: 'ZW', flag: '🇿🇼' }, // Zimbabwe
];

export default countryCodes;

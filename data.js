const family_data = [
    {
        id: 1,
        "Name ( नाम )": "Shivtahal Gosai ( शिवटहल )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "---",
        "Generation ( पीढ़ी )": "First ( पहला )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '4',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    },
    {
        id: 2,
        pid: 1,
        "Name ( नाम )": "Gya ( गया )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Shivtahal ( शिवटहल )",
        "Generation ( पीढ़ी )": "Second ( दूसरा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '1',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 3,
        pid: 1,
        "Name ( नाम )": "Badaree ( बदरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Shivtahal ( शिवटहल )",
        "Generation ( पीढ़ी )": "Second ( दूसरा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '4',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 4,
        pid: 1,
        "Name ( नाम )": "Kedar ( केदार )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Shivtahal ( शिवटहल )",
        "Generation ( पीढ़ी )": "Second ( दूसरा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '4',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 5,
        pid: 1,
        "Name ( नाम )": "Rameshar ( रामेशर )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Shivtahal ( शिवटहल )",
        "Generation ( पीढ़ी )": "Second ( दूसरा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 6,
        pid: 2,
        "Name ( नाम )": "Nakachedh ( नकछेद )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Gya ( गया )",
        "Generation ( पीढ़ी )": "Third ( तीसरा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '3',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 7,
        pid: 6,
        "Name ( नाम )": "Ramashrey ( रामाश्रय )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Nakachedh ( नकछेद )",
        "Generation ( पीढ़ी )": "Fourth ( चौथी )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 8,
        pid: 6,
        "Name ( नाम )": "Rampyare ( रामप्यारे )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Nakachedh ( नकछेद )",
        "Generation ( पीढ़ी )": "Fourth ( चौथी )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '7',
        "No. Of Daughter ( पुत्री की संख्या )": '2',

    },
    {
        id: 9,
        pid: 6,
        "Name ( नाम )": "Triveni ( त्रिवेनी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Nakachedh ( नकछेद )",
        "Generation ( पीढ़ी )": "Fourth ( चौथी )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '3',
        "No. Of Daughter ( पुत्री की संख्या )": '---',

    },
    {
        id: 10,
        pid: 7,
        "Name ( नाम )": "Somai ( सोमई )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ramashrey ( रामाश्रय )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '---',

    },
    {
        id: 11,
        pid: 7,
        "Name ( नाम )": "Buddhu ( बुद्धू )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ramashrey ( रामाश्रय )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 12,
        pid: 9,
        "Name ( नाम )": "Sitlu ( सितलू )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Triveni ( त्रिवेनी )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '4',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    },
    {
        id: 13,
        pid: 9,
        "Name ( नाम )": "Prem ( प्रेम )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Triveni ( त्रिवेनी )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '3',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 14,
        pid: 8,
        "Name ( नाम )": "Shree Bhagawat Gosai ( श्री भागवत गोसाई )",
        "DOB ( जन्म की तारीख )": "1930 - 2014",
        "SO/DO ( पुत्र / पुत्री )": "Rampyare ( रामप्यारे )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Humela ( हुमेला )",
        "Qualification ( योग्यता / शिक्षा )": "Class 8 ( कक्षा 8 )",
        "Occupation ( पेशा )": 'Soldier ( सैनिक )',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '2',

    },
    {
        id: 15,
        pid: 8,
        "Name ( नाम )": "Mahabeer Giri ( महाबीर गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Rampyare ( रामप्यारे )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Manna ( मन्ना )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '3',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 16,
        pid: 8,
        "Name ( नाम )": "Raghuveer Giri ( रघुवीर गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Rampyare ( रामप्यारे )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Runa ( रूना )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 17,
        pid: 8,
        "Name ( नाम )": "Ram Samuj Giri ( राम समुझ गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Rampyare ( रामप्यारे )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Foolmati ( फूलमती )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Farmer ( किसान )',
        "No. Of Son ( पुत्र की संख्या )": '1',
        "No. Of Daughter ( पुत्री की संख्या )": '2',

    },
    {
        id: 18,
        pid: 8,
        "Name ( नाम )": "Ram Achal Giri ( राम अचल गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "---", "SO/DO ( पुत्र / पुत्री )": "Rampyare ( रामप्यारे )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Foolmati ( फूलमती )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Fci Karamchari ( एफसीआई कर्मचारी )',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 19,
        pid: 8,
        "Name ( नाम )": "Ram Naval Giri ( राम नवल गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Rampyare ( रामप्यारे )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Tara ( तारा )",
        "Qualification ( योग्यता / शिक्षा )": "Graduation ( स्नातक )",
        "Occupation ( पेशा )": 'Store Keeper ( स्टोर कीपर )',
        "No. Of Son ( पुत्र की संख्या )": '4',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 20,
        pid: 8,
        "Name ( नाम )": "Ram Kaval Giri ( राम कवल गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Rampyare ( रामप्यारे )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Store Keeper ( स्टोर कीपर )',
        "No. Of Son ( पुत्र की संख्या )": '3',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 21,
        pid: 8,
        "Name ( नाम )": "Kailashi Giri ( कैलाशी गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Rampyare ( रामप्यारे )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Ganpat ( गणपत )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '2',

    },
    {
        id: 22,
        pid: 8,
        "Name ( नाम )": "Prabhavati Giri ( प्रभावती गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Rampyare ( रामप्यारे )",
        "Generation ( पीढ़ी )": "Fifth ( पांचवां )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '4',

    },
    {
        id: 23,
        pid: 14,
        "Name ( नाम )": "Shyam Karan Giri ( श्याम करन गिरी )",
        "DOB ( जन्म की तारीख )": "1972",
        "SO/DO ( पुत्र / पुत्री )": "Shree Bhagawat ( श्री भागवत )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Jokhu ( जोखू )",
        "Wife/Husband ( पत्नी / पति )": "Suman ( सुमन )",
        "Qualification ( योग्यता / शिक्षा )": "High School ( हाई स्कूल )",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 24,
        pid: 14,
        "Name ( नाम )": "Ram Karan Giri ( राम करन गिरी )",
        "DOB ( जन्म की तारीख )": "April 1975",
        "SO/DO ( पुत्र / पुत्री )": "Shree Bhagawat ( श्री भागवत )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Raju ( राजू )",
        "Wife/Husband ( पत्नी / पति )": "Rajeshwari ( राजेश्वरी )",
        "Qualification ( योग्यता / शिक्षा )": "High School ( हाई स्कूल )",
        "Occupation ( पेशा )": 'Auto mobile sales man ( ऑटोमोबाइल विक्रेता )',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 25,
        pid: 14,
        "Name ( नाम )": "Tarmati Giri ( तारामती गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Shree Bhagawat ( श्री भागवत )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Shivdash ( शिवदाश )",
        "Qualification ( योग्यता / शिक्षा )": "High School ( हाई स्कूल )",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '3',
        "No. Of Daughter ( पुत्री की संख्या )": '3',

    },
    {
        id: 26,
        pid: 14,
        "Name ( नाम )": "Gayatri Giri ( गायत्री गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Shree Bhagawat ( श्री भागवत )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 27,
        pid: 15,
        "Name ( नाम )": "Subansh Giri ( सुबंश गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Mahabeer ( महाबीर )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Somnath ( सोमनाथ )",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '1',
        "No. Of Daughter ( पुत्री की संख्या )": '4',

    },
    {
        id: 28,
        pid: 15,
        "Name ( नाम )": "Lallan Giri ( लल्लन गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Mahabeer ( महाबीर )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Somnath ( सोमनाथ )",
        "Wife/Husband ( पत्नी / पति )": "Arti ( आरती )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '2',

    },
    {
        id: 29,
        pid: 15,
        "Name ( नाम )": "Lalji Giri ( लालजी गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Mahabeer ( महाबीर गिरी )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Bijlawati ( बिजलावती )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '3',

    },
    {
        id: 30,
        pid: 15,
        "Name ( नाम )": "Lalti Giri ( लालती गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Mahabeer ( महाबीर )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Satram ( सतराम )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 31,
        pid: 16,
        "Name ( नाम )": "Baijanti Giri ( बैजंती गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Raghuveer ( रघुवीर )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Avdhesh ( अवधेश गिरी )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '3',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 32,
        pid: 17,
        "Name ( नाम )": "Krishna mohan Giri ( कृष्ण मोहन गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Samuj ( राम समुझ )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Reeta ( रीता गिरी )",
        "Qualification ( योग्यता / शिक्षा )": "B.A Graduate ( बी.ए स्नातक )",
        "Occupation ( पेशा )": 'Teacher ( अध्यापक )',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 33,
        pid: 17,
        "Name ( नाम )": "Sarmeela Giri ( सरमीला गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Samuj ( राम समुझ )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 34,
        pid: 17,
        "Name ( नाम )": "Rinku Giri ( रिंकू गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Samuj ( राम समुझ )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Chandrabhan ( चंद्रभान )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 35,
        pid: 18,
        "Name ( नाम )": "Shyam Mohan Giri ( श्याम मोहन गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Achal ( राम अचल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Sashi Kala ( शशि कला )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 36,
        pid: 18,
        "Name ( नाम )": "Madan Giri ( मदन गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Achal ( राम अचल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Sakuntala ( शकुंतला ) ( PHd Prefessor )",
        "Qualification ( योग्यता / शिक्षा )": "MSC Physics ( एमएससी भौतिकी )",
        "Occupation ( पेशा )": 'Samikha Adhikari ( समीक्षा अधिकारी )',
        "No. Of Son ( पुत्र की संख्या )": '1',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 37,
        pid: 18,
        "Name ( नाम )": "Umesh Giri Giri ( उमेश गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Achal ( राम अचल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 38,
        pid: 18,
        "Name ( नाम )": "Anita Giri ( अनीता गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Achal ( राम अचल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Amarjeet ( अमरजीत )",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 39,
        pid: 19,
        "Name ( नाम )": "Sanjay Kumar Giri ( संजय कुमार गिरि )",
        "DOB ( जन्म की तारीख )": "30-06-1974",
        "SO/DO ( पुत्र / पुत्री )": "Ram Naval ( राम नवल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Maina Giri ( मैना गिरी ) ( Teacher )",
        "Qualification ( योग्यता / शिक्षा )": "Bachelors of Electro Homeopathy Medicine and Surgery (BEMS)MD in Electro Homeopathy (MDEH)",
        "Occupation ( पेशा )": 'Doctor (Private Practice) डॉक्टर (निजी प्रैक्टिस)',
        "No. Of Son ( पुत्र की संख्या )": '1',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 40,
        pid: 19,
        "Name ( नाम )": "Ajai Kumar Giri ( अजय कुमार गिरि )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Naval ( राम नवल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Guddu ( गुड्डू )",
        "Wife/Husband ( पत्नी / पति )": "Rita Giri ( रीता गिरी )",
        "Qualification ( योग्यता / शिक्षा )": "Bachelors of Arts ( कला स्नातक )",
        "Occupation ( पेशा )": 'Sub inspector in cisf ( सीआईएसएफ में सब इंस्पेक्टर )',
        "No. Of Son ( पुत्र की संख्या )": '1',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 41,
        pid: 19,
        "Name ( नाम )": "Krishna Gopal Giri ( कृष्ण गोपाल गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Naval ( राम नवल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Tinku ( टिंकू )",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "Mechanical Engineering ( मैकेनिकल इंजीनियरिंग )",
        "Occupation ( पेशा )": 'Engineer (Indian Army) इंजीनियर (भारतीय सेना)',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '2',

    },
    {
        id: 42,
        pid: 19,
        "Name ( नाम )": "Praveen Kumar Giri ( प्रवीण कुमार गिरी )",
        "DOB ( जन्म की तारीख )": "02-07-1984",
        "SO/DO ( पुत्र / पुत्री )": "Ram Naval ( राम नवल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Mantu ( मंटू )",
        "Wife/Husband ( पत्नी / पति )": "Nandita Giri ( नंदिता गिरी )",
        "Qualification ( योग्यता / शिक्षा )": "Electrical Engineering ( विद्युत अभियन्त्रण )",
        "Occupation ( पेशा )": 'Engineer (Private Sector)  इंजीनियर (निजी क्षेत्र)',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 43,
        pid: 19,
        "Name ( नाम )": "Suneeta Giri ( सुनीता गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Naval ( राम नवल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "Shivanand Bharti ( शिवानंद भारती )",
        "Qualification ( योग्यता / शिक्षा )": "Master of Arts ( कला के मास्टर )",
        "Occupation ( पेशा )": 'Housewife ( गृहिणी )',
        "No. Of Son ( पुत्र की संख्या )": '1',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 44,
        pid: 20,
        "Name ( नाम )": "Manoj Giri ( मनोज गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Kaval ( राम कवल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Bablu ( बबलू )",
        "Wife/Husband ( पत्नी / पति )": "Sarooj ( सरोज )",
        "Qualification ( योग्यता / शिक्षा )": "Class 8 ( कक्षा 8 )",
        "Occupation ( पेशा )": 'Shop ( दुकान )',
        "No. Of Son ( पुत्र की संख्या )": '2',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 45,
        pid: 20,
        "Name ( नाम )": "Anil Giri ( अनिल गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Kaval ( राम कवल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Pintu ( पिंटू )",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '1',
        "No. Of Daughter ( पुत्री की संख्या )": '1',

    },
    {
        id: 46,
        pid: 20,
        "Name ( नाम )": "Dileep Giri ( दिलीप गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Kaval ( राम कवल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '2',

    },
    {
        id: 47,
        pid: 20,
        "Name ( नाम )": "Sudha Giri ( सुधा गिरि )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ram Kaval ( राम कवल )",
        "Generation ( पीढ़ी )": "Sixth ( छठा )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '3',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 48,
        pid: 23,
        "Name ( नाम )": "Kuldeep Giri ( कुलदीप गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Shyam Karan ( श्याम करन गिरी )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "images/kuldeep_giri.jpg",
        "Other Name ( अन्य नाम )": "Neeraj ( नीरज )",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": 'Teacher ( अध्यापक )',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 49,
        pid: 23,
        "Name ( नाम )": "Avinash Giri ( अविनाश गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Shyam Karan Giri ( श्याम करन गिरी )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "images/avinash_giri.jpg",
        "Other Name ( अन्य नाम )": "Golu ( गोलू )",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 50,
        pid: 24,
        "Name ( नाम )": "Shashank Goswami ( शशांक गोस्वामी )",
        "DOB ( जन्म की तारीख )": "20-05-1998",
        "SO/DO ( पुत्र / पुत्री )": "Ram Karan Giri ( राम करन गिरी )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "images/shashank_goswami.jpg",
        "Other Name ( अन्य नाम )": "Suraj ( सूरज )",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "Law ( कानून )",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',

    },
    {
        id: 51,
        pid: 24,
        "Name ( नाम )": "Vaibhav Goswami ( वैभव गोस्वामी )",
        "DOB ( जन्म की तारीख )": "23-03-2000",
        "SO/DO ( पुत्र / पुत्री )": "Ram Karan Giri ( राम करन गिरी )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "images/vaibhav_goswami.jpg",
        "Other Name ( अन्य नाम )": "Bholu ( भोलू )",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "B.Tech Computer Science Engineering ( बीटेक कंप्यूटर साइंस इंजीनियरिंग )",
        "Occupation ( पेशा )": 'Software Engineer',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    },
    {
        id: 52,
        pid: 24,
        "Name ( नाम )": "Sneha Goswami ( स्नेहा गोस्वामी )",
        "DOB ( जन्म की तारीख )": "12-01-1996",
        "SO/DO ( पुत्र / पुत्री )": "Ram Karan Giri ( राम करन गिरी )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "images/sneha_goswami.jpg",
        "Other Name ( अन्य नाम )": "Anamika ( अनामिका )",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "M.B.A ( एम.बी.ए )",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    }, 
    {
        id: 53,
        pid: 39,
        "Name ( नाम )": "Mayank Giri ( मयंक गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Sanjay Kumar Giri ( संजय कुमार गिरि )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    }, 
    {
        id: 54,
        pid: 39,
        "Name ( नाम )": "Diksha Giri ( दीक्षा गिरि )",
        "DOB ( जन्म की तारीख )": "07-01-1996",
        "SO/DO ( पुत्र / पुत्री )": "Sanjay Kumar Giri ( संजय कुमार गिरि )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "Shalu ( शालू )",
        "Wife/Husband ( पत्नी / पति )": "Amit Giri ( अमित गिरी )",
        "Qualification ( योग्यता / शिक्षा )": "BSc (Nursing), General Midwifery Nursing (GNM) बीएससी (नर्सिंग), जनरल मिडवाइफरी नर्सिंग (जीएनएम)",
        "Occupation ( पेशा )": 'Nurse ( नर्स )',
        "No. Of Son ( पुत्र की संख्या )": '1',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    }, 
    {
        id: 55,
        pid: 40,
        "Name ( नाम )": "Ankur Giri ( अंकुर गिरि )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ajai Kumar Giri ( अजय कुमार गिरि )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    }, 
    {
        id: 56,
        pid: 40,
        "Name ( नाम )": "Akriti Giri ( आकृति गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Ajai Kumar Giri ( अजय कुमार गिरि )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    }, 
    {
        id: 57,
        pid: 41,
        "Name ( नाम )": "Vaishnavi Giri ( वैष्णवी गिरि )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Krishna Gopal Giri ( कृष्ण गोपाल गिरी )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    }, 
    {
        id: 58,
        pid: 41,
        "Name ( नाम )": "Kavya Giri ( काव्य गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Krishna Gopal Giri ( कृष्ण गोपाल गिरी )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    }, 
    {
        id: 59,
        pid: 42,
        "Name ( नाम )": "Akshita Giri ( अक्षिता गिरी )",
        "DOB ( जन्म की तारीख )": "---",
        "SO/DO ( पुत्र / पुत्री )": "Praveen Kumar Giri ( प्रवीण कुमार गिरी )",
        "Generation ( पीढ़ी )": "Seventh ( सातवीं )",
        Picture: "https://cdn.balkan.app/shared/empty-img-blue.svg",
        "Other Name ( अन्य नाम )": "---",
        "Wife/Husband ( पत्नी / पति )": "---",
        "Qualification ( योग्यता / शिक्षा )": "---",
        "Occupation ( पेशा )": '---',
        "No. Of Son ( पुत्र की संख्या )": '0',
        "No. Of Daughter ( पुत्री की संख्या )": '0',
    }, 
]
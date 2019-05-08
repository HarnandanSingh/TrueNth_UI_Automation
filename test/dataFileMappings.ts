export const mappings = {
    treatment: (value) => treatment[value],
    agegp: (value) => ageGp[value],
    livingwithpartner: (value) => livingWithPartner[value],
    empstatuspredx: (value) => employmentStatus[value],
    nonwhite: (value) => nonWhite[value]
}

const treatment = {
    '1': 'Surgery alone',
    '2': 'Brachytheray alone',
    '3': 'External beam radiation therapy (EBRT) alone',
    '4': 'Androgen deprivation therapy (ADT) alone',
    '5': 'Active surveillance',
    '6': 'Watchful waiting',
    '7': 'EBRT plus ADT',
    '8': 'Surgery plus EBRT, ADT or both',
    '9': 'Systemic therapy (chemotherapy, Abiraterone, Enzaluatamide) with or without EBRT/ADT',
    '10': 'Radiotherapy (type unknown)',
    '11': 'Monitoring (type unknown)',
    '12': 'No treatment',
    '13': 'Other treatment combination not listed above'
}

const ageGp = {
    '1': 'under 60 years',
    '2': '60-69 years',
    '3': '70-79 years',
    '4': '80 years and over'
}

const livingWithPartner = {
    '1': 'living with partner',
    '0': 'not living with partner'
}

const employmentStatus = {
    '1': 'full time',
    '2': 'part time',
    '3': 'not working / retired'
}

const nonWhite = {
    '1': 'non white',
    '0': 'white'
}
Loop through warnings
Category -> if exists in finalWarnings, then add frequency, severity, etc to that category
            if not, create that category in finalWarnings

warningValues = {
    frequencies: {
        3:often,
        2:sporadic,
        1:once
    }
}

finalWarning = {
  "Violence":  { Frequencies:[3,2,1,2,3,4,3], Severities:[4,3,2,5,4,3,2], Type:[3,2,1,4,5,6,4]}
    "Blood":{Frequencies:[3,2,3], Severities:[4,3,2], Type:[5,6,4]}
}

averageWarning = {
  "Violence":  { Frequency:3, Severities:[4,3,2,5,4,3,2], Type:[3,2,1,4,5,6,4]}
    "Blood":{Frequencies:[3,2,3], Severities:[4,3,2], Type:[5,6,4]}
}

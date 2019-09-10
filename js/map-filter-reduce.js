"use strict";

(() => {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    console.log(users.filter((user) => user.languages.length >= 3));

    console.log(users.map((user) => user.email));

    let yearsOfExp = users.reduce((total, user) => {
        return total + user.yearsOfExperience
    }, 0);

    console.log(yearsOfExp/users.length);

    let longestEmpEmail = users.reduce((longestEmail, user) => {
        if (longestEmail.length < user.email.length) {
            longestEmail = user.email;
        }
        return longestEmail;
    }, "");

    console.log(longestEmpEmail);

    let instructors = users.reduce((sentence, user, i) => {
        if (i < users.length - 1) {
            sentence += user.name + ", ";
        } else {
            sentence += `and ${user.name}.`
        }
        return sentence
    }, "Your instructors are: ");

    console.log(instructors);

    const uniqueLangs = users.reduce((listOfLangs, user) => {
        for (const lang of user.languages) {
            if (listOfLangs.indexOf(lang) === -1) {
                listOfLangs.push(lang);
            }
        }
        return listOfLangs;
    }, []);

    console.log(uniqueLangs);

    let currentLanguageList = users.map(user => user.languages)
        .reduce((currentList, currentLanguage) => currentList.concat(currentLanguage), [])
        .filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });

    console.log(currentLanguageList);

    let listOfLanguages = users.reduce((accumulator, user) => {
        user.languages.map(language => accumulator.push(language));
        return accumulator;
    }, []);
// set will filter unique values in an array (simple things like strings, numbers, and primitives.)
    listOfLanguages = new Set(listOfLanguages);
// turning a set back into an array
    listOfLanguages = Array.from(listOfLanguages);

    console.log(listOfLanguages);

})();


"use strict";

// First part of the exercise
    // function wait(ms) {
    //     return new Promise(function(resolve) {
    //         setTimeout(resolve, ms);
    //     });
    // }
    //
    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
    //

// Second part of exercise


function getMostRecentCommitDate(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${githubToken}`}})
        .then(res => res.json())
        .then(events => {
            return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
}

getMostRecentCommitDate('jreich5').then(date => {
    console.log(new Date(date).toDateString());
});



---
layout: default
title: My Projects
permalink: /projects/
---

## My Coolest Projects

I have *a lot* of projects, but here I have compiled a list of my favourite projects, including some of my biggest achievements.
* [BYTEsense](https://github.com/savirsingh/bytesense-htn-project) is a Replit-hosted project built by me along with three other team members for Hack the North 2023. It is a prototype of a potentially life-changing tool which asks people to enter data after consuming a meal. Users give each meal a rating out of 3, and based on their ratings, BYTEsense will use LLMs, the OpenAI and Cohere APIs, and training data stored in a database to inform users how they will feel after consuming the meal. Our project won 2<sup>nd</sup> place for the "Best Hack Built on Replit" prize. We were one of 250 teams at Canada's largest invite-only hackathon.
* [Volcano Judge](https://volcanojudge.pythonanywhere.com) is a Python Flask based online competitive programming platform and repository of problems from past competitions and olympiads hosted by users. It has hosted 10+ contests so far, boasts a collection of 50+ problems, and has a userbase of 100+ competitive programmers.

## Open-Source Projects

Since I frequently use GitHub, I have quite a few open-source projects in a variety of languages. Below is a table I've written, where my GitHub repositories are automatically updated.

<div class="container">
        <table id="repo-table">
            <tr>
                <th>Repository Name</th>
                <th>Description</th>
                <th><i class="fa-regular fa-star"></i></th>
                <th><i class="fa-solid fa-code-fork"></i></th>
                <th>Last Updated</th>
            </tr>
        </table>
    </div>
    <script>
        fetch('https://savirsingh.pythonanywhere.com/github')
            .then(response => response.json())
            .then(data => {
                const table = document.getElementById('repo-table');
                data.forEach(repo => {
                    const row = table.insertRow();
                    row.innerHTML = `
                        <td><a style="color: black; text-decoration: none" href="${repo.html_url}"><i class="fab fa-github"></i> ${repo.name}</a></td>
                        <td>${repo.description}</td>
                        <td>${repo.stargazers_count}</td>
                        <td>${repo.forks_count}</td>
                        <td>${repo.updated_at}</td>
                    `;
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    </script>

## Closed-Source Projects

I also have various projects which aren't open-source. Here's a list.

* [Math Contest Repository](https://mathcontestrepository.pythonanywhere.com)
* [Volcano Judge](https://volcanojudge.pythonanywhere.com)
* [American Inn Ozark Website](https://www.americaninnozark.com/)
* [Forumle](https://forumle.guessoword.com)

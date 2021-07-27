# Memory Card Game 

## Description

This is a pokemon-themed memory game. The point of the game is not to win, but achieve a highscore that surpasses your old one and that of your friends. 

That being said, there is an upper bound that I imposed. The maximum level that can be reached is 100, at which point one would have to correctly click ONCE on 106 different pokemon cards without making a mistake.

Try it live: https://vladudenis.github.io/memory-card/

## Rules

Click on every card once and only once. After you've clicked all cards in the set presented to you, you're taken to the next stage, where the next card set is now composed of new pokemons and the total number of cards presented to you is higher. 

## Goals

1) Implement light/dark themes and a switch button. (check)
2) Implement local storage. (check)
3) Develop a custom, more complex RNG to shuffle the cards properly, such that almost no card ever remains in its origional position on shuffles. (check)
4) Add animations for the following events: on hovering cards, after clicking cards, on level up, on game reset and on sliding from between dark and light mode.
5) Make the game linearly more difficult with each stage until stage 15, then exponentially more difficult with each stage from there on.

## Hindsight

There are a couple of things that I learned thanks to this project. The following is a brief description of the important eureka moments I had:

1) Data fetching should occurr once when the component mounts and then eventually on component updates. It's important to make use of useEffect() in this regard, because otherwise it is really difficult to find a place where data-fetching can fit into the codebase without messing the flow or the logic up.
2) ComponentWillUpdate and its hook equivalent are not the same as componentDidUpdate, since the former two happen just before the update itself, not after it. While this should be clear from the naming convention, I only got to recognise the difference between the two in this project. Using useEffect() without a secondary parameter is equivalent to using componentWillUpdate!
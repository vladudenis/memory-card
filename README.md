# Memory Card Game 

## Description

A memory card game where you must click on each card once and only once until every single one of them has been clicked. 

Try it live: https://vladudenis.github.io/memory-card/

## Goals

I'm going to use pokemons for my cards and I plan on creating multiple levels with increasing difficulty. I'm also going to add a score label that keeps track of the current score, as well as a highscore label for the highest score achieved.

Another goal I want to complete with this project is the creation of a light/dark mode toggle button. Having learned a lot about the styled-components library, I'm also going to make as much use of it as possible.

## Hindsight

There are a couple of things that I learned thanks to this project and that I wish to describe:

    1) Data fetching should occurr once when the component mounts and then eventually on component updates. It's important to make use of useEffect() in this regard, because otherwise it is really difficult to find a place where data-fetching can fit into the codebase without messing the flow or the logic up.
    
    2) ComponentWillUpdate and its hook equivalent are not the same as componentDidUpdate, since the former two happen just before the update itself, not after it. While this should be clear from the naming convention, I only got to recognise the difference between the two in this project. Using useEffect() without a secondary parameter is equivalent to using componentWillUpdate!
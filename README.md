# Daily Custom Balance

A simple website for generating daily custom balance arrays in Super Smash Brothers Ultimate

## Why?

I was carpooling to a tournament and we came up with a side event format where the custom balance changes every week to keep the meta chaotic. I made this site to generate the random custom balance for that event format.

## How?

Simply visit https://balance.yhsanave.me and it will generate today's custom balance array. The rng uses the date as a seed so it will always generate the same result for a given day. No need to worry about the page refreshing or unloading. If you want to check the array for a different date, simply use the date picker at the top of the screen.

## What?

Just in case you hate fun, I spent a frankly unreasonable amount of time fiddling with CSS to make a nice UI so you can limit the possible values that can be rolled. Simply click the `Edit Allowed Modifiers` button at the top right and use the controls that pop up to set your allowed modifiers. Note that every combination of modifiers has a slightly different array (though it is still deterministic). This means that it's important to ensure that everyone configuring setups has the same settings.

## TODO

- Make the buttons look nicer
- Make it look nicer on mobile
- Manually crop some of the pictures because they crop weird (Isabelle)
- Weighted modifiers?
- Save modifier settings in local storage so you don't have to reset every time?
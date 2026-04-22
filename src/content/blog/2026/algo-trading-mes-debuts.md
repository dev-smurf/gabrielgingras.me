---
title: "Algo trading : mes débuts dans le monde le plus humbling"
titleEn: "Algo trading: my start in the most humbling field"
description: "J'ai commencé à builder un système de trading algorithmique. Spoiler : le marché s'en fout de ton code propre. Retour honnête sur mes premiers mois."
descriptionEn: "I started building an algorithmic trading system. Spoiler: the market doesn't care about your clean code. An honest look at my first months."
pubDate: 2026-04-22
tags: ["algo-trading", "python", "finance", "quant"]
lang: "both"
---

La finance, ça m'intéresse depuis longtemps. Depuis que j'ai 14 ans, j'investis mon argent. À 18, j'ai ouvert mon propre compte de courtage. C'est un sujet qui m'a toujours parlé.

Après mon DEC en informatique, l'idée s'est imposée : combiner ce que je sais faire (coder) avec ce qui me passionne (les marchés). L'algo trading. Construire un système qui analyse des données, génère des signaux et exécute des trades tout seul. Sur papier, ça semblait logique. En vrai, je ne m'attendais pas à ce que ce soit aussi dur.

## Les premières stratégies

J'ai commencé comme beaucoup : Python ouvert, données téléchargées, première stratégie codée. Le backtest sortait des résultats qui avaient l'air solides. Je me souviens d'avoir pensé « attends, c'est vraiment possible que ce soit aussi simple ? »

Ça ne l'est pas.

En quelques mois, j'ai testé 15 stratégies différentes sur les futures. Le résultat était toujours le même : les trades gagnants tournaient autour de 50%, comme si je jouais à pile ou face. Parfois ça marchait sur une période précise, puis dès que j'élargissais la fenêtre, tout s'effondrait. Jamais rien de stable.

Ma réaction systématique, c'était d'ajouter quelque chose. Un filtre de plus. Un seuil ajusté. Ça améliorait les chiffres sur les anciennes données, et ça empirait dès que je testais sur des données récentes que ma stratégie n'avait jamais vues. Je passais des semaines à "raffiner" sans réaliser que je faisais juste mémoriser des coïncidences passées à mon code.

## Le déclic

Le moment où j'ai compris que je m'y prenais mal n'est pas venu d'un livre. C'est en tombant sur une question simple : combien d'essais ça prend pour distinguer un vrai avantage statistique d'un coup de chance ?

C'est de la stat de base, enseignée en première année d'université, et complètement absente de la culture trading amateur. Le verdict : pour prouver qu'on a un petit avantage (5%), il faut autour de 5 000 trades. Mes stratégies en avaient typiquement entre 100 et 1 500. Autrement dit, je n'avais jamais eu assez de données pour trancher quoi que ce soit.

C'est probablement la chose la plus humbling qui me soit arrivée. Pas le fait que mes stratégies ne marchaient pas. Le fait que je ne pouvais même pas savoir si elles marchaient ou pas. Mes "échecs" n'en étaient peut-être pas. C'étaient juste des tests trop petits pour donner une vraie réponse.

## La nouvelle approche

J'ai accepté que les 5 mois précédents ne prouvaient rien sur l'existence d'un edge dans le marché. Juste que mon protocole était insuffisant. Et j'ai cherché quelqu'un qui faisait ça correctement. Je suis tombé sur 170 vidéos d'un trader publié chez un broker régulé en Suisse. Sur les 10 règles non-négociables qu'il pose, j'en violais 7 systématiquement. Pas par paresse. Par ignorance. Je faisais ce que tout le monde fait sur YouTube ou Reddit, et c'est insuffisant à un degré que je n'imaginais pas.

J'abandonne les futures intraday et je redémarre tout de zéro avec une méthodologie sérieuse, sur un autre marché. Je n'ai aucune idée si ça va marcher. Mais je suis sorti du mode "je tweak ma 19e stratégie en espérant que cette fois c'est la bonne". C'est déjà énorme.

Si ça t'intéresse, je documenterai la suite ici.
---

<!-- en -->

Finance has been on my mind for a long time. I've been investing my money since I was 14. At 18, I opened my own brokerage account. It's a subject that always resonated with me.

After my CS diploma, the idea just made sense: combine what I know how to do (code) with what I care about (markets). Algo trading. Build a system that analyzes data, generates signals and executes trades on its own. On paper, it seemed logical. In reality, I did not expect it to be this hard.

## First strategies

I started like most people: opened Python, downloaded data, coded a first strategy. The backtest showed results that looked solid. I remember thinking "wait, is it really possible that it's this simple?"

It's not.

Over a few months, I tested 15 different strategies on futures. The result was always the same: winning trades hovered around 50%, like flipping a coin. Sometimes it worked on a specific period, then as soon as I widened the window, everything collapsed. Never anything stable.

My go-to reaction was always to add something. One more filter. An adjusted threshold. It improved the numbers on old data, and got worse as soon as I tested on recent data my strategy had never seen. I spent weeks "refining" without realizing I was just making my code memorize past coincidences.

## The turning point

The moment I understood I was doing it wrong didn't come from a book. It came from stumbling on a simple question: how many trials does it take to tell a real statistical edge from luck?

It's basic stats, taught in first year university, and completely absent from amateur trading culture. The verdict: to prove you have a small edge (5%), you need around 5,000 trades. My strategies typically had between 100 and 1,500. In other words, I never had enough data to conclude anything.

That's probably the most humbling thing that's happened to me. Not that my strategies didn't work. That I couldn't even know if they worked or not. My "failures" might not have been failures at all. They were just tests too small to give a real answer.

## The new approach

I accepted that the previous 5 months proved nothing about the existence of an edge in the market. Just that my process was insufficient. And I looked for someone doing it right. I found 170 videos from a trader published at a regulated broker in Switzerland. Out of the 10 non-negotiable rules he sets, I was systematically violating 7. Not out of laziness. Out of ignorance. I was doing what everyone does on YouTube or Reddit, and it's inadequate to a degree I hadn't imagined.

I'm dropping intraday futures and starting from scratch with a serious methodology, on a different market. I have no idea if it'll work. But I've moved past the "let me tweak my 19th strategy hoping this time it's the one" mode. That alone is huge.

If you're interested, I'll document what comes next here. Honest results, positive or negative.

---
title: "Algo trading : mes débuts dans le monde le plus humbling"
titleEn: "Algo trading: my start in the most humbling field"
description: "J'ai commencé à builder un système de trading algorithmique. Spoiler : le marché s'en fout de ton code propre. Retour honnête sur mes premiers mois."
descriptionEn: "I started building an algorithmic trading system. Spoiler: the market doesn't care about your clean code. An honest look at my first months."
pubDate: 2026-04-22
tags: ["algo-trading", "python", "finance", "quant"]
lang: "both"
---

La finance, ça m'intéresse depuis longtemps. Depuis que j'ai 14 ans, j'investis mon argent. À 18, j'ai ouvert mon propre compte de courtage. Je lis des articles, je suis les marchés, je gère mes propres finances. C'est un sujet qui m'a toujours parlé.

Après avoir terminé mon DEC en informatique, l'idée s'est imposée naturellement : combiner ce que je sais faire (coder) avec ce qui me passionne (les marchés). L'algo trading. Construire un système qui analyse des données, génère des signaux et exécute des trades tout seul. Sur papier, ça semblait logique. En vrai, je ne m'attendais pas du tout à ce que ce soit aussi dur.

## Les premières stratégies, l'illusion du contrôle

J'ai commencé comme beaucoup de débutants : en ouvrant Python, en téléchargeant des données, en codant une première stratégie. Mean reversion sur le Nasdaq mini futures (MNQ), timeframe 5 minutes. Un indicateur Bollinger Bands, une règle d'entrée, une règle de sortie. Le backtest sortait un Sharpe respectable, une equity curve propre. Je me souviens d'avoir pensé « attends, c'est vraiment possible que ce soit aussi simple ? »

Ça ne l'est pas.

La deuxième stratégie, même chose. La troisième, pareil. En quelques mois, j'ai testé 15 stratégies différentes sur les futures intraday. Des variantes de mean reversion, des breakouts, des fades de mouvement, des setups basés sur le gamma exposure du SPX. Et quand je dis « testé », je veux dire avec la rigueur que je pensais être suffisante : in-sample / out-of-sample split, frictions réalistes (slippage, commissions), walk-forward basique. Le résultat était toujours le même : un win rate qui tournait autour de 50%, une expectancy qui flirtait avec zéro. Parfois légèrement positive sur une période précise, puis négative dès qu'on élargissait la fenêtre. Jamais rien de stable.

---

<!-- en -->

Finance has been on my mind for a long time. I've been investing my money since I was 14. At 18, I opened my own brokerage account. I read articles, follow markets, manage my own finances. It's a subject that always resonated with me.

After finishing my CS diploma, the idea came naturally: combine what I know how to do (code) with what I'm passionate about (markets). Algo trading. Build a system that analyzes data, generates signals and executes trades on its own. On paper, it made sense. In reality, I did not expect it to be this hard.

## First strategies, the illusion of control

I started like most beginners: opened Python, downloaded data, coded a first strategy. Mean reversion on Nasdaq mini futures (MNQ), 5 minute timeframe. A Bollinger Bands indicator, an entry rule, an exit rule. The backtest showed a respectable Sharpe, a clean equity curve. I remember thinking "wait, is it really possible that it's this simple?"

It's not.

Second strategy, same thing. Third, same. Over a few months, I tested 15 different strategies on intraday futures. Mean reversion variants, breakouts, momentum fades, setups based on SPX gamma exposure. And when I say "tested", I mean with the rigor I thought was sufficient: in-sample / out-of-sample split, realistic frictions (slippage, commissions), basic walk-forward. The result was always the same: a win rate hovering around 50%, an expectancy flirting with zero. Sometimes slightly positive over a specific period, then negative as soon as you widened the window. Never anything stable.

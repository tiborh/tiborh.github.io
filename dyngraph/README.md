# dyngraph

Simple node simulation: attraction and repulsion.

The grouping of the nodes peaked my interest. For this reason, simple controls have been added to help study this phenomenon.

## Ideas to go on

1. seeding random:
    * Unfortunately, Math.random() cannot be seeded by users. Alternative algorithm needs to be adopted.
    * One such: https://github.com/davidbau/seedrandom
2. physics parameters tweak (attraction, repulsion)
    * Parameters are on slides, not really physics looking, though
4. node size/shape
    * size: OK, shape: OK
	* question: do they need to be settable by group or individually?
5. input from file (node + edge list, or edge list only)
	* textarea input has been added as an easy start
	* done: 
	   * edge list is input into edge list textarea
	   * Sedgewick input is entered directly into the graph
6. adding graph layout algorithms (or additional physics rules)
	* done: some more to may come in the future as ideas arise
7. save and restore settings:
	* done: there are still some irregularites
8. different forces on links and backlinks may result in a swirling motion: may be worth experimenting with
9. graph algorithms:
	* some are in place: groups, connect islands
	* others are still needed: e.g. shortest route, etc.
10. colour changes:
	e.g. controlled by sine function

## Limitations ##

1. Works well with Chromium engine only.
    * More or less works with FF engine too, but layout of controls fall apart
    * and button inactivation is unreliable

![heptagon with traces on](https://github.com/tiborh/dyngraph/blob/master/img/heptagon_trace.png?raw=true)
